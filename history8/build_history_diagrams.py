#!/usr/bin/env python3
"""
Extract textbook figures from History & Civics OCR MD/JSON, filter artefacts,
generate 2 diagram questions (MCQ + short answer) per figure, chapter-wise.
Output: history-diagrams.js, data/history8/image_catalog.json
Regenerate: python3 history8/build_history_diagrams.py
"""
from __future__ import annotations

import json
import random
import re
import shutil
import sys
import urllib.request
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

DATA_DIR = ROOT / "history8/data"
SRC_MD = DATA_DIR / "history and civics.pdf_by_PaddleOCR-VL-1.6.md"
SRC_JSON = DATA_DIR / "history and civics.pdf_by_PaddleOCR-VL-1.6.json"
if not SRC_MD.exists():
    ext = Path.home() / "history and civics/history and civics.pdf_by_PaddleOCR-VL-1.6.md"
    SRC_MD = ext
    SRC_JSON = Path.home() / "history and civics/history and civics.pdf_by_PaddleOCR-VL-1.6.json"

HIST_ASSETS = ROOT / "assets/history8/images"
CIV_ASSETS = ROOT / "assets/civics8/images"
LOCAL_IMAGES = ROOT / "images"
OUT_JS = ROOT / "history-diagrams.js"
CATALOG_JSON = ROOT / "data/history8/image_catalog.json"
OVERRIDES_JSON = ROOT / "history8/data/diagram_overrides.json"

# book chapter → output chapter, subject, topicId, title, md line bounds (from split_history_civics_ocr.py)
CHAPTER_DEFS: list[dict[str, Any]] = [
    {"book": 1, "out": 1, "subject": "history", "topicId": "hist-ch1", "title": "A Period of Transition", "md_start": 60, "md_end": 637},
    {"book": 2, "out": 2, "subject": "history", "topicId": "hist-ch2", "title": "The Age of Revolutions", "md_start": 638, "md_end": 1168},
    {"book": 3, "out": 3, "subject": "history", "topicId": "hist-ch3", "title": "The American Civil War", "md_start": 1169, "md_end": 1529},
    {"book": 4, "out": 4, "subject": "history", "topicId": "hist-ch4", "title": "Decline of the Mughal Empire", "md_start": 1530, "md_end": 2043},
    {"book": 5, "out": 5, "subject": "history", "topicId": "hist-ch5", "title": "Advent of the English East India Company", "md_start": 2044, "md_end": 2476},
    {"book": 6, "out": 6, "subject": "history", "topicId": "hist-ch6", "title": "The British Conquest of Bengal", "md_start": 2477, "md_end": 2929},
    {"book": 7, "out": 7, "subject": "history", "topicId": "hist-ch7", "title": "Expansion of British Power in India", "md_start": 2930, "md_end": 3390},
    {"book": 8, "out": 8, "subject": "history", "topicId": "hist-ch8", "title": "Impact of the British Rule on India", "md_start": 3391, "md_end": 4202},
    {"book": 9, "out": 9, "subject": "history", "topicId": "hist-ch9", "title": "The Great Uprising of 1857", "md_start": 4203, "md_end": 4666},
    {"book": 10, "out": 10, "subject": "history", "topicId": "hist-ch10", "title": "Reform Movements in India under the British Rule", "md_start": 4667, "md_end": 5152},
    {"book": 11, "out": 11, "subject": "history", "topicId": "hist-ch11", "title": "The Rise of Indian Nationalism", "md_start": 5153, "md_end": 5513},
    {"book": 12, "out": 12, "subject": "history", "topicId": "hist-ch12", "title": "The Indian National Movement: 1885–1916", "md_start": 5514, "md_end": 6005},
    {"book": 13, "out": 13, "subject": "history", "topicId": "hist-ch13", "title": "Mahatma Gandhi and the Indian National Movement: 1917–1947", "md_start": 6006, "md_end": 6558},
    {"book": 14, "out": 1, "subject": "civics", "topicId": "civ-ch1", "title": "Organs of the Indian Government", "md_start": 6559, "md_end": 7453},
    {"book": 15, "out": 2, "subject": "civics", "topicId": "civ-ch2", "title": "The United Nations", "md_start": 7454, "md_end": 7940},
]

