#!/usr/bin/env node
/**
 * Merge PaddleOCR JSON into physics-qbank.js (keeps existing entries, adds missing Q&A).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const OCR_JSON = path.join(ROOT, 'data', 'physics-qbank-ocr.json');
const QBANK_OUT = path.join(ROOT, 'physics-qbank.js');

const CHAPTER_TOPIC = {
  1: 'ch1-matter',
  2: 'ch2-measurement',
  3: 'ch3-force',
  4: 'ch4-energy',
  5: 'ch5-light',
  6: 'ch6-heat',
  7: 'ch7-sound',
  8: 'ch8-electricity'
};

const EXERCISE_CHAPTER = {
  '1.1': 1, '1.2': 1,
  '2.1': 2, '2.2': 2, '2.3': 2,
  '3.1': 3, '3.2': 3, '3.3': 3,
  '4.1': 4, '4.2': 4, '4.3': 4,
  '5.1': 5, '5.2': 5, '5.3': 5, '5.4': 5,
  '6.1': 6, '6.2': 6,
  '7.1': 7, '7.2': 7,
  '8.1': 8, '8.2': 8, '8.3': 8
};

function extractOcrText(data) {
  const parts = [];
  for (const pg of Object.values(data)) {
    if (pg.markdown?.text) parts.push(pg.markdown.text);
    const list = pg.prunedResult?.parsing_res_list;
    if (Array.isArray(list)) {
      for (const b of list) {
        if (b.block_content) parts.push(b.block_content);
      }
    }
  }
  return parts.join('\n');
}

function loadQbank(file) {
  const code = fs.readFileSync(file, 'utf8');
  const ctx = vm.createContext({});
  vm.runInContext(code + '\nthis.QB = PHYSICS_QBANK;', ctx);
  const qb = ctx.QB;
  if (!Array.isArray(qb)) {
    throw new Error(`PHYSICS_QBANK is not an array in ${file}`);
  }
  return qb;
}

function loadExistingQbank() {
  if (!fs.existsSync(QBANK_OUT)) {
    console.warn('[StudyHub] No physics-qbank.js found; starting from an empty question bank.');
    return [];
  }
  return loadQbank(QBANK_OUT);
}

function normKey(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 80);
}

function isDuplicateQuestion(q, existing) {
  const k = normKey(q);
  if (!k.length) return true; // empty / unusable fragment
  const minFuzzyLen = 12;
  for (const item of existing) {
    const ek = normKey(item.question);
    if (!ek) continue;
    if (k === ek) return true;
    // Substring match only when both keys are long enough to be reliable
    if (k.length >= minFuzzyLen && ek.length >= minFuzzyLen) {
      const prefixLen = Math.min(35, k.length, ek.length);
      const prefix = ek.slice(0, prefixLen);
      if (k.includes(prefix) || ek.includes(k.slice(0, prefixLen))) return true;
    }
  }
  return false;
}

function detectChapter(text, subtopic, currentChapter) {
  const t = text + ' ' + subtopic;
  const m = t.match(/EXERCISE\s+(\d+\.\d+)/i);
  if (m && EXERCISE_CHAPTER[m[1]]) return EXERCISE_CHAPTER[m[1]];
  const ch = t.match(/CHAPTER\s*(\d+)/i);
  if (ch) return parseInt(ch[1], 10);
  if (/FORCE AND PRESSURE/i.test(t)) return 3;
  if (/LIGHT ENERGY|REFRACTION|LENS/i.test(t)) return 5;
  if (/HEAT TRANSFER|CONDUCTION|CONVECTION/i.test(t) && !/MATTER/i.test(t)) return 6;
  if (/\bSOUND\b/i.test(t) && !/LIGHT/i.test(t)) return 7;
  if (/ELECTRIC|CIRCUIT|FUSE|BATTERY|ELECTROSCOPE/i.test(t)) return 8;
  if (/MATTER|MOLECULE|KINETIC|MENISCUS/i.test(t)) return 1;
  if (/MEASUREMENT|VERNIER|SCREW GAUGE/i.test(t)) return 2;
  if (/ENERGY|WORK|POWER|LATENT/i.test(t)) return 4;
  return currentChapter;
}

function cleanQuestion(raw) {
  let q = raw
    .replace(/^#+\s*/gm, '')
    .replace(/^\s*(\d+)\)\s*/, '$1) ')
    .replace(/^##\s*/, '')
    .trim();
  // If answer leaked into question after inline "A." split it
  const inlineA = q.search(/\nA\.\s|\nAns:\s/i);
  if (inlineA > 20) q = q.slice(0, inlineA).trim();
  return q;
}

