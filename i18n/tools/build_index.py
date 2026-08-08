#!/usr/bin/env python3
"""Regenerate i18n/languages.md from the translations actually present in i18n/."""
import os, sys

SP = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SP)
from languages import LANGUAGES, RTL

REPO = os.path.dirname(os.path.dirname(SP))  # repo root, this file lives in i18n/tools/
I18N = os.path.join(REPO, 'i18n')

# The prose of i18n/languages.md lives here, so the page is rewritten from this
# string every time the index is rebuilt. Editing that page without porting the
# change back here means the next run silently reverts it, which is exactly what
# happened to the translate icon and to a trimmed paragraph. Keep the two in
# sync, and check `git diff i18n/languages.md` after a run: a rebuild that
# changed no language should produce no diff at all.
HEADER = """# <img src="../img/translate.svg" width="28" height="28" align="absmiddle" alt=""> Bubble Card in your language

> [!IMPORTANT]
> The English [README](../README.md) is the reference documentation and is always up to date.
> The translations below started as automatic translations, so a sentence may read oddly or
> lag behind the English version.

**Any help improving the translations is more than welcome.** If a sentence reads wrong, click the ✏️
next to your language: GitHub opens the file in its web editor, and saving it creates the
copy of the project and the pull request for you. Changes about the product itself belong in the English
[README](../README.md) instead, so that every language gets them.

A huge thank you to everyone who takes the time 🍻

"""

FOOTER = """
> Missing your language? Feel free to ask for it in an
> [issue](https://github.com/Clooos/Bubble-Card/issues/new).
"""


def build():
    available = {}
    for f in os.listdir(I18N):
        if f.startswith('README.') and f.endswith('.md'):
            code = f[len('README.'):-len('.md')]
            if code in LANGUAGES:
                available[code] = f

    # English first (the source), then every translation by native name
    edit = 'https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.{code}.md'
    rows = ['| Language | Langue | Read | Fix a sentence |', '| --- | --- | --- | --- |']
    rows.append('| **English** | **English** | [README.md](../README.md) (source) | '
                '[✏️](https://github.com/Clooos/Bubble-Card/edit/main/README.md) |')
    for code in sorted(available, key=lambda c: LANGUAGES[c][1]):
        native, english = LANGUAGES[code]
        rows.append(f'| {english} | {native} | [README.{code}.md]({available[code]}) | '
                    f'[✏️]({edit.format(code=code)}) |')

    out = HEADER + '\n'.join(rows) + '\n' + FOOTER
    dest = os.path.join(I18N, 'languages.md')
    open(dest, 'w', encoding='utf-8').write(out)
    return dest, len(available)


if __name__ == '__main__':
    dest, n = build()
    print(f'wrote {dest} with {n} translation(s)')
