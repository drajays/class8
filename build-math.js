#!/usr/bin/env node
// Builds math.js (MATH_DATA) from the math8 textbook pipeline: notes + question bank + practice sessions + Gemini batches.
// Usage: node build-math.js [path-to-math8]   (idempotent)
const fs = require('fs'), path = require('path');
const SRC = path.resolve(process.argv[2] || '/Users/dr.ajayshukla/math8');
const D = path.join(SRC, 'data');
const LB = '\uE0FB', RB = '\uE0FC';   // literal { } in plain text (cleanMathMarkup would strip real braces)
const out = [];
const usedIds = new Set();

/** Protect plain-text braces and OCR-looking letter runs; leave $...$ / $$...$$ alone. */
function guard(s) {
  return s.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g).map((p, i) => i % 2 ? p
    : p.replace(/\{/g, LB).replace(/\}/g, RB)
       .replace(/(?:\b[a-zA-Z]\s+){2,}[a-zA-Z]\b/g, m => m.replace(/ /g, ' \u2063'))).join('');
}
const tidy = s => s.replace(/^\s*\d*\s*\w*\s*Mathematics\s*[-–]\s*[IVX]+\s*\d*\s*$/gim, '').replace(/^#{1,6}\s+(.*)$/gm, '**$1**').replace(/\n{3,}/g, '\n\n').trim();

function stepsMd(steps) {
  return (steps || []).filter(st => st.rule !== 'Given').map((st, i) => {
    const m = String(st.math || '').trim();
    const math = !m ? '' : (/\$/.test(m) ? m : '$$' + m + '$$');
    return `**Step ${i + 1} · ${st.rule || ''}** — ${st.why || ''}${math ? '\n' + math : ''}`;
  }).join('\n\n');
}

const chapters = [];
for (let n = 1; n <= 20; n++) {
  const nn = String(n).padStart(2, '0');
  const src = JSON.parse(fs.readFileSync(path.join(D, 'chapters', `chapter_${nn}_source.json`), 'utf8'));
  const topicId = 'math-ch' + n;
  chapters.push({ id: topicId, n, title: src.title });

  // ---- notes
  const md = fs.readFileSync(path.join(D, 'chapters', `chapter_${nn}_notes.md`), 'utf8');
  const noteIds = new Set();
  md.split(/\n---\n/).forEach(block => {
    const m = block.match(/##\s+(.+)\n\*\*Note ID:\*\*\s+`([^`]+)`\n([\s\S]*)$/);
    if (!m) return;
    let body = m[3].replace(/^\s*#{1,6}\s+.*\n/, '')                   // repeated heading
      .replace(/^\*\*Tests concepts in:\*\*.*$/gm, '').trim();
    if (body.replace(/[\s$\\]/g, '').length < 12) return;
    if (usedIds.has(m[2])) return;
    usedIds.add(m[2]);
    noteIds.add(m[2]);
    out.push({ id: m[2], topicId, type: 'note', subtopic: (m[1].trim().length > 70 ? m[1].trim().slice(0, 67).replace(/\s+\S*$/, '') + '…' : m[1].trim()).replace(/^\w/, c => c.toUpperCase()).replace(/^([A-Z ]+)$/, t => t.charAt(0) + t.slice(1).toLowerCase()), content: guard(tidy(body)), source: 'math_textbook' });
  });
  const firstNote = out.find(o => o.topicId === topicId && o.type === 'note');

  // ---- questions
  const read = f => fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
  const pools = [
    ...(read(path.join(D, 'chapters', `chapter_${nn}_questions.json`)) || []),
    ...((read(path.join(D, 'chapters', `chapter_${nn}_practice_session.json`)) || {}).questions || [])
  ];
  for (const b of fs.readdirSync(path.join(D, 'batches')).filter(f => /^batch_\d+\.json$/.test(f)))
    pools.push(...read(path.join(D, 'batches', b)).questions.filter(q => q.chapter === n));
  const seen = new Set();
  pools.forEach(q => {
    const stem = String(q.question || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (!stem || seen.has(stem) || usedIds.has(q.id)) return;
    usedIds.add(q.id);
    seen.add(stem);
    const steps = stepsMd(q.glassboxSteps);
    const link = noteIds.has(q.linked_note_id) ? q.linked_note_id : (firstNote && firstNote.id);
    const base = { id: q.id, topicId, subtopic: 'Practice', question: guard(tidy(q.question)), linksTo: link, source: 'math_textbook' };
    const sol = (head) => guard((head ? head + '\n\n' : '') + (steps ? '**Solution**\n\n' + steps : ''));
    if (q.type === 'mcq' && q.options && q.options.length && q.correctOption != null) {
      out.push({ ...base, type: 'mcq', options: q.options.map(o => guard(o.replace(/\.$/, ''))), correctOption: q.correctOption,
        answer: sol(guard(q.options[q.correctOption].replace(/\.$/, ''))) });
    } else if (q.type === 'true_false' && (q.correctAnswer === 'true' || q.correctAnswer === 'false') && !/\(i\)/.test(q.question)) {
      out.push({ ...base, type: 'true_false', correctAnswer: q.correctAnswer, answer: sol(guard(q.answer || '')) });
    } else { // fill-in, multi-part T/F and open practice are written answers
      out.push({ ...base, type: 'short_answer', answer: sol('**Answer:** ' + guard(String(q.answer || q.blankAnswer || '').trim())) });
    }
  });
}
// ---- figures: place each cropped textbook figure after the paragraph (or question) it sits next to
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
const figs = fs.existsSync(path.join(__dirname, 'math-figures.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'math-figures.json'), 'utf8')) : [];
let placed = 0, lost = 0;
chapters.forEach(ch => {
  const items = out.filter(o => o.topicId === ch.id);
  const notes = items.filter(o => o.type === 'note'), qs = items.filter(o => o.type !== 'note' && o.source === 'math_textbook');
  const plan = new Map(); // note -> [{block, where, fig}]
  const find = (snip, fromEnd) => {
    if (snip.length < 18) return null;
    for (const n of notes) {
      const blocks = n.content.split(/\n\n+/); let acc = '', ends = [];
      blocks.forEach(b => { acc += norm(b); ends.push(acc.length); });
      const at = acc.indexOf(snip);
      if (at >= 0) { const pos = fromEnd ? at + snip.length - 1 : at; return { n, block: ends.findIndex(e => e > pos), blocks }; }
    }
    return null;
  };
  const loose = [];
  figs.filter(f => f.chapter === ch.n).forEach(f => {
    const clean = t => t.replace(/\d*\s*[A-Za-z]*\s*Mathematics\s*[-–]\s*[IVX]+\s*\d*/gi, ' '), bs = norm(clean(f.before)).slice(-45), as = norm(clean(f.after)).slice(0, 45), md = `![Figure](${f.file})`;
    let hit = find(bs, true), where = 'after';
    if (!hit) { hit = find(as, false); where = 'before'; }
    if (hit) {
      const arr = plan.get(hit.n) || plan.set(hit.n, []).get(hit.n);
      arr.push({ block: hit.block, where, md }); placed++; return;
    }
    const q = qs.find(q => bs.length >= 18 && norm(q.question).includes(bs)) || qs.find(q => as.length >= 18 && norm(q.question).includes(as));
    if (q) { q.question += '\n\n' + md; placed++; return; }
    lost++; loose.push(f);
  });
  if (loose.length) { // not next to any note paragraph or question: a captioned gallery, in book order
    const cap = f => {
      const t = f.before.replace(/\$\$[\s\S]*?\$\$|\$[^$]*?\$/g, '…').replace(/\$/g, '').replace(/#+\s*/g, '').replace(/\s+/g, ' ').trim();
      return 'PDF page ' + f.page + (t.length > 20 ? ' · near: “…' + t.slice(-70).replace(/^\S*\s/, '') + '”' : '');
    };
    const body = loose.sort((a, b) => a.page - b.page).map((f, i) => `**Figure ${i + 1}** — ${cap(f)}\n\n![Figure](${f.file})`).join('\n\n');
    out.push({ id: 'MATH-FIG-CH' + ch.n, topicId: ch.id, type: 'note', subtopic: '📷 Figures from the textbook', content: guard(body), source: 'math_textbook' });
  }
  plan.forEach((arr, n) => {
    const blocks = n.content.split(/\n\n+/);
    const res = blocks.map(b => [b]);
    arr.forEach(a => (a.where === 'after' ? res[a.block].push(a.md) : res[a.block].unshift(a.md)));
    n.content = res.flat().join('\n\n');
  });
});
console.log('figures placed', placed, 'unplaced', lost);
fs.writeFileSync(path.join(__dirname, 'math.js'),
  `// StudyHub — ICSE Class 8 Mathematics (Understanding Mathematics) — auto-generated by build-math.js from math8\n` +
  `// ${out.filter(o => o.type === 'note').length} notes, ${out.filter(o => o.type !== 'note').length} questions\n` +
  `const MATH_DATA = ${JSON.stringify(out)};\nconst MATH_CHAPTERS = ${JSON.stringify(chapters)};\n`);
const c = {}; out.forEach(o => c[o.type] = (c[o.type] || 0) + 1);
console.log(c, chapters.length, 'chapters');
