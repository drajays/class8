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

const { parseChapter } = require('./math-source-parse.js');
const OCRDIR = process.argv[3] || path.join(require('os').homedir(), 'Downloads', 'math');
const figs = fs.existsSync(path.join(__dirname, 'math-figures.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'math-figures.json'), 'utf8')) : [];
const figByKey = {}; figs.forEach(f => { figByKey[f.key] = f.file; });
const words = t => new Set((String(t).toLowerCase().match(/[a-z]{4,}|\d+/g) || []));
const cheat = {}, mind = {};
const authored = require('./math-authored.js');
const sentences = md => md.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ').replace(/\*\*/g, '').split(/\n+/).flatMap(l => l.split(/(?<=[.;])\s+(?=[A-Z$])/)).map(x => x.replace(/\s+/g, ' ').trim());
const DEF = /\b(is|are|called|defined|known|said|states|property|formula|rule|means|equal|equals|sum|product|always|only|if)\b/i;
const goodDef = x => x.length >= 35 && x.length <= 170 && /^[A-Z$(]/.test(x) && !/[:?,]$/.test(x) && !/^\(/.test(x) && !/\bthen$/.test(x) && DEF.test(x) && x.split(' ').length >= 6 &&
  !/^\|/.test(x) && !/\\underline|\\uwave|adjoining|following|given figure|\b(Example|Solution|Exercise|Activity|Fig\.|Q\d)\b|\b(find|show that|prove that|verify|calculate|evaluate|simplify|write|name|draw|construct)\b/i.test(x) &&
  (x.match(/\$/g) || []).length % 2 === 0;
const cap = t => t === t.toUpperCase() && /[A-Z]{3}/.test(t) ? t.charAt(0) + t.slice(1).toLowerCase() : t;

const chapters = [];
for (let n = 1; n <= 20; n++) {
  const nn = String(n).padStart(2, '0');
  const src = JSON.parse(fs.readFileSync(path.join(D, 'chapters', `chapter_${nn}_source.json`), 'utf8'));
  const topicId = 'math-ch' + n;
  chapters.push({ id: topicId, n, title: src.title });

  // ---- notes: the whole textbook chapter, in book order, from the original OCR
  const noteIds = new Set(), noteWords = new Map(), secsOut = [];
  const secs = parseChapter(path.join(OCRDIR, `chapter_${nn}_source.md`), figByKey);
  let k = 0;
  secs.forEach(sec => {
    k++;
    const id = `MATH-C${n}-S${String(k).padStart(2, '0')}`;
    let title = sec.kind === 'example' ? `Example${sec.num ? ' ' + sec.num : ''} — ${sec.title.replace(/\$[^$]*\$?/g, '…')}` : cap(sec.title);
    title = title.replace(/[*#]/g, '').trim();
    if (title.length > 72) title = title.slice(0, 70).replace(/\s+\S*$/, '') + '…';
    const body = tidy(sec.blocks.join('\n\n'));
    const labels = { theory: '', example: '', exercise: '✏️ ', practice: '🎯 ', summary: '⭐ ' };
    const note = { id, topicId, type: 'note', subtopic: `${k}. ${labels[sec.kind] || ''}${title}`, content: guard(body), source: 'math_textbook', kind: sec.kind };
    usedIds.add(id); noteIds.add(id); noteWords.set(id, words(body));
    out.push(note); secsOut.push({ ...sec, id, body, title });
  });
  const firstNote = secsOut[0] && secsOut[0].id;
  const theory = secsOut.filter(x => x.kind === 'theory' || x.kind === 'summary');

  // ---- revision aids built from the textbook's own theory and summary
  const au = authored[n];
  const defs = [], forms = [], summ = [];
  theory.forEach(sec => {
    if (/^(activity|introduction)/i.test(sec.title)) return;
    sentences(sec.body).forEach(x => { if (goodDef(x)) defs.push({ text: x, noteId: sec.id }); });
    sec.body.split(/\n+/).forEach(l => {
      const t = l.trim();
      if (/^\$\$?[^$]{6,150}\$\$?[.,]?$/.test(t) && t.length <= 120 && /=|\\approx|\\propto/.test(t) && !/Example|\\therefore|\\text\{\s*(and|or)/.test(t)) forms.push({ text: t.replace(/[.,]$/, ''), noteId: sec.id });
    });
    if (sec.kind === 'summary') sec.body.split(/\n+/).forEach(l => { const t = l.replace(/^[•\-*\d.)\s]+/, '').trim(); if (t.length > 20) summ.push({ text: t, noteId: sec.id }); });
  });
  const uniq = arr => { const s = new Set(); return arr.filter(x => { const k2 = x.text.toLowerCase().replace(/[^a-z0-9]/g, ''); if (s.has(k2)) return false; s.add(k2); return true; }); };
  const D2 = uniq(defs), F2 = uniq(forms), S2 = uniq(summ);
  const pick = (arr, m) => arr.length <= m ? arr : Array.from({ length: m }, (_, i) => arr[Math.floor(i * arr.length / m)]);
  const topTen = pick(S2.length >= 6 ? S2 : D2, 10);
  const groups = [];
  if (S2.length) groups.push({ id: 'summary', title: '⭐ Textbook summary', items: S2.slice(0, 30) });
  if (D2.length) groups.push({ id: 'defs', title: '📘 Definitions & rules', items: pick(D2, 24) });
  if (F2.length) groups.push({ id: 'formulas', title: '🧮 Formulas & identities', items: pick(F2, 24) });
  if (!au && topTen.length) cheat['math-ch' + n] = { topicId, chapterTitle: src.title, topTen: topTen.map(x => x.text), groups: groups.map(g => ({ ...g, items: g.items.map(i => ({ text: i.text, noteId: i.noteId })) })) };
  const secFor = kw => { const k2 = String(kw || '').toLowerCase(); const hit = k2 && secsOut.find(x => !/^introduction$/i.test(x.title) && x.title.toLowerCase().includes(k2)); return (hit || theory.find(x => !/^introduction/i.test(x.title)) || secsOut[0] || {}).id; };
  if (au) {
    const g2 = au.groups.map(([title, items], gi) => ({ id: 'g' + gi, title, items: items.map(([text, at]) => ({ text, noteId: secFor(at) })) }));
    if (S2.length) g2.push({ id: 'summary', title: '⭐ Textbook summary', items: S2.slice(0, 30) });
    cheat['math-ch' + n] = { topicId, chapterTitle: src.title, topTen: au.top, groups: g2,
      wordCards: au.words.map(([word, meaning], i) => ({ id: 'w' + String(i + 1).padStart(2, '0'), word, meaning, noteId: secFor(word) })) };
    const br = au.map.map(([label, concepts, at], i) => ({ id: 'br-' + (i + 1), label, concepts, noteIds: [secFor(at || label)] }));
    mind['math-ch' + n] = { topicId, chapterTitle: src.title, center: src.title, maps: [{ id: 'map-1', title: src.title, center: src.title, flow: br.map(b => ({ id: b.id, label: b.label })), branches: br }] };
  }
  const branches = theory.filter(sec => !/^(activity|introduction|summary)/i.test(sec.title) && sec.kind === 'theory').map((sec, i) => {
    const c = sentences(sec.body).filter(x => goodDef(x) && x.length <= 110).slice(0, 3);
    return { id: 'br-' + (i + 1), label: sec.title, concepts: c, noteIds: [sec.id] };
  }).filter(b => b.concepts.length).slice(0, 12);
  if (!au && branches.length >= 2) mind['math-ch' + n] = { topicId, chapterTitle: src.title, center: src.title, maps: [{ id: 'map-1', title: src.title, center: src.title, flow: branches.map(b => ({ id: b.id, label: b.label })), branches }] };

  // ---- chapter overview note (first in the list)
  const ex = secsOut.filter(x => x.kind === 'example').length, exr = secsOut.filter(x => x.kind === 'exercise').map(x => x.title);
  if (secsOut.length) {
    const ov = `**What this chapter covers**\n\n${theory.filter(x => /^[A-Z]/.test(x.title) && !/^(activity|summary|introduction)|adjoining|figure|following/i.test(x.title)).slice(0, 14).map(x => '• ' + x.title).join('\n')}\n\n**How to study it:** read each topic, then work through its solved examples before attempting the exercises.\n\n**Inside:** ${ex} worked examples · ${exr.length} exercise set${exr.length === 1 ? '' : 's'}${exr.length ? ' (' + exr.join(', ') + ')' : ''} ${F2.length ? '· ' + F2.length + ' key formulas ' : ''}${S2.length ? '· textbook summary' : ''}`;
    out.push({ id: `MATH-C${n}-S00`, topicId, type: 'note', subtopic: '0. 🧭 Chapter at a glance', content: guard(ov), source: 'math_textbook', kind: 'overview' });
    noteIds.add(`MATH-C${n}-S00`);
  }
  const bestNote = q => {
    const qw = words(q.question + ' ' + (q.answer || ''));
    let best = null, bs = 0;
    noteWords.forEach((w, id) => { let c = 0; qw.forEach(t => { if (w.has(t)) c++; }); const sc = c / Math.sqrt(w.size + 20); if (sc > bs) { bs = sc; best = id; } });
    return best || firstNote;
  };

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
    const link = bestNote(q);
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
// ---- figures that belong to a question stem (notes already carry theirs inline)
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
let placed = 0;
chapters.forEach(ch => {
  const qs = out.filter(o => o.topicId === ch.id && o.type !== 'note' && o.source === 'math_textbook');
  figs.filter(f => f.chapter === ch.n).forEach(f => {
    const clean = t => t.replace(/\d*\s*[A-Za-z]*\s*Mathematics\s*[-–]\s*[IVX]+\s*\d*/gi, ' '), bs = norm(clean(f.before)).slice(-45), as = norm(clean(f.after)).slice(0, 45);
    const q = qs.find(q => bs.length >= 18 && norm(q.question).includes(bs)) || qs.find(q => as.length >= 18 && norm(q.question).includes(as));
    if (q) { q.question += '\n\n![Figure](' + f.file + ')'; placed++; }
  });
});
console.log('figures attached to questions', placed);
fs.writeFileSync(path.join(__dirname, 'math.js'),
  `// StudyHub — ICSE Class 8 Mathematics (Understanding Mathematics) — auto-generated by build-math.js from math8\n` +
  `// ${out.filter(o => o.type === 'note').length} notes, ${out.filter(o => o.type !== 'note').length} questions\n` +
  `const MATH_DATA = ${JSON.stringify(out.map(o => { const { kind, ...r } = o; return r; }))};\nconst MATH_CHAPTERS = ${JSON.stringify(chapters)};\nconst MATH_CHEATSHEET_DATA = ${JSON.stringify(cheat)};\nconst MATH_MINDMAP_DATA = ${JSON.stringify(mind)};\n`);
const c = {}; out.forEach(o => c[o.type] = (c[o.type] || 0) + 1);
console.log(c, chapters.length, 'chapters');
