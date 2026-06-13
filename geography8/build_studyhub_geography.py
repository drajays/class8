#!/usr/bin/env python3
"""
Build ICSE Class 8 Geography (Voyage) content for StudyHub.
Source: geography.pdf_by_PaddleOCR-VL-1.6.md
Output: data/geography8/chapters/ch*.json|md, geography.js, geography-mindmaps.js, geography-cheatsheets.js
Regenerate: python3 geography8/build_studyhub_geography.py
"""
from __future__ import annotations

import json
import re
import shutil
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
SRC_MD = ROOT / "geography8/data/geography.pdf_by_PaddleOCR-VL-1.6.md"
if not SRC_MD.exists():
    SRC_MD = Path.home() / "Downloads/geography8/geography.pdf_by_PaddleOCR-VL-1.6.md"
DATA_DIR = ROOT / "data/geography8/chapters"
ASSETS_DIR = ROOT / "assets/geography8/images"
EXISTING_IMAGES = ROOT / "images"

CHAPTERS = [
    {"num": 1, "topicId": "geo-ch1", "title": "Interpreting Topographical Maps", "start": 230, "end": 979},
    {"num": 2, "topicId": "geo-ch2", "title": "Population", "start": 982, "end": 1607},
    {"num": 3, "topicId": "geo-ch3", "title": "Migration", "start": 1608, "end": 2199},
    {"num": 4, "topicId": "geo-ch4", "title": "Urbanization", "start": 2200, "end": 2737},
    {"num": 5, "topicId": "geo-ch5", "title": "Disasters & Disaster Management", "start": 2738, "end": 3843},
    {"num": 6, "topicId": "geo-ch6", "title": "Asia — Physical Features & Climate", "start": 3844, "end": 4754},
    {"num": 7, "topicId": "geo-ch7", "title": "India — Physical Features & Climate", "start": 4757, "end": 5976},
    {"num": 8, "topicId": "geo-ch8", "title": "Human Resources in India", "start": 5977, "end": 6386},
]

# ── Curated high-yield fact banks & note topics per chapter ──────────────────
from geography8.chapter_data.content import CHAPTER_CONTENT  # noqa: E402


def read_source_lines() -> list[str]:
    if not SRC_MD.exists():
        raise FileNotFoundError(f"Source not found: {SRC_MD}")
    return SRC_MD.read_text(encoding="utf-8").splitlines()


def extract_chapter_text(lines: list[str], ch: dict) -> str:
    return "\n".join(lines[ch["start"] - 1 : ch["end"]])


def extract_image_urls(text: str) -> list[str]:
    return re.findall(r'<img[^>]+src="([^"]+)"', text)


def image_filename_from_url(url: str) -> str:
    m = re.search(r"(img_in_[^?\"]+\.(?:jpg|png|jpeg))", url, re.I)
    return m.group(1) if m else re.sub(r"[^\w.]", "_", url.split("/")[-1].split("?")[0])


def setup_images(chapter_texts: dict[int, str]) -> dict[str, str]:
    """Map original URL → local assets/geography8/images/ path."""
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    url_map: dict[str, str] = {}
    all_urls: set[str] = set()
    for text in chapter_texts.values():
        all_urls.update(extract_image_urls(text))

    for url in sorted(all_urls):
        fname = image_filename_from_url(url)
        dest = ASSETS_DIR / fname
        local = EXISTING_IMAGES / fname
        if local.exists() and not dest.exists():
            shutil.copy2(local, dest)
        elif not dest.exists():
            dest.touch()  # placeholder if image missing locally
        url_map[url] = f"assets/geography8/images/{fname}"
    return url_map


def replace_images(text: str, url_map: dict[str, str]) -> str:
    for url, path in url_map.items():
        text = text.replace(url, path)
    return text


