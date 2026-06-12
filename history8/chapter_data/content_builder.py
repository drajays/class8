"""Build notes, questions, mind maps, and cheat sheets from parsed OCR."""
from __future__ import annotations

import hashlib
import random
import re
from typing import Any

from history8.chapter_data.ocr_parser import ParsedChapter, Section, parse_chapter_md, strip_html
from history8.chapter_data.qgen import build_question_set, fill, match, mcq, short, tf

RNG = random.Random(42)


def _prefix(subject: str, ch_num: int) -> str:
    return f"{'hist' if subject == 'history' else 'civ'}-ch{ch_num}"


def _note_prefix(subject: str, ch_num: int) -> str:
    return f"{'hist' if subject == 'history' else 'civ'}-rev-ch{ch_num}"


def _distractors(fact: str, pool: list[str], n: int = 3) -> list[str]:
    words = re.findall(r"\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2}\b", fact)
    alts = [w for w in pool if w not in fact][:20]
    RNG.shuffle(alts)
    opts = []
    for w in alts:
        if w not in opts and len(w) > 3:
            opts.append(w)
        if len(opts) >= n:
            break
    while len(opts) < n:
        opts.append(f"Option {len(opts)+1}")
    return opts[:n]


def _year_from_fact(fact: str) -> str | None:
    m = re.search(r"\b(1[0-9]{3}|20[0-2][0-9])\b", fact)
    return m.group(1) if m else None


def build_topics(sections: list[Section], facts: list[str], title: str) -> list[dict[str, Any]]:
    topics: list[dict[str, Any]] = []
    use = sections[:10] if sections else []
    if not use:
        use = [Section(title, 2, "\n".join(facts[:15]))]
    for sec in use:
        body_lines = [strip_html(x) for x in sec.body.splitlines() if strip_html(x)]
        body_lines = [x for x in body_lines if len(x) > 20][:12]
        bullets = body_lines[:6]
        summary = bullets[0][:180] if bullets else sec.title
        body = "\n\n".join(body_lines[:8])
        topics.append({
            "title": sec.title[:80],
            "summary": summary,
            "bullets": bullets,
            "body": body,
            "explanation": f"This section covers **{sec.title}** — focus on causes, key persons, dates, and consequences for exams.",
            "teacherTip": "Link this topic to the chapter timeline and map events to regions on a world/India map.",
            "examTip": "Write answers in point form with dates and names for full ICSE marks.",
        })
    return topics


def build_high_yield_facts(parsed: ParsedChapter, topics: list[dict], limit: int = 30) -> list[str]:
    facts: list[str] = []
    for t in topics:
        for b in t.get("bullets", [])[:3]:
            if b not in facts:
                facts.append(b)
    for f in parsed.facts:
        if f not in facts:
            facts.append(f)
        if len(facts) >= limit:
            break
    return facts[:limit]


def _mcq_from_fact(fact: str, topic_id: str, pool: list[str]) -> dict | None:
    year = _year_from_fact(fact)
    if year:
        wrong_years = [str(int(year) + d) for d in (-25, -10, 10, 25, 50) if int(year) + d > 1000]
        RNG.shuffle(wrong_years)
        opts = [year] + wrong_years[:3]
        RNG.shuffle(opts)
        correct = opts.index(year)
        q = f"Which year is associated with the following event/fact?\n{fact[:150]}"
        return mcq("", topic_id, q, opts, correct, f"The correct year is **{year}**. {fact}", exam_tip="Memorise key dates with the event name.")
    m = re.search(r"^(.{15,80}?)\s+(was|were|is|are|means)\s+(.+)$", fact, re.I)
    if m:
        subj, verb, rest = m.group(1), m.group(2), m.group(3)[:80]
        distractors = _distractors(fact, pool, 3)
        opts = [rest.split(".")[0].strip()] + distractors
        opts = list(dict.fromkeys(opts))[:4]
        while len(opts) < 4:
            opts.append("None of the above")
        correct = 0
        q = f"Regarding {subj.strip()}, which statement is correct?"
        return mcq("", topic_id, q, opts, correct, fact, exam_tip="Quote the exact term from your textbook.")
    if len(fact) > 50:
        q = f"Which of the following is correct?\n{fact[:120]}..."
        opts = [fact[:100], "This statement is historically inaccurate.", "It applies to a different period.", "It describes an unrelated event."]
        return mcq("", topic_id, q, opts, 0, fact, exam_tip="Read all options — UPSC-style elimination helps.")
    return None


def _combo_mcq(facts: list[str], topic_id: str, i: int) -> dict | None:
    if len(facts) < 3:
        return None
    a, b, c = facts[i % len(facts)], facts[(i + 1) % len(facts)], facts[(i + 2) % len(facts)]
    q = f"Consider the following statements:\n1. {a[:100]}\n2. {b[:100]}\n3. {c[:100]}\nWhich of the above is/are correct?"
    opts = ["1 and 2 only", "2 and 3 only", "1 and 3 only", "All of the above"]
    return mcq("", topic_id, q, opts, 3, f"All three statements are supported by the chapter content.", exam_tip="UPSC-style: verify each statement independently.")