IMG_FNAME = re.compile(r"(img_in_(?:image|chart)_box_\d+_\d+_\d+_\d+\.(?:jpg|jpeg|png))", re.I)
IMG_TAG = re.compile(r'<img[^>]+src="([^"]+)"[^>]*>', re.I)
WIDTH_PCT = re.compile(r'width="(\d+)%"')
HEADING = re.compile(r"^(#{1,6})\s+(.+)$")

SKIP_HEADINGS = {
    "learning outcomes", "recall", "skill:", "discuss", "websheets", "worksheet",
    "sample term paper", "holistic progress", "model test paper", "preface",
    "table of contents", "contents", "exercises", "portrait gallery", "india @75",
    "debate and discussion", "go local", "project-based learning",
    "history alive!", "history alive", "political life alive!", "political life alive",
    "visual mapping", "did you know?", "analysing primary sources",
    "mock parliament and court session",
}

JUNK_HEADING_RE = re.compile(
    r"^(?:i{1,3}|iv|v|vi{0,3}|x)\.\s|study the given|answer the questions|"
    r"state whether|fill in the blank|match the|column i|column ii|"
    r"holistic progress|worksheet|model test",
    re.I,
)

EXERCISE_NOISE_RE = re.compile(
    r"^(?:\d+[\.)]|▶|•|\*)\s|study the given|answer the questions|"
    r"all three statements|give reasons|correct the false|fill in the|"
    r"match the following|column i|column ii|what do you observe|"
    r"do you think|have you seen|executive summary",
    re.I,
)

LEARNING_OUTCOME_RE = re.compile(
    r"^(?:assess|outline|discuss|evaluate|trace|explain|identify|describe|list|state|"
    r"recognise|recognize|demonstrate|analyse|analyze)\s",
    re.I,
)

PERSON_NAME_RE = re.compile(
    r"^(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,4}|Mahatma Gandhi|Sardar Vallabhbhai Patel|"
    r"Dr\.?\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)$"
)

ARTIFACT_KEYWORDS = re.compile(
    r"\b(qr\s*code|barcode|bed\s*sheet|bedsheet|logo|oxford|frank\s*bros|nelson|"
    r"cover\s*photo|isbn|typeset|printed in india|holistic progress|worksheet)\b",
    re.I,
)


def strip_md(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = re.sub(r"\$+.*?\$+", " ", s)
    s = re.sub(r"[►▶]\s*", "", s)
    return re.sub(r"\s+", " ", s).strip()


def clean_sentence(s: str) -> str:
    return strip_md(s)


def image_filename(url_or_name: str) -> str | None:
    m = IMG_FNAME.search(url_or_name)
    return m.group(1) if m else None


def is_valid_figure(w: int, h: int, pct: int | None, area: int, fname: str, context: str) -> bool:
    if "seal_box" in fname.lower():
        return False
    if area < 25000:
        return False
    if w < 80 and h < 80:
        return False
    if pct is not None and pct < 12:
        return False
    if max(w, h) < 120 and area < 40000:
        return False
    if pct == 100 and area > 800000:
        return False
    if pct is not None and pct >= 90 and area > 600000:
        return False
    if ARTIFACT_KEYWORDS.search(context):
        return False
    return True


def assets_base(ch: dict) -> Path:
    return HIST_ASSETS if ch["subject"] == "history" else CIV_ASSETS


def rel_image_path(ch: dict, fname: str) -> str:
    subj = "history8" if ch["subject"] == "history" else "civics8"
    return f"assets/{subj}/images/ch{ch['out']}/{fname}"


def ensure_image(ch: dict, fname: str, url: str | None) -> str:
    dest_dir = assets_base(ch) / f"ch{ch['out']}"
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / fname
    if not dest.exists() or dest.stat().st_size == 0:
        local = LOCAL_IMAGES / fname
        if local.exists():
            shutil.copy2(local, dest)
        elif url and url.startswith("http"):
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "StudyHub/1.0"})
                with urllib.request.urlopen(req, timeout=20) as resp:
                    dest.write_bytes(resp.read())
            except Exception:
                pass
        # search other chapter folders already downloaded
        if not dest.exists() or dest.stat().st_size == 0:
            for candidate in assets_base(ch).glob(f"*/{fname}"):
                if candidate.stat().st_size > 0:
                    shutil.copy2(candidate, dest)
                    break
    return rel_image_path(ch, fname)


