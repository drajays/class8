#!/usr/bin/env python3
"""
Build geography-practice.js from upgraded descriptive Q&A HTML cards.
Source: geography8/overrides/batch*.html
Regenerate: python3 geography8/build_geography_practice_qa.py
"""
from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OVERRIDES_DIR = ROOT / "geography8/overrides"
OUT_JS = ROOT / "geography-practice.js"

CHAPTER_TOPIC: dict[str, tuple[str, str, int]] = {
    "1. Representation of Geographical Features": ("geo-ch1", "Topographical Maps", 1),
    "2. Population Dynamics": ("geo-ch2", "Population", 2),
    "3. Migration": ("geo-ch3", "Migration", 3),
    "4. Urbanisation": ("geo-ch4", "Urbanization", 4),
    "5. Natural and Man-made Disasters": ("geo-ch5", "Disasters", 5),
    "5. Disasters": ("geo-ch5", "Disasters", 5),
    "6. Asia": ("geo-ch6", "Asia", 6),
    "7. India": ("geo-ch7", "India", 7),
    "7. India: Geographical Features": ("geo-ch7", "India", 7),
    "8. Human Resources": ("geo-ch8", "Human Resources", 8),
    "8. India: Human Resources": ("geo-ch8", "Human Resources", 8),
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


def parse_upgraded_panel(panel: str) -> tuple[str | None, str]:
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


def parse_override_files() -> list[dict]:
    items: list[dict] = []
    chapter_counts: dict[str, int] = {}
    if not OVERRIDES_DIR.is_dir():
        return items
    for path in sorted(OVERRIDES_DIR.glob("batch[0-9]*.html")):
        raw = path.read_text(encoding="utf-8")
        for block in re.split(r'(?=<div class="q-card")', raw):
            parsed = parse_card_block(block)
            if not parsed or not parsed["answerHtml"]:
                continue
            topic_id = parsed["topicId"]
            chapter_counts[topic_id] = chapter_counts.get(topic_id, 0) + 1
            idx = chapter_counts[topic_id]
            global_num = parsed["dataId"]
            analytical = "why/how" in parsed["questionType"].lower()
            qid = f"gqp-ch{parsed['chNum']:02d}-q{idx:02d}"
            items.append({
                "id": qid,
                "q_id": qid,
                "topicId": topic_id,
                "type": "short_answer",
                "subtopic": f"Descriptive Q&A — {parsed['title']}",
                "question": f"{global_num}. {parsed['questionText']}",
                "difficulty": parsed["difficulty"],
                "questionType": parsed["questionType"],
                "higherReasoning": analytical or parsed["difficulty"] == "Olympiad",
                "source": "geo_neet_olympiad",
                "answer": parsed["answerHtml"],
                "answerFormat": "html",
                **({"answerStyle": parsed["answerStyle"]} if parsed["answerStyle"] else {}),
            })
    items.sort(key=lambda x: int(re.match(r"^(\d+)\.", x["question"]).group(1)))
    return items


def write_js(items: list[dict]) -> None:
    by_topic: dict[str, int] = {}
    for item in items:
        tid = str(item["topicId"])
        by_topic[tid] = by_topic.get(tid, 0) + 1
    header = (
        "// ============================================================\n"
        "// ICSE CLASS 8 GEOGRAPHY — DESCRIPTIVE & ANALYTICAL Q&A\n"
        "// Source: geography8/overrides/batch*.html\n"
        f"// {len(items)} short/long-answer items with difficulty & type tags\n"
        "// Variable: GEOGRAPHY_PRACTICE  (merged in app.js)\n"
        "// Regenerate: python3 geography8/build_geography_practice_qa.py\n"
        "// ============================================================\n"
        "const GEOGRAPHY_PRACTICE = [\n"
    )
    body = ",\n".join(json.dumps(x, ensure_ascii=False, indent=1) for x in items)
    OUT_JS.write_text(header + body + "\n];\n", encoding="utf-8")
    print(f"  topics: {', '.join(f'{k}={v}' for k, v in sorted(by_topic.items()))}")


def main() -> None:
    items = parse_override_files()
    if not items:
        raise FileNotFoundError(f"No cards found in {OVERRIDES_DIR}/batch*.html")
    write_js(items)
    print(f"Wrote {OUT_JS.name}: {len(items)} geography Q&A items")


if __name__ == "__main__":
    main()
