#!/usr/bin/env python3
"""
Build chemistry-practice.js from ICSE Class 8 Chemistry 400 Q&A HTML.
Source: chemistry8/data/icse_400_descriptive_questions.html
Regenerate: python3 chemistry8/build_chemistry_practice_qa.py
"""
from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE_HTML = ROOT / "chemistry8/data/icse_400_descriptive_questions.html"
OVERRIDES_DIR = ROOT / "chemistry8/overrides"
OUT_JS = ROOT / "chemistry-practice.js"

CHAPTER_TOPIC: dict[str, tuple[str, str, int]] = {
    "1. Matter": ("chem-ch1", "Matter", 1),
    "2. Physical and Chemical Changes": ("chem-ch2", "Physical & Chemical Changes", 2),
    "3. Elements, Compounds and Mixtures": ("chem-ch3", "Elements, Compounds & Mixtures", 3),
    "4. Atomic Structure": ("chem-ch4", "Atomic Structure", 4),
    "5. Language of Chemistry": ("chem-ch5", "Language of Chemistry", 5),
    "6. Chemical Reactions": ("chem-ch6", "Chemical Reactions", 6),
    "7. Hydrogen": ("chem-ch7", "Hydrogen", 7),
    "8. Water": ("chem-ch8", "Water", 8),
    "9. Carbon and its Compounds": ("chem-ch9", "Carbon & Its Compounds", 9),
}


def strip_tags(text: str) -> str:
    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    return html.unescape(re.sub(r"[ \t]+", " ", text)).strip()


