import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const stylesPath = join(dirname(fileURLToPath(import.meta.url)), 'styles.css');
const styles = readFileSync(stylesPath, 'utf8');

function getStandaloneContainerRule() {
  const match = styles.match(/\.is-standalone-pop-up\s*>\s*\.bubble-pop-up-container\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getBasePopUpRule() {
  const match = styles.match(/\.bubble-pop-up\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getBaseContainerRule() {
  const match = styles.match(/\.bubble-pop-up-container\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getLegacyDefaultContainerRule() {
  const match = styles.match(/\.bubble-pop-up:not\(\.editor\):not\(\.is-standalone-pop-up\):not\(\.popup-mode-fit-content\):not\(\.popup-mode-centered\):not\(\.popup-mode-adaptive-dialog\) \.bubble-pop-up-container\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getOpeningShadowSuppressionRule() {
  const match = styles.match(/\.bubble-pop-up\.is-opening:not\(\.has-popup-shadow\),\s*\.bubble-pop-up\.is-closing\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

describe('pop-up styles', () => {
  test('clips foreground content without clipping the popup background shell', () => {
    const popUpRule = getBasePopUpRule();
    const containerRule = getBaseContainerRule();

    expect(popUpRule).not.toContain('overflow: hidden');
    expect(popUpRule).not.toContain('contain: paint');
    expect(containerRule).toContain('overflow: auto');
    expect(containerRule).toContain('border-radius: var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)))');
    expect(containerRule).toContain('-webkit-clip-path: inset(0 round var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))))');
    expect(containerRule).toContain('clip-path: inset(0 round var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))))');
  });

  test('keeps standalone header gap resilient without double-adding the full card gap', () => {
    const rule = getStandaloneContainerRule();

    expect(rule).toContain('--bubble-pop-up-header-gap-reserve: var(--bubble-pop-up-header-gap, 8px)');
    expect(rule).toContain('margin-top: calc(-1 * var(--bubble-pop-up-header-overlap, 50px) + var(--bubble-pop-up-header-gap-reserve))');
    expect(rule).toContain('padding-top: max(18px, calc(18px + var(--bubble-pop-up-gap, 14px) - var(--bubble-pop-up-header-gap-reserve)))');
    expect(rule).not.toContain('margin-top: calc(-1 * var(--bubble-pop-up-header-overlap, 50px) + var(--bubble-pop-up-header-gap, var(--bubble-pop-up-gap, 14px)))');
  });

  test('keeps legacy default popup header spacing close to v3.1.6', () => {
    const rule = getLegacyDefaultContainerRule();

    expect(rule).toContain('padding-top: 18px');
    expect(rule).not.toContain('padding-top: 40px');
  });

  test('keeps configured popup shadow visible during the opening transition', () => {
    const rule = getOpeningShadowSuppressionRule();

    expect(rule).toContain('box-shadow: none !important');
    expect(styles).toMatch(/\.is-popup-opened\s*\{[^}]*box-shadow: 0px 0px 50px rgba\(0, 0, 0, var\(--custom-shadow-opacity\)\);/);
    expect(styles).not.toMatch(/\.bubble-pop-up\.is-opening\s*,\s*\.bubble-pop-up\.is-closing\s*\{[^}]*box-shadow:\s*none\s*!important/);
  });
});
