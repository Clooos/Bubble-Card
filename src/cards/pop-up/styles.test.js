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

function getHeaderContainerRule() {
  const match = styles.match(/\.bubble-pop-up:not\(\.no-header\):not\(\.editor\) > \.bubble-pop-up-container\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getBottomSheetContainerRule() {
  const match = styles.match(/\.bubble-pop-up:not\(\.editor\):not\(\.popup-mode-centered\):not\(\.popup-mode-adaptive-dialog\) > \.bubble-pop-up-container\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getHeaderBottomSheetContainerRule() {
  const match = styles.match(/\.bubble-pop-up:not\(\.no-header\):not\(\.editor\):not\(\.popup-mode-centered\):not\(\.popup-mode-adaptive-dialog\) > \.bubble-pop-up-container\s*\{([^}]*)\}/);
  return match?.[1] ?? '';
}

function getNoHeaderContainerRule() {
  const match = styles.match(/\.bubble-pop-up\.no-header > \.bubble-pop-up-container\s*\{([^}]*)\}/);
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

  test('clips only the lower foreground corners when a header is visible', () => {
    const rule = getHeaderContainerRule();

    expect(rule).toContain('border-top-left-radius: 0');
    expect(rule).toContain('border-top-right-radius: 0');
    expect(rule).toContain('-webkit-clip-path: inset(0 round 0 0 var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))) var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))))');
    expect(rule).toContain('clip-path: inset(0 round 0 0 var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))) var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))))');
  });

  test('removes lower foreground rounding for bottom-sheet layouts', () => {
    const bottomSheetRule = getBottomSheetContainerRule();
    const headerBottomSheetRule = getHeaderBottomSheetContainerRule();

    expect(bottomSheetRule).toContain('border-bottom-right-radius: 0');
    expect(bottomSheetRule).toContain('border-bottom-left-radius: 0');
    expect(bottomSheetRule).toContain('-webkit-clip-path: inset(0 round var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))) var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))) 0 0)');
    expect(bottomSheetRule).toContain('clip-path: inset(0 round var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))) var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px))) 0 0)');
    expect(headerBottomSheetRule).toContain('-webkit-clip-path: inset(0 round 0)');
    expect(headerBottomSheetRule).toContain('clip-path: inset(0 round 0)');
    expect(styles).toMatch(/@media \(max-width: 870px\), \(max-height: 500px\) \{[\s\S]*\.bubble-pop-up\.popup-mode-adaptive-dialog:not\(\.editor\) > \.bubble-pop-up-container\s*\{[^}]*border-bottom-right-radius: 0;[^}]*border-bottom-left-radius: 0;[^}]*clip-path: inset\(0 round var\(--bubble-pop-up-content-border-radius, var\(--bubble-pop-up-border-radius, var\(--bubble-border-radius, 42px\)\)\) var\(--bubble-pop-up-content-border-radius, var\(--bubble-pop-up-border-radius, var\(--bubble-border-radius, 42px\)\)\) 0 0\);/);
    expect(styles).toMatch(/@media \(max-width: 870px\), \(max-height: 500px\) \{[\s\S]*\.bubble-pop-up\.popup-mode-adaptive-dialog:not\(\.no-header\):not\(\.editor\) > \.bubble-pop-up-container\s*\{[^}]*clip-path: inset\(0 round 0\);/);
  });

  test('keeps no-header scroll clipping below the reserved top handle area', () => {
    const rule = getNoHeaderContainerRule();

    expect(rule).toContain('margin-top: calc(-1 * var(--bubble-pop-up-header-overlap, 24px))');
    expect(rule).toContain('padding-top: max(18px, calc(18px + var(--vertical-stack-card-gap, var(--stack-card-gap, 8px)) - var(--bubble-pop-up-header-overlap, 24px)))');
    expect(rule).not.toContain('padding-top: 24px');
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

  test('only creates the bottom-offset spacer for bottom-sheet layouts', () => {
    expect(styles).toContain('.bubble-pop-up.popup-mode-fit-content.popup-mode-with-bottom-offset:not(.editor) > .bubble-pop-up-container::after');
    expect(styles).toMatch(/@media \(max-width: 870px\), \(max-height: 500px\) \{[\s\S]*\.bubble-pop-up\.popup-mode-adaptive-dialog\.popup-mode-with-bottom-offset:not\(\.editor\) > \.bubble-pop-up-container::after\s*\{[^}]*content: "";/);
    expect(styles).not.toMatch(/^\s*\.bubble-pop-up\.popup-mode-with-bottom-offset:not\(\.editor\) > \.bubble-pop-up-container::after/m);
    expect(styles).not.toMatch(/^\s*\.bubble-pop-up\.popup-mode-centered[^,{]*> \.bubble-pop-up-container::after/m);
  });

  // The companion app is edge-to-edge on phones since HA 2026.8 and leaves the
  // top safe-area inset to the page. A fixed pop-up must add it back or it
  // climbs into the status bar by that inset. HA publishes the inset as
  // --safe-area-inset-top (the app sets --app-safe-area-inset-top behind it),
  // so read that token rather than env() directly.
  test('keeps mobile pop-ups below the top safe-area inset', () => {
    expect(styles).toContain('--bubble-pop-up-safe-area-top: var(--safe-area-inset-top, 0px);');
    expect(styles).toMatch(/\.bubble-pop-up:not\(\.editor\) \{[^}]*top: calc\(56px \+ var\(--bubble-pop-up-safe-area-top\) \+ var\(--custom-height-offset-mobile\)\);/);
    expect(styles).toMatch(/--bubble-pop-up-available-height: calc\(100vh - 56px - var\(--bubble-pop-up-safe-area-top\) - var\(--custom-height-offset-mobile\)\);/);
    expect(styles).toMatch(/bottom: calc\(-56px - var\(--bubble-pop-up-safe-area-top\) - var\(--custom-height-offset-mobile\)\);/);
    expect(styles).toMatch(/padding-bottom: calc\(140px \+ var\(--bubble-pop-up-safe-area-top\) \+ var\(--custom-height-offset-mobile\)\);/);
  });

  // #2537: pop-ups are position:fixed, so they offset themselves to stay
  // centred on the dashboard rather than on the viewport. That offset used to
  // be read from var(--ha-sidebar-width, var(--mdc-drawer-width, 0px)): width
  // tokens, which say nothing about whether the sidebar is on screen. HA hides
  // the sidebar by dropping --ha-sidebar-width, the chain then fell through to
  // the legacy --mdc-drawer-width, and the pop-up was pushed sideways by a
  // sidebar nobody could see (off screen entirely on a phone).
  test('offsets pop-ups by the measured content area, never by a stale sidebar token', () => {
    expect(getBasePopUpRule()).toContain(
      '--bubble-pop-up-content-inline-start: var(--bubble-content-inline-start, var(--ha-sidebar-width, 0px))'
    );
    expect(styles).not.toMatch(/var\(\s*--mdc-drawer-width/);
  });

  test('routes every pop-up mode through the measured offset', () => {
    // Centered mode.
    expect(styles).toMatch(
      /@media only screen and \(min-width: 768px\) \{\s*\.bubble-pop-up\.popup-mode-centered:not\(\.editor\) \{\s*inset-inline-start: var\(--bubble-pop-up-content-inline-start\) !important;/
    );
    // Adaptive dialog, in its dialog-sized window.
    expect(styles).toMatch(
      /@media only screen and \(min-width: 871px\) and \(min-height: 501px\) \{[\s\S]*?\.bubble-pop-up\.popup-mode-adaptive-dialog:not\(\.editor\) \{[^}]*inset-inline-start: var\(--bubble-pop-up-content-inline-start\) !important;/
    );
    // Default bottom-sheet mode, which centres itself with the half-offset.
    expect(styles).toMatch(
      /@media only screen and \(min-width: 768px\) \{\s*\.bubble-pop-up:not\(\.editor\) \{[^}]*inset-inline-start: calc\(var\(--bubble-pop-up-content-inline-start\) \/ 2 \+ 50% - \(var\(--desktop-width, 540px\) \/ 2\)\);/
    );
  });

  // The offset is published as a logical inline-start value, so RTL dashboards
  // keep working through the same declarations.
  test('keeps the horizontal placement logical', () => {
    const placementSites = styles.match(/^[^\S\n]*inset-inline-start:.*--bubble-pop-up-content-inline-start.*$/gm) ?? [];

    expect(placementSites).toHaveLength(3);
    expect(styles).not.toMatch(/^[^\S\n]*left:.*--bubble-pop-up-content-inline-start/m);
  });

  test('keeps configured popup shadow visible during the opening transition', () => {
    const rule = getOpeningShadowSuppressionRule();

    expect(rule).toContain('box-shadow: none !important');
    expect(styles).toMatch(/\.is-popup-opened\s*\{[^}]*box-shadow: 0px 0px 50px rgba\(0, 0, 0, var\(--custom-shadow-opacity\)\);/);
    expect(styles).not.toMatch(/\.bubble-pop-up\.is-opening\s*,\s*\.bubble-pop-up\.is-closing\s*\{[^}]*box-shadow:\s*none\s*!important/);
  });
});