def extract_facts_from_text(text: str, limit: int = 40) -> list[str]:
    facts: list[str] = []
    for line in text.splitlines():
        line = re.sub(r"<[^>]+>", "", line).strip()
        line = re.sub(r"\$+.*?\$+", "", line).strip()
        if len(line) < 40 or len(line) > 220:
            continue
        if re.match(r"^(#{1,6}|Recall|Skill:|Websites|http)", line, re.I):
            continue
        if any(k in line.lower() for k in (" is ", " are ", " refers to", " called ", " known as ", " means ")):
            facts.append(line)
        elif line.startswith(("-", "•", "»", "▲")):
            facts.append(line.lstrip("-•»▲ ").strip())
    # dedupe
    seen: set[str] = set()
    out: list[str] = []
    for f in facts:
        k = f[:80]
        if k not in seen:
            seen.add(k)
            out.append(f)
    return out[:limit]


def build_notes(ch: dict, topics: list[dict], questions: list[dict]) -> list[dict]:
    notes = []
    q_by_note: dict[str, list[str]] = {}
    for q in questions:
        nid = q.get("linksTo") or q.get("linked_note_id")
        if nid:
            q_by_note.setdefault(nid, []).append(q["id"])

    for i, topic in enumerate(topics, 1):
        note_id = f"geo-rev-ch{ch['num']}-{i:02d}"
        linked = q_by_note.get(note_id, [])
        must_know = "\n".join(f"• {b}" for b in topic.get("bullets", [])[:8])
        content = (
            f"**Executive summary:** {topic['summary']}\n\n"
            f"**Must know**\n{must_know}\n\n"
            + topic.get("body", "")
        )
        explanation = topic.get("explanation", "")
        if linked:
            explanation += f"\n\n**From linked questions ({len(linked)} Qs):**\n"
            for qid in linked[:6]:
                q = next((x for x in questions if x["id"] == qid), None)
                if q:
                    explanation += f"• {q.get('answer', q.get('question', ''))[:120]}\n"
        prev_id = f"geo-rev-ch{ch['num']}-{i-1:02d}" if i > 1 else None
        next_id = f"geo-rev-ch{ch['num']}-{i+1:02d}" if i < len(topics) else None
        links = []
        if prev_id:
            links.append(f"{prev_id} — previous topic")
        if next_id:
            links.append(f"{next_id} — next topic")
        if links:
            explanation += "\n\n**🔗 Links:** " + "; ".join(links)

        notes.append({
            "id": note_id,
            "topicId": ch["topicId"],
            "type": "note",
            "subtopic": f"{i}. {topic['title']}",
            "content": content,
            "explanation": explanation,
            "teacherTip": topic.get("teacherTip", ""),
            "examTip": topic.get("examTip", ""),
            "source": "revision",
            "linkedQuestionIds": linked,
            "linked_q_ids": linked,
            "image": topic.get("image"),
        })
    return notes


def assign_note_links(questions: list[dict], notes: list[dict]) -> None:
    note_ids = [n["id"] for n in notes]
    for i, q in enumerate(questions):
        nid = note_ids[i % len(note_ids)]
        q["linksTo"] = nid
        q["linked_note_id"] = nid


