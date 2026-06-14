#!/usr/bin/env python3
"""
Build history-figure-practice.js from curated figure Q&A with verified textbook images.
Source: history8/data/history_figure_qa_50.json
Regenerate: python3 history8/build_history_figure_qa.py
"""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "history8/data/history_figure_qa_50.json"
OUT = ROOT / "history-figure-practice.js"


def build_items(raw: list[dict]) -> list[dict]:
    items: list[dict] = []
    for row in raw:
        num = row["num"]
        qid = f"hfq-{num:02d}"
        item: dict = {
            "id": qid,
            "q_id": qid,
            "topicId": row["topicId"],
            "type": "short_answer",
            "subtopic": "Figure Practice",
            "question": f"{num}. {row['question']}",
            "answer": row["answer"],
            "source": "hist_figure",
            "imageLabel": row.get("imageLabel", ""),
        }
        if row.get("image"):
            item["image"] = row["image"]
            item["caption"] = row.get("caption") or row.get("imageLabel", "")
        items.append(item)
    return items


def write_js(items: list[dict]) -> None:
    with_img = sum(1 for x in items if x.get("image"))
    header = (
        "// ============================================================\n"
        "// ICSE CLASS 8 HISTORY & CIVICS — 50 FIGURE PRACTICE Q&A\n"
        "// Curated identification questions with verified textbook images\n"
        f"// {len(items)} items ({with_img} with textbook figures)\n"
        "// Variable: HISTORY_FIGURE_PRACTICE  (merged in app.js)\n"
        "// Regenerate: python3 history8/build_history_figure_qa.py\n"
        "// ============================================================\n"
        "const HISTORY_FIGURE_PRACTICE = [\n"
    )
    body = ",\n".join(json.dumps(x, ensure_ascii=False, indent=1) for x in items)
    OUT.write_text(header + body + "\n];\n", encoding="utf-8")


def main() -> None:
    raw = json.loads(SRC.read_text(encoding="utf-8"))
    assert len(raw) == 50, f"Expected 50 items, got {len(raw)}"
    items = build_items(raw)
    for item in items:
        img = item.get("image")
        if img and not (ROOT / img).exists():
            raise FileNotFoundError(f"Missing asset for {item['id']}: {img}")
    write_js(items)
    print(f"Wrote {OUT.name}: {len(items)} figure Q&A ({sum(1 for x in items if x.get('image'))} with images)")


if __name__ == "__main__":
    main()
