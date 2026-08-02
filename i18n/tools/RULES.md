# Translation rules, all languages

These rules are binding for every translation of the Bubble Card README, whatever the
language. A single violation of the formatting rules breaks the automated checks.

## Absolute formatting rules

1. NEVER translate anything inside a fenced code block (``` ... ```). Copy those blocks
   byte for byte: YAML comments, entity ids, indentation, blank lines.
2. NEVER translate inline code between backticks: `card_type`, `pop-up`, `mdi:fridge`,
   `light.kitchen`, `--bubble-border-radius`, `true`, `false`, `string`, `object`...
   Config keys and values, CSS variables, service names and entity ids stay in English.
3. Keep every URL, image link, badge and HTML attribute untouched. Translate only the
   visible link TEXT.
4. Keep the HTML structure identical: `<details>`, `<summary>`, `<br>`, `<img ...>`,
   `<a href="...">`, `<code>`, `<b>`. Translate only the human readable text inside.
5. Keep the exact same line structure: same number of lines, same blank lines, same table
   rows, same `---` separators, same heading levels. Never merge, split, reorder or add
   lines.
6. NEVER use an em dash or an en dash, in any language. Use a comma, a colon or
   parentheses instead. Absolute rule of the project.
7. Never translate these names: Bubble Card, Module Store, Home Assistant, HACS, Lovelace,
   YAML, CSS, JS, Jinja2, GitHub, Patreon, PayPal, Discord, Reddit, YouTube.
8. Use straight apostrophes (') in prose, not curly ones, to match the card's shipped
   translation files.

## Terminology: the shipped dictionary is the authority

The card already ships a full translation of its editor UI in
`src/translations/editor/<lang>.json` (598 strings). When the documentation mentions an
option, a card type or any UI concept, use the exact wording of that file, so readers see
the same words in the documentation and in the editor. Search it before inventing a term
(examples: card types, "slider", "sub-button", "styling", "templates", "rows",
"border radius", "background color", "More info", HA concepts like dashboard, view,
entity, state, attribute).

Home Assistant interface labels that a reader must click (menu entries, buttons) are given
in the language of their Home Assistant, which is the target language.

## Headings and anchors

Translating a heading changes its GitHub anchor (lowercased, punctuation dropped, spaces
to hyphens, unicode letters kept). Every internal `](#...)` and `href="#..."` link must
point to the anchor of the TRANSLATED heading. A shared per-language heading table is
fixed before translation starts, and every section must use it verbatim, both for the
headings themselves and for every link that targets them.

## Tone

Keep the author's friendly, direct voice, the personal notes and the humour. Address the
reader with the polite/neutral register customary for technical documentation in the
target language. Do not add, remove or soften content. Translate image alt text and
`<summary>` labels, since they are visible text.