def build_chapter_package(ch: dict, lines: list[str], url_map: dict[str, str]) -> dict[str, Any]:
    text = extract_chapter_text(lines, ch)
    text = replace_images(text, url_map)
    content_cfg = CHAPTER_CONTENT[ch["num"]]
    topics = content_cfg["topics"]
    high_yield = content_cfg.get("highYieldFacts") or extract_facts_from_text(text, 35)
    questions = content_cfg["questions"](ch)

    if len(questions) != 100:
        raise ValueError(f"Chapter {ch['num']}: expected 100 questions, got {len(questions)}")

    notes = build_notes(ch, topics, questions)
    assign_note_links(questions, notes)

    # refresh note linked ids after assignment
    q_by_note: dict[str, list[str]] = {}
    for q in questions:
        q_by_note.setdefault(q["linksTo"], []).append(q["id"])
    for n in notes:
        n["linkedQuestionIds"] = q_by_note.get(n["id"], [])
        n["linked_q_ids"] = n["linkedQuestionIds"]
        if n["linkedQuestionIds"]:
            n["linkedMcqCount"] = len([x for x in n["linkedQuestionIds"] if "mcq" in x])

    mindmap_md = content_cfg.get("mindmap", "")
    cheatsheet = content_cfg.get("cheatsheet", [])
    word_cards = content_cfg.get("wordCards", [])

    return {
        "chapter": ch["num"],
        "topicId": ch["topicId"],
        "title": ch["title"],
        "highYieldFacts": high_yield,
        "notes": notes,
        "questions": questions,
        "mindmap": mindmap_md,
        "cheatsheet": cheatsheet,
        "wordCards": word_cards,
        "rawMd": text[:50000],
    }


def write_chapter_files(pkg: dict) -> None:
    ch = pkg["chapter"]
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    jpath = DATA_DIR / f"ch{ch}.json"
    mpath = DATA_DIR / f"ch{ch}.md"

    jdata = {
        "topicId": pkg["topicId"],
        "title": pkg["title"],
        "highYieldFacts": pkg["highYieldFacts"],
        "notes": pkg["notes"],
        "questions": pkg["questions"],
    }
    jpath.write_text(json.dumps(jdata, ensure_ascii=False, indent=2), encoding="utf-8")

    md_parts = [
        f"# Chapter {ch}: {pkg['title']}\n",
        "## High-Yield Facts\n",
        "\n".join(f"- {f}" for f in pkg["highYieldFacts"]),
        "\n\n## Notes (Expert Revision)\n",
    ]
    for n in pkg["notes"]:
        md_parts.append(f"### {n['subtopic']}\n\n{n['content']}\n\n")
        if n.get("image"):
            md_parts.append(f"![{n['subtopic']}]({n['image']})\n\n")

    md_parts.append("\n## Mind Map\n\n```mermaid\n")
    md_parts.append(pkg["mindmap"])
    md_parts.append("\n```\n\n## Cheat Sheet\n\n")
    for item in pkg["cheatsheet"]:
        md_parts.append(f"- {item}\n")
    md_parts.append("\n## One Word (30)\n\n")
    for wc in pkg["wordCards"]:
        md_parts.append(f"- **{wc['term']}** — {wc['definition']}\n")

    mpath.write_text("".join(md_parts), encoding="utf-8")


def build_geography_js(all_notes: list, all_questions: list) -> None:
    items = all_notes + all_questions
    header = f"""// StudyHub — ICSE Class 8 Geography (Voyage) — auto-generated
// Source: data/geography8/chapters/ch*.json
// Regenerate: python3 geography8/build_studyhub_geography.py
// Total: {len(items)} items ({len(all_notes)} notes, {len(all_questions)} questions)
"""
    body = header + "const GEOGRAPHY_DATA = [\n" + ",\n".join(
        json.dumps(x, ensure_ascii=False) for x in items
    ) + "\n];\n"
    (ROOT / "geography.js").write_text(body, encoding="utf-8")