def load_chapter_facts() -> dict[str, list[str]]:
    facts: dict[str, list[str]] = {}
    for ch in CHAPTER_DEFS:
        base = ROOT / "data/history8/chapters" if ch["subject"] == "history" else ROOT / "data/civics8/chapters"
        path = base / f"ch{ch['out']}.json"
        if not path.exists():
            continue
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            continue
        items: list[str] = []
        for f in data.get("highYieldFacts") or []:
            t = strip_md(f)
            if is_usable_fact(t):
                items.append(t)
        for n in data.get("notes") or []:
            body = strip_md(n.get("content") or "")
            for sent in split_sentences(body):
                if is_usable_fact(sent):
                    items.append(sent)
        facts[ch["topicId"]] = items[:60]
    return facts


def is_usable_fact(text: str) -> bool:
    if len(text) < 35 or len(text) > 420:
        return False
    if EXERCISE_NOISE_RE.search(text):
        return False
    if text.lower().startswith("study the given pictures"):
        return False
    if "all three statements are supported" in text.lower():
        return False
    return True


def is_exercise_noise(text: str) -> bool:
    t = clean_sentence(text)
    if len(t) < 8:
        return True
    if EXERCISE_NOISE_RE.search(t):
        return True
    if LEARNING_OUTCOME_RE.search(t):
        return True
    if t.endswith("?") and len(t) < 120:
        return True
    if re.match(r"^[a-d]\.\s", t, re.I):
        return True
    if t[0].islower() and not t.startswith("e.g."):
        return True
    return False


def split_sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", clean_sentence(text))
    return [p.strip() for p in parts if p.strip() and not is_exercise_noise(p)]


def is_junk_heading(title: str) -> bool:
    low = title.lower().strip()
    if low in SKIP_HEADINGS:
        return True
    if JUNK_HEADING_RE.search(title):
        return True
    if low.startswith("chapter ") and len(low) < 80:
        return True
    if title.isupper() and len(title) > 45:
        return True
    return False


def looks_like_person_name(text: str) -> bool:
    t = strip_md(text)
    if not t or len(t) > 70 or re.search(r"\d", t):
        return False
    low = t.lower()
    if any(k in low for k in (" during ", " march", " movement", " photograph", " painting", " study ", " answer ")):
        return False
    return bool(PERSON_NAME_RE.match(t))


def keyword_tokens(*parts: str) -> set[str]:
    text = " ".join(p for p in parts if p).lower()
    return {w for w in re.findall(r"[a-z]{4,}", text) if w not in {
        "with", "from", "that", "this", "were", "have", "been", "their", "which",
        "about", "under", "after", "before", "into", "also", "other", "people",
        "indian", "british", "india", "chapter", "figure", "shown", "textbook",
    }}


def score_sentence(sentence: str, keywords: set[str]) -> int:
    if is_exercise_noise(sentence):
        return -1
    words = set(re.findall(r"[a-z]{4,}", sentence.lower()))
    return len(words & keywords)


def trim_answer(text: str, max_len: int = 380) -> str:
    text = strip_md(text)
    if len(text) <= max_len:
        return text
    cut = text[:max_len]
    if ". " in cut:
        return cut.rsplit(". ", 1)[0] + "."
    return cut.rstrip(" ,;") + "…"


def truncate_option(text: str, max_len: int = 155) -> str:
    text = strip_md(text)
    if len(text) <= max_len:
        return text
    return text[: max_len - 1].rstrip(" ,;") + "…"