def build_questions(
    parsed: ParsedChapter,
    subject: str,
    ch_num: int,
    topic_id: str,
    facts: list[str],
) -> list[dict]:
    prefix = _prefix(subject, ch_num)
    pool = [re.sub(r"\b(in|the|and|of|to|a|an)\b", "", f, flags=re.I).strip() for f in facts]

    mcqs: list[dict] = []
    for fact in facts:
        q = _mcq_from_fact(fact, topic_id, pool)
        if q:
            mcqs.append(q)
        if len(mcqs) >= 50:
            break
    for i in range(20):
        q = _combo_mcq(facts, topic_id, i)
        if q:
            mcqs.append(q)
    # pad with direct fact MCQs
    idx = 0
    while len(mcqs) < 70 and facts:
        f = facts[idx % len(facts)]
        mcqs.append(mcq(
            "", topic_id,
            f"Which statement best describes the following?\n{f[:140]}",
            [f[:100], "The opposite is true.", "It belongs to a different period.", "It is not mentioned in this chapter."],
            0, f, exam_tip="Trust textbook facts over guesswork.",
        ))
        idx += 1

    tfs: list[dict] = []
    for i, fact in enumerate(facts[:5]):
        tfs.append(tf("", topic_id, fact, "true", f"True. {fact}"))
    for i, fact in enumerate(facts[5:10]):
        # create false variant
        false_q = re.sub(r"\b(Italy|1757|1789|1917|1947|Bengal|Luther|Gandhi)\b", "France", fact, count=1)
        if false_q == fact:
            false_q = "This chapter does not discuss any historical events or personalities."
        tfs.append(tf("", topic_id, false_q, "false", f"False. {fact}"))

    fills: list[dict] = []
    for term, defn in parsed.keywords[:5]:
        fills.append(fill("", topic_id, f"The term '______' means: {defn[:100]}", term.split("(")[0].strip(), f"**{term}** — {defn}"))
    while len(fills) < 5 and facts:
        f = facts[len(fills)]
        m = re.search(r"\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2})\b", f)
        blank = m.group(1) if m else "answer"
        fills.append(fill("", topic_id, f"Fill in the blank: {f.replace(blank, '______', 1)}", blank, f))

    matches: list[dict] = []
    rows = [r for r in parsed.table_rows if len(r) >= 2 and len(r[0]) < 80]
    for i, row in enumerate(rows[:10]):
        pairs = [{"left": row[0], "right": row[1]}]
        if len(row) >= 4:
            pairs.append({"left": row[2], "right": row[3]})
        matches.append(match(
            "", topic_id,
            f"Match Column I with Column II ({i+1}):",
            pairs,
            " → ".join(f"{p['left']} → {p['right']}" for p in pairs),
        ))
    i = 0
    while len(matches) < 10 and len(facts) >= 2:
        a = facts[i % len(facts)][:45]
        b = facts[(i + 1) % len(facts)][:45]
        pairs = [{"left": a, "right": "Significance / context from chapter"}, {"left": b, "right": "Related cause or effect"}]
        matches.append(match("", topic_id, f"Match the following (Set {len(matches)+1}):", pairs, f"{a} → chapter concept; {b} → related idea."))
        i += 2

    shorts: list[dict] = []
    for sq in parsed.short_questions[:5]:
        answer = "\n".join(f"• {x}" for x in facts[:6])
        shorts.append(short("", topic_id, sq, answer))
    while len(shorts) < 5 and facts:
        shorts.append(short(
            "", topic_id,
            f"Explain the significance of: {facts[len(shorts) % len(facts)][:100]}",
            "\n".join(f"• {x}" for x in facts[len(shorts):len(shorts) + 5]),
        ))

    # Ensure minimum counts before assembly
    while len(tfs) < 10 and facts:
        tfs.append(tf("", topic_id, facts[len(tfs) % len(facts)], "true", f"True. {facts[len(tfs) % len(facts)]}"))
    while len(fills) < 5 and facts:
        f = facts[len(fills) % len(facts)]
        fills.append(fill("", topic_id, f"Complete: {f[:80]}...", "See notes", f))
    while len(matches) < 10:
        matches.append(match("", topic_id, "Match key terms with their descriptions:", [
            {"left": "Primary source", "right": "First-hand evidence from the period"},
            {"left": "Secondary source", "right": "Interpretation based on primary sources"},
        ], "Primary source → first-hand; Secondary source → interpretation."))
    while len(shorts) < 5:
        shorts.append(short("", topic_id, "Summarise the main theme of this chapter in five points.", "\n".join(f"• {x}" for x in facts[:5])))

    return build_question_set(prefix, topic_id, mcqs, tfs, fills, matches, shorts)


