#!/usr/bin/env node
/**
 * Hand-authored history & civics chapters override the OCR auto-generated ones.
 * Source:   data/history8/authored/ch*.json, data/civics8/authored/ch*.json
 * Patches:  history.js / civics.js (notes + questions), *-mindmaps.js, *-cheatsheets.js
 * Writes:   history-timeline.js (HISTORY_TIMELINE_DATA, per chapter, both subjects)
 * Filters:  history-diagrams.js — for authored chapters keep only the hand-curated figures
 *           (history8/data/diagram_overrides.json); the rest are OCR guesses.
 * Usage:    node scripts/build-history-authored.js
 * (Also run automatically at the end of history8/build_studyhub_history_civics.py.)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SUBJECTS = [
  { prefix: 'hist', dir: 'data/history8/authored', js: 'history.js', mm: 'history-mindmaps.js', cs: 'history-cheatsheets.js' },
  { prefix: 'civ', dir: 'data/civics8/authored', js: 'civics.js', mm: 'civics-mindmaps.js', cs: 'civics-cheatsheets.js' }
];
const TYPE_CODE = { mcq: 'mcq', true_false: 'tf', fill_blank: 'fb', match: 'match', short_answer: 'qa' };

const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);
const pad = n => String(n).padStart(2, '0');

// history.js: `const NAME = [\n{...},\n{...}\n];` — one JSON object per line.
// Lines are kept verbatim so untouched chapters produce no diff.
function loadArray(file) {
  const lines = read(file).split('\n');
  const start = lines.findIndex(l => /^const \w+ = \[$/.test(l));
  const end = lines.lastIndexOf('];');
  const items = lines.slice(start + 1, end).map(l => l.replace(/,$/, ''));
  return { header: lines.slice(0, start + 1).join('\n'), items, topic: l => JSON.parse(l).topicId };
}
function loadObject(file) {
  const src = read(file);
  const start = src.indexOf('{');
  return { header: src.slice(0, start), data: JSON.parse(src.slice(start, src.lastIndexOf('}') + 1)) };
}

function buildChapter(ch, prefix) {
  const num = ch.topicId.replace(`${prefix}-ch`, '');
  const noteId = i => `${prefix}-rev-ch${num}-${pad(i)}`;
  const notes = ch.notes.map((n, i) => ({
    id: noteId(i + 1), topicId: ch.topicId, type: 'note', subtopic: n.subtopic, content: n.content,
    ...(n.fiveW ? { fiveW: n.fiveW } : {}),
    source: `${prefix}_authored`
  }));
  const checkNote = (ref, what) => {
    if (!ref || ref > notes.length) throw new Error(`${ch.topicId}: bad note ref in ${what}`);
    return noteId(ref);
  };
  const timeline = (ch.timeline || []).map(e => {
    const sort = e.sort != null ? e.sort : parseInt((String(e.year).match(/\d{3,4}/) || [])[0], 10);
    if (!Number.isFinite(sort)) throw new Error(`${ch.topicId}: timeline year needs a number: ${e.year}`);
    return { year: String(e.year), sort, event: e.event, ...(e.detail ? { detail: e.detail } : {}), noteId: checkNote(e.note, `timeline "${e.event}"`) };
  });
  const counters = {};
  const questions = ch.questions.map(q => {
    const code = TYPE_CODE[q.type];
    if (!code) throw new Error(`${ch.topicId}: unknown type ${q.type}`);
    checkNote(q.note, `"${q.question}"`);
    if (q.type === 'mcq' && !(q.correctOption >= 0 && q.correctOption < q.options.length)) throw new Error(`bad correctOption: ${q.question}`);
    counters[code] = (counters[code] || 0) + 1;
    const id = `${prefix}-ch${num}-${code}${pad(counters[code])}`;
    const { note, ...rest } = q;
    return {
      id, q_id: id, topicId: ch.topicId,
      subtopic: q.type === 'short_answer' ? "🏆 Toppers' Q&A" : 'Objective Questions',
      ...rest,
      source: q.type === 'short_answer' ? `${prefix}_topper` : `${prefix}_authored`,
      linksTo: noteId(note), linked_note_id: noteId(note)
    };
  });
  const noteRef = i => ({ noteId: noteId(i), label: '📄 ' + ch.notes[i - 1].subtopic.replace(/^\d+\.\s*/, '') });
  const mindmap = {
    topicId: ch.topicId, chapterTitle: ch.title, center: ch.title,
    maps: [{
      id: 'map-1', title: ch.title, center: ch.title,
      flow: ch.mindmap.flow.map((label, j) => ({ id: `step${j + 1}`, label })),
      branches: ch.mindmap.branches.map((b, j, all) => ({
        id: `br-${j + 1}`, title: b.title, bullets: b.bullets,
        links: j + 1 < all.length ? [{ label: 'leads to →', targetId: `br-${j + 2}` }] : [],
        noteRefs: [noteRef(b.note)]
      }))
    }]
  };
  const cheatsheet = {
    topicId: ch.topicId, title: `${ch.title} — Cheat Sheet`,
    topCram: ch.cheatsheet.topCram,
    sections: ch.cheatsheet.sections.map(s => ({ title: s.title, items: s.items.map(it => ({ text: it.text, noteId: noteId(it.note) })) })),
    wordCards: ch.cheatsheet.wordCards.map((w, i) => ({ id: `wc-${ch.topicId}-${pad(i + 1)}`, ...w }))
  };
  return { items: [...notes, ...questions], mindmap, cheatsheet, timeline };
}