def nearest_heading(lines: list[str], idx: int) -> str:
    for j in range(idx, max(-1, idx - 45), -1):
        m = HEADING.match(lines[j].strip())
        if not m:
            continue
        title = strip_md(m.group(2))
        if is_junk_heading(title) or len(title) < 4:
            continue
        return title
    return ""


def extract_caption_block(lines: list[str], idx: int) -> tuple[str, list[str]]:
    """Return (caption, paragraph sentences immediately after the figure)."""
    caption_parts: list[str] = []
    paragraphs: list[str] = []
    for j in range(idx + 1, min(len(lines), idx + 10)):
        raw = lines[j]
        if "<img" in raw:
            break
        if raw.strip().startswith("#"):
            break
        t = strip_md(raw)
        if not t:
            if caption_parts or paragraphs:
                break
            continue
        if is_exercise_noise(t):
            break
        if not paragraphs and len(t) < 90 and not t.endswith((".", "!", "?")):
            caption_parts.append(t)
            continue
        if len(t) >= 25:
            paragraphs.extend(split_sentences(t))
        if len(paragraphs) >= 4:
            break
    caption = " ".join(caption_parts).strip()
    return caption, paragraphs


def extract_local_sentences(lines: list[str], idx: int, radius: int = 14) -> list[str]:
    lo = max(0, idx - radius)
    hi = min(len(lines), idx + radius + 1)
    out: list[str] = []
    for j in range(lo, hi):
        if j == idx or "<img" in lines[j]:
            continue
        t = strip_md(lines[j])
        if len(t) < 25 or is_exercise_noise(t):
            continue
        out.extend(split_sentences(t))
    # de-dupe preserving order
    seen: set[str] = set()
    deduped: list[str] = []
    for s in out:
        key = s.lower()
        if key not in seen:
            seen.add(key)
            deduped.append(s)
    return deduped


def figure_label(fig: dict[str, Any]) -> str:
    caption = fig.get("caption") or ""
    heading = fig.get("heading") or ""
    after = " ".join(fig.get("afterParagraph") or [])
    combined = (caption + " " + after).lower()
    if "dandi march" in combined or ("dandi" in combined and "march" in combined):
        return "Dandi March (Salt Satyagraha)"
    if "jallianwala" in combined or "jallianwala bagh" in combined:
        return "Jallianwala Bagh Massacre"
    if "salt march" in combined:
        return "Salt March / Dandi March"
    if looks_like_person_name(caption):
        return caption
    if looks_like_person_name(heading):
        return heading
    if caption and not is_junk_heading(caption) and len(caption) < 80:
        return caption
    if heading and not is_junk_heading(heading) and len(heading) < 80:
        return heading
    return fig.get("chapterTitle") or "this figure"


def classify_figure(fig: dict[str, Any], w: int, h: int) -> str:
    caption = (fig.get("caption") or "").lower()
    heading = (fig.get("heading") or "").lower()
    ctx = (fig.get("context") or "").lower()
    label = figure_label(fig).lower()

    if looks_like_person_name(fig.get("caption") or "") or looks_like_person_name(fig.get("heading") or ""):
        return "portrait"
    if any(k in caption + heading + ctx for k in ("march", "massacre", "battle", "uprising", "revolt", "war")):
        return "event"
    if "map" in caption + heading + ctx:
        return "map"
    if any(k in caption + heading + label for k in (
        "parliament", "lok sabha", "rajya sabha", "high court", "supreme court",
        "legislature", "judiciary", "executive", "president of india",
    )):
        return "institution"
    if any(k in caption + heading + ctx for k in (
        "united nations", "security council", "general assembly", "unesco", "unicef",
        "world health organization", "international court of justice", "un charter",
    )):
        return "un_agency"
    if any(k in caption + heading + ctx for k in ("painting", "mural", "photograph", "sketch", "artwork")):
        return "artwork"
    area = w * h
    if w > 0 and h > 0 and max(w, h) / max(min(w, h), 1) < 1.4 and area < 120000:
        if looks_like_person_name(fig.get("caption") or ""):
            return "portrait"
    return "general"


