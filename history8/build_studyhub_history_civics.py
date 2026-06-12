#!/usr/bin/env python3
"""
Build ICSE Class 8 History & Civics content for StudyHub.
Source: data/history8/chapters/ch*.md (OCR split)
Output: enriched ch*.json|md, history.js, civics.js, mindmaps, cheatsheets, images

Regenerate: python3 history8/build_studyhub_history_civics.py
"""
from __future__ import annotations

import json
import re
import sys
import urllib.request
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from history8.chapter_data.content_builder import build_chapter_package  # noqa: E402
from history8.chapter_data.ocr_parser import image_filename  # noqa: E402

HISTORY_DIR = ROOT / "data/history8/chapters"
CIVICS_DIR = ROOT / "data/civics8/chapters"
HIST_ASSETS = ROOT / "assets/history8/images"
CIV_ASSETS = ROOT / "assets/civics8/images"

CHAPTERS: list[dict[str, Any]] = [
    {"num": 1, "subject": "history", "topicId": "hist-ch1", "title": "A Period of Transition"},
    {"num": 2, "subject": "history", "topicId": "hist-ch2", "title": "The Age of Revolutions"},
    {"num": 3, "subject": "history", "topicId": "hist-ch3", "title": "The American Civil War"},
    {"num": 4, "subject": "history", "topicId": "hist-ch4", "title": "Decline of the Mughal Empire"},
    {"num": 5, "subject": "history", "topicId": "hist-ch5", "title": "Advent of the English East India Company"},
    {"num": 6, "subject": "history", "topicId": "hist-ch6", "title": "The British Conquest of Bengal"},
    {"num": 7, "subject": "history", "topicId": "hist-ch7", "title": "Expansion of British Power in India"},
    {"num": 8, "subject": "history", "topicId": "hist-ch8", "title": "Impact of the British Rule on India"},
    {"num": 9, "subject": "history", "topicId": "hist-ch9", "title": "The Great Uprising of 1857"},
    {"num": 10, "subject": "history", "topicId": "hist-ch10", "title": "Reform Movements in India under the British Rule"},
    {"num": 11, "subject": "history", "topicId": "hist-ch11", "title": "The Rise of Indian Nationalism"},
    {"num": 12, "subject": "history", "topicId": "hist-ch12", "title": "The Indian National Movement: 1885–1916"},
    {"num": 13, "subject": "history", "topicId": "hist-ch13", "title": "Mahatma Gandhi and the Indian National Movement: 1917–1947"},
    {"num": 1, "subject": "civics", "topicId": "civ-ch1", "title": "Organs of the Indian Government"},
    {"num": 2, "subject": "civics", "topicId": "civ-ch2", "title": "The United Nations"},
]


def chapter_dir(ch: dict) -> Path:
    return HISTORY_DIR if ch["subject"] == "history" else CIVICS_DIR


def assets_dir(ch: dict) -> Path:
    return HIST_ASSETS if ch["subject"] == "history" else CIV_ASSETS


def read_ocr_md(ch: dict) -> str:
    path = chapter_dir(ch) / f"ch{ch['num']}.md"
    if not path.exists():
        raise FileNotFoundError(path)
    return path.read_text(encoding="utf-8")


def setup_images(ch: dict, urls: list[str]) -> dict[str, str]:
    base = assets_dir(ch) / f"ch{ch['num']}"
    base.mkdir(parents=True, exist_ok=True)
    url_map: dict[str, str] = {}
    rel_prefix = f"assets/{'history8' if ch['subject'] == 'history' else 'civics8'}/images/ch{ch['num']}"
    for url in urls:
        fname = image_filename(url)
        dest = base / fname
        if not dest.exists() or dest.stat().st_size == 0:
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "StudyHub/1.0"})
                with urllib.request.urlopen(req, timeout=15) as resp:
                    dest.write_bytes(resp.read())
            except Exception:
                if not dest.exists():
                    dest.touch()
        url_map[url] = f"{rel_prefix}/{fname}"
    return url_map


def replace_images(text: str, url_map: dict[str, str]) -> str:
    for url, path in url_map.items():
        text = text.replace(url, path)
    return text


