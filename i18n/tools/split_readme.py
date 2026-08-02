#!/usr/bin/env python3
"""Split README.md into top-level ## sections, ignoring ## inside fenced code blocks."""
import os, sys, json, re

src = sys.argv[1] if len(sys.argv) > 1 else 'README.md'
outdir = sys.argv[2]
os.makedirs(outdir, exist_ok=True)

lines = open(src, encoding='utf-8').read().split('\n')
in_fence = False
fence_re = re.compile(r'^\s*```')
bounds = []
for i, l in enumerate(lines):
    if fence_re.match(l):
        in_fence = not in_fence
        continue
    if not in_fence and re.match(r'^## ', l):
        bounds.append(i)

# section 0 = preamble before the first ##
starts = [0] + bounds
ends = bounds + [len(lines)]
meta = []
for idx, (s, e) in enumerate(zip(starts, ends)):
    chunk = '\n'.join(lines[s:e])
    name = f'{idx:02d}.md'
    open(os.path.join(outdir, name), 'w', encoding='utf-8').write(chunk)
    title = lines[s] if s in bounds else '(preamble)'
    meta.append({'file': name, 'start_line': s + 1, 'lines': e - s, 'chars': len(chunk), 'title': title})

json.dump(meta, open(os.path.join(outdir, 'index.json'), 'w'), indent=1)
for m in meta:
    print(f"{m['file']}  L{m['start_line']:>5}  {m['lines']:>4} lines  {m['chars']:>6} chars  {m['title'][:60]}")
print('total sections:', len(meta))
