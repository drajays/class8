"""Shared helpers for chapter question banks."""


def M(q, opts, correct, ans, exam="", teacher=""):
    return {"q": q, "opts": opts, "correct": correct, "ans": ans, "exam": exam, "teacher": teacher}


def combo2(s1, s2, correct, ans, exam="", teacher=""):
    q = f"Consider the following statements:\n1. {s1}\n2. {s2}\nWhich of the above is/are correct?"
    opts = ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"]
    return M(q, opts, correct, ans, exam, teacher)


def combo3(s1, s2, s3, correct, ans, exam="", teacher=""):
    q = f"Consider the following statements:\n1. {s1}\n2. {s2}\n3. {s3}\nWhich of the above is/are correct?"
    opts = ["1 and 2 only", "2 and 3 only", "1 and 3 only", "All of the above"]
    return M(q, opts, correct, ans, exam, teacher)
