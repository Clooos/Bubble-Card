// Where the dashboard content really starts on screen.
//
// Pop-ups are position:fixed, so the viewport lays them out, while the
// dashboard itself is inset behind Home Assistant's sidebar. To stay centred
// on the dashboard rather than on the viewport, pop-ups offset themselves by
// that inset, and they used to read it straight from HA's own tokens:
//
//     var(--ha-sidebar-width, var(--mdc-drawer-width, 0px))
//
// Those tokens carry a WIDTH, never a VISIBILITY. When HA hides the sidebar
// (narrow viewport, "always hidden", kiosk mode, companion app) it drops
// --ha-sidebar-width with `unset`, and the chain falls through to the legacy
// --mdc-drawer-width. Anything still defining that stale token (an older HA, a
// theme, a sidebar or kiosk mod) then offsets the pop-up by a sidebar nobody
// can see. That is issue #2537: 256px to the right, which on a phone puts the
// whole pop-up off screen, where it looks like it never opened while it still
// swallows every tap.
//
// So measure the panel HA actually rendered instead of asking a token to
// describe it, and publish the answer as one CSS variable every pop-up
// inherits.

import { resolveContentSurface } from './ha-boundary.js';
import { isDocumentRTL } from './utils.js';

export const CONTENT_INLINE_START_VAR = '--bubble-content-inline-start';

// Sub-pixel jitter (browser zoom puts a 56px sidebar edge at 55.994px) is not
// a layout change worth republishing.
const MIN_CHANGE_PX = 0.5;

let surface = null;
let resizeObserver = null;
let resizeListenerAdded = false;
let publishedValue = null;

function getViewportWidth() {
    return document.documentElement?.clientWidth || window.innerWidth || 0;
}

// The inset is logical, not physical: in RTL the content area starts at the
// right edge, and so does the `inset-inline-start` that consumes this value.
export function measureContentInlineStart(element = surface) {
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

function trackSurface() {
    if (surface?.isConnected) {
        return true;
    }

    surface = resolveContentSurface();
    if (!surface) {
        return false;
    }

    // Observing reports the panel's next layout on its own, so the first
    // measurement costs no forced reflow.
    if (resizeObserver && typeof surface.getBoundingClientRect === 'function') {
        resizeObserver.disconnect();
        resizeObserver.observe(surface);
    }
    return true;
}

function refresh() {
    // HA swaps the panel element when the user navigates to another dashboard.
    if (!trackSurface()) {
        return;
    }
    publish(measureContentInlineStart());
}

// Idempotent, and cheap enough to call from every pop-up registration: that is
// what makes a panel swap or a late-booting dashboard get picked up.
export function startContentInsetSync() {
    if (typeof document === 'undefined') {
        return false;
    }

    if (!resizeObserver && typeof ResizeObserver === 'function') {
        resizeObserver = new ResizeObserver(refresh);
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

    surface = null;
    publishedValue = null;
    document.documentElement?.style?.removeProperty(CONTENT_INLINE_START_VAR);
}
