#!/usr/bin/env python3
"""Check that every internal #anchor link resolves to a heading in the same file."""
import re, sys, unicodedata

def slug(text):
    """Reproduce GitHub's heading -> anchor conversion."""
    t = text.strip().lower()
    t = re.sub(r'`([^`]*)`', r'\1', t)            # inline code keeps its text
    t = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', t)  # links keep their label
    t = re.sub(r'<[^>]+>', '', t)                  # drop html
    # Drop punctuation and symbols, keep letters, combining marks and digits.
    # \w is not enough: it excludes the combining marks used by Indic, Thai and
    # other scripts, which GitHub keeps in its anchors.
    t = ''.join(c for c in t
                if unicodedata.category(c)[0] in 'LMN' or c in ' -_')
    t = t.replace(' ', '-')
    return t

def main(path):
    text = open(path, encoding='utf-8').read()
    # headings outside fenced code
    heads, inside = [], False
    for line in text.split('\n'):
        if re.match(r'^\s*```', line):
            inside = not inside
            continue
        if not inside:
            m = re.match(r'^#{1,6} (.+)$', line)
            if m:
                heads.append(m.group(1))
    anchors = {slug(h) for h in heads}

    links = re.findall(r'\]\((#[^)]*)\)', text)
    bad = []
    for l in links:
        a = l[1:]
        if a == '':
            continue  # ](#) is a deliberate no-op link on badges
        if a not in anchors:
            bad.append(a)

    print(f'{path}: {len(heads)} headings, {len(links)} internal links, {len(set(bad))} broken')
    for a in sorted(set(bad)):
        print(f'  BROKEN -> #{a}')
    return 1 if bad else 0

if __name__ == '__main__':
    sys.exit(max(main(p) for p in sys.argv[1:]))
