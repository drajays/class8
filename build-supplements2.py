#!/usr/bin/env python3
"""Generic gap filler: every textbook paragraph that still carries >=3 words found nowhere in the app
becomes a '➕' note in its best-matching chapter. Needs corpus.json/topicwords.json from the audit (see CORPUS/TOPICS)."""
import json, re, os, sys, collections
H = os.path.expanduser('~'); HERE = os.path.dirname(os.path.abspath(__file__))
CORPUS, TOPICS = sys.argv[1], sys.argv[2]
SRC = {'physics': H + '/physics8/physics.pdf_by_PaddleOCR-VL-1.6.md', 'chemistry': H + '/chemistry8/chemistry.pdf_by_PaddleOCR-VL-1.6.md',
       'biology': H + '/biology8/biology8_compressed.pdf_by_PaddleOCR-VL-1.6.md', 'geography': H + '/geography8/geography.pdf_by_PaddleOCR-VL-1.6.md',
       'history': H + '/class_8_sci/data/history8/history-ocr.md', 'civics': H + '/class_8_sci/data/civics8/civics-ocr.md'}
corp = json.load(open(CORPUS)); topics = json.load(open(TOPICS))
tok = lambda t: re.findall(r'[a-z]{5,}', re.sub(r'<[^>]+>|\\[a-z]+|\$[^$\n]{0,200}\$', ' ', t).lower())
VALL = set()
for s in corp: VALL |= set(tok(corp[s]['all']))
INSTR_H = re.compile(r'activity|sel |support material|let.s do|compare and assess|report on|synopsis|portrait gallery|outcome|worksheet|examination|marks|time allowed|help box|leaf safari|acknowledg|curriculum|ncf|model|paper|preface|contents|website|references?|oxford|quiz|rubric|do it yourself|glossary|index|term paper|map practice|assessment|self.?management|reflective|tick|match|fill in|true or false|choose|based on|question|exercise|objective|answer', re.I)
INSTR_P = re.compile(r'^(research|make a|with the help|search for|find out|read his|write a report|write a|write the|find out|read |prepare|collect|discuss|imagine|observe|try|draw|identify|can you|how |why |what |which |look |note |following are|arrange|conduct|visit|use |create|choose|complete|fill|match|state whether|given below|study the)', re.I)
FIX = [(r'Anyabhat\w*', 'Aryabhata'), (r'inddgestion', 'indigestion'), (r'Analysising', 'Analysing'), (r'valries', 'rivalries'), (r'contes from', 'comes from'), (r'patientswear', 'patients wear'), (r'maskvaccination', 'mask vaccination'), (r'&#x27;', "'"), (r'&amp;', '&'), (r'&gt;', '>'), (r'&lt;', '<')]

def table_md(html):
    rows = [[re.sub(r'<[^>]+>', ' ', c).strip() for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.S)] for r in re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.S)]
    rows = [[re.sub(r'\s+', ' ', c).replace('|', '/') for c in r] for r in rows if r]
    if not rows: return ''
    w = max(len(r) for r in rows); L = ['| ' + ' | '.join(r + [''] * (w - len(r))) + ' |' for r in rows]
    L.insert(1, '|' + ' --- |' * w); return '\n'.join(L)
def clean(p):
    p = re.sub(r'<table.*?</table>', lambda m: '\n\n' + table_md(m.group(0)) + '\n\n', p, flags=re.S)
    p = re.sub(r'<[^>]+>', ' ', p).replace('\\n', '\n')
    p = re.sub(r'[^\x00-\x7F–—‘’“”•₹°×π]', '', p)
    for a, b in FIX: p = re.sub(a, b, p)
    out = []
    for line in re.split(r'\n', p):
        l = re.sub(r'[ \t]+', ' ', line).strip()
        if l and not (len(l.split()) <= 2 and not re.search(r'[.:;?|]$', l)): out.append(re.sub(r'^[-■◦]\s*', '• ', l))
    res = ''
    for l in out:
        res += ('\n' if res and l.startswith('|') and res.rsplit('\n', 1)[-1].startswith('|') else '\n\n' if res else '') + l
    return res.strip()

notes = []; per = collections.Counter()
for sub, path in SRC.items():
    paras = [p.strip() for p in re.split(r'\n\s*\n', open(path).read()) if p.strip()]
    heading = '(start)'; hs = []
    for p in paras:
        m = re.match(r'^#+\s+(.*)', p)
        if m: heading = m.group(1)[:80]
        hs.append(heading)
    groups = collections.OrderedDict()
    for i, p in enumerate(paras):
        if re.match(r'^#+\s', p) or len(p.split()) < 18 or INSTR_H.search(hs[i]) or INSTR_P.match(re.sub(r'<[^>]+>', '', p).strip()): continue
        miss = [w for w in dict.fromkeys(tok(p)) if w not in VALL]
        if len(miss) < 2: continue
        ctx = ' '.join(paras[max(0, i - 4):i + 5])
        w = set(tok(ctx)); best = max(((len(w & set(tw)) / (len(tw) ** 0.3), t) for t, tw in topics[sub].items()))[1]
        c = clean(p)
        if c: groups.setdefault((best, hs[i]), []).append(c[0].upper() + c[1:])
    for (topic, head), ps in groups.items():
        body = '\n\n'.join(ps)
        if len(re.sub(r'\W', '', body)) < 80: continue
        per[sub] += 1
        notes.append({'id': f'sup2-{topic}-{len(notes) + 1:03d}', 'topicId': topic, 'type': 'note', 'subtopic': '➕ ' + re.sub(r'\s+', ' ', head).strip().rstrip(':').title()[:70],
                      'content': body[:6000], 'source': 'ocr_supplement'})
print(dict(per), len(notes))
open(os.path.join(HERE, 'supplement2.js'), 'w').write('// StudyHub — remaining textbook paragraphs found missing by the term audit (build-supplements2.py)\nconst SUPPLEMENT2_DATA = ' + json.dumps(notes, ensure_ascii=False) + ';\n')
