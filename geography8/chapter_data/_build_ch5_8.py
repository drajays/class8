#!/usr/bin/env python3
"""Build ch5.py–ch8.py geography chapter modules from curated ICSE content."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from geography8.chapter_data._mk_chapters import M, _write_chapter, combo2, combo3  # noqa: E402
from geography8.chapter_data._ch5_8_defs import CH5, CH6, CH7, CH8  # noqa: E402

if __name__ == "__main__":
    for num, data in [(5, CH5), (6, CH6), (7, CH7), (8, CH8)]:
        _write_chapter(num, data["title"], data)
        print(f"Wrote ch{num}.py ({len(data['mcqs'])} MCQs)")
