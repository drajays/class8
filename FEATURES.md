# StudyHub — Complete Feature Guide

**StudyHub** is a progressive web app (PWA) for **ICSE Class 8** students. It combines structured notes, exam-style practice, progress tracking, and Biology-specific revision tools (mind maps, cheat sheets, diagram MCQs, and one-word vocabulary drills).

**Live app:** https://drajays.github.io/class8/  
**Repository:** https://github.com/drajays/class8

---

## Table of contents

1. [Overview](#1-overview)
2. [Subjects and chapters](#2-subjects-and-chapters)
3. [Navigation and layout](#3-navigation-and-layout)
4. [Home dashboard](#4-home-dashboard)
5. [Chapter study modes](#5-chapter-study-modes)
6. [Notes and concepts](#6-notes-and-concepts)
7. [Practice questions](#7-practice-questions)
8. [Diagram MCQs (Biology)](#8-diagram-mcqs-biology)
9. [Mind maps (Biology)](#9-mind-maps-biology)
10. [Cheat sheets (Biology)](#10-cheat-sheets-biology)
11. [One-word vocabulary (Biology)](#11-one-word-vocabulary-biology)
12. [Practice quiz mode](#12-practice-quiz-mode)
13. [Quiz builder](#13-quiz-builder)
14. [Revision hub](#14-revision-hub)
15. [Progress, mastery, and analytics](#15-progress-mastery-and-analytics)
16. [Spaced repetition (SRS)](#16-spaced-repetition-srs)
17. [Daily goals and streaks](#17-daily-goals-and-streaks)
18. [Search](#18-search)
19. [Content management](#19-content-management)
20. [Import and export](#20-import-and-export)
21. [Theme, PWA, and offline](#21-theme-pwa-and-offline)
22. [Cross-linking between notes and questions](#22-cross-linking-between-notes-and-questions)
23. [Data architecture and regeneration](#23-data-architecture-and-regeneration)
24. [Biology content scale](#24-biology-content-scale)

---

## 1. Overview

StudyHub is a single-page application that stores user progress locally in the browser. Content is bundled as JavaScript data modules and merged at load time. No server or login is required.

**Core capabilities:**

| Area | What it does |
|------|----------------|
| **Learn** | Collapsible notes with teacher tips and exam tips |
| **Practice** | MCQs, true/false, fill-in-the-blank, match, short answer |
| **Revise** | Mind maps, cheat sheets, one-word cards, diagram MCQs |
| **Track** | Coverage, accuracy, section heatmaps, mistakes, bookmarks |
| **Quiz** | Focused one-question-at-a-time sessions with SRS |

---

## 2. Subjects and chapters

### Class

- **Class 8** (expandable structure supports more classes via data)

### Subjects (6)

| Subject | Icon | Chapters |
|---------|------|----------|
| Physics | ⚛️ | 8 (Matter → Electricity) |
| Chemistry | 🧪 | 9 (Matter → Carbon compounds) |
| Biology | 🧬 | 9 (Transport in plants → Food production) |
| Geography | 🌏 | 8 |
| History | 📜 | 10 |
| Civics | ⚖️ | 4 |

### Biology chapters (richest content)

| ID | Chapter |
|----|---------|
| `bio-ch1` | Transportation in Plants |
| `bio-ch2` | Reproduction in Plants |
| `bio-ch3` | Reproduction in Humans |
| `bio-ch4` | Ecosystems |
| `bio-ch5` | Endocrine System & Adolescence |
| `bio-ch6` | The Circulatory System |
| `bio-ch7` | Nervous System |
| `bio-ch8` | Diseases and First Aid |
| `bio-ch9` | Food Production |

Mind maps, cheat sheets, and one-word cards are available **only for Biology chapters** (`bio-ch1` … `bio-ch9`).

---

## 3. Navigation and layout

### Header bar

- **Logo** — returns to home via breadcrumb
- **Theme toggle** — light / dark mode (persisted)
- **Export** — download JSON backup
- **Import** — restore from JSON backup
- **Manage** — open content manager
- **Add New** — create notes or questions

### Sidebar

- **Search box** — full-text search across all content
- **Revision** — quick link to Revision Hub (with mistake count badge)
- **Class** — select class
- **Subjects** — appears after class is selected
- **Chapters** — appears after subject is selected; shows item count per chapter

### Breadcrumb

Shows path: Home → Class → Subject → Chapter (or Revision / Practice Quiz).

### Mobile

- Hamburger menu opens/closes sidebar
- Responsive grid layouts for cards, notes, and question lists
- Sticky chapter tabs on mobile scroll

### Subject accent colours

UI tint changes per subject (Physics purple, Biology pink, Chemistry green, etc.) via `data-subject` on the body.

---

## 4. Home dashboard

### Continue where you left off

Remembers the last opened chapter (`studyhub_last_topic` in localStorage) and offers a one-tap resume card.

### Learning journey row

| Card | Action |
|------|--------|
| **Mistake Book** | Opens Revision Hub → Mistakes |
| **Due Today** | Starts quiz from SRS queue, or opens empty Due tab |
| **Start Quiz** | Opens Quiz Builder |
| **Saved** | Opens Revision Hub → Bookmarks |

### Daily goal strip

- Target: **15 MCQs per day**
- Shows progress bar and **day streak** (consecutive days with at least one MCQ attempt)

### Progress dashboard

- **Accuracy ring** — overall % correct on attempted questions
- **Syllabus covered** — % of gradable questions tried at least once
- **Questions tried / Correct** — raw counts
- **Per-subject bars** — coverage and accuracy for each subject
- **Reset all** — clears all progress (with confirmation)

### Class selection

Grid of class cards showing subject count, chapter count, and total content items.

---

## 5. Chapter study modes

When you open a chapter, **study mode tabs** appear at the **top** (below the chapter title). Available tabs depend on subject and content:

| Tab | Label | Available for |
|-----|-------|---------------|
| Notes | 📝 Notes | All chapters |
| Mind Map | 🧠 Mind Map | Biology only |
| Cheat Sheet | ⚡ Cheat Sheet | Biology only |
| One Word | 🔤 One Word | Biology only (30 cards) |
| Practice | ❓ Practice | All chapters (text questions) |
| Diagrams | 🖼️ Diagrams | Biology chapters with figure MCQs |

A hint line under the tabs lists available revision tools for Biology chapters.

### Chapter stat cards

Quick metrics and shortcuts:

| Stat | Description |
|------|-------------|
| Notes | Count of note sections |
| Text MCQs | MCQs excluding diagram-based |
| Diagram MCQs | Tap → opens Diagrams tab |
| ⚡ Cheat Sheet | Tap → opens Cheat Sheet tab |
| 🔤 One Word | Tap → opens One Word tab (shows 30) |
| Coverage | % of chapter questions attempted |
| Accuracy ↺ | % correct; tap to reset chapter progress |
| Mistakes | Tap → opens quiz from chapter mistakes |

### Section strength heatmap

Colour-coded pills per note section showing:

- Section name (shortened)
- Attempted / total questions linked to that section
- Accuracy % (green ≥80%, amber ≥50%, red below, grey if not tried)

### Practice Quiz button

Top-right **▶ Practice Quiz** opens Quiz Builder pre-filled for the current chapter (20 questions).

---

## 6. Notes and concepts

### Note structure

Each note includes:

| Field | Purpose |
|-------|---------|
| **Subtopic** | Section title |
| **Content** | Main explanation (supports `**bold**` markdown) |
| **Explanation** | Simpler restatement for students |
| **Teacher's Tip** | Teaching hint (green tip box) |
| **Exam Tip** | Exam-focused advice (accent tip box) |
| **Source chip** | `ICSE` for textbook-linked Biology sections |

### Note interactions

- **Collapse / expand** — click note header; chevron indicates state
- **Expand all / Collapse all** — toolbar above note list
- **Test yourself bar** on every note:
  - **▶ Practice N linked MCQs** — if MCQs explicitly link to this note
  - **→ MCQ / T/F / Fill / Q&A** — jump to a question of that type
- **Edit / Delete** — for user-created or all content (bundled items can be deleted locally)

### Note sorting

Notes are sorted by section number extracted from subtopic titles (e.g. "1.2 …" before "3. …").

### Biology NEET notes

Textbook sections from the ICSE Biology pipeline appear with:

- `source: "icse"` chip
- `linkedMcqCount` badge showing how many MCQs link to that section
- `linksTo` on MCQs pointing back to the note

---

## 7. Practice questions

### Question types

| Type | Interaction |
|------|-------------|
| **MCQ** | Tap option A–D; instant correct/wrong highlight |
| **True / False** | Tap True or False |
| **Fill in the blank** | Type answer, tap Check |
| **Match the following** | Column A vs shuffled Column B (display) |
| **Short / Long answer** | Show answer reveal |

### Practice tab features

- **Type filter tabs** — All, T/F, Fill, MCQ, Match, Short Answer (with counts)
- **Diagram MCQs excluded** — text practice is separate from Diagrams tab
- **Show Answer & Explanation** — expandable reveal with answer, tips, note link
- **🔖 Save** — bookmark for revision
- **▶ Practice** — single-question quiz session
- **↩ Back to Notes** — jump to linked section note
- **Source chip** — ICSE for textbook MCQs
- **Targeted re-render** — answering updates only that card (fast on 200+ question chapters)

### Progress recording

Every graded attempt records:

- Correct / wrong
- Timestamp
- Guessed flag (in quiz mode)
- SRS schedule update

---

## 8. Diagram MCQs (Biology)

**Location:** 🖼️ Diagrams tab (Biology chapters only)

### Content

- **312 diagram MCQs** from **104 textbook figures**
- **3 MCQs per figure** (NEET-style)
- Images stored in `/images/` (JPG)

### Layout

- Grouped by figure with caption heading
- Large hero image per figure
- **▶ Quiz this figure (3)** — mini-quiz for that diagram only
- **▶ Mixed diagram quiz** — 15 random diagram MCQs from the chapter

### Behaviour

- Diagram questions never appear in the main Practice tab
- Jumping to a diagram question from elsewhere opens the Diagrams tab
- Quiz Builder includes **Diagram MCQs** pool option

---

## 9. Mind maps (Biology)

**Location:** 🧠 Mind Map tab

### Purpose

Idea-connecting maps — **not** a mirror of note section titles. Shows how concepts relate across a chapter.

### Structure

- **14 mind maps** across 9 Biology chapters (large chapters split into parts)
- **Central hub** — chapter theme or part title
- **Idea flow strip** — ordered story (tap steps to highlight branches)
- **Idea hubs (branches)** — e.g. "Xylem ↑ vs Phloem ↓", "Root absorption"
- **Concept bullets** — definitions and connecting statements
- **Labeled link chips** — e.g. `water enters via → Root absorption`
- **📄 Note chips** — supporting section notes (multiple per hub)

### Interactions

- Tap branch → highlight + scroll
- Tap link chip → jump to related branch
- Tap 📄 note chip → open full section note
- Multi-part chapters: tabs switch between map parts (e.g. Food Production has 4 maps)

### Data source

Auto-generated from `notes.json` + curated themes in `biology8/chapters/mindmap_themes.json`.

---

## 10. Cheat sheets (Biology)

**Location:** ⚡ Cheat Sheet tab

### Purpose

High-yield **last-minute revision** — condensed exam-ready points.

### Sections per chapter

| Group | Content |
|-------|---------|
| 🧭 **Core story** | 8 big-picture bullets from mind-map themes |
| 📌 **Must-know definitions** | Top scored definitions (MCQ-weighted) |
| ⚖️ **Compare & contrast** | Xylem vs phloem, etc. |
| 🔄 **Pathways & processes** | Flow statements (from → to) |
| 🎯 **Exam quick hits** | Numbers, "only/always", key traps |

### Top 12 cram box

Highlighted box at top — **highest-yield one-liners** to read first.

### Actions

| Button | Action |
|--------|--------|
| **📋 Copy all** | Copies full cheat sheet as plain text |
| **🖨️ Print** | Opens print-friendly view |
| **▶ Quick quiz** | 15-question chapter quiz |

Linked lines tap through to the supporting section note.

---

## 11. One-word vocabulary (Biology)

**Location:** 🔤 One Word tab (30 cards per chapter)

### Purpose

Vocabulary drill — tap a **single word or short phrase** to reveal its definition.

### Layout

- **Reveal panel** at top — shows definition when a word is selected
- **Grid of 30 word buttons**
- Tap word → show meaning; tap again → hide
- Active word highlighted

### Actions

| Button | Action |
|--------|--------|
| **🔀 Shuffle** | Randomise card order |
| **📋 Show all** | Full term + definition list |
| **📄 Full notes** | Jump to source section (when linked) |

### Card selection

Auto-picked from chapter definitions, section titles, and key points — prioritising single-word terms and MCQ-linked sections. Exactly **30 cards** per Biology chapter.

---

## 12. Practice quiz mode

Focused **one question at a time** with instant feedback.

### Supported in quiz mode

- MCQ (4 options)
- True / False
- Fill in the blank

### Quiz UI

- Progress bar and "Question N of M"
- **🎲 Guessed** — mark uncertain answers (counted as mistakes even if correct)
- **🔖 Save / Saved** — bookmark during quiz
- Instant feedback with answer, teacher tip, exam tip
- **↩ Revise** — jump to linked note after answering
- **Next →** / **See results**

### Quiz completion

- Score ring (correct / total)
- Encouragement message based on score
- **Revise mistakes** — new quiz from wrong answers
- **Open Revision Hub**
- **Back to chapter** or Home

### Exit

**✕ Exit** — confirms before leaving; saves answers so far.

---

## 13. Quiz builder

**Open from:** Home, chapter header, Revision Hub, cheat sheet, diagram toolbar

### Question pools

| Pool | Description |
|------|-------------|
| **Chapter** | Text MCQs and objective questions for selected chapter |
| **Diagram MCQs** | Figure-based NEET questions |
| **Mistake Book** | Wrong and guessed answers |
| **Due Today** | Spaced revision queue |
| **Saved** | Bookmarked questions |

### Options

- **Chapter filter** — optional; all chapters if blank
- **Count** — 10, 20, 30, or 50 questions
- **Pool hint** — shows how many questions available

Questions are shuffled each session.

---

## 14. Revision hub

**Location:** Sidebar → 📕 Revision

### Tabs

| Tab | Contents |
|-----|----------|
| **Mistakes** | Wrong answers + guessed-but-correct |
| **Due Today** | SRS-scheduled reviews |
| **Saved** | Bookmarked questions |

### Each revision item shows

- Chapter name and badge (Wrong / Guessed / Review)
- Question preview (truncated)
- **↩ Back to Notes** — if linked
- **Retry** — single-question quiz
- **Remove** — for bookmarks only

### Actions

- **▶ Practice N now** — quick quiz (up to 20)
- **⚙️ Custom quiz** — opens Quiz Builder for that pool

---

## 15. Progress, mastery, and analytics

### Per-question progress (`studyProgress`)

Stored in localStorage for each question ID:

- `attempts`, `correct`, `wrong`
- `lastResult` — `correct` | `wrong`
- `guessed` — boolean
- `lastAttempt` — timestamp
- `nextReview` — SRS due date
- `srsLevel` — 0–4

### Chapter mastery

| Metric | Formula |
|--------|---------|
| **Coverage** | Attempted gradable questions ÷ total gradable |
| **Accuracy** | Correct ÷ attempted (excluding unattempted) |

### Subject and overall mastery

Aggregated from all chapters in subject / entire app.

### Accuracy colour bands

| Class | Accuracy |
|-------|----------|
| Good (green) | ≥ 80% |
| Mid (amber) | ≥ 50% |
| Low (red) | < 50% |
| None (grey) | Not attempted |

### Reset progress

- **Chapter** — tap Accuracy stat card in chapter view
- **All** — Home dashboard → Reset all

### Chapter cards (subject view)

Each chapter card shows:

- Notes, MCQs, diagram count, other questions
- Practiced N/total bar
- Accuracy pill

---

## 16. Spaced repetition (SRS)

When a question is answered incorrectly or marked **Guessed**:

- It enters the **Mistake Book**
- SRS schedule: review after **1, 3, 7, 14 days**
- Correct answers advance the level; wrong answers reset toward 1 day

**Due Today** tab and home card show questions whose `nextReview` ≤ today.

---

## 17. Daily goals and streaks

| Setting | Value |
|---------|-------|
| Daily MCQ goal | 15 |
| Streak | Consecutive calendar days with ≥1 recorded MCQ attempt |

Displayed on home dashboard goal strip.

---

## 18. Search

**Location:** Sidebar search box

- Debounced (160 ms) full-text search
- Searches: subtopic, note content, question text, answer text
- Results show note cards or question previews with chapter name
- Clears back to normal view when search box is emptied

---

## 19. Content management

### Add New (modal)

Create content for any class / subject / chapter:

- **Types:** Note, True/False, Fill blank, MCQ, Match, Short answer
- **Fields vary by type** — options for MCQ, pairs for match, blank answer, etc.
- **New topic** — type a new chapter name inline

### Manage (content manager)

Filter by class, subject, content type. List all items with edit/delete.

### Edit / Delete

Available on individual notes and questions. Deleted bundled content IDs are tracked in `deletedContentIds` so they don't reappear on data merge.

### User-created content

IDs matching `c-{timestamp}` are treated as user-created and preserved during taxonomy reconciliation.

---

## 20. Import and export

### Export

Downloads `studyhub_backup.json` containing:

- All classes, subjects, topics, content
- Progress, bookmarks, activity, deleted IDs
- Data version number

### Import

- Preview: counts of classes, subjects, topics, notes, questions
- **Replace all** — wipe and load file
- **Merge (smart)** — add new items only, no duplicates

Works in browser (localStorage) and NW.js desktop mode (reads/writes `data/studyhub_db.json`).

---

## 21. Theme, PWA, and offline

### Light / dark theme

- Toggle in header
- Persisted in `studyhub_theme`
- CSS variables switch via `data-theme` on `<html>`

### Progressive Web App

- `manifest.webmanifest` for install to home screen
- Service worker (`sw.js`) caches app shell
- **Network-first** for `.js`, `.html`, `.css` (updates propagate quickly)
- **Cache-first** for other assets
- Cache version: `studyhub-v19` (bumps on releases)

### Desktop (NW.js)

Optional desktop wrapper reads/writes JSON file on disk instead of localStorage.

---

## 22. Cross-linking between notes and questions

StudyHub is built around **note ↔ question** links:

| Direction | How |
|-----------|-----|
| Note → MCQs | "Practice linked MCQs" + type shortcuts |
| Question → Note | "↩ Back to Notes" / "↩ Revise" buttons |
| Mind map → Note | 📄 chips on idea hubs |
| Cheat sheet → Note | Tap linked definition line |
| One word → Note | 📄 Full notes button |
| Diagram MCQ → Note | Same as text MCQs via `linksTo` |

`jumpToNote` expands the target note and flashes it. `jumpToQuestion` opens the correct tab (Practice or Diagrams).

---

## 23. Data architecture and regeneration

### Client-side data modules (load order)

```
data-core.js          → DEFAULT_DATA (taxonomy + Physics Ch1–2)
chapters3to8.js       → Physics Ch3–8 + more
physics-qbank.js      → Physics question bank
biology.js            → Biology notes + legacy questions
biology-neet.js       → ICSE Biology textbook sections + 200+ MCQs/chapter + diagram MCQs
biology-mindmaps.js   → Idea-connecting mind maps
biology-cheatsheets.js → Cheat sheets + 30 word cards/chapter
chemistry.js
geography.js
history-civics.js
app.js                → Application logic
```

### Merge on load

- New bundled content is merged without overwriting user edits
- Taxonomy labels refresh from defaults
- `DATA_VERSION` (currently **38**) triggers progress schema migration when bumped

### Content pipeline (separate repo: `biology8`)

| Script | Output |
|--------|--------|
| `chapters/build_studyhub_neet.py` | `biology-neet.js` |
| `generate_mindmaps.py` | `biology-mindmaps.js` |
| `generate_cheatsheets.py` | `biology-cheatsheets.js` |
| `generate_image_mcqs.py` | Diagram MCQs merged into NEET build |

Regenerate all Biology data:

```bash
python3 biology8/generate_image_mcqs.py
python3 biology8/generate_mindmaps.py
python3 biology8/generate_cheatsheets.py
python3 biology8/chapters/build_studyhub_neet.py
```

---

## 24. Biology content scale

| Asset | Count |
|-------|-------|
| NEET records (notes + questions) | ~2,219 |
| Text MCQs per major chapter | 200+ (Human Reproduction, Circulatory, etc.) |
| Diagram MCQs | 312 (104 figures × 3) |
| Mind maps | 14 maps, 55 idea hubs |
| Cheat sheet items | ~25–40 per chapter |
| One-word cards | 30 per chapter |
| Textbook images | 104 JPGs in `/images/` |

---

## Quick reference — where to find Biology revision tools

1. Open **Class 8 → Biology → any chapter**
2. At the **top**, use tabs or stat cards:

```
📝 Notes  |  🧠 Mind Map  |  ⚡ Cheat Sheet  |  🔤 One Word  |  ❓ Practice  |  🖼️ Diagrams
```

3. If tabs don't appear after an update: **hard refresh** the browser or reinstall the PWA (service worker cache may need updating).

---

*Last updated: June 2026 — matches commit with idea mind maps, cheat sheets, one-word cards, and tab visibility improvements.*