def build_figure_answer(
    fig: dict[str, Any],
    local_sentences: list[str],
    chapter_facts: list[str],
) -> str:
    label = figure_label(fig)
    keywords = keyword_tokens(label, fig.get("caption", ""), fig.get("heading", ""))
    after = fig.get("afterParagraph") or []
    cap = (fig.get("caption") or "").strip()
    raw_pool = after + local_sentences
    pool: list[str] = []
    for sent in raw_pool:
        s = sent.strip()
        if cap and s == cap:
            continue
        if cap and s.lower().startswith(cap.lower()) and len(s) > len(cap) + 10:
            s = s[len(cap):].strip(" ,:-")
        if len(s) >= 25:
            pool.append(s)

    scored: list[tuple[int, str]] = []
    for i, sent in enumerate(pool):
        score = score_sentence(sent, keywords)
        if i < len(after):
            score += 3
        if looks_like_person_name(label):
            name_low = label.lower()
            sent_low = sent.lower()
            if name_low in sent_low:
                score += 5
            if any(v in sent_low for v in (" was ", " led ", " sparked ", " born ", " fought ", " became ", " wrote ", " established ", " played ")):
                score += 3
            if sent_low.startswith("historians usually") or sent_low.startswith("the term "):
                score -= 3
        if score > 0:
            scored.append((score, sent))
    scored.sort(key=lambda x: (-x[0], -len(x[1])))

    parts: list[str] = []
    for _, sent in scored:
        if sent in parts:
            continue
        parts.append(sent)
        if len(" ".join(parts)) >= 100:
            break

    if parts:
        answer = trim_answer(" ".join(parts))
        cap = fig.get("caption") or ""
        if cap and answer.lower().startswith(cap.lower()):
            answer = answer[len(cap):].strip(" .")
        return answer

    for fact in chapter_facts:
        if score_sentence(fact, keywords) >= 2:
            return trim_answer(fact)

    if after:
        return trim_answer(after[0])
    if local_sentences:
        return trim_answer(local_sentences[0])
    return f"The figure relates to {label} in this chapter."


def pick_distractors(
    correct: str,
    local_pool: list[str],
    chapter_facts: list[str],
    keywords: set[str],
    rng: random.Random,
    n: int = 3,
) -> list[str]:
    correct_low = correct.lower()
    candidates: list[tuple[int, str]] = []
    for sent in local_pool + chapter_facts:
        if len(sent) < 30 or sent.lower() == correct_low:
            continue
        if is_exercise_noise(sent):
            continue
        overlap = score_sentence(sent, keywords)
        score = 1 if overlap == 0 else max(0, 3 - overlap)
        candidates.append((score, sent))
    candidates.sort(key=lambda x: (-x[0], rng.random()))
    out: list[str] = []
    for _, sent in candidates:
        short = truncate_option(sent)
        if short not in out and short.lower() not in correct_low:
            out.append(short)
        if len(out) >= n:
            break
    while len(out) < n:
        out.append("This statement describes a different person or event from another section of the chapter.")
    return out[:n]


def mcq_question_text(fig: dict[str, Any], label: str, fig_type: str) -> str:
    if fig_type == "portrait":
        return f"The figure shows {label}. Which statement correctly describes this person and their role?"
    if fig_type == "event":
        return f"Study the figure related to {label}. Which statement correctly describes the event or scene shown?"
    if fig_type == "map":
        return "Study the map in the figure. Which statement correctly describes what it shows?"
    if fig_type == "institution":
        return f"Study the figure of {label}. Which statement correctly describes this organ or institution?"
    if fig_type == "un_agency":
        return f"Study the figure on {label}. Which statement correctly describes this UN body or agency?"
    if fig_type == "artwork":
        return f"Study the artwork shown ({label}). Which statement correctly identifies it and its historical importance?"
    return f"Study the textbook figure on {label}. Which statement correctly describes what it illustrates?"


