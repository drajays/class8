# StudyHub — Class 8 Study Portal

A clean, offline study app with notes, teacher's tips and exam-style practice
questions for **ICSE Class 8**: Physics, Chemistry, Biology, Geography, History
and Civics.

## How to run

- **Quick:** double-click **`index.html`** in any modern browser.
- **iPad / PWA / offline cache:** `npm run start:web` then open `http://localhost:3000`
  (service worker needs http, not `file://`).
- **Mac / Windows desktop app:** `npm start` (NW.js; saves to `data/studyhub_db.json`).

No internet is required after the first load (fonts load from Google when online).

## File structure (separated HTML / CSS / JavaScript)

```
study-app/
├── index.html          ← page markup (open this)
├── styles.css          ← all styling, light + dark themes, per-subject colours
├── app.js              ← all application logic (navigation, quiz, add/edit, import/export)
│
├── data-core.js        ← classes, subjects, chapters + Physics ch.1–2 content
├── chapters3to8.js     ← Physics chapters 3–8
├── physics-qbank.js    ← Physics Question Bank (182 Q&A, all 8 chapters)
├── chemistry.js        ← Chemistry (9 chapters)
├── biology.js          ← Biology (9 chapters)
├── geography.js        ← Geography (8 chapters) — NEW
├── history-civics.js   ← History (10 ch) + Civics (4 ch) content
└── data/               ← OCR sources (physics-qbank-ocr.json, bio1-ocr.json)
```

## What changed from the original

- **Single `index.html` split** into separate `index.html`, `styles.css` and `app.js`.
- **Subjects reorganised** to exactly: Physics, Chemistry, Biology, Geography,
  History, Civics.
  - History and Civics are now **separate subjects**.
  - **Geography added** with starter notes & questions across 8 chapters.
  - The empty *Mathematics* placeholder was removed.
- **Full UI redesign**: scholarly editorial look, Fraunces + Hanken Grotesk
  fonts, per-subject accent colours, and a **light / dark theme toggle** (🌙/☀️
  button, top-right). Your theme choice is remembered.

## Features

- Notes with simple explanations, Teacher's Tips and Exam Tips.
- Practice: True/False, Fill-in-the-blank, MCQ, Match, Short/Long answer.
- **182 Physics Question-Bank questions** (with solutions) from the Class-8 Physics
  Question Bank — cross-checked against
  `data/physics-qbank-ocr.json`.
  Shown under each chapter’s *Practice Questions → Short/Long Answer* tab.
- **Add New / Manage** your own content (saved in the browser).
- **Export** a JSON backup and **Import** it back (replace or smart-merge).

> Note: your own added content and progress are stored in the browser's local
> storage. Use **Export** regularly to keep a backup file.
