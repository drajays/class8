#!/usr/bin/env node
/**
 * Enrich physics-authored notes with facts extracted from linked MCQs/T-F/fill blanks.
 * Adds "**From linked questions:**" block to explanation if not already present.
 *
 * Run: node scripts/enrich-physics-notes-from-mcqs.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

const NOTE_FILES = ['data/physics-authored/notes-ch1-4.json', 'data/physics-authored/notes-ch5-8.json'];
const QUESTION_FILES = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'diagrams'].map(
  (f) => `data/physics-authored/${f}.json`
);

function firstSentence(text) {
  if (!text) return '';
  const clean = String(text).replace(/\n+/g, ' ').trim();
  const m = clean.match(/^[^.!?]+[.!?]/);
  return m ? m[0].trim() : clean.slice(0, 120);
}

function extractMcqFact(q) {
  const ans = q.answer || '';
  if (q.type === 'mcq' && Array.isArray(q.options) && q.correctOption >= 0) {
    const correct = q.options[q.correctOption];
    const why = firstSentence(ans);
    if (why.length > 20) return `• ${why}`;
    return `• Correct: **${correct}** — ${why || 'see linked MCQ'}`;
  }
  if (q.type === 'true_false') {
    return `• T/F: "${firstSentence(q.question)}" → **${q.correctAnswer}** — ${firstSentence(ans)}`;
  }
  if (q.type === 'fill_blank') {
    return `• Fill: **${q.blankAnswer}** — ${firstSentence(ans)}`;
  }
  if (q.type === 'short_answer') {
    return `• ${firstSentence(ans)}`;
  }
  return null;
}

function uniqueFacts(facts, limit = 8) {
  const seen = new Set();
  const out = [];
  for (const f of facts) {
    const key = f.toLowerCase().replace(/\*\*/g, '').slice(0, 80);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= limit) break;
  }
  return out;
}

function stripOldMcqBlock(explanation) {
  if (!explanation) return '';
  return explanation.replace(/\n\n\*\*From linked questions:\*\*[\s\S]*$/, '').trim();
}

function main() {
  const notes = NOTE_FILES.flatMap((f) => read(f));
  const questions = QUESTION_FILES.flatMap((f) => read(f));

  const byNote = {};
  for (const q of questions) {
    if (!q.linksTo) continue;
    if (!byNote[q.linksTo]) byNote[q.linksTo] = [];
    byNote[q.linksTo].push(q);
  }

  let enriched = 0;
  for (const n of notes) {
    const linked = byNote[n.id] || [];
    if (!linked.length) continue;

    const facts = uniqueFacts(
      linked
        .sort((a, b) => {
          const rank = { mcq: 0, true_false: 1, fill_blank: 2, short_answer: 3, match: 4 };
          return (rank[a.type] ?? 5) - (rank[b.type] ?? 5);
        })
        .map(extractMcqFact)
        .filter(Boolean)
    );

    if (!facts.length) continue;

    const block = `\n\n**From linked questions (${linked.length} Qs):**\n${facts.join('\n')}`;
    const base = stripOldMcqBlock(n.explanation || '');
    if (base.includes('**From linked questions:**')) continue;
    n.explanation = base + block;
    enriched++;
  }

  // Write back split by original files
  const ch14 = notes.filter((n) => ['ch1-matter', 'ch2-measurement', 'ch3-force', 'ch4-energy'].includes(n.topicId));
  const ch58 = notes.filter((n) => !['ch1-matter', 'ch2-measurement', 'ch3-force', 'ch4-energy'].includes(n.topicId));

  fs.writeFileSync(path.join(ROOT, NOTE_FILES[0]), JSON.stringify(ch14, null, 0) + '\n', 'utf8');
  fs.writeFileSync(path.join(ROOT, NOTE_FILES[1]), JSON.stringify(ch58, null, 0) + '\n', 'utf8');
  console.log(`Enriched ${enriched} notes with MCQ-derived facts`);
}

main();