def write_chapter_files(ch: dict, pkg: dict) -> None:
    out_dir = chapter_dir(ch)
    jdata = {
        "topicId": pkg["topicId"],
        "title": pkg["title"],
        "subject": pkg["subject"],
        "highYieldFacts": pkg["highYieldFacts"],
        "notes": pkg["notes"],
        "questions": pkg["questions"],
        "wordCards": pkg["wordCards"],
        "mindmap": pkg["mindmap"],
        "cheatsheet": pkg["cheatsheet"],
    }
    (out_dir / f"ch{ch['num']}.json").write_text(
        json.dumps(jdata, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    md_parts = [
        f"# Chapter {ch['num']}: {pkg['title']}\n\n",
        "## High-Yield Facts\n",
        "\n".join(f"- {f}" for f in pkg["highYieldFacts"]),
        "\n\n## Notes (Expert Revision)\n",
    ]
    for n in pkg["notes"]:
        md_parts.append(f"### {n['subtopic']}\n\n{n['content']}\n\n")
    md_parts.append("\n## Mind Map\n\n```mermaid\n")
    md_parts.append(pkg["mindmap"])
    md_parts.append("\n```\n\n## Cheat Sheet\n\n")
    for item in pkg["cheatsheet"]:
        md_parts.append(f"- {item}\n")
    md_parts.append("\n## One Word (30)\n\n")
    for wc in pkg["wordCards"]:
        md_parts.append(f"- **{wc['term']}** — {wc['definition']}\n")
    (out_dir / f"ch{ch['num']}.md").write_text("".join(md_parts), encoding="utf-8")


def build_js_array(name: str, items: list, source: str, regen: str) -> str:
    notes = sum(1 for x in items if x.get("type") == "note")
    qs = len(items) - notes
    header = (
        f"// StudyHub — ICSE Class 8 — auto-generated\n"
        f"// Source: {source}\n"
        f"// Regenerate: {regen}\n"
        f"// Total: {len(items)} items ({notes} notes, {qs} questions)\n"
    )
    return header + f"const {name} = [\n" + ",\n".join(
        json.dumps(x, ensure_ascii=False) for x in items
    ) + "\n];\n"


def build_mindmaps_js(packages: list[dict], var_name: str, out_file: str) -> None:
    data: dict[str, Any] = {}
    for pkg in packages:
        tid = pkg["topicId"]
        ch = pkg["chapter"]
        subj = pkg["subject"]
        note_pfx = f"{'hist' if subj == 'history' else 'civ'}-rev-ch{ch}"
        topics = [n["subtopic"].split(". ", 1)[-1] for n in pkg["notes"]]
        branches = []
        for i, title in enumerate(topics[:8], 1):
            bullets = pkg["highYieldFacts"][(i - 1) * 2 : (i - 1) * 2 + 4]
            branches.append({
                "id": f"br-{i}",
                "title": title[:50],
                "bullets": bullets,
                "links": [{"label": "relates to →", "targetId": f"br-{(i % min(8, max(len(topics), 1))) + 1}"}],
                "noteRefs": [{"noteId": f"{note_pfx}-{i:02d}", "label": f"📄 {title[:30]}"}],
            })
        data[tid] = {
            "topicId": tid,
            "chapterTitle": pkg["title"],
            "center": pkg["title"][:40],
            "maps": [{
                "id": "map-1",
                "title": pkg["title"],
                "center": pkg["title"][:50],
                "flow": [{"id": f"step{j}", "label": t[:35]} for j, t in enumerate(topics[:6], 1)],
                "branches": branches,
            }],
        }
    header = f"// Mind maps — auto-generated\n// Regenerate: python3 history8/build_studyhub_history_civics.py\n"
    (ROOT / out_file).write_text(
        header + f"const {var_name} = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )


def build_cheatsheets_js(packages: list[dict], var_name: str, out_file: str) -> None:
    data: dict[str, Any] = {}
    for pkg in packages:
        tid = pkg["topicId"]
        ch = pkg["chapter"]
        subj = pkg["subject"]
        note_pfx = f"{'hist' if subj == 'history' else 'civ'}-rev-ch{ch}"
        cs = pkg["cheatsheet"]
        data[tid] = {
            "topicId": tid,
            "title": f"{pkg['title']} — Cheat Sheet",
            "topCram": cs[:12],
            "sections": [
                {"title": "🧭 Core story", "items": [{"text": x, "noteId": f"{note_pfx}-01"} for x in cs[:8]]},
                {"title": "📌 Must-know definitions", "items": [{"text": x, "noteId": f"{note_pfx}-02"} for x in cs[8:16] if len(cs) > 8]},
                {"title": "🎯 Exam quick hits", "items": [{"text": x, "noteId": f"{note_pfx}-03"} for x in cs[16:24] if len(cs) > 16]},
            ],
            "wordCards": pkg["wordCards"],
        }
    header = f"// Cheat sheets — auto-generated\n// Regenerate: python3 history8/build_studyhub_history_civics.py\n"
    (ROOT / out_file).write_text(
        header + f"const {var_name} = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )


def validate(packages: list[dict]) -> None:
    all_ids: set[str] = set()
    for pkg in packages:
        assert len(pkg["questions"]) == 100, f"{pkg['topicId']}: {len(pkg['questions'])} questions"
        types: dict[str, int] = {}
        for q in pkg["questions"]:
            assert q["id"] not in all_ids, f"Duplicate {q['id']}"
            all_ids.add(q["id"])
            types[q["type"]] = types.get(q["type"], 0) + 1
            assert q.get("linksTo") == q.get("linked_note_id")
        assert types.get("mcq") == 70
        assert types.get("true_false") == 10
        assert types.get("fill_blank") == 5
        assert types.get("match") == 10
        assert types.get("short_answer") == 5
    print(f"Validation OK: {len(packages)} chapters, {len(all_ids)} unique questions")


def main() -> None:
    packages: list[dict] = []
    for ch in CHAPTERS:
        md_raw = read_ocr_md(ch)
        pkg = build_chapter_package(ch["subject"], ch["num"], ch["topicId"], ch["title"], md_raw)
        url_map = setup_images(ch, pkg.pop("imageUrls", []))
        # rewrite image paths in notes content if any URLs in md were used
        for n in pkg["notes"]:
            n["content"] = replace_images(n["content"], url_map)
        pkg["chapter"] = ch["num"]
        write_chapter_files(ch, pkg)
        packages.append(pkg)
        print(f"  {ch['subject']:7s} ch{ch['num']:2d} ({ch['topicId']}): {len(pkg['notes'])} notes, 100 questions, {len(pkg['wordCards'])} word cards")

    hist_pkgs = [p for p in packages if p["subject"] == "history"]
    civ_pkgs = [p for p in packages if p["subject"] == "civics"]

    hist_items = [x for p in hist_pkgs for x in p["notes"] + p["questions"]]
    civ_items = [x for p in civ_pkgs for x in p["notes"] + p["questions"]]

    (ROOT / "history.js").write_text(
        build_js_array("HISTORY_DATA", hist_items, "data/history8/chapters/ch*.json",
                       "python3 history8/build_studyhub_history_civics.py"),
        encoding="utf-8",
    )
    (ROOT / "civics.js").write_text(
        build_js_array("CIVICS_DATA", civ_items, "data/civics8/chapters/ch*.json",
                       "python3 history8/build_studyhub_history_civics.py"),
        encoding="utf-8",
    )
    # Legacy combined bundle for backward compatibility
    combined = hist_items + civ_items
    (ROOT / "history-civics.js").write_text(
        build_js_array("HISTORY_CIVICS_DATA", combined, "history.js + civics.js",
                       "python3 history8/build_studyhub_history_civics.py"),
        encoding="utf-8",
    )

    build_mindmaps_js(hist_pkgs, "HISTORY_MINDMAP_DATA", "history-mindmaps.js")
    build_mindmaps_js(civ_pkgs, "CIVICS_MINDMAP_DATA", "civics-mindmaps.js")
    build_cheatsheets_js(hist_pkgs, "HISTORY_CHEATSHEET_DATA", "history-cheatsheets.js")
    build_cheatsheets_js(civ_pkgs, "CIVICS_CHEATSHEET_DATA", "civics-cheatsheets.js")

    validate(packages)
    print(f"\nDone: History {len(hist_items)} items, Civics {len(civ_items)} items")


if __name__ == "__main__":
    main()
