#!/usr/bin/env python3
"""Adds the textbook sidebars/features that the audit found missing from the app's notes.
Each entry: (subject source md, heading to find, topicId, title, optional text fixes). Writes supplement.js (SUPPLEMENT_DATA)."""
import re, json, os
H = os.path.expanduser('~')
SRC = {
 'geo': H + '/geography8/geography.pdf_by_PaddleOCR-VL-1.6.md',
 'civ': H + '/class_8_sci/data/civics8/civics-ocr.md',
 'bio': H + '/biology8/biology8_compressed.pdf_by_PaddleOCR-VL-1.6.md',
}
ITEMS = [
 ('geo', 'Aryabhata', 'geo-ch7', "Aryabhata — India's early geographer"),
 ('geo', 'James Rennell and the Map', 'geo-ch1', 'James Rennell and the Map of Hindoostan'),
 ('geo', 'Biography', 'geo-ch1', 'Who drew the first contour lines? (Charles Hutton)'),
 ('geo', 'Quick Facts', 'geo-ch1', 'Quick facts: scale and contour lines'),
 ('geo', 'Knowledge of India', 'geo-ch1', 'Knowledge of India: reading a map extract'),
 ('geo', 'Safety Measures to Prevent', 'geo-ch5', 'Flood safety measures'),
 ('geo', 'ROLE OF THE PEOPLE', 'geo-ch5', 'Role of the people in a disaster'),
 ('geo', 'The Deepwater Horizon', 'geo-ch5', 'Case study: the Deepwater Horizon oil spill'),
 ('geo', 'Natural vegetation and wildlife', 'geo-ch6', 'Equatorial region: vegetation and wildlife'),
 ('geo', 'Wildlife Sanctuaries of India', 'geo-ch7', 'Wildlife sanctuaries of India'),
 ('geo', 'One-homed rhinoceros', 'geo-ch7', 'National parks of India'),
 ('civ', 'NYAYA PANCHAYAT', 'civ-ch1', 'Nyaya Panchayats'),
 ('civ', 'KEY WORDS', 'civ-ch1', 'Key words: Organs of the Indian Government'),
 ('civ', 'FUNCTIONS OF THE AGENCIES', 'civ-ch2', 'Functions of the UN agencies (UNESCO, UNICEF, WHO, ILO)'),
 ('bio', 'Atmosphere', 'bio-ch4', 'The atmosphere and its layers'),
]
FIX = [  # OCR slips seen in these sections
 (r'Anyabhatu|Anyabhata|Anyabhat\w*', 'Aryabhata'), (r'\bHennell\b|\bRensell\b|\bRennell\b', 'Rennell'), (r'Hindoston', 'Hindoostan'),
 (r'\bc\.f\.\)', 'CE)'), (r'\b(\d{3}) c\.', r'\1 CE.'), (r'prevent to contain', 'prevent floods and contain'), (r'company set it was', 'company so it was'), (r'Surya Siddhanto', 'Surya Siddhanta'), (r'coloniel', 'colonial'),
 (r'floc\b', 'flood'), (r'life and proper\s', 'life and property. '), (r'prevent toடை contain', 'prevent floods and contain'),
 (r'pi \(pi\)', 'pi (π)'), (r'One-homed', 'One-horned'), (r'wild as population', 'wild ass population'),
 (r'was off by', 'was off by'), (r'less at the there', 'even though there'), (r'nut flat', 'not flat'), (r'mood.s position', "moon's position"),
 (r'latitudeal', 'latitudinal'), (r'this less at', 'this even though'), (r'or a pits', 'or a pit'),
]
def clean(txt):
    txt = re.sub(r'<[^>]+>', ' ', txt)
    txt = re.sub(r'[^\x00-\x7F–—‘’“”•₹°×π✓]', '', txt)
    for a, b in FIX: txt = re.sub(a, b, txt)
    out = []
    for line in re.split(r'\n+', txt):
        l = re.sub(r'\s+', ' ', line).strip()
        if not l or re.fullmatch(r'[-•■◦]+', l): continue
        if len(l.split()) <= 3 and not re.search(r'[.:;?]$', l) and not re.match(r'^[-•■]', l) and not l.startswith('#'): continue  # figure labels
        l = re.sub(r'^[-•■◦]\s*', '• ', l)
        l = re.sub(r'^#+\s*', '**', l) + ('**' if re.match(r'^#+\s*', line.strip()) else '')
        out.append(l)
    return '\n\n'.join(out)

def section(path, head):
    paras = re.split(r'\n\s*\n', open(path).read())
    for i, p in enumerate(paras):
        m = re.match(r'^(#+)\s+(.*)', p.strip())
        if m and head.lower() in m.group(2).lower():
            lvl = len(m.group(1)); body = []
            for q in paras[i + 1:]:
                mm = re.match(r'^(#+)\s', q.strip())
                if mm and len(mm.group(1)) <= lvl: break
                body.append(q)
            return '\n\n'.join(body)
    return None

out = []
for k, (src, head, topic, title) in enumerate(ITEMS, 1):
    body = section(SRC[src], head)
    if not body: print('MISSING', head); continue
    out.append({'id': f'sup-{topic}-{k:02d}', 'topicId': topic, 'type': 'note', 'subtopic': '➕ ' + title,
                'content': clean(body)[:5200], 'source': 'ocr_supplement'})
    print(topic, title, len(out[-1]['content']))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'supplement.js'), 'w').write(
    '// StudyHub — textbook sidebars/features the coverage audit found missing (build-supplements.py)\nconst SUPPLEMENT_DATA = ' + json.dumps(out, ensure_ascii=False) + ';\n')
