import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesPath = join(dirname(fileURLToPath(import.meta.url)), 'styles.css');
const styles = readFileSync(stylesPath, 'utf8');

function getFooterRule() {
  const match = styles.match(/ha-card\.footer-mode\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getCenteredFooterRule() {
  const match = styles.match(/ha-card\.footer-mode:not\(\.footer-full-width\)\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

// Same defect as pop-up issue #2537: the footer is position:fixed, so it
// offsets itself past the sidebar, and that offset used to come from
// var(--ha-sidebar-width, var(--mdc-drawer-width, 0px)). HA hides the sidebar
// by dropping --ha-sidebar-width, the chain then fell through to the legacy
// --mdc-drawer-width, and the footer was pushed sideways by a sidebar that was
// not on screen.
describe('sub-buttons footer placement', () => {
  test('offsets the fixed footer by the measured content area', () => {
    expect(getFooterRule()).toContain(
      '--bubble-sub-buttons-content-inline-start: var(--bubble-content-inline-start, var(--ha-sidebar-width, 0px))'
    );
    expect(getFooterRule()).toContain('width: calc(100% - var(--bubble-sub-buttons-content-inline-start) - 8px)');
    expect(getFooterRule()).toContain('inset-inline-start: calc(var(--bubble-sub-buttons-content-inline-start) + 4px)');
  });

  test('centres the fixed-width footer inside the measured content area', () => {
    expect(getCenteredFooterRule()).toContain(
      'inset-inline-start: calc(var(--bubble-sub-buttons-content-inline-start) + (100% - var(--bubble-sub-buttons-content-inline-start) - var(--bubble-footer-width, 500px)) / 2)'
    );
  });

  test('keeps the placement logical for RTL dashboards', () => {
    expect(styles).not.toMatch(/^[^\S\n]*left:.*--bubble-sub-buttons-content-inline-start/m);
  });
});
