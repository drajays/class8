#!/usr/bin/env python3
"""
Build biology-practice.js from ICSE Class 8 Biology 300 NEET/Olympiad Q&A HTML.
Source: data/biology8/icse_300_neet_olympiad_answers.html
Regenerate: python3 biology8/build_biology_practice_qa.py
"""
from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE_HTML = ROOT / "data/biology8/icse_300_neet_olympiad_answers.html"
OUT_JS = ROOT / "biology-practice.js"

CHAPTER_TOPIC: dict[int, tuple[str, str]] = {
    1: ("bio-ch1", "Transportation in Plants"),
    2: ("bio-ch2", "Reproduction in Plants"),
    3: ("bio-ch3", "Reproduction in Humans"),
    4: ("bio-ch4", "Ecosystems"),
    5: ("bio-ch5", "Endocrine System & Adolescence"),
    6: ("bio-ch6", "Circulatory System"),
    7: ("bio-ch7", "Nervous System"),
    8: ("bio-ch8", "Diseases and First Aid"),
    9: ("bio-ch9", "Food Production"),
}


def strip_tags(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    return html.unescape(re.sub(r"\s+", " ", text)).strip()


def clean(text: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def parse_answer(text: str) -> str:
    text = clean(strip_tags(text))
    text = re.sub(r"^Advanced answer:\s*", "", text, flags=re.I)
    return text


def parse_topper(text: str) -> str:
    text = clean(strip_tags(text))
    text = re.sub(r"^Olympiad\s*/\s*Topper Note:\s*", "", text, flags=re.I)
    return text


def parse_qa_item(block: str) -> dict[str, object]:
    qm = re.search(r'<div class="question">(.*?)</div>', block, flags=re.DOTALL | re.I)
    am = re.search(r'<div class="answer-box">(.*?)</div>', block, flags=re.DOTALL | re.I)
    em = re.search(r'<div class="edge-box">(.*?)</div>', block, flags=re.DOTALL | re.I)
    if not qm or not am:
        raise ValueError("Missing question or answer in qa-item block")
    keywords = [clean(strip_tags(k)) for k in re.findall(r'<span class="chip">(.*?)</span>', block, flags=re.I)]
    keywords = [k for k in keywords if k]
    item: dict[str, object] = {
        "question": clean(strip_tags(qm.group(1))),
        "answer": parse_answer(am.group(1)),
        "keywords": keywords,
    }
    if em:
        tip = parse_topper(em.group(1))
        if tip:
            item["topperTip"] = tip
    return item


def parse_sections(raw: str) -> list[dict]:
    items: list[dict] = []
    sections = re.findall(
        r'<section class="section searchable-section" id="section-(\d+)">(.*?)</section>',
        raw,
        flags=re.DOTALL | re.I,
    )
    global_num = 0
    for sec_str, block in sections:
        ch = int(sec_str)
        if ch not in CHAPTER_TOPIC:
            continue
        topic_id, title = CHAPTER_TOPIC[ch]
        qa_blocks = re.findall(r'<li class="qa-item">(.*?)</li>', block, flags=re.DOTALL | re.I)
        for idx, qa_block in enumerate(qa_blocks, 1):
            global_num += 1
            parsed = parse_qa_item(qa_block)
            qid = f"bqp-ch{ch:02d}-q{idx:02d}"
            entry: dict[str, object] = {
                "id": qid,
                "q_id": qid,
                "topicId": topic_id,
                "type": "short_answer",
                "subtopic": f"NEET/Olympiad Q&A — {title}",
                "question": f"{global_num}. {parsed['question']}",
                "answer": parsed["answer"],
                "keywords": parsed["keywords"],
                "source": "bio_neet_olympiad",
            }
            if parsed.get("topperTip"):
                entry["topperTip"] = parsed["topperTip"]
            items.append(entry)
    return items


def write_js(items: list[dict]) -> None:
    by_ch: dict[str, int] = {}
    for item in items:
        tid = str(item["topicId"])
        by_ch[tid] = by_ch.get(tid, 0) + 1
    header = (
        "// ============================================================\n"
        "// ICSE CLASS 8 BIOLOGY — 300 NEET/OLYMPIAD Q&A\n"
        "// Source: data/biology8/icse_300_neet_olympiad_answers.html\n"
        f"// {len(items)} short/long-answer items with keywords & topper notes\n"
        "// Variable: BIOLOGY_PRACTICE  (merged in app.js)\n"
        "// Regenerate: python3 biology8/build_biology_practice_qa.py\n"
        "// ============================================================\n"
        "const BIOLOGY_PRACTICE = [\n"
    )
    body = ",\n".join(json.dumps(x, ensure_ascii=False, indent=1) for x in items)
    OUT_JS.write_text(header + body + "\n];\n", encoding="utf-8")
    print(f"  chapters: {', '.join(f'{k}={v}' for k, v in sorted(by_ch.items()))}")


def main() -> None:
    if not SOURCE_HTML.exists():
        raise FileNotFoundError(f"Missing {SOURCE_HTML}")
    raw = SOURCE_HTML.read_text(encoding="utf-8")
    items = parse_sections(raw)
    assert len(items) == 300, f"Expected 300 items, got {len(items)}"
    write_js(items)
    print(f"Wrote {OUT_JS.name}: {len(items)} biology Q&A items")


if __name__ == "__main__":
    main()
