#!/usr/bin/env python3
"""
Build physics-practice.js from ICSE Class 8 Physics NEET/Olympiad Elite Q&A HTML.
Source: data/physics8/icse_neet_olympiad_elite.html
Regenerate: python3 physics8/build_physics_practice_qa.py
"""
from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE_HTML = ROOT / "data/physics8/icse_neet_olympiad_elite.html"
OUT_JS = ROOT / "physics-practice.js"

CHAPTER_TOPIC: dict[int, tuple[str, str]] = {
    1: ("ch1-matter", "Matter"),
    2: ("ch2-measurement", "Physical Quantities & Measurement"),
    3: ("ch3-force", "Force & Pressure"),
    4: ("ch4-energy", "Energy"),
    5: ("ch5-light", "Light Energy"),
    6: ("ch6-heat", "Heat Energy"),
    7: ("ch7-sound", "Sound"),
    8: ("ch8-electricity", "Electricity"),
    9: ("ch9-modern", "Advanced Electromagnetism & Modern Physics"),
    10: ("ch10-olympiad", "Olympiad Masterclass — Applied Mechanics & Capstone"),
}


def strip_tags(text: str) -> str:
    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    return html.unescape(re.sub(r"[ \t]+", " ", text)).strip()


def clean(text: str) -> str:
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def parse_answer(text: str) -> str:
    text = clean(strip_tags(text))
    return re.sub(r"^Ans:\s*", "", text, flags=re.I)


def parse_qitem(block: str) -> dict[str, object]:
    is_hr = bool(re.search(r'class="qitem\s+hr"', block)) or "<b>[HR]</b>" in block
    tm = re.search(r'<span class="type">\[(Easy|Medium|Hard)\]</span>', block, re.I)
    difficulty = tm.group(1).capitalize() if tm else "Medium"
    qm = re.search(
        r'<span class="qno">Q\d+\.</span>\s*(.*?)\s*<span class="type">',
        block,
        flags=re.DOTALL | re.I,
    )
    am = re.search(r'<div class="answer"><b>Ans:</b>\s*(.*?)</div>', block, flags=re.DOTALL | re.I)
    if not qm or not am:
        raise ValueError("Missing question or answer in qitem block")
    question = clean(strip_tags(qm.group(1)))
    question = re.sub(r"^\[HR\]\s*", "", question, flags=re.I)
    return {
        "question": question,
        "answer": parse_answer(am.group(1)),
        "difficulty": difficulty,
        "higherReasoning": is_hr,
    }


def parse_chapters(raw: str) -> list[dict]:
    items: list[dict] = []
    parts = re.split(r'<div class="chapter"\s+id="ch(\d+)">', raw, flags=re.I)
    global_num = 0
    for i in range(1, len(parts), 2):
        ch = int(parts[i])
        block = parts[i + 1]
        block = re.split(r'<div class="chapter"\s+id="ch\d+">', block, maxsplit=1, flags=re.I)[0]
        block = re.split(r"<footer", block, maxsplit=1, flags=re.I)[0]
        if ch not in CHAPTER_TOPIC:
            continue
        topic_id, title = CHAPTER_TOPIC[ch]
        qa_blocks = re.findall(r'<li class="qitem[^"]*">(.*?)</li>', block, flags=re.DOTALL | re.I)
        for idx, qa_block in enumerate(qa_blocks, 1):
            global_num += 1
            parsed = parse_qitem(qa_block)
            qid = f"pqp-ch{ch:02d}-q{idx:02d}"
            subtopic = f"NEET/Olympiad Q&A — {title}"
            if parsed["higherReasoning"]:
                subtopic += " (HR)"
            entry: dict[str, object] = {
                "id": qid,
                "q_id": qid,
                "topicId": topic_id,
                "type": "short_answer",
                "subtopic": subtopic,
                "question": f"{global_num}. {parsed['question']}",
                "answer": parsed["answer"],
                "difficulty": parsed["difficulty"],
                "higherReasoning": parsed["higherReasoning"],
                "source": "phy_neet_olympiad",
            }
            items.append(entry)
    return items


def write_js(items: list[dict]) -> None:
    by_topic: dict[str, int] = {}
    for item in items:
        tid = str(item["topicId"])
        by_topic[tid] = by_topic.get(tid, 0) + 1
    header = (
        "// ============================================================\n"
        "// ICSE CLASS 8 PHYSICS — NEET/OLYMPIAD ELITE Q&A\n"
        "// Source: data/physics8/icse_neet_olympiad_elite.html\n"
        f"// {len(items)} short/long-answer items with difficulty & HR tags\n"
        "// Variable: PHYSICS_PRACTICE  (merged in app.js)\n"
        "// Regenerate: python3 physics8/build_physics_practice_qa.py\n"
        "// ============================================================\n"
        "const PHYSICS_PRACTICE = [\n"
    )
    body = ",\n".join(json.dumps(x, ensure_ascii=False, indent=1) for x in items)
    OUT_JS.write_text(header + body + "\n];\n", encoding="utf-8")
    print(f"  topics: {', '.join(f'{k}={v}' for k, v in sorted(by_topic.items()))}")


def main() -> None:
    if not SOURCE_HTML.exists():
        raise FileNotFoundError(f"Missing {SOURCE_HTML}")
    raw = SOURCE_HTML.read_text(encoding="utf-8")
    items = parse_chapters(raw)
    if not items:
        raise ValueError("No questions parsed — check HTML structure")
    write_js(items)
    print(f"Wrote {OUT_JS.name}: {len(items)} physics Q&A items")


if __name__ == "__main__":
    main()
