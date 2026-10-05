import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesPath = join(dirname(fileURLToPath(import.meta.url)), 'styles.css');
const styles = readFileSync(stylesPath, 'utf8').replace(/\r\n/g, '\n');

function getRule(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = styles.match(new RegExp(`(^|\\n)${escaped}\\s*\\{([^}]*)\\}`));
  return match?.[2] ?? '';
}

// A sub-slider fill of the color of its card's fill steps away from it by the
// 8 % getStateSurfaceColor uses everywhere else (0.92 and 1.08 in utils.js).
describe('the step of a sub-slider fill over the fill of its card', () => {
  test('darkens by 8 % under a light text', () => {
    expect(getRule('.bubble-range-fill.steps-darker')).toContain('filter: brightness(0.92)');
  });

  test('lightens by 8 % under a dark text', () => {
    expect(getRule('.bubble-range-fill.steps-lighter')).toContain('filter: brightness(1.08)');
  });
});
