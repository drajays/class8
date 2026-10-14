#!/usr/bin/env python3
"""Crops every textbook figure for the Maths subject out of the original scanned PDF.
OCR box coordinates are in a 2x (144 dpi) render of the page, so: pdftoppm -r 144, then crop.
Writes images/math/ch<N>-<k>.jpg and math-figures.json (page text before/after, used by build-math.js to place each figure).
Usage: python3 build-math-figures.py [Downloads dir with maths.pdf + math/]   (needs poppler + Pillow)"""
import json, re, os, subprocess, sys, hashlib, tempfile, glob
from PIL import Image
DL = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser('~/Downloads')
PDF = os.path.join(DL, 'maths.pdf')
OCR = json.load(open(os.path.join(DL, 'math/maths.pdf_by_PaddleOCR-VL-1.6.json')))
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'images', 'math'); os.makedirs(OUT, exist_ok=True)

def plain(md):
    t = re.sub(r'<img[^>]*>', ' ', md)
    t = re.sub(r'<[^>]+>', ' ', t)
    return re.sub(r'\s+', ' ', t)

# page index of every OCR image (url without the expiring query string)
page_of = {}
for i, pg in enumerate(OCR):
    for u in pg['markdown']['images'].values(): page_of.setdefault(u.split('?')[0], i)

figs = []
for n in range(1, 21):
    a = json.load(open(os.path.join(DL, 'math', f'chapter_{n:02d}_assets.json')))
    for e in a:
        m = re.search(r'box_(\d+)_(\d+)_(\d+)_(\d+)', e['fileName'])
        pg = page_of.get(e['original'].split('?')[0])
        if not m or pg is None: continue
        x0, y0, x1, y1 = map(int, m.groups())
        if x1 - x0 < 70 or y1 - y0 < 50: continue          # logos, bullets
        figs.append(dict(chapter=n, page=pg, box=[x0, y0, x1, y1], name=e['fileName']))

# decorative repeats (same crop shape on many pages, e.g. the tablet icon): drop boxes whose size repeats >3 times
from collections import Counter
sz = Counter((f['box'][2] - f['box'][0], f['box'][3] - f['box'][1]) for f in figs)
tmp = tempfile.mkdtemp(prefix='mathpg')
cache, kept, perch = {}, [], Counter()
for f in figs:
    pg = f['page']
    if pg not in cache:
        subprocess.run(['pdftoppm', '-f', str(pg + 1), '-l', str(pg + 1), '-r', '144', '-png', PDF, f'{tmp}/p'], check=True)
        cache = {pg: Image.open(glob.glob(f'{tmp}/p-*.png')[0]).convert('RGB')}
        for x in glob.glob(f'{tmp}/p-*.png'): os.remove(x)
    im = cache[pg]; x0, y0, x1, y1 = f['box']
    crop = im.crop((max(0, x0 - 4), max(0, y0 - 4), min(im.size[0], x1 + 4), min(im.size[1], y1 + 4)))
    # near-blank crop (OCR false positive)?
    if crop.convert('L').resize((40, 40)).getextrema()[0] > 200: continue
    px = list(crop.resize((48, 48)).getdata())
    if sum(1 for r, g, b in px if 50 < r < 150 and g < 90 and b > g + 35 and b > r) > 0.04 * len(px): continue   # purple 'activity box' icons
    perch[f['chapter']] += 1
    fn = f"ch{f['chapter']}-{perch[f['chapter']]}.jpg"
    if max(crop.size) > 900: crop.thumbnail((900, 900))
    crop.save(os.path.join(OUT, fn), quality=84, optimize=True)
    # text context: this page's text before / after the figure tag, spilling onto neighbouring pages
    md = OCR[pg]['markdown']['text']
    tag = re.search(r'<img[^>]*box_%d_%d_%d_%d[^>]*>' % tuple(f['box']), md)
    pos = tag.start() if tag else len(md) // 2
    before = plain(md[:pos])[-260:]; after = plain(md[pos:])[:260]
    if len(before) < 80 and pg > 0: before = (plain(OCR[pg - 1]['markdown']['text'])[-200:] + ' ' + before)[-260:]
    if len(after) < 80 and pg + 1 < len(OCR): after = (after + ' ' + plain(OCR[pg + 1]['markdown']['text'])[:200])[:260]
    kept.append(dict(chapter=f['chapter'], file='images/math/' + fn, page=pg + 1, w=crop.size[0], h=crop.size[1], before=before.strip(), after=after.strip()))
json.dump(kept, open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'math-figures.json'), 'w'), ensure_ascii=False, indent=0)
print(len(figs), 'candidates ->', len(kept), 'figures;', {k: v for k, v in sorted(perch.items())})
