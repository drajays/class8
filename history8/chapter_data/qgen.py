"""Question generators for History & Civics chapters."""
from __future__ import annotations

from typing import Any


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
    prefix: str,
    topic_id: str,
    mcqs: list[dict],
    tfs: list[dict],
    fills: list[dict],
    matches: list[dict],
    shorts: list[dict],
) -> list[dict]:
    """Assemble exactly 100 questions with {prefix}-* ids."""
    out: list[dict] = []
    for i, q in enumerate(mcqs[:70], 1):
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
        raise ValueError(f"{prefix}: built {len(out)} questions, need 100")
    return out
