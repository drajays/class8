#!/usr/bin/env python3
"""
Extract textbook figures from Geography OCR MD/JSON, filter artefacts,
generate 2 diagram questions (MCQ + short answer) per figure, chapter-wise.
Output: geography-diagrams.js, data/geography8/image_catalog.json
Regenerate: python3 geography8/build_geography_diagrams.py
"""
from __future__ import annotations

import json
import random
import re
import shutil
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
DATA_DIR = ROOT / "geography8/data"
SRC_MD = DATA_DIR / "geography.pdf_by_PaddleOCR-VL-1.6.md"
SRC_JSON = DATA_DIR / "geography.pdf_by_PaddleOCR-VL-1.6.json"
ASSETS_DIR = ROOT / "assets/geography8/images"
LOCAL_IMAGES = ROOT / "images"
OUT_JS = ROOT / "geography-diagrams.js"
CATALOG_JSON = ROOT / "data/geography8/image_catalog.json"

CHAPTERS = [
    {"num": 1, "topicId": "geo-ch1", "title": "Interpreting Topographical Maps", "start": 230, "end": 979},
    {"num": 2, "topicId": "geo-ch2", "title": "Population", "start": 982, "end": 1607},
    {"num": 3, "topicId": "geo-ch3", "title": "Migration", "start": 1608, "end": 2199},
    {"num": 4, "topicId": "geo-ch4", "title": "Urbanization", "start": 2200, "end": 2737},
    {"num": 5, "topicId": "geo-ch5", "title": "Disasters & Disaster Management", "start": 2738, "end": 3843},
    {"num": 6, "topicId": "geo-ch6", "title": "Asia — Physical Features & Climate", "start": 3844, "end": 4754},
    {"num": 7, "topicId": "geo-ch7", "title": "India — Physical Features & Climate", "start": 4757, "end": 5976},
    {"num": 8, "topicId": "geo-ch8", "title": "Human Resources in India", "start": 5977, "end": 6386},
]

IMG_FNAME = re.compile(r"(img_in_(?:image|chart)_box_\d+_\d+_\d+_\d+\.(?:jpg|jpeg|png))", re.I)
IMG_TAG = re.compile(r'<img[^>]+src="[^"]*/([^"?]+\.(?:jpg|jpeg|png))[^"]*"[^>]*>', re.I)
WIDTH_PCT = re.compile(r'width="(\d+)%"')
HEADING = re.compile(r"^(#{1,6})\s+(.+)$")

SKIP_HEADINGS = {
    "learning outcomes", "recall", "skill:", "discuss", "websites", "worksheets",
    "sample term paper", "map practice", "key features", "preface", "table of contents",
    "acknowledgment", "oxford university press", "national curriculum",
}

ARTIFACT_KEYWORDS = re.compile(
    r"\b(qr\s*code|barcode|bed\s*sheet|bedsheet|logo|oxford|nelson|cover\s*photo|"
    r"illustrations by|layout design|isbn|typeset|printed in india)\b",
    re.I,
)


