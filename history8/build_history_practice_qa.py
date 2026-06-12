#!/usr/bin/env python3
"""
Build history-civics-practice.js from ICSE Class 8 History & Civics 300 Q&A HTML.
Source: data/history8/icse_300_questions.html + icse_300_answers.html
Regenerate: python3 history8/build_history_practice_qa.py
"""
from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
QUESTIONS_HTML = ROOT / "data/history8/icse_300_questions.html"
ANSWERS_HTML = ROOT / "data/history8/icse_300_answers.html"
OUT_JS = ROOT / "history-civics-practice.js"

# HTML chapter number → (topicId, subtopic label)
CHAPTER_TOPIC: dict[int, tuple[str, str]] = {
    1: ("hist-ch1", "Period of Transition"),
    2: ("hist-ch2", "Nationalism & Nation-States"),
    3: ("hist-ch2", "American War of Independence"),
    4: ("hist-ch2", "French Revolution"),
    5: ("hist-ch1", "Industrial Revolution"),
    6: ("hist-ch4", "The Mughal Empire"),
    7: ("hist-ch4", "Composite Culture"),
    8: ("hist-ch4", "Rise of the Marathas"),
    9: ("hist-ch6", "Traders to Rulers"),
    10: ("hist-ch7", "Expansion of British Power"),
    11: ("hist-ch10", "Socio-Religious Reform Movements"),
    12: ("hist-ch9", "Great Uprising of 1857"),
    13: ("civ-ch1", "The Indian Constitution"),
    14: ("civ-ch1", "Fundamental Rights & Duties"),
    15: ("civ-ch1", "Union Government"),
    16: ("civ-ch2", "The United Nations"),
}


def clean(text: str) -> str:
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def strip_qnum(text: str) -> str:
    return re.sub(r"^\d+\.\s*", "", text).strip()


def parse_questions(raw: str) -> dict[int, list[str]]:
    chapters: dict[int, list[str]] = {}
    parts = re.split(r"<h2>Chapter\s+(\d+)\s+—", raw, flags=re.IGNORECASE)
    for i in range(1, len(parts), 2):
        ch_num = int(parts[i])
        block = parts[i + 1]
        items = re.findall(r"<li>(.*?)</li>", block, flags=re.DOTALL | re.IGNORECASE)
        chapters[ch_num] = [clean(item) for item in items]
    return chapters


def parse_answers(raw: str) -> dict[int, list[tuple[str, str]]]:
    chapters: dict[int, list[tuple[str, str]]] = {}
    parts = re.split(r"<h2>Chapter\s+(\d+)\s+—", raw, flags=re.IGNORECASE)
    for i in range(1, len(parts), 2):
        ch_num = int(parts[i])
        block = parts[i + 1]
        pairs: list[tuple[str, str]] = []
        for qa in re.findall(r'<div class="qa">(.*?)</div>', block, flags=re.DOTALL):
            qm = re.search(r'<p class="q">(.*?)</p>', qa, flags=re.DOTALL)
            am = re.search(r'<p class="a">(.*?)</p>', qa, flags=re.DOTALL)
            if qm and am:
                pairs.append((clean(qm.group(1)), clean(am.group(1))))
        chapters[ch_num] = pairs
    return chapters


def build_items() -> list[dict]:
    q_raw = QUESTIONS_HTML.read_text(encoding="utf-8")
    a_raw = ANSWERS_HTML.read_text(encoding="utf-8")
    questions = parse_questions(q_raw)
    answers = parse_answers(a_raw)

    items: list[dict] = []
    global_num = 0
    for ch in sorted(CHAPTER_TOPIC.keys()):
        topic_id, subtopic = CHAPTER_TOPIC[ch]
        qs = questions.get(ch, [])
        ans = answers.get(ch, [])
        if len(qs) != len(ans):
            raise ValueError(
                f"Chapter {ch}: {len(qs)} questions vs {len(ans)} answers — counts must match"
            )
        for idx, (question, (aq, answer)) in enumerate(zip(qs, ans), 1):
            global_num += 1
            aq_clean = strip_qnum(aq)
            if aq_clean.lower()[:40] != question.lower()[:40]:
                # Allow minor punctuation differences; warn on real mismatch
                if strip_qnum(aq).replace("'", "'")[:30] not in question.replace("'", "'")[:40]:
                    print(f"  warn ch{ch} q{idx}: question text mismatch")
                    print(f"    Q file: {question[:70]}...")
                    print(f"    A file: {aq_clean[:70]}...")
            qid = f"hcp-ch{ch:02d}-q{idx:02d}"
            items.append({
                "id": qid,
                "q_id": qid,
                "topicId": topic_id,
                "type": "short_answer",
                "subtopic": f"Practice Q&A — {subtopic}",
                "question": f"{global_num}. {question}",
                "answer": answer,
                "source": "icse_300_practice",
            })
    return items


def write_js(items: list[dict]) -> None:
    hist = sum(1 for x in items if x["topicId"].startswith("hist-"))
    civ = len(items) - hist
    header = (
        "// ============================================================\n"
        "// ICSE CLASS 8 HISTORY & CIVICS — 300 PRACTICE Q&A\n"
        "// Source: data/history8/icse_300_questions.html + icse_300_answers.html\n"
        f"// {len(items)} short/long-answer questions ({hist} history, {civ} civics)\n"
        "// Variable: HISTORY_CIVICS_PRACTICE  (merged in app.js)\n"
        "// Regenerate: python3 history8/build_history_practice_qa.py\n"
        "// ============================================================\n"
        "const HISTORY_CIVICS_PRACTICE = [\n"
    )
    body = ",\n".join(json.dumps(x, ensure_ascii=False, indent=1) for x in items)
    OUT_JS.write_text(header + body + "\n];\n", encoding="utf-8")


def main() -> None:
    if not QUESTIONS_HTML.exists() or not ANSWERS_HTML.exists():
        raise FileNotFoundError("Missing source HTML in data/history8/")
    items = build_items()
    assert len(items) == 300, f"Expected 300 items, got {len(items)}"
    write_js(items)
    print(f"Wrote {OUT_JS.name}: {len(items)} practice Q&A items")


if __name__ == "__main__":
    main()
