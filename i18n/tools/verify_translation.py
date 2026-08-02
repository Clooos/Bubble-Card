#!/usr/bin/env python3
"""Structural diff between the English README and a translated one.

Checks that translation preserved everything that must not change:
fenced code blocks, URLs, image links, HTML tag skeleton, table shape,
heading levels; and that no em/en dash slipped in.
"""
import re, sys, json

def fences(text):
    """Return the list of fenced code block bodies, in order."""
    out, cur, inside = [], [], False
    for line in text.split('\n'):
        if re.match(r'^\s*```', line):
            if inside:
                out.append('\n'.join(cur)); cur = []
            inside = not inside
            continue
        if inside:
            cur.append(line)
    if inside:
        out.append('\n'.join(cur))
    return out

def strip_fences(text):
    out, inside = [], False
    for line in text.split('\n'):
        if re.match(r'^\s*```', line):
            inside = not inside
            out.append(line)
            continue
        out.append('' if inside else line)
    return '\n'.join(out)

def urls(text):
    return sorted(re.findall(r'https?://[^\s)"\'<>\]]+', text))

def headings(text):
    return [len(m.group(1)) for m in re.finditer(r'^(#{1,6}) ', strip_fences(text), re.M)]

def html_tags(text):
    return sorted(re.findall(r'</?(details|summary|br|img|a|code|b|i|h4|p)\b', strip_fences(text), re.I))

def table_rows(text):
    return len([l for l in strip_fences(text).split('\n') if l.strip().startswith('|')])

CODEY = re.compile(r'^(--|#|\.|/)|[_:{}\[\]$]|^[a-z0-9][a-z0-9.\-/]*$')

def inline_code(text):
    """Inline code tokens that are real identifiers, not translatable display labels.

    The table of contents legitimately puts human labels in backticks
    (`Button` -> `Bouton`), so only code-looking tokens are compared.
    """
    return sorted(t for t in re.findall(r'`([^`\n]+)`', strip_fences(text)) if CODEY.search(t))

def strip_generated_header(text):
    """Drop the generated comment and notice block that sits above the H1."""
    if not text.startswith('<!--'):
        return text
    idx = text.find('\n# ')
    return text[idx + 1:] if idx != -1 else text

def report(en_path, fr_path):
    en = open(en_path, encoding='utf-8').read()
    fr = strip_generated_header(open(fr_path, encoding='utf-8').read())
    problems = []

    ef, ff = fences(en), fences(fr)
    if len(ef) != len(ff):
        problems.append(f'code block count: en={len(ef)} fr={len(ff)}')
    else:
        for i, (a, b) in enumerate(zip(ef, ff)):
            if a != b:
                problems.append(f'code block #{i+1} was modified')

    eu, fu = urls(en), urls(fr)
    if eu != fu:
        missing = [u for u in eu if u not in fu]
        added = [u for u in fu if u not in eu]
        if missing: problems.append(f'{len(missing)} URL(s) lost, first: {missing[:2]}')
        if added: problems.append(f'{len(added)} URL(s) added, first: {added[:2]}')

    eh, fh = headings(en), headings(fr)
    if eh != fh:
        problems.append(f'heading skeleton differs: en={len(eh)} fr={len(fh)} headings')

    et, ft = html_tags(en), html_tags(fr)
    if et != ft:
        problems.append(f'HTML tag skeleton differs ({len(et)} vs {len(ft)})')

    er, fr_ = table_rows(en), table_rows(fr)
    if er != fr_:
        problems.append(f'table rows: en={er} fr={fr_}')

    ec, fc = inline_code(en), inline_code(fr)
    lost = [c for c in set(ec) if c not in set(fc)]
    if lost:
        problems.append(f'{len(lost)} inline code token(s) lost, e.g. {sorted(lost)[:4]}')

    for dash, label in (('—', 'em dash'), ('–', 'en dash')):
        n = fr.count(dash)
        if n:
            ctx = fr[max(0, fr.index(dash) - 45):fr.index(dash) + 45].replace('\n', ' ')
            problems.append(f'{n} {label}(s) found, first context: ...{ctx}...')

    el, fl = en.count('\n'), fr.count('\n')
    if abs(el - fl) > 0:
        problems.append(f'line count: en={el+1} fr={fl+1} (delta {fl-el})')

    return problems

if __name__ == '__main__':
    problems = report(sys.argv[1], sys.argv[2])
    if not problems:
        print('OK  no structural difference')
    else:
        for p in problems:
            print('!!  ' + p)
    sys.exit(1 if problems else 0)
