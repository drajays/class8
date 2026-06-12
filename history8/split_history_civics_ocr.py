#!/usr/bin/env python3
"""
Split combined History & Civics PaddleOCR output into separate subject/chapter files.

Source (external):
  ~/history and civics/history and civics.pdf_by_PaddleOCR-VL-1.6.md
  ~/history and civics/history and civics.pdf_by_PaddleOCR-VL-1.6.json

Output:
  data/history8/chapters/ch{1..13}.md|json
  data/civics8/chapters/ch{1..2}.md|json
  data/history8/history-ocr.md|json   (full history)
  data/civics8/civics-ocr.md|json     (full civics)

Regenerate: python3 history8/split_history_civics_ocr.py
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = Path.home() / "history and civics"
SRC_MD = SRC_DIR / "history and civics.pdf_by_PaddleOCR-VL-1.6.md"
SRC_JSON = SRC_DIR / "history and civics.pdf_by_PaddleOCR-VL-1.6.json"

HISTORY_DIR = ROOT / "data/history8"
CIVICS_DIR = ROOT / "data/civics8"

# book chapter number, output chapter number (civics renumbered), topicId, title, md start line (1-based), json page start
CHAPTERS: list[dict[str, Any]] = [
    {"book": 1, "out": 1, "subject": "history", "topicId": "hist-ch1", "title": "A Period of Transition", "md_start": 60, "json_start": 3},
    {"book": 2, "out": 2, "subject": "history", "topicId": "hist-ch2", "title": "The Age of Revolutions", "md_start": 638, "json_start": 17},
    {"book": 3, "out": 3, "subject": "history", "topicId": "hist-ch3", "title": "The American Civil War", "md_start": 1169, "json_start": 29},
    {"book": 4, "out": 4, "subject": "history", "topicId": "hist-ch4", "title": "Decline of the Mughal Empire", "md_start": 1530, "json_start": 37},
    {"book": 5, "out": 5, "subject": "history", "topicId": "hist-ch5", "title": "Advent of the English East India Company", "md_start": 2044, "json_start": 54},
    {"book": 6, "out": 6, "subject": "history", "topicId": "hist-ch6", "title": "The British Conquest of Bengal", "md_start": 2477, "json_start": 62},
    {"book": 7, "out": 7, "subject": "history", "topicId": "hist-ch7", "title": "Expansion of British Power in India", "md_start": 2930, "json_start": 71},
    {"book": 8, "out": 8, "subject": "history", "topicId": "hist-ch8", "title": "Impact of the British Rule on India", "md_start": 3391, "json_start": 83},
    {"book": 9, "out": 9, "subject": "history", "topicId": "hist-ch9", "title": "The Great Uprising of 1857", "md_start": 4203, "json_start": 99},
    {"book": 10, "out": 10, "subject": "history", "topicId": "hist-ch10", "title": "Reform Movements in India under the British Rule", "md_start": 4667, "json_start": 108},
    {"book": 11, "out": 11, "subject": "history", "topicId": "hist-ch11", "title": "The Rise of Indian Nationalism", "md_start": 5153, "json_start": 118},
    {"book": 12, "out": 12, "subject": "history", "topicId": "hist-ch12", "title": "The Indian National Movement: 1885–1916", "md_start": 5514, "json_start": 126},
    {"book": 13, "out": 13, "subject": "history", "topicId": "hist-ch13", "title": "Mahatma Gandhi and the Indian National Movement: 1917–1947", "md_start": 6006, "json_start": 138},
    {"book": 14, "out": 1, "subject": "civics", "topicId": "civ-ch1", "title": "Organs of the Indian Government", "md_start": 6559, "json_start": 150},
    {"book": 15, "out": 2, "subject": "civics", "topicId": "civ-ch2", "title": "The United Nations", "md_start": 7454, "json_start": 166},
]

# Supplementary material after main textbook chapters (worksheets, PBL, etc.)
MD_SUPPLEMENT_START = 7941
JSON_SUPPLEMENT_START = 177


def page_markdown(page: dict) -> str:
    md = page.get("markdown") or {}
    if isinstance(md, dict):
        return md.get("text") or ""
    return md or ""


def slice_md_lines(lines: list[str], start: int, end: int) -> str:
    return "\n".join(lines[start - 1 : end])


def slice_json_pages(pages: list[dict], start: int, end: int) -> list[dict]:
    return pages[start : end + 1]


def chapter_bounds(chapters: list[dict], md_lines: list[str], json_pages: list[dict]) -> list[dict]:
    out = []
    for i, ch in enumerate(chapters):
        md_end = chapters[i + 1]["md_start"] - 1 if i + 1 < len(chapters) else MD_SUPPLEMENT_START - 1
        json_end = chapters[i + 1]["json_start"] - 1 if i + 1 < len(chapters) else JSON_SUPPLEMENT_START - 1
        out.append({**ch, "md_end": md_end, "json_end": json_end})
    return out


def write_chapter(ch: dict, md_text: str, json_pages: list[dict]) -> None:
    base = HISTORY_DIR if ch["subject"] == "history" else CIVICS_DIR
    ch_dir = base / "chapters"
    ch_dir.mkdir(parents=True, exist_ok=True)
    num = ch["out"]

    header = f"# Chapter {num}: {ch['title']}\n\n"
    (ch_dir / f"ch{num}.md").write_text(header + md_text, encoding="utf-8")

    payload = {
        "topicId": ch["topicId"],
        "bookChapter": ch["book"],
        "chapter": num,
        "subject": ch["subject"],
        "title": ch["title"],
        "source": "PaddleOCR-VL-1.6",
        "pageCount": len(json_pages),
        "markdown": md_text,
        "pages": json_pages,
    }
    (ch_dir / f"ch{num}.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def write_subject_bundle(subject: str, chapters: list[dict], md_parts: list[str], json_pages: list[dict]) -> None:
    base = HISTORY_DIR if subject == "history" else CIVICS_DIR
    base.mkdir(parents=True, exist_ok=True)

    combined_md = "\n\n".join(md_parts)
    (base / f"{subject}-ocr.md").write_text(combined_md, encoding="utf-8")

    bundle = {
        "subject": subject,
        "source": "PaddleOCR-VL-1.6",
        "chapters": [
            {
                "chapter": ch["out"],
                "bookChapter": ch["book"],
                "topicId": ch["topicId"],
                "title": ch["title"],
            }
            for ch in chapters
        ],
        "pageCount": len(json_pages),
        "pages": json_pages,
    }
    (base / f"{subject}-ocr.json").write_text(
        json.dumps(bundle, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def main() -> None:
    if not SRC_MD.exists():
        raise FileNotFoundError(f"Missing source markdown: {SRC_MD}")
    if not SRC_JSON.exists():
        raise FileNotFoundError(f"Missing source JSON: {SRC_JSON}")

    md_lines = SRC_MD.read_text(encoding="utf-8").splitlines()
    json_pages: list[dict] = json.loads(SRC_JSON.read_text(encoding="utf-8"))
    bounded = chapter_bounds(CHAPTERS, md_lines, json_pages)

    history_chs = [c for c in bounded if c["subject"] == "history"]
    civics_chs = [c for c in bounded if c["subject"] == "civics"]

    hist_md_parts: list[str] = []
    civ_md_parts: list[str] = []
    hist_json: list[dict] = []
    civ_json: list[dict] = []

    for ch in bounded:
        md_text = slice_md_lines(md_lines, ch["md_start"], ch["md_end"])
        pages = slice_json_pages(json_pages, ch["json_start"], ch["json_end"])
        write_chapter(ch, md_text, pages)
        if ch["subject"] == "history":
            hist_md_parts.append(f"# Chapter {ch['out']}: {ch['title']}\n\n{md_text}")
            hist_json.extend(pages)
        else:
            civ_md_parts.append(f"# Chapter {ch['out']}: {ch['title']}\n\n{md_text}")
            civ_json.extend(pages)
        print(
            f"  {ch['subject']:7s} ch{ch['out']:2d} ({ch['topicId']}): "
            f"md L{ch['md_start']}-{ch['md_end']}, json p{ch['json_start']}-{ch['json_end']} "
            f"({len(pages)} pages)"
        )

    write_subject_bundle("history", history_chs, hist_md_parts, hist_json)
    write_subject_bundle("civics", civics_chs, civ_md_parts, civ_json)

    print(f"\nDone: {len(history_chs)} history + {len(civics_chs)} civics chapters")
    print(f"  History → {HISTORY_DIR}")
    print(f"  Civics  → {CIVICS_DIR}")


if __name__ == "__main__":
    main()
