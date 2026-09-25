#!/usr/bin/env node
// Self-check for Blurt mode's matching (blurtCheck in app.js). Run: node scripts/check-blurt.js
const src = require('fs').readFileSync(require('path').join(__dirname, '..', 'app.js'), 'utf8');
eval(src.slice(src.indexOf('const _BLURT_STOP'), src.indexOf('const _blurtWords')).replace('const _BLURT_STOP', 'global._BLURT_STOP'));

const wrote = 'Air is also matter. Particles are always moving. There are spaces between particles. Brownian motion is the zig zag motion of pollen.';
const points = [
  ['Air is matter — balloons inflate, fans blow', true],          // 3-letter key word, extra examples
  ['Spaces between particles (salt dissolves, no rise)', true],   // bracketed example is optional
  ['Pollen zig-zags as water particles collide with it', true],
  ['Tiny identical particles per substance', false],              // one shared word isn't enough
  ['Bromine vapours climb into the upper jar', false],
  ["Attraction forces differ: chalk breaks, copper doesn't", false]
];
const got = blurtCheck(wrote, points.map(p => p[0]));
points.forEach(([p, want], i) => { if (got[i] !== want) { console.error(`FAIL: "${p}" → ${got[i]}, expected ${want}`); process.exitCode = 1; } });
if (!process.exitCode) console.log(`ok: ${points.length} blurt checks`);