function cleanAnswer(raw) {
  if (!raw || raw.length < 3) return '';
  return raw.replace(/^\s*A\.\s*/i, '').replace(/^\s*Ans:\s*/i, '').trim();
}

function parseQuestionsFromOcr(full) {
  const items = [];
  let currentChapter = 1;
  let currentSubtopic = 'Question Bank';

  // Split document into segments starting with numbered / Q questions
  const segments = full.split(
    /(?=\n\s*(?:##\s*)?(?:\d+\)|Q\s*\d+\.)[\s\S])/i
  );

  for (const seg of segments) {
    const trimmed = seg.trim();
    if (trimmed.length < 25) continue;
    if (!/^(?:##\s*)?(?:\d+\)|Q\s*\d+\.)/i.test(trimmed)) continue;

    const ex = trimmed.match(/EXERCISE\s+(\d+\.\d+)/i);
    if (ex) {
      currentSubtopic = ex[0].replace(/\s+/g, ' ');
      if (EXERCISE_CHAPTER[ex[1]]) currentChapter = EXERCISE_CHAPTER[ex[1]];
    }

    currentChapter = detectChapter(trimmed, currentSubtopic, currentChapter);
    const topicId = CHAPTER_TOPIC[currentChapter] || 'ch1-matter';

    const parts = trimmed.split(/\n(?=A\.\s|Ans:\s)/i);
    const qPart = parts[0];
    let aPart = parts.slice(1).join('\n');

    let question = cleanQuestion(qPart);
    let answer = cleanAnswer(aPart);

    // Definition-style: "6) Define: X\n\nX – definition"
    if (!answer || answer.length < 15) {
      const defSplit = question.split(/\n\n+/);
      if (defSplit.length >= 2 && /define|differentiate|explain|state|give reason/i.test(defSplit[0])) {
        question = defSplit[0].trim();
        answer = defSplit.slice(1).join('\n\n').trim();
      }
    }

    if (question.length < 12) continue;
    if (answer.length < 8) continue;

    items.push({
      topicId,
      subtopic: currentSubtopic,
      question,
      answer
    });
  }

  return items;
}

function assignIds(items, existing) {
  const counters = {};
  for (const e of existing) {
    const m = e.id.match(/^pqb-ch\d+-(\w+)-(\d+)$/);
    if (m) {
      const key = `${e.topicId}-${m[1]}`;
      counters[key] = Math.max(counters[key] || 0, parseInt(m[2], 10));
    }
  }

  return items.map(p => {
    const ch = Object.entries(CHAPTER_TOPIC).find(([, tid]) => tid === p.topicId)?.[0] || '1';
    const slug = p.topicId.replace(/^ch\d+-/, '') || 'x';
    const key = `${p.topicId}-${slug}`;
    counters[key] = (counters[key] || 0) + 1;
    const n = counters[key];
    return {
      id: `pqb-ch${ch}-${slug}-${n}`,
      topicId: p.topicId,
      type: 'short_answer',
      subtopic: p.subtopic,
      question: p.question,
      answer: p.answer
    };
  });
}

function writeQbankFile(items) {
  const header = `// ============================================================
// ICSE CLASS 8 PHYSICS — QUESTION BANK
// Source: Class-8 Physics Question Bank (Ravinder Kaur) + PaddleOCR JSON
// ${items.length} short/long-answer questions across all 8 physics chapters.
// Variable: PHYSICS_QBANK  (merged in app.js)
// Regenerate: node scripts/build-physics-qbank-from-ocr.js
// ============================================================
const PHYSICS_QBANK = `;

  const body = JSON.stringify(items, null, 1);
  fs.writeFileSync(QBANK_OUT, header + body + ';\n', 'utf8');
}

function main() {
  const data = JSON.parse(fs.readFileSync(OCR_JSON, 'utf8'));
  const full = extractOcrText(data);
  const parsed = parseQuestionsFromOcr(full);
  const existing = loadExistingQbank();

  const toAdd = [];
  for (const p of parsed) {
    if (isDuplicateQuestion(p.question, existing)) continue;
    if (isDuplicateQuestion(p.question, toAdd)) continue;
    toAdd.push(p);
  }

  const newEntries = assignIds(toAdd, existing);
  const merged = [...existing, ...newEntries];

  console.log('OCR parsed candidates:', parsed.length);
  console.log('Existing qbank:', existing.length);
  console.log('New unique items:', newEntries.length);
  console.log('Final total:', merged.length);

  writeQbankFile(merged);
  console.log('Wrote', QBANK_OUT);
}

main();
