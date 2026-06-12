#!/usr/bin/env node
/**
 * Wrapper: run Python geography pipeline then verify output.
 * Usage: node scripts/build-geography.js
 */
'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
execSync('python3 geography8/build_studyhub_geography.py', { cwd: ROOT, stdio: 'inherit' });

const geo = path.join(ROOT, 'geography.js');
if (!fs.existsSync(geo)) throw new Error('geography.js not generated');
const text = fs.readFileSync(geo, 'utf8');
const count = (text.match(/"type":"mcq"/g) || []).length;
console.log(`geography.js: ${count} MCQs (expected 560)`);
if (count !== 560) process.exitCode = 1;
