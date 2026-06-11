# Example modules

- [`glow-rules.yaml`](glow-rules.yaml) — "Icon glow rules": adds a colored glow to a button card's icon when an entity matches a state. A small but complete demonstration of the module editor features documented in [`src/modules/editor-schema-docs.md`](../src/modules/editor-schema-docs.md): object-selector `group` sections, `visible_if`, `warn_if`/`warn_text`, `arm_of`/`arm` mode dropdowns, attribute selectors with card-entity fallback, drag-reorder/duplicate, and a custom selector registered via `editor_code`.

To try one, paste its content into your modules file (or add it via Bubble Card Tools) and enable the module on a card.