def short_question_text(fig: dict[str, Any], label: str, fig_type: str) -> str:
    if fig_type == "portrait":
        return f"Identify {label} shown in the figure. Write a short note on who they were and their contribution in this chapter."
    if fig_type == "event":
        return f"Identify the historical event or scene shown in the figure ({label}). Explain its causes and significance."
    if fig_type == "map":
        return "Study the map. Describe the region or information shown and explain its importance in this chapter."
    if fig_type == "institution":
        return f"Name the organ of government shown ({label}) and explain its main functions in India's democracy."
    if fig_type == "un_agency":
        return f"Identify the UN organ or agency shown ({label}) and explain its role in world affairs."
    if fig_type == "artwork":
        return f"Identify the artwork shown ({label}). Who created it and why is it important in this chapter?"
    return f"Study the figure on {label}. Describe what it shows and explain why it is important in this chapter."


def make_mcq(
    qid: str,
    fig: dict[str, Any],
    image_path: str,
    answer: str,
    local_pool: list[str],
    chapter_facts: list[str],
    rng: random.Random,
) -> dict[str, Any]:
    label = figure_label(fig)
    fig_type = fig.get("figureType") or "general"
    keywords = keyword_tokens(label, fig.get("caption", ""), fig.get("heading", ""))
    opts = pick_distractors(answer, local_pool, chapter_facts, keywords, rng)
    short_correct = truncate_option(answer)
    opts.append(short_correct)
    rng.shuffle(opts)
    display_caption = fig.get("caption") or label
    return {
        "id": qid,
        "q_id": qid,
        "topicId": fig["topicId"],
        "type": "mcq",
        "subtopic": "Diagram-based Questions",
        "question": mcq_question_text(fig, label, fig_type),
        "options": opts,
        "correctOption": opts.index(short_correct),
        "answer": answer,
        "image": image_path,
        "caption": display_caption,
        "source": "hist_diagram",
        "examTip": "Name the person or event in the figure first, then add dates, role, and impact.",
    }


def make_short(
    qid: str,
    fig: dict[str, Any],
    image_path: str,
    answer: str,
) -> dict[str, Any]:
    label = figure_label(fig)
    fig_type = fig.get("figureType") or "general"
    display_caption = fig.get("caption") or label
    return {
        "id": qid,
        "q_id": qid,
        "topicId": fig["topicId"],
        "type": "short_answer",
        "subtopic": "Diagram-based Questions",
        "question": short_question_text(fig, label, fig_type),
        "answer": answer,
        "image": image_path,
        "caption": display_caption,
        "source": "hist_diagram",
        "examTip": "Begin with identification (who/what), then add 2–3 factual points with dates.",
    }


def load_overrides() -> dict[str, dict[str, Any]]:
    if not OVERRIDES_JSON.exists():
        return {}
    try:
        raw = json.loads(OVERRIDES_JSON.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}
    return {k.lower(): v for k, v in raw.items()}


def override_key(fig: dict[str, Any]) -> str:
    return f"{fig['topicId']}/{fig['filename']}".lower()


def apply_figure_override(fig: dict[str, Any], ov: dict[str, Any]) -> None:
    if ov.get("caption"):
        fig["caption"] = ov["caption"]
    if ov.get("figureType"):
        fig["figureType"] = ov["figureType"]
    if ov.get("topicId"):
        fig["topicId"] = ov["topicId"]


def make_mcq_from_override(
    qid: str,
    fig: dict[str, Any],
    image_path: str,
    ov: dict[str, Any],
) -> dict[str, Any]:
    answer = ov["answer"]
    opts = list(ov.get("options") or [])
    short_correct = truncate_option(answer)
    if opts:
        if short_correct not in opts:
            opts = opts[:3] + [short_correct]
        correct_option = ov.get("correctOption", opts.index(short_correct) if short_correct in opts else 0)
    else:
        opts = [short_correct]
        correct_option = 0
    return {
        "id": qid,
        "q_id": qid,
        "topicId": fig["topicId"],
        "type": "mcq",
        "subtopic": "Diagram-based Questions",
        "question": ov.get("mcqQuestion") or mcq_question_text(fig, figure_label(fig), fig.get("figureType") or "general"),
        "options": opts,
        "correctOption": correct_option,
        "answer": answer,
        "image": image_path,
        "caption": fig.get("caption") or figure_label(fig),
        "source": "hist_diagram",
        "examTip": "Name the person or event in the figure first, then add dates, role, and impact.",
    }


