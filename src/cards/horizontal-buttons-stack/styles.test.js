import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesPath = join(dirname(fileURLToPath(import.meta.url)), 'styles.css');
const styles = readFileSync(stylesPath, 'utf8');

function getBarRule() {
  const match = styles.match(/^\.horizontal-buttons-stack-card\s*\{([^}]*)\}/m);
  return match?.[1] ?? '';
}

// Same defect as pop-up issue #2537: the bar is position:fixed, so it offsets
// itself past the sidebar, and that offset used to come from
// var(--ha-sidebar-width, var(--mdc-drawer-width, 0px)). HA hides the sidebar
// by dropping --ha-sidebar-width, the chain then fell through to the legacy
// --mdc-drawer-width, and the bar was pushed sideways by a sidebar that was
// not on screen.
describe('horizontal buttons stack placement', () => {
  test('offsets the fixed bar by the measured content area', () => {
    expect(getBarRule()).toContain(
      '--bubble-horizontal-buttons-stack-content-inline-start: var(--bubble-content-inline-start, var(--ha-sidebar-width, 0px))'
    );
    expect(getBarRule()).toContain(
      'width: calc(100% - var(--bubble-horizontal-buttons-stack-content-inline-start) - 8px)'
    );
    expect(getBarRule()).toContain(
      'inset-inline-start: calc(var(--bubble-horizontal-buttons-stack-content-inline-start) + 4px)'
    );
  });

  test('keeps the placement logical for RTL dashboards', () => {
    expect(styles).not.toMatch(/^[^\S\n]*left:.*--bubble-horizontal-buttons-stack-content-inline-start/m);
  });
});
