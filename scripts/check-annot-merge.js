// node scripts/check-annot-merge.js — newest change wins, deletes propagate
const src = require('fs').readFileSync(__dirname + '/../app.js', 'utf8');
const grab = n => src.match(new RegExp('function ' + n + '[\\s\\S]*?\\n}\\n'))[0];
eval(grab('_hlKey') + grab('_mergeAnnot') + 'global._m=_mergeAnnot');
const assert = require('assert');
const h = (t, at, c = 'y') => ({ t, c, at });
// A deleted "cell" later than B's copy -> gone; B's newer "root" survives; new text on B arrives
let r = _m({ hl: [], dead: { cell: '2026-02' }, pn: {}, my: '' }, { hl: [h('cell', '2026-01'), h('root', '2026-03'), h('leaf', '2026-01')], pn: {}, my: '' });
assert.deepStrictEqual(r.hl.map(x => x.t).sort(), ['leaf', 'root']);
// re-highlight after a delete beats the tombstone
r = _m({ hl: [h('cell', '2026-04')], pn: {}, my: '' }, { hl: [], dead: { cell: '2026-02' }, pn: {}, my: '' });
assert.strictEqual(r.hl.length, 1);
// paragraph note deleted on one side; edited later on other side wins
r = _m({ hl: [], pn: {}, dead: { 'p:abc': '2026-02' }, my: '' }, { hl: [], pn: { abc: { q: 'x', t: 'old', at: '2026-01' } }, my: '' });
assert.deepStrictEqual(r.pn, {});
r = _m({ hl: [], pn: {}, dead: { 'p:abc': '2026-02' }, my: '' }, { hl: [], pn: { abc: { q: 'x', t: 'new', at: '2026-05' } }, my: '' });
assert.strictEqual(r.pn.abc.t, 'new');
// own-words note: newer stamp wins, and clearing it propagates
r = _m({ hl: [], my: '', myAt: '2026-06' }, { hl: [], my: 'old', myAt: '2026-01' });
assert.strictEqual(r.my, '');
// legacy (no stamps): keep local text, else take remote
assert.strictEqual(_m({ hl: [], my: 'mine' }, { hl: [], my: 'theirs' }).my, 'mine');
assert.strictEqual(_m({ hl: [], my: '' }, { hl: [], my: 'theirs' }).my, 'theirs');
console.log('annotation merge ok');