def make_short_from_override(
    qid: str,
    fig: dict[str, Any],
    image_path: str,
    ov: dict[str, Any],
) -> dict[str, Any]:
    return {
        "id": qid,
        "q_id": qid,
        "topicId": fig["topicId"],
        "type": "short_answer",
        "subtopic": "Diagram-based Questions",
        "question": ov.get("saQuestion") or short_question_text(fig, figure_label(fig), fig.get("figureType") or "general"),
        "answer": ov["answer"],
        "image": image_path,
        "caption": fig.get("caption") or figure_label(fig),
        "source": "hist_diagram",
        "examTip": "Begin with identification (who/what), then add 2–3 factual points with dates.",
    }


def context_window(lines: list[str], idx: int, radius: int = 12) -> str:
    lo = max(0, idx - radius)
    hi = min(len(lines), idx + radius + 1)
    chunks: list[str] = []
    for line in lines[lo:hi]:
        if "<img" in line:
            continue
        t = strip_md(line)
        if len(t) < 15 or t.startswith("http") or is_exercise_noise(t):
            continue
        chunks.append(t)
    return " ".join(chunks)


def extract_figures(lines: list[str], ch: dict) -> list[dict[str, Any]]:
    text_lines = lines[ch["md_start"] - 1 : ch["md_end"]]
    seen: set[str] = set()
    figures: list[dict[str, Any]] = []
    for i, line in enumerate(text_lines):
        if "<img" not in line:
            continue
        m = IMG_TAG.search(line)
        if not m:
            continue
        url = m.group(1)
        fname = image_filename(url)
        if not fname or fname in seen:
            continue
        parts = fname.replace(".jpg", "").replace(".jpeg", "").replace(".png", "").split("_")
        try:
            x1, y1, x2, y2 = int(parts[-4]), int(parts[-3]), int(parts[-2]), int(parts[-1])
        except ValueError:
            continue
        w, h = x2 - x1, y2 - y1
        pct_m = WIDTH_PCT.search(line)
        pct = int(pct_m.group(1)) if pct_m else None
        area = w * h
        abs_idx = ch["md_start"] - 1 + i
        heading = nearest_heading(lines, abs_idx)
        caption, after_paragraph = extract_caption_block(text_lines, i)
        local_sentences = extract_local_sentences(text_lines, i)
        ctx = context_window(text_lines, i)
        if caption:
            ctx = f"{caption}. {ctx}"
        if after_paragraph:
            ctx = f"{' '.join(after_paragraph)}. {ctx}"
        if not is_valid_figure(w, h, pct, area, fname, ctx):
            continue
        seen.add(fname)
        fig_data = {
            "filename": fname,
            "url": url if url.startswith("http") else None,
            "chapter": ch["out"],
            "subject": ch["subject"],
            "topicId": ch["topicId"],
            "chapterTitle": ch["title"],
            "heading": heading,
            "caption": caption,
            "afterParagraph": after_paragraph,
            "localSentences": local_sentences,
            "context": ctx[:1200],
            "figureType": "",
        }
        fig_data["figureType"] = classify_figure(fig_data, w, h)
        figures.append(fig_data)
    return figures


def build_chapter_sentence_pools(figures: list[dict]) -> dict[str, list[str]]:
    pools: dict[str, list[str]] = {}
    for fig in figures:
        tid = fig["topicId"]
        pools.setdefault(tid, [])
        pools[tid].extend(fig.get("afterParagraph") or [])
        pools[tid].extend(fig.get("localSentences") or [])
    for tid, sents in pools.items():
        seen: set[str] = set()
        deduped: list[str] = []
        for s in sents:
            key = s.lower()
            if key not in seen and not is_exercise_noise(s):
                seen.add(key)
                deduped.append(s)
        pools[tid] = deduped
    return pools


