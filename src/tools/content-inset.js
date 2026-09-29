// Where the dashboard content really starts on screen.
//
// Pop-ups, the footer and the horizontal buttons stack are fixed-positioned,
// so the viewport lays them out, while the dashboard itself is inset behind
// Home Assistant's sidebar. To stay centred on the dashboard rather than on
// the viewport, they offset themselves by that inset.
//
// Home Assistant 2026.6 and later publish it as --ha-sidebar-width. It is the
// value the drawer pads the content with and the one HA's own fixed bars sit
// on (ha-panel-home, hui-root), HA unsets it whenever the sidebar is hidden,
// and the sidebar mods (WallPanel, kiosk-mode) hide the sidebar by changing
// it. Every placement falls back to it in CSS, so on those versions nothing
// here runs at all.
//
// Before 2026.6 the token was --mdc-drawer-width, a WIDTH that never said
// whether the sidebar was on screen. HA dropped it with `unset` to hide the
// sidebar, and anything still defining it (a theme, a sidebar or kiosk mod)
// then offset the pop-up by a sidebar nobody could see (#2537). So on those
// versions, measure the panel HA actually rendered instead, and publish the
// answer as one CSS variable every placement inherits.

import { resolveContentSurface } from './ha-boundary.js';
import { isDocumentRTL, isHomeAssistantVersionAtLeast } from './utils.js';

export const CONTENT_INLINE_START_VAR = '--bubble-content-inline-start';

// Frontend 20260527 renamed --mdc-drawer-width to --ha-sidebar-width.
export const HA_SIDEBAR_WIDTH_VERSION = '2026.6';

// Sub-pixel jitter (browser zoom puts a 56px sidebar edge at 55.994px) is not
// a layout change worth republishing.
const MIN_CHANGE_PX = 0.5;

// How deep to look for the first real box under the panel, and how many times
// to look before settling for the panel itself.
const MAX_BOX_DEPTH = 8;
const MAX_BOX_LOOKUPS = 20;

const NEVER_RENDERED = new Set(['style', 'script', 'template', 'link']);

let insetFromHomeAssistant = null;
let surface = null;
let observedBox = null;
let boxLookups = 0;
let resizeObserver = null;
let resizeListenerAdded = false;
let observedWidth = null;
let pendingValue = null;
let settleFrame = 0;
let publishedValue = null;

// Null until hass is up, then whether Home Assistant publishes the inset
// itself. Read once, the frontend does not change under a page.
function homeAssistantPublishesInset() {
    if (insetFromHomeAssistant === null) {
        const hass = document.querySelector?.('home-assistant')?.hass;
        if (hass?.config?.version) {
            insetFromHomeAssistant = isHomeAssistantVersionAtLeast(hass, HA_SIDEBAR_WIDTH_VERSION);
        }
    }
    return insetFromHomeAssistant;
}

function getViewportWidth() {
    return document.documentElement?.clientWidth || window.innerWidth || 0;
}

// The inset is logical, not physical: in RTL the content area starts at the
// right edge, and so does the `inset-inline-start` that consumes this value.
export function measureContentInlineStart(element = observedBox || surface) {
    if (!element || typeof element.getBoundingClientRect !== 'function') {
        return null;
    }

    const rect = element.getBoundingClientRect();
    if (!rect || (!rect.width && !rect.height)) {
        // A panel that has not been laid out yet reports an empty box at the
        // viewport origin. That is "not measured", not "no sidebar": publishing
        // it would drop the offset on a dashboard that does have a sidebar.
        return null;
    }

    const inlineStart = isDocumentRTL() ? getViewportWidth() - rect.right : rect.left;
    if (!Number.isFinite(inlineStart)) {
        return null;
    }

    return inlineStart > 0 ? Math.round(inlineStart * 100) / 100 : 0;
}

function publish(value) {
    if (value === null) {
        return false;
    }
    if (publishedValue !== null && Math.abs(value - publishedValue) < MIN_CHANGE_PX) {
        return false;
    }

    publishedValue = value;
    document.documentElement?.style?.setProperty(CONTENT_INLINE_START_VAR, `${value}px`);
    return true;
}

// From 2026.3, HA animates the content area when the sidebar moves, and
// kiosk-mode's hiding animates it too without HA ever saying so, so the width
// changes on every frame for a quarter of a second. Every write restyles the
// whole document, so wait for a frame in which the width held still and write
// once. The observer runs after each frame's layout and cancels the second
// frame below whenever the width moved again.
function publishOnceSettled(value) {
    pendingValue = value;
    if (!settleFrame && Math.abs(value - publishedValue) < MIN_CHANGE_PX) {
        return;
    }
    if (typeof requestAnimationFrame !== 'function') {
        publish(value);
        return;
    }

    cancelAnimationFrame(settleFrame);
    settleFrame = requestAnimationFrame(() => {
        settleFrame = requestAnimationFrame(() => {
            settleFrame = 0;
            publish(pendingValue);
        });
    });
}

