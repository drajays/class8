#!/usr/bin/env node
// Build physics-neet.js from kept notes + hand-authored question banks.
//
// Inputs:
//   data/physics-authored/notes-ch1-4.json, notes-ch5-8.json — hand-written chapter notes
//   data/physics-authored/ch[1-8].json  — authored questions per chapter
//   data/physics-authored/diagrams.json — authored diagram MCQs (have an `image` field)
//
// Recomputes each note's linkedMcqCount, validates everything, then writes
// physics-neet.js. Run: node scripts/build-physics-neet-authored.js

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));

const notes = [...read('data/physics-authored/notes-ch1-4.json'), ...read('data/physics-authored/notes-ch5-8.json')];

const noteErrors = [];
const seenNotes = new Set();
for (const n of notes) {
  if (!n.id || seenNotes.has(n.id)) noteErrors.push(`${n.id || '(missing id)'}: missing or duplicate note id`);
  seenNotes.add(n.id);
  if (n.type !== 'note') noteErrors.push(`${n.id}: note type must be 'note'`);
  if (!n.topicId || !n.subtopic || !n.content) noteErrors.push(`${n.id}: note missing topicId/subtopic/content`);
}
if (noteErrors.length) {
  console.error('Note validation failed:\n' + noteErrors.join('\n'));
  process.exit(1);
}
const questionFiles = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'diagrams', 'diagrams-ch1-4', 'diagrams-ch5-8'];
const questions = questionFiles.flatMap((f) => read(`data/physics-authored/${f}.json`));

// ---- validate -------------------------------------------------------------
const errors = [];
const noteIds = new Set(notes.map((n) => n.id));
const seen = new Set();
const QUIZ_TYPES = new Set(['mcq', 'true_false', 'fill_blank', 'match', 'short_answer']);

for (const q of questions) {
  const tag = q.id || '(missing id)';
  if (!q.id || seen.has(q.id)) errors.push(`${tag}: missing or duplicate id`);
  seen.add(q.id);
  if (!QUIZ_TYPES.has(q.type)) errors.push(`${tag}: bad type ${q.type}`);
  if (!q.topicId) errors.push(`${tag}: missing topicId`);
  if (!q.question) errors.push(`${tag}: missing question`);
  if (!q.answer) errors.push(`${tag}: missing answer/explanation`);
  if (!noteIds.has(q.linksTo)) errors.push(`${tag}: linksTo ${q.linksTo} is not a note id`);
  if (q.type === 'mcq') {
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${tag}: mcq needs 4 options`);
    if (!(q.correctOption >= 0 && q.correctOption <= 3)) errors.push(`${tag}: bad correctOption`);
  }
  if (q.type === 'true_false' && q.correctAnswer !== 'true' && q.correctAnswer !== 'false')
    errors.push(`${tag}: true_false needs correctAnswer 'true'|'false'`);
  if (q.type === 'fill_blank' && !q.blankAnswer) errors.push(`${tag}: fill_blank needs blankAnswer`);
  if (q.type === 'match' && (!Array.isArray(q.pairs) || q.pairs.length < 3))
    errors.push(`${tag}: match needs >= 3 pairs`);
  if (q.image && !fs.existsSync(path.join(root, q.image))) errors.push(`${tag}: image not found ${q.image}`);
}
if (errors.length) {
  console.error('Validation failed:\n' + errors.join('\n'));
  process.exit(1);
}

// ---- recompute note link counts -------------------------------------------
const linkCounts = {};
for (const q of questions) linkCounts[q.linksTo] = (linkCounts[q.linksTo] || 0) + 1;
for (const n of notes) {
  const c = linkCounts[n.id] || 0;
  if (c) n.linkedMcqCount = c;
  else delete n.linkedMcqCount;
}

// ---- assemble: notes first, then that chapter's questions -----------------
const topicOrder = [...new Set(notes.map((n) => n.topicId))];
const out = [];
for (const topic of topicOrder) {
  out.push(...notes.filter((n) => n.topicId === topic));
  out.push(...questions.filter((q) => q.topicId === topic && !q.image));
  out.push(...questions.filter((q) => q.topicId === topic && q.image));
}

const header = `// StudyHub — ICSE Class 8 Physics (notes and questions hand-authored)
// Regenerate: node scripts/build-physics-neet-authored.js
// Question sources: data/physics-authored/ch1..ch8.json + diagrams.json
`;
const body = out.map((item) => JSON.stringify(item, null, 1)).join(',\n');
fs.writeFileSync(path.join(root, 'physics-neet.js'), `${header}const PHYSICS_NEET_DATA = [\n${body}\n];\n`);

const byType = {};
for (const q of questions) byType[q.type] = (byType[q.type] || 0) + 1;
console.log(`physics-neet.js written: ${notes.length} notes + ${questions.length} questions`);
console.log('by type:', byType);
