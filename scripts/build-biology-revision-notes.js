#!/usr/bin/env node
/**
 * Build biology-revision-notes.js for StudyHub app integration.
 * Reads data/biology-revision-notes/ch1.json … ch9.json → BIOLOGY_REVISION_NOTES
 *
 * Run: node scripts/build-biology-revision-notes.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const INPUT_DIR = path.join(ROOT, 'data', 'biology-revision-notes');
const OUTPUT = path.join(ROOT, 'biology-revision-notes.js');

function main() {
  const notes = [];
  for (let ch = 1; ch <= 9; ch++) {
    const file = path.join(INPUT_DIR, `ch${ch}.json`);
    if (!fs.existsSync(file)) {
      console.warn(`Missing ${file}`);
      continue;
    }
    const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(batch)) throw new Error(`${file} must be a JSON array`);
    notes.push(...batch);
  }

  const ids = new Set();
  for (const n of notes) {
    if (!n.id || !String(n.id).startsWith('bio-rev-')) {
      throw new Error(`Invalid note id: ${n.id}`);
    }
    if (ids.has(n.id)) throw new Error(`Duplicate id: ${n.id}`);
    ids.add(n.id);
    if (n.type !== 'note') throw new Error(`${n.id}: type must be "note"`);
  }

  const byChapter = {};
  notes.forEach(n => {
    byChapter[n.topicId] = (byChapter[n.topicId] || 0) + 1;
  });

  const header = `// Biology expert revision notes — ICSE Class 8
// Source: data/biology-revision-notes/ch1.json … ch9.json
// Regenerate: node scripts/build-biology-revision-notes.js
// Total: ${notes.length} notes (${Object.entries(byChapter).map(([k, v]) => `${k}: ${v}`).join(', ')})
`;

  const body = `${header}\nconst BIOLOGY_REVISION_NOTES = [\n${notes.map(n => JSON.stringify(n)).join(',\n')}\n];\n`;

  fs.writeFileSync(OUTPUT, body, 'utf8');
  console.log(`biology-revision-notes.js written — ${notes.length} notes`);
  Object.entries(byChapter).forEach(([k, v]) => console.log(`  ${k}: ${v}`));
}

main();
