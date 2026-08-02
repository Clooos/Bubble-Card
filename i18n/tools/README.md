# Translation tooling

The English [`README.md`](../../README.md) is the source of truth for the **content**.
Each translation starts as a generated file, and from there it belongs to its readers.

## Fixing a sentence (what most people want)

Open [`i18n/languages.md`](../languages.md) and click the ✏️ next to a language, or use the
link in the note at the top of any translated page. GitHub opens its web editor, and saving
creates the fork and the pull request automatically. Nothing to install.

Two rules:

- Wording, grammar, a term that does not match the French (or German, or ...) Home Assistant
  interface: fix it directly in `i18n/README.<lang>.md`.
- Something about the product itself (a new option, a corrected default): change the English
  `README.md` instead, so every language picks it up on the next generation.

Contributor fixes are safe: `assemble.py` refuses to overwrite a translation that was edited
after it was generated, so a regeneration can never silently undo a pull request. When that
happens, port the fix into the `HARMONIZE` table below and rerun with `--force`, so the fix
survives every future run.

## Regenerating a language

```bash
# 1. split the English README into sections (heading boundaries, code blocks preserved)
python3 i18n/tools/split_readme.py README.md /tmp/bc-i18n/sections

# 2. translate each section into /tmp/bc-i18n/sections-<lang>/ (same file names)

# 3. assemble, harmonise the wording and add the notice header
#    add --force only when you deliberately replace a translation that has contributor edits
python3 i18n/tools/assemble.py fr /tmp/bc-i18n/sections-fr

# 4. refresh the language index
python3 i18n/tools/build_index.py

# 5. check that nothing structural drifted
python3 i18n/tools/verify_translation.py README.md i18n/README.fr.md
python3 i18n/tools/check_anchors.py i18n/README.fr.md
```

## What the checks guarantee

`verify_translation.py` fails if a translation changed anything that must not change:

- a fenced code block differs from the English one, even by one byte
- a URL, image or badge was lost or invented
- the heading skeleton, the HTML tag skeleton or the table row count drifted
- a code identifier in backticks disappeared
- an em dash or en dash slipped in (forbidden across the whole project)
- the line count no longer matches

`check_anchors.py` fails if an internal `#anchor` link does not resolve to a heading of the
same file. This matters because translating a heading changes its anchor, so every link
pointing at it has to be translated too.

## Conventions

- Never translate: fenced code blocks, inline code, YAML keys and values, entity ids, CSS
  variables, URLs, and the names Bubble Card, Module Store, Home Assistant, HACS.
- Do translate: prose, headings, table cells, `<summary>` labels and link texts.
- Match the wording already shipped in `src/translations/editor/<lang>.json`. The card's own
  UI wins over any other choice, so a reader sees the same words in the docs and in the
  editor. Per-language exceptions live in the `HARMONIZE` table of `assemble.py`.
- Home Assistant UI labels are translated to what the reader actually sees in their own
  Home Assistant, not left in English.

`.translation-state.json` records, per language, the SHA-256 of the English README it was
built from (which translations are behind after a documentation change) and the SHA-256 of
the generated output (whether a human has improved it since).
