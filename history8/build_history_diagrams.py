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
}

ARTIFACT_KEYWORDS = re.compile(
    r"\b(qr\s*code|barcode|bed\s*sheet|bedsheet|logo|oxford|frank\s*bros|nelson|"
    r"cover\s*photo|isbn|typeset|printed in india|holistic progress|worksheet)\b",
    re.I,
)


def strip_md(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = re.sub(r"\$+.*?\$+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


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
        items = [strip_md(f) for f in data.get("highYieldFacts") or [] if f and len(strip_md(f)) > 20]
        for n in data.get("notes") or []:
            body = strip_md(n.get("content") or "")
            for line in re.split(r"[.\n]", body):
                line = strip_md(line)
                if len(line) > 35:
                    items.append(line)
        facts[ch["topicId"]] = items[:40]
    return facts


def nearest_heading(lines: list[str], idx: int) -> str:
    for j in range(idx, max(-1, idx - 40), -1):
        m = HEADING.match(lines[j].strip())
        if not m:
            continue
        title = strip_md(m.group(2))
        low = title.lower()
        if low in SKIP_HEADINGS or len(title) < 4:
            continue
        if title.startswith("Chapter ") or (title.isupper() and len(title) > 40):
            continue
        return title
    return ""


def context_window(lines: list[str], idx: int, radius: int = 12) -> str:
    lo = max(0, idx - radius)
    hi = min(len(lines), idx + radius + 1)
    chunks: list[str] = []
    for line in lines[lo:hi]:
        if "<img" in line:
            continue
        t = strip_md(line)
        if len(t) < 15 or t.startswith("http"):
            continue
        chunks.append(t)
    return " ".join(chunks)


def caption_after(lines: list[str], idx: int) -> str:
    for j in range(idx + 1, min(len(lines), idx + 5)):
        t = strip_md(lines[j])
        if not t or "<img" in lines[j] or lines[j].strip().startswith("#"):
            break
        if len(t) < 200:
            return t
    return ""


def pick_fact(facts: list[str], context: str, rng: random.Random) -> str:
    ctx_lower = context.lower()
    scored = []
    for f in facts:
        words = [w for w in re.findall(r"[a-z]{5,}", f.lower()) if w in ctx_lower]
        scored.append((len(words), f))
    scored.sort(key=lambda x: (-x[0], len(x[1])))
    if scored and scored[0][0] > 0:
        return scored[0][1]
    return rng.choice(facts) if facts else context[:200]


def distractors(facts: list[str], correct: str, rng: random.Random, n: int = 3) -> list[str]:
    pool = [f for f in facts if f != correct and len(f) > 25]
    rng.shuffle(pool)
    out: list[str] = []
    for f in pool:
        if f not in out:
            out.append(f[:140] + ("…" if len(f) > 140 else ""))
        if len(out) >= n:
            break
    while len(out) < n:
        out.append("The figure is unrelated to this chapter topic.")
    return out[:n]


def make_mcq(
    qid: str,
    topic_id: str,
    heading: str,
    caption: str,
    image_path: str,
    facts: list[str],
    context: str,
    rng: random.Random,
) -> dict[str, Any]:
    correct = pick_fact(facts, context, rng)
    topic = heading or caption or "this figure"
    question = (
        f"Study the textbook figure on {topic}. "
        f"Which statement correctly describes what the figure illustrates?"
    )
    opts = distractors(facts, correct, rng)
    short_correct = correct[:140] + ("…" if len(correct) > 140 else "")
    opts.append(short_correct)
    rng.shuffle(opts)
    return {
        "id": qid,
        "q_id": qid,
        "topicId": topic_id,
        "type": "mcq",
        "subtopic": "Diagram-based Questions",
        "question": question,
        "options": opts,
        "correctOption": opts.index(short_correct),
        "answer": correct,
        "image": image_path,
        "caption": caption or heading or "Textbook figure",
        "source": "hist_diagram",
        "examTip": "Link the visual to the caption and surrounding paragraph in your textbook.",
    }


def make_short(
    qid: str,
    topic_id: str,
    heading: str,
    caption: str,
    image_path: str,
    context: str,
) -> dict[str, Any]:
    topic = caption or heading or "the figure shown"
    ctx = context.lower()
    if any(k in ctx for k in ("portrait", "painting", "photograph", "leader", "emperor")):
        prompt = "Identify the person or event shown and explain its historical significance."
    elif "map" in ctx:
        prompt = "Describe what the map shows and its importance in this chapter."
    elif any(k in ctx for k in ("united nations", "security council", "general assembly", "who", "unicef")):
        prompt = "Explain the UN organ or agency shown and its role."
    elif any(k in ctx for k in ("parliament", "judiciary", "executive", "government")):
        prompt = "Describe the organ of government shown and its function in India."
    elif any(k in ctx for k in ("battle", "war", "uprising", "revolt")):
        prompt = "Describe the battle or event depicted and its outcome."
    elif "chart" in ctx or "timeline" in ctx:
        prompt = "Explain the trend or sequence shown in the diagram."
    else:
        prompt = f"Briefly describe what {topic} represents and why it matters in this chapter."

    return {
        "id": qid,
        "q_id": qid,
        "topicId": topic_id,
        "type": "short_answer",
        "subtopic": "Diagram-based Questions",
        "question": f"Study the textbook figure. {prompt}",
        "answer": context[:500] if len(context) > 80 else f"The figure illustrates {topic} as explained in the textbook.",
        "image": image_path,
        "caption": caption or heading or "Textbook figure",
        "source": "hist_diagram",
        "examTip": "Begin with what you see, then link to causes, key persons, dates, and consequences.",
    }


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
        caption = caption_after(text_lines, i)
        ctx = context_window(text_lines, i)
        if heading:
            ctx = f"{heading}. {ctx}"
        if caption:
            ctx = f"{caption}. {ctx}"
        if not is_valid_figure(w, h, pct, area, fname, ctx):
            continue
        seen.add(fname)
        figures.append({
            "filename": fname,
            "url": url if url.startswith("http") else None,
            "chapter": ch["out"],
            "subject": ch["subject"],
            "topicId": ch["topicId"],
            "chapterTitle": ch["title"],
            "heading": heading,
            "caption": caption,
            "context": ctx[:1200],
        })
    return figures


def build_questions(figures: list[dict], facts_by_topic: dict[str, list[str]]) -> list[dict]:
    rng = random.Random(12)
    questions: list[dict] = []
    counters: dict[str, int] = {}
    for fig in figures:
        topic_id = fig["topicId"]
        counters[topic_id] = counters.get(topic_id, 0) + 1
        idx = counters[topic_id]
        ch_meta = next(c for c in CHAPTER_DEFS if c["topicId"] == topic_id)
        image_path = ensure_image(ch_meta, fig["filename"], fig.get("url"))
        prefix = topic_id.replace("-", "")
        base = f"{prefix}-fig{idx:03d}"
        facts = facts_by_topic.get(topic_id, [])
        mcq_q = make_mcq(
            f"{base}-mcq",
            topic_id,
            fig["heading"],
            fig["caption"],
            image_path,
            facts,
            fig["context"],
            rng,
        )
        sa_q = make_short(
            f"{base}-sa",
            topic_id,
            fig["heading"],
            fig["caption"],
            image_path,
            fig["context"],
        )
        if facts:
            sa_q["answer"] = pick_fact(facts, fig["context"], rng)
        questions.extend([mcq_q, sa_q])
    return questions


def write_js(questions: list[dict], catalog: list[dict]) -> None:
    header = (
        "// ICSE Class 8 History & Civics — diagram MCQs & descriptive Q&A from textbook figures\n"
        "// Source: history8/data/history and civics.pdf_by_PaddleOCR-VL-1.6.md\n"
        f"// {len(questions)} items ({len(catalog)} figures × 2)\n"
        "// Regenerate: python3 history8/build_history_diagrams.py\n"
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
    all_figures: list[dict] = []
    for ch in CHAPTER_DEFS:
        figs = extract_figures(lines, ch)
        all_figures.extend(figs)
        print(f"  {ch['topicId']}: {len(figs)} figures")

    questions = build_questions(all_figures, facts_by_topic)
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
            "caption": f["caption"],
        }
        for i, f in enumerate(
            sorted(all_figures, key=lambda x: (x["topicId"], x["filename"])),
            1,
        )
    ]
    write_js(questions, catalog)
    print(f"Wrote {OUT_JS.name}: {len(questions)} diagram questions")
    print(f"Wrote {CATALOG_JSON.name}: {len(catalog)} figures")


if __name__ == "__main__":
    main()
