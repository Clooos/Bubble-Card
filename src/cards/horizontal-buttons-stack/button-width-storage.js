// A button's measured width is cached per link so the next render can size it
// before layout, avoiding a visible reflow of the whole stack.
//
// It is only a hint, never a source of truth: the stack always re-measures. So
// every access is guarded. localStorage throws when its per-origin quota is
// full (that quota is shared with every other cache on the dashboard, and this
// write is the small one that happens to hit the wall first) and when storage
// is unavailable altogether (cookies blocked, some private modes). Left
// unguarded, a failure here took down the whole horizontal-buttons-stack
// handler: no styles, no light colors, no status, until reload.

const KEY_PREFIX = 'bubbleButtonWidth-';

export function getStoredButtonWidth(link) {
    try {
        return localStorage.getItem(`${KEY_PREFIX}${link}`);
    } catch (_) {
        return null;
    }
}

export function storeButtonWidth(link, width) {
    const value = `${width}`;
    try {
        // placeButtons runs on every hass tick, and localStorage is synchronous
        // and disk-backed: skip the write whenever the width has not moved.
        if (localStorage.getItem(`${KEY_PREFIX}${link}`) === value) {
            return;
        }
        localStorage.setItem(`${KEY_PREFIX}${link}`, value);
    } catch (_) {
        // Expendable: the stack keeps the width it just measured.
    }
}
