#!/usr/bin/env node
/**
 * Textbook page references for every note (all subjects).
 *
 * Reads the PaddleOCR scans of the students' textbooks, works out the printed page number of every
 * scanned page, and matches each app note to the page(s) it comes from. Writes page-refs.js:
 *   const NOTE_PAGES = { "<noteId>": "p. 96" | "pp. 95–96", … };
 *
 * Scans (not all live in the repo; override the folder with BOOKS_DIR=/path):
 *   history/civics  history8/data/history and civics.pdf_by_PaddleOCR-VL-1.6.json   (in repo)
 *   geography       geography8/data/geography.pdf_by_PaddleOCR-VL-1.6.json         (in repo)
 *   physics         $BOOKS_DIR/physics8/physics.pdf_by_PaddleOCR-VL-1.6.json
 *   chemistry       $BOOKS_DIR/chemistry8/chemistry.pdf_by_PaddleOCR-VL-1.6.json
 *   biology         $BOOKS_DIR/biology8/biology8_compressed.pdf_by_PaddleOCR-VL-1.6.json
 * A missing scan is skipped with a warning; its notes simply get no page chip.
 *
 * Usage: node scripts/build-page-refs.js   (re-run after changing notes)
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const BOOKS_DIR = process.env.BOOKS_DIR || os.homedir();

// Chapter start = index of the scanned page where the chapter begins (0-based, found by inspecting
// titles in the scan). A chapter runs until the next start in scan order, or until its exercise pages.
const BOOKS = [
  {
    name: 'History & Civics (Frank Modern Certificate)',
    file: path.join(ROOT, 'history8/data/history and civics.pdf_by_PaddleOCR-VL-1.6.json'),
    starts: {
      'hist-ch1': 3, 'hist-ch2': 17, 'hist-ch3': 29, 'hist-ch4': 37, 'hist-ch5': 54, 'hist-ch6': 62, 'hist-ch7': 71,
      'hist-ch8': 83, 'hist-ch9': 99, 'hist-ch10': 108, 'hist-ch11': 118, 'hist-ch12': 126, 'hist-ch13': 138,
      'civ-ch1': 150, 'civ-ch2': 166
    }
  },
  {
    name: 'Geography (Voyage)',
    file: path.join(ROOT, 'geography8/data/geography.pdf_by_PaddleOCR-VL-1.6.json'),
    starts: { 'geo-ch1': 7, 'geo-ch2': 27, 'geo-ch3': 42, 'geo-ch4': 55, 'geo-ch5': 67, 'geo-ch6': 93, 'geo-ch7': 116, 'geo-ch8': 150 }
  },
  {
    name: 'Physics',
    file: path.join(BOOKS_DIR, 'physics8/physics.pdf_by_PaddleOCR-VL-1.6.json'),
    starts: {
      'ch1-matter': 2, 'ch2-measurement': 22, 'ch3-force': 40, 'ch4-energy': 60, 'ch5-light': 79,
      'ch6-heat': 98, 'ch7-sound': 111, 'ch8-electricity': 125
    }
  },
  {
    name: 'Chemistry (Concise)',
    file: path.join(BOOKS_DIR, 'chemistry8/chemistry.pdf_by_PaddleOCR-VL-1.6.json'),
    starts: {
      'chem-ch1': 2, 'chem-ch2': 16, 'chem-ch3': 25, 'chem-ch4': 47, 'chem-ch5': 67, 'chem-ch6': 84,
      'chem-ch7': 108, 'chem-ch8': 123, 'chem-ch9': 146
    }
  },
  {
    // Book order differs from the app: Nervous (45) comes before Circulatory (50).
    name: 'Biology',
    file: path.join(BOOKS_DIR, 'biology8/biology8_compressed.pdf_by_PaddleOCR-VL-1.6.json'),
    starts: {
      'bio-ch1': 0, 'bio-ch2': 10, 'bio-ch3': 21, 'bio-ch4': 24, 'bio-ch5': 38, 'bio-ch7': 45,
      'bio-ch6': 50, 'bio-ch8': 57, 'bio-ch9': 68
    }
  }
];

const norm = t => String(t || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const strip = t => String(t || '').replace(/<[^>]+>/g, ' ').replace(/[#*$\\]/g, ' ');
const STOP = new Set(('the and of in on to a an for with from by as at is are was were its their big picture how why ' +
  'what who when where under after before into over this that these those or part section introduction notes key ' +
  'chapter important which also have has been more than they them there other such used uses using').split(' '));

function loadScan(file) {
  const pages = JSON.parse(fs.readFileSync(file, 'utf8')).map((p, i) => {
    const b = p.prunedResult.parsing_res_list;
    return {
      i,
      nums: b.filter(x => x.block_label === 'number').map(x => parseInt(x.block_content.trim(), 10)).filter(Number.isFinite),
      text: norm(strip(b.filter(x => !/image|number|header|footer/.test(x.block_label)).map(x => x.block_content).join(' '))),
      titles: b.filter(x => /title/.test(x.block_label)).map(x => norm(strip(x.block_content)))
    };
  });
  // Printed page numbers: real ones increase through the book; misreads (chapter numbers such as "2" or
  // "4" in a running header, "①", "06") break that order. Keep the longest increasing run of numbers.
  const numbered = pages.flatMap(p => p.nums.map(n => ({ i: p.i, n }))).filter(q => q.n > 0 && q.n < 1000);
  const len = numbered.map(() => 1), prev = numbered.map(() => -1);
  numbered.forEach((q, k) => {
    for (let j = 0; j < k; j++) {
      const r = numbered[j];
      if (r.i < q.i && r.n < q.n && len[j] + 1 > len[k]) { len[k] = len[j] + 1; prev[k] = j; }
    }
  });
  const trusted = [];
  for (let k = len.indexOf(Math.max(...len)); k >= 0; k = prev[k]) trusted.unshift(numbered[k]);
  pages.forEach(p => {
    // Count on from the nearest trusted number on the left (right if none); pages continue after gaps.
    const left = trusted.filter(q => q.i <= p.i).pop();
    const right = trusted.find(q => q.i >= p.i);
    const q = left || right;
    p.printed = q ? q.n + (p.i - q.i) : null;
  });
  return pages;
}

function loadNotes() {
  const ctx = { window: {}, console };
  vm.createContext(ctx);
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const files = [...html.matchAll(/<script src="([^"?]+\.js)/g)].map(m => m[1])
    .filter(f => !/^(app|exam-panel|github-sync|snowy|princess|page-refs)\.js$/.test(f));
  for (const f of files) {
    try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8').replace(/^const /gm, 'var '), ctx); } catch (e) { /* non-data script */ }
  }
  const byTopic = {};
  const seen = new Set();
  for (const k of Object.keys(ctx)) {
    if (!Array.isArray(ctx[k])) continue;
    for (const x of ctx[k]) {
      if (!x || x.type !== 'note' || !x.topicId || seen.has(x.id)) continue;
      seen.add(x.id);
      (byTopic[x.topicId] = byTopic[x.topicId] || []).push(x);
    }
  }
  return byTopic;
}

