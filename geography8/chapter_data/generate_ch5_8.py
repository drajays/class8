#!/usr/bin/env python3
"""Generate ch5.py–ch8.py from curated chapter definition modules."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from geography8.chapter_data._mk_chapters import _write_chapter  # noqa: E402
from geography8.chapter_data._ch5_8_data import CH5  # noqa: E402
from geography8.chapter_data._ch6_defs import CH6  # noqa: E402
from geography8.chapter_data._ch7_defs import CH7  # noqa: E402
from geography8.chapter_data._ch8_defs import CH8  # noqa: E402

if __name__ == "__main__":
    for num, data in [(5, CH5), (6, CH6), (7, CH7), (8, CH8)]:
        _write_chapter(num, data["title"], data)
        qs = data["questions"]({"topicId": f"geo-ch{num}"}) if callable(data.get("questions")) else []
        mcq_n = len(data["mcqs"])
        print(f"Wrote ch{num}.py ({mcq_n} MCQs, {len(qs) or 100} questions when built)")