function firstRenderedChild(node) {
    const children = node.localName === 'slot' && typeof node.assignedElements === 'function'
        ? node.assignedElements({ flatten: true })
        : (node.shadowRoot || node).children;

    for (const child of children || []) {
        if (NEVER_RENDERED.has(child.localName)) {
            continue;
        }
        const display = getComputedStyle(child).display;
        if (display !== 'none') {
            return [child, display];
        }
    }
    return [null, 'none'];
}

// The panel HA renders into is a chain of inline custom elements
// (partial-panel-resolver, the panel, hui-root), and a ResizeObserver never
// reports anything for an inline box. It saw the panel once at 0 x 0 and never
// again, whatever the sidebar did next (#2641). The first real box down that
// chain spans the content area, so its width moves with the sidebar. Mods slip
// hidden nodes of their own in front of it (UIX puts one in hui-root), hence
// the first rendered child rather than the first child.
function findContentBox(element) {
    let node = element;
    let display = getComputedStyle(node).display;
    for (let depth = 0; node && depth < MAX_BOX_DEPTH; depth++) {
        if (display !== 'inline' && display !== 'contents') {
            return display === 'none' ? null : node;
        }
        [node, display] = firstRenderedChild(node);
    }
    return null;
}

function trackSurface() {
    const settled = observedBox !== surface || boxLookups >= MAX_BOX_LOOKUPS;
    if (surface?.isConnected && observedBox?.isConnected && settled) {
        return true;
    }

    // HA swaps the panel when the user navigates to another dashboard, and the
    // box under it goes with it.
    const next = resolveContentSurface();
    if (!next) {
        return false;
    }
    if (next !== surface) {
        surface = next;
        boxLookups = 0;
    }

    // Until the panel has rendered a box, observe the panel itself. That still
    // reports its first layout, and the next calls look again, up to a limit
    // that only failed lookups in a row count towards.
    const found = findContentBox(surface);
    boxLookups = found ? 0 : boxLookups + 1;
    const box = found || surface;
    if (box === observedBox) {
        return true;
    }

    observedBox = box;
    observedWidth = null;
    // Observing reports the box's next layout on its own, so the first
    // measurement costs no forced reflow.
    if (resizeObserver && typeof box.getBoundingClientRect === 'function') {
        resizeObserver.disconnect();
        resizeObserver.observe(box);
    }
    return true;
}

function refresh() {
    if (!trackSurface()) {
        return;
    }

    const value = measureContentInlineStart();
    if (value === null) {
        return;
    }
    // The first answer goes out at once, nothing has been placed on it yet.
    if (publishedValue === null) {
        publish(value);
        return;
    }
    publishOnceSettled(value);
}

function onResize(entries) {
    // Only a change of width can move where the content starts. The height
    // changes each time a card loads or unfolds, and costs nothing here.
    const width = entries?.[entries.length - 1]?.contentRect?.width ?? null;
    if (width !== null && width === observedWidth) {
        return;
    }
    observedWidth = width;
    refresh();
}

// Idempotent, and cheap enough to call from every pop-up registration, which
// is how a panel swap or a late-booting dashboard gets picked up. It does
// nothing until hass is up, and nothing at all on the versions of Home
// Assistant that publish the inset themselves.
export function startContentInsetSync() {
    if (typeof document === 'undefined' || homeAssistantPublishesInset() !== false) {
        return false;
    }

    if (!resizeObserver && typeof ResizeObserver === 'function') {
        resizeObserver = new ResizeObserver(onResize);
    } else if (!resizeObserver && !resizeListenerAdded && typeof window !== 'undefined') {
        // No ResizeObserver: window resizes still catch every sidebar change,
        // they just cannot see a dock toggle that leaves the window alone.
        resizeListenerAdded = true;
        window.addEventListener('resize', refresh, { passive: true });
    }

    const hadSurface = Boolean(surface?.isConnected);
    if (!trackSurface()) {
        return false;
    }

    if (!resizeObserver && !hadSurface) {
        publish(measureContentInlineStart());
    }
    return true;
}

export function stopContentInsetSync() {
    resizeObserver?.disconnect();
    resizeObserver = null;

    if (resizeListenerAdded && typeof window !== 'undefined') {
        window.removeEventListener('resize', refresh);
    }
    resizeListenerAdded = false;

    if (settleFrame && typeof cancelAnimationFrame === 'function') {
        cancelAnimationFrame(settleFrame);
    }
    settleFrame = 0;

    insetFromHomeAssistant = null;
    surface = null;
    observedBox = null;
    boxLookups = 0;
    observedWidth = null;
    pendingValue = null;
    publishedValue = null;
    document.documentElement?.style?.removeProperty(CONTENT_INLINE_START_VAR);
}
