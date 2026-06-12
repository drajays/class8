"""Parse OCR markdown into sections, facts, keywords, tables, and exercises."""
from __future__ import annotations

import re
from dataclasses import dataclass, field
from html import unescape


@dataclass
class Section:
    title: str
    level: int
    body: str


@dataclass
class ParsedChapter:
    sections: list[Section] = field(default_factory=list)
    facts: list[str] = field(default_factory=list)
    keywords: list[tuple[str, str]] = field(default_factory=list)
    table_rows: list[list[str]] = field(default_factory=list)
    short_questions: list[str] = field(default_factory=list)
    image_urls: list[str] = field(default_factory=list)


SKIP_HEADINGS = re.compile(
    r"^(exercises|student assessment|go local|debate and discussion|do it yourself|"
    r"learning outcomes|history alive|reflective learning|comparative history|"
    r"method:|a note to the teacher|project-based learning|curriculum connections)",
    re.I,
)


def strip_html(text: str) -> str:
    text = unescape(re.sub(r"<[^>]+>", " ", text))
    text = re.sub(r"\$+.*?\$+", "", text)
    return re.sub(r"\s+", " ", text).strip()


def clean_line(line: str) -> str:
    line = strip_html(line)
    line = re.sub(r"^[•▲►»\-\*]+\s*", "", line)
    return line.strip()


def extract_image_urls(text: str) -> list[str]:
    return re.findall(r'<img[^>]+src="([^"]+)"', text)


def image_filename(url: str) -> str:
    m = re.search(r"(img_in_[^?\"]+\.(?:jpg|png|jpeg))", url, re.I)
    return m.group(1) if m else re.sub(r"[^\w.]", "_", url.split("/")[-1].split("?")[0])


def parse_table_rows(html: str) -> list[list[str]]:
    rows: list[list[str]] = []
    for tr in re.findall(r"<tr[^>]*>(.*?)</tr>", html, re.I | re.S):
        cells = [strip_html(c) for c in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", tr, re.I | re.S)]
        cells = [c for c in cells if c and c.lower() not in ("column i", "column ii")]
        if len(cells) >= 2:
            rows.append(cells)
    return rows


def is_fact_line(line: str) -> bool:
    if len(line) < 35 or len(line) > 220:
        return False
    if re.match(r"^(#{1,6}|http|tick|choose|study the|read the|name the|identify)", line, re.I):
        return False
    low = line.lower()
    markers = (
        " was ", " were ", " is ", " are ", " means ", " called ", " known as ",
        " led to ", " resulted ", " began ", " ended ", " founded ", " introduced ",
        " defeated ", " annexed ", " signed ", " established ", " adopted ",
        " in 1", " in 2", " ce ", " bc ", " ad ",
    )
    return any(m in low for m in markers) or bool(re.search(r"\b(1[0-9]{3}|20[0-2][0-9])\b", line))


def extract_facts(text: str, limit: int = 80) -> list[str]:
    seen: set[str] = set()
    facts: list[str] = []
    for raw in text.splitlines():
        line = clean_line(raw)
        if not is_fact_line(line):
            continue
        key = line[:70].lower()
        if key in seen:
            continue
        seen.add(key)
        facts.append(line)
        if len(facts) >= limit:
            break
    return facts


def parse_keywords(text: str) -> list[tuple[str, str]]:
    kw: list[tuple[str, str]] = []
    m = re.search(r"####\s*KEYWORDS(.*?)(?=####|###\s|$)", text, re.I | re.S)
    if not m:
        return kw
    block = m.group(1)
    for line in block.splitlines():
        line = clean_line(line)
        if ":" in line:
            term, _, defn = line.partition(":")
            term, defn = term.strip(), defn.strip()
            if term and defn and len(term) < 60:
                kw.append((term, defn))
    return kw


def parse_sections(text: str) -> list[Section]:
    sections: list[Section] = []
    current_title = "Introduction"
    current_level = 2
    current_lines: list[str] = []

    def flush() -> None:
        nonlocal current_lines
        body = "\n".join(current_lines).strip()
        if body and not SKIP_HEADINGS.search(current_title):
            sections.append(Section(current_title, current_level, body))
        current_lines = []

    for line in text.splitlines():
        hm = re.match(r"^(#{2,4})\s+(.+)$", line.strip())
        if hm:
            flush()
            current_level = len(hm.group(1))
            current_title = clean_line(hm.group(2))
            continue
        if line.strip():
            current_lines.append(line)
    flush()
    return [s for s in sections if len(strip_html(s.body)) > 80]


def parse_short_questions(text: str) -> list[str]:
    qs: list[str] = []
    for m in re.finditer(
        r"(?:###\s*III\.|Answer the following|questions in detail|questions in brief)(.*?)(?=###|####|$)",
        text,
        re.I | re.S,
    ):
        block = m.group(1)
        for line in block.splitlines():
            line = clean_line(line)
            m2 = re.match(r"^\d+\.\s+(.+)$", line)
            if m2 and len(m2.group(1)) > 20:
                qs.append(m2.group(1))
    return qs[:12]


def parse_chapter_md(md_text: str) -> ParsedChapter:
    # drop title line if present
    text = re.sub(r"^#\s+Chapter\s+\d+:.*\n", "", md_text, count=1)
    urls = extract_image_urls(text)
    table_rows: list[list[str]] = []
    for tbl in re.findall(r"<table[^>]*>.*?</table>", text, re.I | re.S):
        table_rows.extend(parse_table_rows(tbl))

    plain_sections = parse_sections(text)
    all_plain = strip_html(text)
    return ParsedChapter(
        sections=plain_sections,
        facts=extract_facts(all_plain),
        keywords=parse_keywords(text),
        table_rows=table_rows,
        short_questions=parse_short_questions(text),
        image_urls=list(dict.fromkeys(urls)),
    )