def strip_md(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = re.sub(r"\$+.*?\$+", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def image_filename(url_or_name: str) -> str | None:
    m = IMG_FNAME.search(url_or_name)
    return m.group(1) if m else None


def is_valid_figure(w: int, h: int, pct: int | None, area: int, context: str) -> bool:
    if area < 25000:
        return False
    if w < 80 and h < 80:
        return False
    if pct is not None and pct < 12:
        return False
    if max(w, h) < 120 and area < 40000:
        return False
    if ARTIFACT_KEYWORDS.search(context):
        return False
    return True


def ensure_image(fname: str) -> str:
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    dest = ASSETS_DIR / fname
    if not dest.exists() or dest.stat().st_size == 0:
        src = LOCAL_IMAGES / fname
        if src.exists():
            shutil.copy2(src, dest)
    rel = f"assets/geography8/images/{fname}"
    return rel


def load_json_captions() -> dict[str, str]:
    """Map image filename → OCR block text from JSON (if present)."""
    if not SRC_JSON.exists():
        return {}
    try:
        raw = json.loads(SRC_JSON.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}
    caps: dict[str, str] = {}
    pages = raw if isinstance(raw, list) else [raw]
    for page in pages:
        pr = page.get("prunedResult") or page
        for block in pr.get("parsing_res_list") or []:
            label = (block.get("block_label") or "").lower()
            if label not in ("image", "chart", "figure", "figure_title"):
                continue
            content = strip_md(block.get("block_content") or "")
            if len(content) < 8:
                continue
            for m in IMG_FNAME.finditer(json.dumps(block)):
                caps.setdefault(m.group(1), content)
    return caps


def load_chapter_facts() -> dict[int, list[str]]:
    from geography8.chapter_data.content import CHAPTER_CONTENT

    out: dict[int, list[str]] = {}
    for num, cfg in CHAPTER_CONTENT.items():
        facts = list(cfg.get("highYieldFacts") or [])
        for t in cfg.get("topics") or []:
            facts.extend(t.get("bullets") or [])
            facts.append(t.get("summary", ""))
        out[num] = [strip_md(f) for f in facts if f and len(strip_md(f)) > 20]
    return out


def nearest_heading(lines: list[str], idx: int) -> str:
    for j in range(idx, max(-1, idx - 40), -1):
        m = HEADING.match(lines[j].strip())
        if not m:
            continue
        title = strip_md(m.group(2))
        if title.lower() in SKIP_HEADINGS or len(title) < 4:
            continue
        if title.startswith("Chapter ") or title.isupper() and len(title) > 40:
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
    for j in range(idx + 1, min(len(lines), idx + 4)):
        t = strip_md(lines[j])
        if not t or "<img" in lines[j] or t.startswith("#"):
            break
        if len(t) < 120 and not t.endswith("."):
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
        out.append("The figure is unrelated to the chapter topic.")
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
    opts.append(correct[:140] + ("…" if len(correct) > 140 else ""))
    rng.shuffle(opts)
    correct_idx = opts.index(correct[:140] + ("…" if len(correct) > 140 else ""))
    return {
        "id": qid,
        "q_id": qid,
        "topicId": topic_id,
        "type": "mcq",
        "subtopic": "Diagram-based Questions",
        "question": question,
        "options": opts,
        "correctOption": correct_idx,
        "answer": correct,
        "image": image_path,
        "caption": caption or heading or "Textbook figure",
        "source": "geo_diagram",
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
    # Build a descriptive prompt from context keywords
    if "contour" in context.lower():
        prompt = "Identify the landform or map feature shown and explain how contours or symbols support your answer."
    elif "pyramid" in context.lower() or "population" in context.lower():
        prompt = "Describe what the diagram shows about population structure or growth."
    elif "map" in context.lower() or "grid" in context.lower():
        prompt = "Explain what the map or grid diagram demonstrates and why it is useful in geography."
    elif "disaster" in context.lower() or "flood" in context.lower() or "earthquake" in context.lower():
        prompt = "Describe the disaster-related feature shown and its geographical significance."
    elif "climate" in context.lower() or "vegetation" in context.lower():
        prompt = "Explain the climate or vegetation pattern shown and the physical factor responsible."
    else:
        prompt = f"Briefly describe what {topic} represents and its importance in this chapter."

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
        "source": "geo_diagram",
        "examTip": "Begin with what you see, then link to the geographical concept.",
    }


def extract_figures(lines: list[str], ch: dict) -> list[dict[str, Any]]:
    text_lines = lines[ch["start"] - 1 : ch["end"]]
    seen: set[str] = set()
    figures: list[dict[str, Any]] = []
    for i, line in enumerate(text_lines):
        if "<img" not in line:
            continue
        m = IMG_TAG.search(line)
        if not m:
            continue
        fname = image_filename(m.group(1))
        if not fname or fname in seen:
            continue
        coords = IMG_FNAME.search(fname)
        if not coords:
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
        abs_idx = ch["start"] - 1 + i
        heading = nearest_heading(lines, abs_idx)
        caption = caption_after(lines, i)
        ctx = context_window(text_lines, i)
        if heading:
            ctx = f"{heading}. {ctx}"
        if caption:
            ctx = f"{caption}. {ctx}"
        if not is_valid_figure(w, h, pct, area, ctx):
            continue
        seen.add(fname)
        figures.append({
            "filename": fname,
            "chapter": ch["num"],
            "topicId": ch["topicId"],
            "chapterTitle": ch["title"],
            "heading": heading,
            "caption": caption,
            "context": ctx[:1200],
            "width": w,
            "height": h,
            "area": area,
        })
    return figures


def build_questions(figures: list[dict], facts_by_ch: dict[int, list[str]]) -> list[dict]:
    rng = random.Random(8)
    questions: list[dict] = []
    for idx, fig in enumerate(figures, 1):
        ch = fig["chapter"]
        topic_id = fig["topicId"]
        image_path = ensure_image(fig["filename"])
        base = f"geo-ch{ch}-fig{idx:03d}"
        facts = facts_by_ch.get(ch, [])
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
        # Improve short-answer from best matching fact
        if facts:
            sa_q["answer"] = pick_fact(facts, fig["context"], rng)
        questions.extend([mcq_q, sa_q])
    return questions


def write_js(questions: list[dict], catalog: list[dict]) -> None:
    header = (
        "// ICSE Class 8 Geography — diagram MCQs & descriptive Q&A from textbook figures\n"
        "// Source: geography8/data/geography.pdf_by_PaddleOCR-VL-1.6.md\n"
        f"// {len(questions)} items ({len(catalog)} figures × 2)\n"
        "// Regenerate: python3 geography8/build_geography_diagrams.py\n"
        "const GEOGRAPHY_DIAGRAM_DATA = [\n"
    )
    body = ",\n".join(json.dumps(q, ensure_ascii=False, indent=1) for q in questions)
    OUT_JS.write_text(header + body + "\n];\n", encoding="utf-8")

    CATALOG_JSON.parent.mkdir(parents=True, exist_ok=True)
    CATALOG_JSON.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    if not SRC_MD.exists():
        raise FileNotFoundError(
            f"Missing {SRC_MD}. Copy OCR files into geography8/data/ first."
        )
    lines = SRC_MD.read_text(encoding="utf-8").splitlines()
    facts_by_ch = load_chapter_facts()
    all_figures: list[dict] = []
    for ch in CHAPTERS:
        figs = extract_figures(lines, ch)
        all_figures.extend(figs)
        print(f"  Ch{ch['num']}: {len(figs)} figures")

    questions = build_questions(all_figures, facts_by_ch)
    catalog = [
        {
            "id": f"geo-ch{f['chapter']}-fig{i:03d}",
            "chapter": f["chapter"],
            "topicId": f["topicId"],
            "filename": f["filename"],
            "image": f"assets/geography8/images/{f['filename']}",
            "heading": f["heading"],
            "caption": f["caption"],
        }
        for i, f in enumerate(all_figures, 1)
    ]
    write_js(questions, catalog)
    print(f"Wrote {OUT_JS.name}: {len(questions)} diagram questions")
    print(f"Wrote {CATALOG_JSON.name}: {len(catalog)} figures")


if __name__ == "__main__":
    main()