def build_notes(
    subject: str,
    ch_num: int,
    topic_id: str,
    topics: list[dict],
    questions: list[dict],
) -> list[dict]:
    note_pfx = _note_prefix(subject, ch_num)
    q_by_note: dict[str, list[str]] = {}
    for q in questions:
        pass  # filled after assignment

    notes: list[dict] = []
    for i, topic in enumerate(topics, 1):
        note_id = f"{note_pfx}-{i:02d}"
        must_know = "\n".join(f"• {b}" for b in topic.get("bullets", [])[:8])
        content = (
            f"**Executive summary:** {topic['summary']}\n\n"
            f"**Must know**\n{must_know}\n\n"
            + topic.get("body", "")
        )
        explanation = topic.get("explanation", "")
        prev_id = f"{note_pfx}-{i-1:02d}" if i > 1 else None
        next_id = f"{note_pfx}-{i+1:02d}" if i < len(topics) else None
        links = []
        if prev_id:
            links.append(f"{prev_id} — previous section")
        if next_id:
            links.append(f"{next_id} — next section")
        if links:
            explanation += "\n\n**🔗 Links:** " + "; ".join(links)
        notes.append({
            "id": note_id,
            "topicId": topic_id,
            "type": "note",
            "subtopic": f"{i}. {topic['title']}",
            "content": content,
            "explanation": explanation,
            "teacherTip": topic.get("teacherTip", ""),
            "examTip": topic.get("examTip", ""),
            "source": "revision",
            "linkedQuestionIds": [],
            "linked_q_ids": [],
            "image": None,
        })

    note_ids = [n["id"] for n in notes]
    for i, q in enumerate(questions):
        nid = note_ids[i % len(note_ids)]
        q["linksTo"] = nid
        q["linked_note_id"] = nid

    q_by_note: dict[str, list[str]] = {}
    for q in questions:
        q_by_note.setdefault(q["linksTo"], []).append(q["id"])
    for n in notes:
        n["linkedQuestionIds"] = q_by_note.get(n["id"], [])
        n["linked_q_ids"] = n["linkedQuestionIds"]
        if n["linkedQuestionIds"]:
            n["linkedMcqCount"] = len([x for x in n["linkedQuestionIds"] if "mcq" in x])
        # enrich explanation from linked questions
        if n["linkedQuestionIds"]:
            n["explanation"] += f"\n\n**From linked questions ({len(n['linkedQuestionIds'])} Qs):**"
            for qid in n["linkedQuestionIds"][:4]:
                q = next(x for x in questions if x["id"] == qid)
                n["explanation"] += f"\n• {q.get('answer', '')[:100]}"

    return notes


def build_mindmap_mermaid(topics: list[dict], title: str) -> str:
    lines = ["mindmap", f"  root(({title[:40]}))"]
    for t in topics[:8]:
        safe = t["title"].replace('"', "'")[:35]
        lines.append(f"    {safe}")
        for b in t.get("bullets", [])[:3]:
            bb = b.replace('"', "'")[:40]
            lines.append(f"      {bb}")
    return "\n".join(lines)


def build_cheatsheet(facts: list[str]) -> list[str]:
    return facts[:24]


def build_word_cards(keywords: list[tuple[str, str]], facts: list[str]) -> list[dict]:
    cards: list[dict] = []
    for term, defn in keywords:
        cards.append({"id": f"wc-{hashlib.md5(term.encode()).hexdigest()[:8]}", "term": term, "definition": defn[:120]})
    for f in facts:
        if len(cards) >= 30:
            break
        m = re.match(r"^(.{10,40}?)\s+(was|were|is|are|means)\s+(.+)$", f, re.I)
        if m:
            term = m.group(1).strip()
            cards.append({
                "id": f"wc-{hashlib.md5(term.encode()).hexdigest()[:8]}",
                "term": term[:40],
                "definition": f[:120],
            })
    while len(cards) < 30 and facts:
        f = facts[len(cards) % len(facts)]
        term = f.split()[0:3]
        term_s = " ".join(term)
        cards.append({"id": f"wc-{len(cards):02d}", "term": term_s[:30], "definition": f[:100]})
    return cards[:30]


def build_chapter_package(
    subject: str,
    ch_num: int,
    topic_id: str,
    title: str,
    md_text: str,
) -> dict[str, Any]:
    parsed = parse_chapter_md(md_text)
    topics = build_topics(parsed.sections, parsed.facts, title)
    high_yield = build_high_yield_facts(parsed, topics)
    questions = build_questions(parsed, subject, ch_num, topic_id, high_yield)
    notes = build_notes(subject, ch_num, topic_id, topics, questions)
    return {
        "chapter": ch_num,
        "subject": subject,
        "topicId": topic_id,
        "title": title,
        "highYieldFacts": high_yield,
        "notes": notes,
        "questions": questions,
        "mindmap": build_mindmap_mermaid(topics, title),
        "cheatsheet": build_cheatsheet(high_yield),
        "wordCards": build_word_cards(parsed.keywords, high_yield),
        "imageUrls": parsed.image_urls,
    }
