#!/usr/bin/env python3
"""Merge Elite Edition chapter overrides into icse_neet_olympiad_elite.html."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAIN = ROOT / "data/physics8/icse_neet_olympiad_elite.html"
OVERRIDES = ROOT / "data/physics8/overrides"


def replace_chapter(raw: str, ch_num: int, new_block: str) -> str:
    pattern = rf'<div class="chapter"\s+id="ch{ch_num}">.*?</ol>\s*</div>'
    m = re.search(pattern, raw, flags=re.DOTALL | re.I)
    if not m:
        raise ValueError(f"Chapter {ch_num} block not found")
    return raw[: m.start()] + new_block.strip() + raw[m.end() :]


def read(name: str) -> str:
    path = OVERRIDES / name
    if not path.exists():
        raise FileNotFoundError(path)
    return path.read_text(encoding="utf-8").strip()


def main() -> None:
    raw = MAIN.read_text(encoding="utf-8")

    raw = replace_chapter(raw, 3, read("ch3_elite.html"))
    raw = replace_chapter(raw, 4, read("ch4_elite_189_224.html") + "\n\n" + read("ch4_elite_225_250.html"))
    raw = replace_chapter(raw, 5, read("ch5_elite.html"))
    raw = replace_chapter(
        raw,
        6,
        read("ch6_elite_314_324.html") + "\n\n" + read("ch6_elite_325_350.html"),
    )
    raw = replace_chapter(raw, 7, read("ch7_elite.html"))
    raw = replace_chapter(raw, 8, read("ch8_elite.html"))

    ch9 = read("ch9_elite.html")
    ch10 = read("ch10_elite.html")
    m8 = re.search(
        r'(<div class="chapter"\s+id="ch8">.*?</ol>\s*</div>)',
        raw,
        flags=re.DOTALL | re.I,
    )
    if not m8:
        raise ValueError("Chapter 8 block not found for ch9/ch10 append")
    raw = raw[: m8.end()] + "\n\n" + ch9 + "\n\n" + ch10 + raw[m8.end() :]

    MAIN.write_text(raw, encoding="utf-8")
    print("Merged Elite overrides (ch3–ch10) into", MAIN.name)


if __name__ == "__main__":
    main()
