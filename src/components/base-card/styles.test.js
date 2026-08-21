import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesPath = join(dirname(fileURLToPath(import.meta.url)), 'styles.css');
const styles = readFileSync(stylesPath, 'utf8');

function getContainerRule() {
  const match = styles.match(/\.bubble-container\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

// `overflow: hidden` makes an element a scroll container. Anything inside that
// overflows by a pixel then lets the browser scroll it to bring a focused
// element into view, and the whole card content shifts by that overflow. A
// select sub-button does exactly that: picking an option moves focus back
// inside the row, which scrolled the header up and left it off-centre (#2569).
describe('the card container clips without being scrollable', () => {
  test('clips its content, so rounded corners still cut what overflows them', () => {
    const rule = getContainerRule();

    expect(rule).toMatch(/overflow:\s*hidden/);
    expect(rule).toMatch(/overflow:\s*clip/);
  });

  test('declares clip after hidden, so engines that know it use it', () => {
    const rule = getContainerRule();
    const hidden = rule.search(/overflow:\s*hidden/);
    const clip = rule.search(/overflow:\s*clip/);

    // The order is the whole mechanism: an engine without `clip` keeps the
    // `hidden` fallback, one with it takes the last declaration and stops
    // being a scroll container.
    expect(hidden).toBeGreaterThanOrEqual(0);
    expect(clip).toBeGreaterThan(hidden);
  });

  test('has no rule that puts the container back to a scrollable overflow', () => {
    // A later `.bubble-container { overflow: hidden }` anywhere in this sheet
    // would win over the clip above and bring the bug straight back.
    const all = [...styles.matchAll(/\.bubble-container[^{]*\{([^}]*)\}/g)];
    const offenders = all
      .map((m) => m[1])
      .filter((body) => /overflow(-y)?:\s*(hidden|auto|scroll)/.test(body) && !/overflow:\s*clip/.test(body));

    expect(offenders).toEqual([]);
  });
});
