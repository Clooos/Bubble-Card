import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesPath = join(dirname(fileURLToPath(import.meta.url)), 'styles.css');
const styles = readFileSync(stylesPath, 'utf8').replace(/\r\n/g, '\n');

function findRulesWithDeclaration(declarationPattern) {
  return [...styles.matchAll(/([^{}]+)\{([^}]*)\}/g)]
    .map((match) => ({
      selector: match[1].replace(/\s+/g, ' ').trim(),
      body: match[2],
    }))
    .filter(({ body }) => declarationPattern.test(body));
}

describe('slider button pointer-events pass through to background (#2373)', () => {
  test('lets pointer events on rangeSlider and cardWrapper reach background', () => {
    const pointerNoneRules = findRulesWithDeclaration(/pointer-events:\s*none\s*;/);
    const selectors = pointerNoneRules.map((r) => r.selector).join('\n');

    expect(selectors).toContain('.bubble-button-slider-container > .bubble-range-slider');
    expect(selectors).toContain('.bubble-button-slider-container > .bubble-wrapper');
  });

  test('re-enables pointer events on interactive descendants without outweighing .is-hidden or module rules', () => {
    const pointerAutoRules = findRulesWithDeclaration(/pointer-events:\s*auto\s*;/);
    const selectors = pointerAutoRules.map((r) => r.selector).join('\n');

    expect(selectors).toMatch(/^:where\(/);
    expect(selectors).toContain('.bubble-button-slider-container > .bubble-wrapper > .bubble-content-container > .bubble-icon-container:not(.is-hidden)');
    expect(selectors).toContain('.bubble-button-slider-container > .bubble-wrapper > .bubble-sub-button-container');
    expect(selectors).toContain('.bubble-button-slider-container > .bubble-wrapper > .bubble-sub-slider-wrapper:not(.is-hidden)');
    expect(selectors).toContain('.bubble-button-slider-container > .bubble-wrapper > .bubble-buttons-container > *:not(.is-hidden)');
    expect(selectors).not.toMatch(/\.bubble-content-container\s*(?:,|\)|$)/m);
  });

  test('does not introduce stacking contexts via z-index or isolation', () => {
    expect(styles).not.toMatch(/z-index\s*:/);
    expect(styles).not.toMatch(/isolation\s*:/);
  });
});
