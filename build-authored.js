#!/usr/bin/env node
// Merges the hand-rewritten notes in authored-notes/*.js over the raw OCR supplements (supplement.js, supplement2.js)
// and writes supplement-final.js (SUPPLEMENT_FINAL_DATA). A raw note with `drop` is folded away; `t` moves it to another chapter.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ctx = {}; vm.createContext(ctx);
for (const f of ['supplement.js', 'supplement2.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, f), 'utf8').replace(/\bconst /g, 'var '), ctx);
const raw = [...ctx.SUPPLEMENT_DATA, ...ctx.SUPPLEMENT2_DATA];
const au = {};
for (const f of fs.readdirSync(path.join(__dirname, 'authored-notes'))) Object.assign(au, require('./authored-notes/' + f));
const out = []; let dropped = 0, moved = 0, kept = 0;
raw.forEach(n => {
  const a = au[n.id];
  if (!a) { out.push(n); kept++; return; }   // not yet rewritten: keep the cleaned OCR note
  if (a.drop) { dropped++; return; }
  if (a.t && a.t !== n.topicId) moved++;
  out.push({ id: n.id, topicId: a.t || n.topicId, type: 'note', subtopic: '➕ ' + a.s, content: a.c.trim(), source: 'ocr_supplement' });
});
Object.entries(au).filter(([, v]) => v.add).forEach(([id, v]) => out.push({ id, topicId: v.t, type: 'note', subtopic: '➕ ' + v.s, content: v.c.trim(), source: 'ocr_supplement' }));
out.forEach((n, i) => { n.order = i; });   // keep book order among the ➕ notes
fs.writeFileSync(path.join(__dirname, 'supplement-final.js'),
  '// StudyHub — textbook points beyond the main notes, rewritten in simple language (build-authored.js)\nconst SUPPLEMENT_FINAL_DATA = ' + JSON.stringify(out) + ';\n');
console.log({ raw: raw.length, written: out.length, dropped, moved, keptRaw: kept });
