#!/usr/bin/env node
/**
 * Wrapper: run Python history & civics diagram pipeline then verify output.
 * Usage: node scripts/build-history.js
 */
'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
execSync('python3 history8/build_history_diagrams.py', { cwd: ROOT, stdio: 'inherit' });

const js = path.join(ROOT, 'history-diagrams.js');
if (!fs.existsSync(js)) throw new Error('history-diagrams.js not generated');
const text = fs.readFileSync(js, 'utf8');
const count = (text.match(/"type": "mcq"/g) || []).length;
const sa = (text.match(/"type": "short_answer"/g) || []).length;
console.log(`history-diagrams.js: ${count} MCQs + ${sa} short-answer (${count + sa} total)`);
if (count !== sa) {
  console.warn('Warning: MCQ and short-answer counts differ (expected 2 per figure)');
}