def build_questions(
    figures: list[dict],
    facts_by_topic: dict[str, list[str]],
    sentence_pools: dict[str, list[str]],
    overrides: dict[str, dict[str, Any]],
) -> tuple[list[dict], list[dict]]:
    rng = random.Random(12)
    questions: list[dict] = []
    kept_figures: list[dict] = []
    counters: dict[str, int] = {}
    for fig in figures:
        ov = overrides.get(override_key(fig))
        if ov and ov.get("skip"):
            continue
        if ov:
            apply_figure_override(fig, ov)
        topic_id = fig["topicId"]
        counters[topic_id] = counters.get(topic_id, 0) + 1
        idx = counters[topic_id]
        kept_figures.append(fig)
        ch_meta = next(c for c in CHAPTER_DEFS if c["topicId"] == topic_id)
        image_path = ensure_image(ch_meta, fig["filename"], fig.get("url"))
        prefix = topic_id.replace("-", "")
        base = f"{prefix}-fig{idx:03d}"
        if ov and ov.get("answer"):
            mcq_q = make_mcq_from_override(f"{base}-mcq", fig, image_path, ov)
            sa_q = make_short_from_override(f"{base}-sa", fig, image_path, ov)
        else:
            chapter_facts = facts_by_topic.get(topic_id, [])
            local_pool = sentence_pools.get(topic_id, [])
            answer = build_figure_answer(fig, fig.get("localSentences") or [], chapter_facts)
            mcq_q = make_mcq(
                f"{base}-mcq",
                fig,
                image_path,
                answer,
                local_pool,
                chapter_facts,
                rng,
            )
            sa_q = make_short(f"{base}-sa", fig, image_path, answer)
        questions.extend([mcq_q, sa_q])
    return questions, kept_figures


def write_js(questions: list[dict], catalog: list[dict]) -> None:
    header = (
        "// ICSE Class 8 History & Civics — diagram MCQs & descriptive Q&A from textbook figures\n"
        "// Source: history8/data/history and civics.pdf_by_PaddleOCR-VL-1.6.md\n"
        f"// {len(questions)} items ({len(catalog)} figures × 2)\n"
        "// Regenerate: python3 history8/build_history_diagrams.py\n"
        "// Hand-tuned overrides: history8/data/diagram_overrides.json\n"
        "const HISTORY_DIAGRAM_DATA = [\n"
    )
    body = ",\n".join(json.dumps(q, ensure_ascii=False, indent=1) for q in questions)
    OUT_JS.write_text(header + body + "\n];\n", encoding="utf-8")
    CATALOG_JSON.parent.mkdir(parents=True, exist_ok=True)
    CATALOG_JSON.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    if not SRC_MD.exists():
        raise FileNotFoundError(f"Missing {SRC_MD}")
    lines = SRC_MD.read_text(encoding="utf-8").splitlines()
    facts_by_topic = load_chapter_facts()
    overrides = load_overrides()
    all_figures: list[dict] = []
    for ch in CHAPTER_DEFS:
        figs = extract_figures(lines, ch)
        all_figures.extend(figs)
        print(f"  {ch['topicId']}: {len(figs)} figures")

    questions, kept_figures = build_questions(
        all_figures,
        facts_by_topic,
        build_chapter_sentence_pools(all_figures),
        overrides,
    )
    catalog = [
        {
            "id": f"{f['topicId']}-fig{i:03d}",
            "chapter": f["chapter"],
            "subject": f["subject"],
            "topicId": f["topicId"],
            "filename": f["filename"],
            "image": rel_image_path(
                next(c for c in CHAPTER_DEFS if c["topicId"] == f["topicId"]),
                f["filename"],
            ),
            "heading": f["heading"],
            "caption": f["caption"] or figure_label(f),
            "figureType": f.get("figureType", "general"),
        }
        for i, f in enumerate(
            sorted(kept_figures, key=lambda x: (x["topicId"], x["filename"])),
            1,
        )
    ]
    write_js(questions, catalog)
    print(f"Wrote {OUT_JS.name}: {len(questions)} diagram questions")
    print(f"Wrote {CATALOG_JSON.name}: {len(catalog)} figures")


if __name__ == "__main__":
    main()
