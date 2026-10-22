// The size of the window, read once and then kept up to date by a single
// resize listener. Wherever the viewport is enabled (phones, tablets, the
// companion apps), Chromium brings the style and the layout of the whole page
// up to date before it answers innerWidth or innerHeight, so a read in the
// middle of a pop-up build paid for every card built so far, in a pass of its
// own. The size only changes with a resize, and a resize listener runs where
// the browser lays the page out for that frame anyway.

let size = null;
let owner = null;
let tracked = false;

function read() {
    size = { width: owner.innerWidth, height: owner.innerHeight };
}

function follow(win) {
    owner = win;
    size = null;
    tracked = typeof win.addEventListener === 'function';
    if (tracked) {
        win.addEventListener('resize', read, { passive: true });
    }
}

// Null where there is no window at all. A window that cannot report its
// resizes is read on every call, since nothing would keep a copy honest.
export function getViewportSize() {
    if (typeof window === 'undefined' || !window) {
        return null;
    }

    if (owner !== window) {
        follow(window);
    }

    if (!size || !tracked) {
        read();
    }

    return size;
}
