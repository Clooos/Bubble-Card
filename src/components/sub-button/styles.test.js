import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesPath = join(dirname(fileURLToPath(import.meta.url)), 'styles.css');
const styles = readFileSync(stylesPath, 'utf8');

function getRule(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = styles.match(new RegExp(`(^|\\n)${escaped}\\s*\\{([^}]*)\\}`));
  return match?.[2] ?? '';
}

// The bottom container is position:absolute and spans the card, so it is
// already pointer-events:none with its direct children re-enabled. That was not
// enough: in rows layout a group takes the full container width
// (.groups-layout-rows .bubble-sub-button-group { width: 100% }), so the group
// itself covered the icon column of a tall card and ate its clicks — the lower
// icons rendered normally but did not respond.
describe('bottom sub-button container hit testing', () => {
  test('keeps the container itself transparent to the pointer', () => {
    expect(getRule('.bubble-sub-button-bottom-container')).toContain('pointer-events: none');
  });

  test('lets clicks through a group and catches them on its buttons instead', () => {
    expect(getRule('.bubble-sub-button-bottom-container .bubble-sub-button-group'))
      .toContain('pointer-events: none');
    expect(getRule('.bubble-sub-button-bottom-container .bubble-sub-button-group > *'))
      .toContain('pointer-events: auto');
  });

  // A spacer only reserves width. Leaving it clickable made it absorb the
  // pointer over the column icon it was covering.
  test('lets clicks through a sub-button that carries no action', () => {
    expect(
      getRule('.bubble-sub-button-bottom-container .bubble-sub-button.bubble-action:not(.bubble-action-enabled):not(.is-select)')
    ).toContain('pointer-events: none');
  });

  // Regression from the rule above: re-enabling the pointer on every group child
  // outranks .is-hidden, so a collapsed slider overlay — laid out at full width
  // so it can slide in — went back to catching clicks meant for the buttons it
  // spans, with an ew-resize cursor over them.
  test('keeps a hidden overlay out of hit testing inside a group', () => {
    expect(getRule('.bubble-sub-button-bottom-container .bubble-sub-button-group > .is-hidden,\n.bubble-sub-button-bottom-container .is-hidden .bubble-sub-button-slider'))
      .toContain('pointer-events: none');
  });

  // Dropdowns are action targets without being action-enabled, so the rule
  // above must not reach them.
  test('excludes dropdowns from the no-action rule', () => {
    const selector = styles.match(
      /\.bubble-sub-button-bottom-container \.bubble-sub-button\.bubble-action:not\([^)]*\):not\([^)]*\)/
    )?.[0] ?? '';
    expect(selector).toContain(':not(.is-select)');
  });
});