def clean(text: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def normalize_difficulty(raw: str) -> str:
    raw = raw.strip()
    if "olympiad" in raw.lower() or "neet" in raw.lower():
        return "Olympiad"
    if raw.lower().startswith("hard"):
        return "Hard"
    if raw.lower().startswith("easy"):
        return "Easy"
    return "Medium"


def parse_answer(panel: str) -> str:
    text = strip_tags(panel)
    text = re.sub(
        r"^Model Answer\s*/\s*Solution Explainer:\s*",
        "",
        text,
        flags=re.I,
    ).strip()
    return clean(text)


def parse_upgraded_panel(panel: str) -> tuple[str | None, str]:
    """Return (answerStyle, htmlBody) for elite upgraded answers."""
    body = panel.strip()
    style = None
    sm = re.search(
        r"<strong>(First Principles Breakdown|Glassbox Logic):</strong>",
        body,
        flags=re.I,
    )
    if sm:
        label = sm.group(1).lower()
        style = "first_principles" if "first" in label else "glassbox"
        body = re.sub(
            r"<strong>(First Principles Breakdown|Glassbox Logic|Model Answer\s*/\s*Solution Explainer):</strong>\s*<br\s*/?>",
            "",
            body,
            count=1,
            flags=re.I,
        ).strip()
    else:
        body = re.sub(
            r"<strong>Model Answer\s*/\s*Solution Explainer:</strong>\s*<br\s*/?>",
            "",
            body,
            count=1,
            flags=re.I,
        ).strip()
    return style, body


def parse_card_block(block: str) -> dict | None:
    header = re.match(
        r'<div class="q-card"\s+data-id="(\d+)"\s+data-chapter="([^"]+)"\s+'
        r'data-difficulty="([^"]+)"\s+data-type="([^"]+)"',
        block,
        flags=re.I,
    )
    if not header:
        return None
    data_id, chapter, diff_raw, q_type = header.groups()
    if chapter not in CHAPTER_TOPIC:
        raise ValueError(f"Unknown chapter: {chapter!r}")
    topic_id, title, ch_num = CHAPTER_TOPIC[chapter]
    qm = re.search(r'<div class="q-text">(.*?)</div>', block, flags=re.DOTALL | re.I)
    am = re.search(r'<div class="answer-panel"[^>]*>(.*?)</div>', block, flags=re.DOTALL | re.I)
    if not qm or not am:
        raise ValueError(f"Missing question/answer in card {data_id} ({chapter})")
    style, answer_html = parse_upgraded_panel(am.group(1))
    return {
        "dataId": int(data_id),
        "topicId": topic_id,
        "title": title,
        "chNum": ch_num,
        "difficulty": normalize_difficulty(diff_raw),
        "questionType": q_type.strip(),
        "questionText": clean(strip_tags(qm.group(1))),
        "answerStyle": style,
        "answerHtml": answer_html,
    }


def parse_cards(raw: str, *, upgraded: bool = False) -> list[dict]:
    items: list[dict] = []
    card_blocks = re.split(r'(?=<div class="q-card")', raw)
    chapter_counts: dict[str, int] = {}
    global_num = 0

    for block in card_blocks:
        parsed = parse_card_block(block)
        if not parsed:
            continue
        topic_id = parsed["topicId"]
        chapter_counts[topic_id] = chapter_counts.get(topic_id, 0) + 1
        idx = chapter_counts[topic_id]
        global_num += 1
        analytical = "why/how" in parsed["questionType"].lower()
        qid = f"cqp-ch{parsed['chNum']:02d}-q{idx:02d}"

        entry: dict[str, object] = {
            "id": qid,
            "q_id": qid,
            "topicId": topic_id,
            "type": "short_answer",
            "subtopic": f"Descriptive Q&A — {parsed['title']}",
            "question": f"{global_num}. {parsed['questionText']}",
            "difficulty": parsed["difficulty"],
            "questionType": parsed["questionType"],
            "higherReasoning": analytical or parsed["difficulty"] == "Olympiad",
            "source": "chem_neet_olympiad",
        }
        if upgraded and parsed["answerHtml"]:
            entry["answer"] = parsed["answerHtml"]
            entry["answerFormat"] = "html"
            if parsed["answerStyle"]:
                entry["answerStyle"] = parsed["answerStyle"]
        else:
            am = re.search(r'<div class="answer-panel"[^>]*>(.*?)</div>', block, flags=re.DOTALL | re.I)
            entry["answer"] = parse_answer(am.group(1)) if am else ""
        items.append(entry)

    return items


def load_card_overrides() -> dict[int, dict]:
    """Map global question number (data-id) → upgraded card fields."""
    overrides: dict[int, dict] = {}
    if not OVERRIDES_DIR.is_dir():
        return overrides
    for path in sorted(OVERRIDES_DIR.glob("batch*.html")):
        raw = path.read_text(encoding="utf-8")
        for block in re.split(r'(?=<div class="q-card")', raw):
            parsed = parse_card_block(block)
            if not parsed or not parsed["answerHtml"]:
                continue
            overrides[parsed["dataId"]] = parsed
    return overrides


def apply_card_overrides(items: list[dict], overrides: dict[int, dict]) -> int:
    applied = 0
    for item in items:
        m = re.match(r"^(\d+)\.", str(item.get("question", "")))
        if not m:
            continue
        num = int(m.group(1))
        parsed = overrides.get(num)
        if not parsed:
            continue
        analytical = "why/how" in parsed["questionType"].lower()
        item["question"] = f"{num}. {parsed['questionText']}"
        item["difficulty"] = parsed["difficulty"]
        item["questionType"] = parsed["questionType"]
        item["higherReasoning"] = analytical or parsed["difficulty"] == "Olympiad"
        item["answer"] = parsed["answerHtml"]
        item["answerFormat"] = "html"
        if parsed["answerStyle"]:
            item["answerStyle"] = parsed["answerStyle"]
        applied += 1
    return applied


def write_js(items: list[dict]) -> None:
    by_topic: dict[str, int] = {}
    for item in items:
        tid = str(item["topicId"])
        by_topic[tid] = by_topic.get(tid, 0) + 1
    header = (
        "// ============================================================\n"
        "// ICSE CLASS 8 CHEMISTRY — 400 DESCRIPTIVE & ANALYTICAL Q&A\n"
        "// Source: chemistry8/data/icse_400_descriptive_questions.html\n"
        "// Overrides: chemistry8/overrides/batch*.html (upgraded Q&A cards)\n"
        f"// {len(items)} short/long-answer items with difficulty & type tags\n"
        "// Variable: CHEMISTRY_PRACTICE  (merged in app.js)\n"
        "// Regenerate: python3 chemistry8/build_chemistry_practice_qa.py\n"
        "// ============================================================\n"
        "const CHEMISTRY_PRACTICE = [\n"
    )
    body = ",\n".join(json.dumps(x, ensure_ascii=False, indent=1) for x in items)
    OUT_JS.write_text(header + body + "\n];\n", encoding="utf-8")
    print(f"  topics: {', '.join(f'{k}={v}' for k, v in sorted(by_topic.items()))}")


def main() -> None:
    if not SOURCE_HTML.exists():
        raise FileNotFoundError(f"Missing {SOURCE_HTML}")
    raw = SOURCE_HTML.read_text(encoding="utf-8")
    items = parse_cards(raw)
    overrides = load_card_overrides()
    applied = apply_card_overrides(items, overrides)
    if len(items) != 400:
        raise ValueError(f"Expected 400 questions, parsed {len(items)}")
    write_js(items)
    print(f"Wrote {OUT_JS.name}: {len(items)} chemistry Q&A items")
    if overrides:
        print(f"  applied {applied} upgraded cards from {len(overrides)} override entries")


if __name__ == "__main__":
    main()