const timelines = {};
const authoredTopics = new Set();

for (const subj of SUBJECTS) {
  const dir = path.join(ROOT, subj.dir);
  if (!fs.existsSync(dir)) continue;
  const chapters = fs.readdirSync(dir).filter(f => /^ch\d+\.json$/.test(f))
    .sort((a, b) => parseInt(a.slice(2), 10) - parseInt(b.slice(2), 10))
    .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
  const arr = loadArray(subj.js);
  const mm = loadObject(subj.mm);
  const cs = loadObject(subj.cs);
  for (const ch of chapters) {
    const built = buildChapter(ch, subj.prefix);
    const firstIdx = arr.items.findIndex(l => arr.topic(l) === ch.topicId);
    arr.items = arr.items.filter(l => arr.topic(l) !== ch.topicId);
    arr.items.splice(firstIdx < 0 ? arr.items.length : firstIdx, 0, ...built.items.map(x => JSON.stringify(x)));
    mm.data[ch.topicId] = built.mindmap;
    cs.data[ch.topicId] = built.cheatsheet;
    if (built.timeline.length) timelines[ch.topicId] = built.timeline;
    authoredTopics.add(ch.topicId);
    const qa = built.items.filter(x => x.type === 'short_answer').length;
    console.log(`${ch.topicId}: ${built.items.length} items (${ch.notes.length} notes, ${qa} toppers' Q&A, ${built.timeline.length} dates)`);
  }
  write(subj.js, arr.header + '\n' + arr.items.join(',\n') + '\n];\n');
  write(subj.mm, mm.header + JSON.stringify(mm.data, null, 1) + ';\n');
  write(subj.cs, cs.header + JSON.stringify(cs.data, null, 1) + ';\n');
}

write('history-timeline.js', '// Timeline — generated by scripts/build-history-authored.js from data/{history8,civics8}/authored/ch*.json\n' +
  'const HISTORY_TIMELINE_DATA = ' + JSON.stringify(timelines, null, 1) + ';\n');

// Figure questions: auto-generated ones for authored chapters are OCR guesses
// ("The figure shows During Reading…"), so keep only curated figures there.
const curated = new Set(Object.keys(JSON.parse(read('history8/data/diagram_overrides.json')))
  .map(k => k.replace(/^(hist|civ)-ch(\d+)\//, (_, p, n) => `assets/${p === 'hist' ? 'history8' : 'civics8'}/images/ch${n}/`)));
const diag = read('history-diagrams.js');
const diagStart = diag.indexOf('[', diag.indexOf('const HISTORY_DIAGRAM_DATA'));
const diagItems = JSON.parse(diag.slice(diagStart, diag.lastIndexOf(']') + 1));
const keptDiag = diagItems.filter(q => !authoredTopics.has(q.topicId) || curated.has(q.image));
write('history-diagrams.js', diag.slice(0, diagStart) + '[\n' + keptDiag.map(q => JSON.stringify(q, null, 1)).join(',\n') + '\n];\n');
console.log(`history-diagrams.js: kept ${keptDiag.length}/${diagItems.length} figure questions`);
