"""Question generators for Geography chapters."""
from __future__ import annotations

from typing import Any, Callable


def mcq(
    q_id: str,
    topic_id: str,
    question: str,
    options: list[str],
    correct: int,
    answer: str,
    exam_tip: str = "",
    teacher_tip: str = "",
) -> dict[str, Any]:
    return {
        "id": q_id,
        "q_id": q_id,
        "topicId": topic_id,
        "type": "mcq",
        "subtopic": "Objective Questions",
        "question": question,
        "options": options,
        "correctOption": correct,
        "answer": answer,
        "examTip": exam_tip,
        "teacherTip": teacher_tip,
    }


def tf(q_id: str, topic_id: str, question: str, correct: str, justification: str) -> dict[str, Any]:
    return {
        "id": q_id,
        "q_id": q_id,
        "topicId": topic_id,
        "type": "true_false",
        "subtopic": "Objective Questions",
        "question": question,
        "correctAnswer": correct,
        "answer": justification,
    }


def fill(q_id: str, topic_id: str, question: str, blank: str, answer: str) -> dict[str, Any]:
    return {
        "id": q_id,
        "q_id": q_id,
        "topicId": topic_id,
        "type": "fill_blank",
        "subtopic": "Objective Questions",
        "question": question,
        "blankAnswer": blank,
        "answer": answer,
    }


def match(
    q_id: str,
    topic_id: str,
    question: str,
    pairs: list[dict[str, str]],
    answer: str,
) -> dict[str, Any]:
    return {
        "id": q_id,
        "q_id": q_id,
        "topicId": topic_id,
        "type": "match",
        "subtopic": "Objective Questions",
        "question": question,
        "pairs": pairs,
        "answer": answer,
    }


def short(q_id: str, topic_id: str, question: str, answer: str) -> dict[str, Any]:
    return {
        "id": q_id,
        "q_id": q_id,
        "topicId": topic_id,
        "type": "short_answer",
        "subtopic": "Short/Long Answer",
        "question": question,
        "answer": answer,
    }


def build_question_set(
    ch_num: int,
    topic_id: str,
    mcqs: list[dict],
    tfs: list[dict],
    fills: list[dict],
    matches: list[dict],
    shorts: list[dict],
    expand_mcq: Callable[[int], list[dict]] | None = None,
) -> list[dict]:
    """Assemble exactly 100 questions with geo-chN-* ids."""
    prefix = f"geo-ch{ch_num}"
    out: list[dict] = []
    mcq_list = list(mcqs)
    if expand_mcq and len(mcq_list) < 70:
        mcq_list.extend(expand_mcq(70 - len(mcq_list)))
    mcq_list = mcq_list[:70]
    for i, q in enumerate(mcq_list, 1):
        q = dict(q)
        q["id"] = q.get("id") or f"{prefix}-mcq{i:03d}"
        q["q_id"] = q["id"]
        q["topicId"] = topic_id
        out.append(q)
    for i, q in enumerate(tfs[:10], 1):
        q = dict(q)
        q["id"] = q.get("id") or f"{prefix}-tf{i:02d}"
        q["q_id"] = q["id"]
        q["topicId"] = topic_id
        out.append(q)
    for i, q in enumerate(fills[:5], 1):
        q = dict(q)
        q["id"] = q.get("id") or f"{prefix}-fb{i:02d}"
        q["q_id"] = q["id"]
        q["topicId"] = topic_id
        out.append(q)
    for i, q in enumerate(matches[:10], 1):
        q = dict(q)
        q["id"] = q.get("id") or f"{prefix}-match{i:02d}"
        q["q_id"] = q["id"]
        q["topicId"] = topic_id
        out.append(q)
    for i, q in enumerate(shorts[:5], 1):
        q = dict(q)
        q["id"] = q.get("id") or f"{prefix}-sa{i:02d}"
        q["q_id"] = q["id"]
        q["topicId"] = topic_id
        out.append(q)
    if len(out) != 100:
        raise ValueError(f"Chapter {ch_num}: built {len(out)} questions, need 100")
    return out
