#!/usr/bin/env node
/**
 * Build biology-olympiad.js for StudyHub app integration.
 * - BIOLOGY_OLYMPIAD_IDS: curated question IDs (audit set minus machine-generated items,
 *   plus hand-authored biology.js objective questions)
 * - BIOLOGY_OLYMPIAD_COMPANION: descriptive → MCQ companions for Olympiad practice
 *
 * Run: node scripts/build-biology-olympiad-app.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { convertDescriptiveToMcq } = require('./descriptive-to-mcq');

const ROOT = path.join(__dirname, '..');
const INPUT = path.join(ROOT, 'data', 'biology-audit-selected-v2.json');
const OUTPUT = path.join(ROOT, 'biology-olympiad.js');
const AUTHORED = path.join(ROOT, 'biology.js');

// neet-* items were generated from OCR sentences: wrong answer keys, learning outcomes as
// options ("List blood groups…"), fragments ("CODE-Nogh…"). Never show them.
const isGenerated = (id) => /^neet-/.test(id);
// Companion stems of this shape pair two long OCR paragraphs as options — unreadable.
const isBadCompanionStem = (stem) => /CORRECTLY distinguishes/i.test(stem || '');

function authoredObjectiveIds() {
  const arr = new Function(fs.readFileSync(AUTHORED, 'utf8') + ';return BIOLOGY_DATA;')();
  return arr.filter((q) => ['mcq', 'true_false', 'fill_blank'].includes(q.type)).map((q) => q.id);
}

function shouldBeDescriptive(q) {
  const text = `${q.question} ${q.subtopic || ''}`;
  const qn = q.question || '';
  if (/\([a-d]\)/i.test(text)) return true;
  if (/long answer|experiment|case study|answer the following|odd one out|identify the following/i.test(text)) return true;
  if (/^Give reason|^Differentiate|^Distinguish between|^Compare .+ with|^Explain why|^List |^State (any )?(three|four|five|two)/i.test(qn)) return true;
  if ((q.answer || '').includes('\n') && (q.answer || '').split('\n').length > 2) return true;
  if (qn.length > 200) return true;
  if (/^Study the|^Observe the|^Draw|^Label|^Describe the experiment/i.test(qn)) return true;
  return false;
}

function isBannedOption(text) {
  return /all of the above|none of these|both a and c|all of these/i.test(text || '');
}

function isValidOptions(options) {
  if (!Array.isArray(options)) return false;
  const clean = options.filter((o) => o && String(o).trim());
  if (clean.length !== 4) return false;
  if (clean.some(isBannedOption)) return false;
  return new Set(clean.map((o) => o.toLowerCase())).size === 4;
}

function cleanQuestion(q) {
  const out = { ...q };
  delete out.score;
  delete out.source;
  return out;
}

function buildCompanionMcq(q, mcqItem) {
  return {
    id: `bio-ol-${q.id}`,
    topicId: q.topicId,
    type: 'mcq',
    subtopic: 'Olympiad / NEET Companion MCQ',
    question: mcqItem.stem,
    options: mcqItem.options,
    correctOption: mcqItem.correctOption,
    answer: mcqItem.whyCorrect || q.answer,
    teacherTip: q.teacherTip,
    examTip: q.examTip,
    linksTo: q.linksTo || q.id,
    source: 'olympiad',
    qualityStars: (q.score || 0) >= 10 ? 5 : 4,
    qualityLevel: 'Olympiad',
  };
}

function main() {
  const raw = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  const ids = [...new Set([...raw.map((q) => q.id).filter((id) => !isGenerated(id)), ...authoredObjectiveIds()])];

  const companions = [];
  for (const q of raw) {
    if (q.type !== 'short_answer') continue;
    let mcq = null;
    if (shouldBeDescriptive(q)) {
      mcq = convertDescriptiveToMcq(q);
    } else {
      mcq = convertDescriptiveToMcq(q);
    }
    if (mcq && isValidOptions(mcq.options) && !isBadCompanionStem(mcq.stem)) {
      companions.push(buildCompanionMcq(q, mcq));
    }
  }

  const header = `// ============================================================
// StudyHub — ICSE Class 8 Biology Olympiad / NEET Foundation Bank
// Curated 50% audit set + companion MCQs for descriptive items.
// Regenerate: node scripts/build-biology-olympiad-app.js
// ============================================================
`;

  const body = [
    `const BIOLOGY_OLYMPIAD_IDS = ${JSON.stringify(ids, null, 2)};`,
    '',
    `const BIOLOGY_OLYMPIAD_COMPANION = [\n${companions.map((c) => JSON.stringify(c)).join(',\n')}\n];`,
  ].join('\n');

  fs.writeFileSync(OUTPUT, header + body + '\n');

  const byChapter = {};
  ids.forEach((id) => {
    const q = raw.find((x) => x.id === id);
    if (q) byChapter[q.topicId] = (byChapter[q.topicId] || 0) + 1;
  });

  console.log('biology-olympiad.js written');
  console.log('  Curated IDs:', ids.length);
  console.log('  Companion MCQs:', companions.length);
  console.log('  By chapter:', byChapter);
}

main();
