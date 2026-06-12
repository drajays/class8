#!/usr/bin/env python3
"""Generate ch1.py–ch4.py geography chapter modules."""
from __future__ import annotations

import textwrap
from pathlib import Path
from typing import Any

OUT = Path(__file__).parent


def _py_str(s: str) -> str:
    return repr(s)


def _fmt_list(items: list, indent: int = 4) -> str:
    pad = " " * indent
    if not items:
        return "[]"
    if isinstance(items[0], dict):
        parts = ["["]
        for item in items:
            parts.append(f"{pad}{{")
            for k, v in item.items():
                if isinstance(v, list):
                    parts.append(f'{pad}    "{k}": {_fmt_list(v, indent + 4)},')
                elif isinstance(v, str) and "\n" in v:
                    parts.append(f'{pad}    "{k}": """{v}""",')
                else:
                    parts.append(f'{pad}    "{k}": {_py_str(v)},')
            parts.append(f"{pad}}},")
        parts.append(" " * (indent - 4) + "]")
        return "\n".join(parts)
    parts = ["["]
    for item in items:
        if isinstance(item, str) and "\n" in item:
            parts.append(f'{pad}"""{item}""",')
        else:
            parts.append(f"{pad}{_py_str(item)},")
    parts.append(" " * (indent - 4) + "]")
    return "\n".join(parts)


def _write_chapter(num: int, title: str, data: dict[str, Any]) -> None:
    mcqs, tfs, fills, matches, shorts = data["mcqs"], data["tfs"], data["fills"], data["matches"], data["shorts"]
    lines = [
        f'"""Chapter {num}: {title}."""',
        "from geography8.chapter_data.qgen import mcq, tf, fill, match, short, build_question_set",
        "",
        "",
        "def _questions(ch):",
        '    topic_id = ch["topicId"]',
        "    mcqs = [",
    ]
    for m in mcqs:
        lines.append(
            f'        mcq("", topic_id, {_py_str(m["q"])}, {_fmt_list(m["opts"], 8)}, {m["correct"]}, '
            f'{_py_str(m["ans"])}, exam_tip={_py_str(m.get("exam", ""))}, teacher_tip={_py_str(m.get("teacher", ""))}),'
        )
    lines.append("    ]")
    lines.append("    tfs = [")
    for t in tfs:
        lines.append(
            f'        tf("", topic_id, {_py_str(t["q"])}, {_py_str(t["correct"])}, {_py_str(t["just"])}),'
        )
    lines.append("    ]")
    lines.append("    fills = [")
    for f in fills:
        lines.append(
            f'        fill("", topic_id, {_py_str(f["q"])}, {_py_str(f["blank"])}, {_py_str(f["ans"])}),'
        )
    lines.append("    ]")
    lines.append("    matches = [")
    for m in matches:
        pairs = ", ".join(
            f'{{"left": {_py_str(p["left"])}, "right": {_py_str(p["right"])}}}' for p in m["pairs"]
        )
        lines.append(f'        match("", topic_id, {_py_str(m["q"])}, [{pairs}], {_py_str(m["ans"])}),')
    lines.append("    ]")
    lines.append("    shorts = [")
    for s in shorts:
        lines.append(f'        short("", topic_id, {_py_str(s["q"])}, {_py_str(s["ans"])}),')
    lines.append("    ]")
    lines.append(f"    return build_question_set({num}, topic_id, mcqs, tfs, fills, matches, shorts)")
    lines.append("")
    lines.append("")
    lines.append("CHAPTER = {")
    lines.append(f'    "topics": {_fmt_list(data["topics"])},')
    lines.append(f'    "highYieldFacts": {_fmt_list(data["high_yield"])},')
    lines.append('    "questions": _questions,')
    lines.append(f'    "mindmap": """{data["mindmap"]}""",')
    lines.append(f'    "cheatsheet": {_fmt_list(data["cheatsheet"])},')
    lines.append(f'    "wordCards": {_fmt_list(data["word_cards"])},')
    lines.append("}")
    lines.append("")
    (OUT / f"ch{num}.py").write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    from geography8.chapter_data._chapter_defs import CH1, CH2, CH3, CH4

    for num, data in enumerate([CH1, CH2, CH3, CH4], 1):
        _write_chapter(num, data["title"], data)
        print(f"Wrote ch{num}.py ({len(data['mcqs'])} MCQs)")
