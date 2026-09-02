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

  // The wide branch overrides the same three values with the desktop offset, so
  // the inset has to survive it. A desktop browser reports 0, but a tablet in
  // the companion app has a status bar just like a phone does, and it sits
  // above 768px.
  test('keeps the top safe-area inset on the wide branch too', () => {
    expect(styles).toMatch(/top: calc\(56px \+ var\(--bubble-pop-up-safe-area-top\) \+ var\(--custom-height-offset-desktop\)\);/);
    expect(styles).toMatch(/--bubble-pop-up-available-height: calc\(100vh - 56px - var\(--bubble-pop-up-safe-area-top\) - var\(--custom-height-offset-desktop\)\);/);
    expect(styles).toMatch(/bottom: calc\(-56px - var\(--bubble-pop-up-safe-area-top\) - var\(--custom-height-offset-desktop\)\);/);
    expect(styles).toMatch(/padding-bottom: calc\(140px \+ var\(--bubble-pop-up-safe-area-top\) \+ var\(--custom-height-offset-desktop\)\);/);
  });

  // No offset of either kind is left reading the bare 56px: every place that
  // positions a pop-up against the header carries the inset now.
  test('no header offset is left without the inset', () => {
    const offsets = styles.match(/calc\(-?56px [-+] var\(--custom-height-offset-(?:mobile|desktop)\)\)/g);
    expect(offsets).toBeNull();
  });

  // The Home Assistant style stands on its own: it used to borrow the classic
  // class and override what differed, which meant inheriting twenty rules
  // nobody had checked against the dialog. These tests hold what it must say,
  // not the shape it says it in.
  const haStyle = styles.slice(styles.indexOf('/* Home Assistant style'));
  const declares = (value) => expect(haStyle).toContain(value);

  test('reads its geometry from the Home Assistant tokens, not from pixels', () => {
    // A hard coded number here would be the bug: it would stop following a theme.
    declares('--bubble-pop-up-border-radius: var(--ha-dialog-border-radius, var(--ha-border-radius-3xl, 24px));');
    declares('--bubble-pop-up-border-radius: var(--ha-bottom-sheet-border-radius, var(--ha-dialog-border-radius, var(--ha-border-radius-2xl, 20px)));');
    declares('box-shadow: var(--dialog-box-shadow, var(--ha-box-shadow-l,');
    declares('padding-inline: var(--ha-space-6, 24px);');
    // The width is set inline in create.js, where an inline property can win.
    expect(haStyle).not.toContain('--desktop-width');
  });

  test('stacks its header above its content instead of under it', () => {
    // Bubble slides the content up under the header by fifty pixels, which is
    // what let the cards show through it, and masks the scroller so it fades
    // into the edges. A more info dialog does neither.
    declares('--bubble-pop-up-header-overlap: 0px;');
    // The shell is a flex column spacing its children by a card gap, and
    // ha-dialog-header sits against the content it heads.
    declares('gap: 0;');
    // And the margin is pinned, since the standalone rule computes it as minus
    // the overlap plus a gap reserve and would still leave eight pixels.
    declares('margin-top: 0;');
    // And nothing above the first card either.
    declares('padding-top: 0;');
    declares('mask-image: none;');
    declares('-webkit-mask-image: none;');
  });

  test('reproduces the header of ha-dialog-header', () => {
    // The navigation icon comes first there. buttons_position is the option
    // Bubble already has for that, and the style forces it rather than
    // reordering anything of its own, so nothing about order is written here.
    expect(haStyle).not.toContain('order: -1;');
    // .header-content is what gives the bar its height: 10 + 48 + 10.
    declares('padding: 10px var(--ha-space-1, 4px);');
    declares('min-height: var(--ha-space-12, 48px);');
    // And nothing inside may push past it: .large sizes the button card of a
    // header at one row, fifty six, which is what made the bar seventy six. The
    // row is resized rather than the height forced, so the layout that carries
    // the name still has a row to measure.
    declares('--row-height: var(--ha-space-12, 48px);');
    // And the rounding does not follow the row: that rule rounds by half a row,
    // which is a pill, and a pill clips a title that has a state under it.
    expect(haStyle).toMatch(/\.bubble-container \{\s*border-radius: 0;/);
    // .header-bar pads by one space, and by two once there is room.
    declares('padding: 0 var(--ha-space-1, 4px);');
    declares('padding-inline: var(--ha-space-2, 8px);');
    // .header-title
    declares('font-size: var(--ha-font-size-xl, 20px) !important;');
    declares('font-weight: var(--ha-font-weight-medium, 500) !important;');
    // ha-icon-button: a square of --ha-space-12, no background, a 24 icon.
    declares('background-color: transparent !important;');
    declares('width: var(--ha-space-12, 48px) !important;');
    declares('width: var(--ha-space-6, 24px);');
    // No entity icon, and no indent left where it was.
    declares('display: var(--bubble-pop-up-home-assistant-icon-display, none) !important;');
    declares('margin-inline-start: 0 !important;');
  });

  test('puts the shadow on a layer so shadow_opacity can fade it', () => {
    // --ha-box-shadow-l bakes its own alphas and differs per theme, so it cannot
    // be multiplied in place: the layer carries it whole and the option is the
    // opacity of the layer.
    expect(haStyle).toMatch(/:not\(\.editor\)::after \{[^}]*opacity: var\(--custom-shadow-opacity, 1\);/);
    expect(haStyle).toMatch(/:not\(\.editor\)::after \{[^}]*box-shadow: var\(--dialog-box-shadow, var\(--ha-box-shadow-l,/);
    // Behind the surface, never over it.
    expect(haStyle).toMatch(/:not\(\.editor\)::after \{[^}]*z-index: -1;/);
    // And the flat glow Bubble draws for the same option goes, so the two do
    // not stack.
    expect(haStyle).toMatch(/\.popup-style-home-assistant\.is-popup-opened \{\s*box-shadow: none;/);
  });

  test('lets the content reach the top when there is no header', () => {
    // The strip the header leaves behind carries the drag handle, and pulling
    // the content over it only made that handle float above the cards. The
    // strip goes, so the scroller is the only child of the shell and its top is
    // the top of the sheet.
    expect(haStyle).toMatch(/\.no-header > \.bubble-header-container \{\s*display: none !important;/);
    expect(haStyle).toMatch(/\.no-header > \.bubble-pop-up-container \{\s*margin-top: 0 !important;\s*padding-top: var\(--ha-space-6, 24px\) !important;/);
  });

  test('leaves nothing between the header and the edit mode placeholder', () => {
    // The placeholder keeps twenty pixels to clear a header the content slides
    // under. Nothing slides under this one.
    expect(haStyle).toMatch(/\.bubble-editor-placeholder \{\s*margin-top: 0;/);
  });

  test('fades a shadow under the header once the content has scrolled', () => {
    declares('background: linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0));');
    declares('height: var(--ha-space-2, 8px);');
    declares('transition: opacity 0.18s ease-in-out;');
    expect(haStyle).toMatch(/\.popup-style-home-assistant\.is-scrolled > \.bubble-header-container::after \{\s*opacity: 1;/);
  });

  // The margin option drives margin-inline-start, and neither shape of this
  // style can hear it: the wide one is laid out with margin: auto, and the
  // narrow one is pinned edge to edge. The editor disables it for that reason,
  // and these are the two rules that make it deaf.
  test('leaves the margin option nothing to move', () => {
    declares('margin-inline-start: 0 !important;');
    expect(styles).toMatch(/\.popup-mode-adaptive-dialog:not\(\.editor\) \{[^}]*margin: auto !important;/);
  });

  test('takes the two shapes at the breakpoint of ha-adaptive-dialog', () => {
    expect(haStyle).toMatch(/@media \(max-width: 870px\), \(max-height: 500px\)/);
    // --ha-bottom-sheet-height: the sheet leaves the taller of the top inset
    // and forty eight above itself, and dvh replaces vh where it is understood.
    declares('--bubble-pop-up-available-height: calc(100dvh - max(var(--bubble-pop-up-safe-area-top), 48px) - var(--custom-height-offset-mobile));');
    declares('--bubble-pop-up-available-height: calc(100vh - max(var(--bubble-pop-up-safe-area-top), 48px) - var(--custom-height-offset-mobile));');
    // A sheet spans the whole width and carries the handle.
    declares('width: 100% !important;');
    declares('background-color: var(--ha-bottom-sheet-handle-color, var(--divider-color));');
    // A dialog centres horizontally on the page, wa-dialog knowing nothing of
    // the sidebar, but is pinned near the top rather than centred on the
    // viewport: haStyleDialogFixedTop keeps it from jumping as content resizes.
    expect(haStyle).toMatch(/@media only screen and \(min-width: 871px\) and \(min-height: 501px\) \{\s*\.bubble-pop-up\.popup-style-home-assistant:not\(\.editor\) \{\s*inset-inline-start: 0 !important;/);
    declares('top: var(--ha-space-10, 40px) !important;');
    declares('bottom: auto !important;');
    expect(haStyle).toMatch(/max-height: calc\(100svh - var\(--ha-space-10, 40px\) - var\(--ha-space-2, 8px\)/);
    // And the option that shortens a dialog in this mode still shortens it.
    expect(haStyle).toContain('2 * var(--custom-height-offset-desktop, 0px)');
  });

  test('borrows nothing from the classic style any more', () => {
    // Every rule it needs is written in its own block, so nothing can arrive
    // through a class it did not ask for.
    expect(haStyle).not.toContain('popup-style-classic');
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