function termsFor(note) {
  const content = String(note.content || '');
  const bold = [...content.matchAll(/\*\*([^*]{3,40})\*\*/g)].map(m => norm(m[1])).filter(t => t.length > 3);
  const sub = norm(String(note.subtopic || '').replace(/^\d+\.\s*/, '')).split(' ').filter(w => w.length > 3 && !STOP.has(w));
  const body = norm(strip(content.slice(0, 600))).split(' ').filter(w => w.length >= 7 && !STOP.has(w));
  return { sub: new Set(sub), weighted: [...new Set([...bold, ...sub])], body: [...new Set(body)] };
}

const fmt = (a, b) => (a == null ? null : a === b || b == null ? `p. ${a}` : `pp. ${Math.min(a, b)}–${Math.max(a, b)}`);

function main() {
  const notesByTopic = loadNotes();
  const out = {};
  let matched = 0, broad = 0;
  for (const book of BOOKS) {
    if (!fs.existsSync(book.file)) { console.warn(`⚠️  ${book.name}: scan not found at ${book.file} — skipped`); continue; }
    const pages = loadScan(book.file);
    const order = Object.entries(book.starts).sort((a, b) => a[1] - b[1]);
    order.forEach(([topicId, lo], k) => {
      const hi = k + 1 < order.length ? order[k + 1][1] - 1 : pages.length - 1;
      // Skip exercise/worksheet pages (they repeat terms but are not where a topic is taught).
      const isExercise = p => p.titles.some(t => /^(exercises?|exercise [iv]+|keywords|key words|recapitulation|worksheet|map work|[a-h] map work|reflective learning|answer the following)\b/.test(t));
      const cand = pages.filter(p => p.i >= lo && p.i <= hi && !isExercise(p));
      const last = cand.length ? cand[cand.length - 1].i : hi;
      const chapterRange = fmt(pages[lo].printed, pages[last].printed);
      for (const note of notesByTopic[topicId] || []) {
        const t = termsFor(note);
        const titleHit = p => p.titles.reduce((a, x) => Math.max(a, x.split(' ').filter(w => t.sub.has(w)).length), 0);
        const scored = cand.map(p => ({
          p,
          s: t.weighted.reduce((a, w) => a + (p.text.includes(w) ? (w.includes(' ') ? 2 : 1) : 0), 0)
            + t.body.reduce((a, w) => a + (p.text.includes(w) ? 0.5 : 0), 0)
            + 6 * titleHit(p)
        })).sort((a, b) => b.s - a.s || a.p.i - b.p.i);
        const best = scored[0];
        const overview = /big picture|overview|introduction|three organs|two revolutions|what is nationalism|three phases/i.test(note.subtopic || '');
        if (!best || overview || best.s < 8) { out[note.id] = chapterRange; broad++; continue; }
        const next = scored.find(x => Math.abs(x.p.i - best.p.i) === 1);
        out[note.id] = next && next.s >= best.s * 0.8 ? fmt(best.p.printed, next.p.printed) : fmt(best.p.printed);
        matched++;
      }
    });
    console.log(`${book.name}: pages ${pages[0].printed}–${pages[pages.length - 1].printed}`);
  }
  Object.keys(out).forEach(k => { if (!out[k]) delete out[k]; });
  fs.writeFileSync(path.join(ROOT, 'page-refs.js'),
    '// Textbook page for each note — generated by scripts/build-page-refs.js from the OCR scans of the textbooks.\n' +
    'const NOTE_PAGES = ' + JSON.stringify(out, Object.keys(out).sort(), 0).replace(/,"/g, ',\n"') + ';\n');
  console.log(`page-refs.js: ${Object.keys(out).length} notes (${matched} to a specific page, ${broad} to the chapter range)`);
}

main();