def build_mindmaps_js(packages: list[dict]) -> None:
    data: dict[str, Any] = {}
    for pkg in packages:
        tid = pkg["topicId"]
        topics = CHAPTER_CONTENT[pkg["chapter"]]["topics"]
        branches = []
        for i, t in enumerate(topics[:8], 1):
            note_id = f"geo-rev-ch{pkg['chapter']}-{i:02d}"
            branches.append({
                "id": f"br-{i}",
                "title": t["title"],
                "bullets": t.get("bullets", [])[:4],
                "links": [{"label": f"relates to →", "targetId": f"br-{(i % min(8, len(topics))) + 1}"}],
                "noteRefs": [{"noteId": note_id, "label": f"📄 {i}. {t['title'][:30]}"}],
            })
        data[tid] = {
            "topicId": tid,
            "chapterTitle": pkg["title"],
            "center": pkg["title"].split("—")[0].strip()[:40],
            "maps": [{
                "id": "map-1",
                "title": pkg["title"],
                "center": pkg["title"][:50],
                "flow": [{"id": f"step{i}", "label": t["title"][:35]} for i, t in enumerate(topics[:6], 1)],
                "branches": branches,
            }],
        }
    header = "// Geography mind maps — auto-generated\n// Regenerate: python3 geography8/build_studyhub_geography.py\n"
    (ROOT / "geography-mindmaps.js").write_text(
        header + "const GEOGRAPHY_MINDMAP_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )


def build_cheatsheets_js(packages: list[dict]) -> None:
    data: dict[str, Any] = {}
    for pkg in packages:
        tid = pkg["topicId"]
        ch = pkg["chapter"]
        cs = pkg["cheatsheet"]
        top_cram = cs[:12]
        sections = [
            {"title": "🧭 Core story", "items": [{"text": x, "noteId": f"geo-rev-ch{ch}-01"} for x in cs[:8]]},
            {"title": "📌 Must-know definitions", "items": [{"text": x, "noteId": f"geo-rev-ch{ch}-02"} for x in cs[8:16] if len(cs) > 8]},
            {"title": "🎯 Exam quick hits", "items": [{"text": x, "noteId": f"geo-rev-ch{ch}-03"} for x in cs[16:24] if len(cs) > 16]},
        ]
        data[tid] = {
            "topicId": tid,
            "title": f"{pkg['title']} — Cheat Sheet",
            "topCram": top_cram,
            "sections": sections,
            "wordCards": pkg["wordCards"],
        }
    header = "// Geography cheat sheets — auto-generated\n// Regenerate: python3 geography8/build_studyhub_geography.py\n"
    (ROOT / "geography-cheatsheets.js").write_text(
        header + "const GEOGRAPHY_CHEATSHEET_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )


def validate(packages: list[dict]) -> None:
    all_q_ids: set[str] = set()
    for pkg in packages:
        assert len(pkg["questions"]) == 100, f"ch{pkg['chapter']} question count"
        types = {}
        for q in pkg["questions"]:
            assert q["id"] not in all_q_ids, f"Duplicate q_id: {q['id']}"
            all_q_ids.add(q["id"])
            types[q["type"]] = types.get(q["type"], 0) + 1
            assert q.get("linksTo") == q.get("linked_note_id"), f"Bidirectional link missing on {q['id']}"
        assert types.get("mcq", 0) == 70
        assert types.get("true_false", 0) == 10
        assert types.get("fill_blank", 0) == 5
        assert types.get("match", 0) == 10
        assert types.get("short_answer", 0) == 5
        for n in pkg["notes"]:
            for qid in n.get("linkedQuestionIds", []):
                q = next(x for x in pkg["questions"] if x["id"] == qid)
                assert q["linksTo"] == n["id"], f"Note {n['id']} ↔ {qid} mismatch"
    print(f"Validation OK: {len(packages)} chapters, {len(all_q_ids)} unique questions")


def main() -> None:
    lines = read_source_lines()
    chapter_texts = {ch["num"]: extract_chapter_text(lines, ch) for ch in CHAPTERS}
    url_map = setup_images(chapter_texts)

    packages = [build_chapter_package(ch, lines, url_map) for ch in CHAPTERS]
    for pkg in packages:
        write_chapter_files(pkg)

    all_notes = [n for p in packages for n in p["notes"]]
    all_questions = [q for p in packages for q in p["questions"]]
    build_geography_js(all_notes, all_questions)
    build_mindmaps_js(packages)
    build_cheatsheets_js(packages)
    validate(packages)
    print(f"Done: {len(all_notes)} notes, {len(all_questions)} questions across {len(packages)} chapters")


if __name__ == "__main__":
    main()
