import { afterEach, describe, expect, test } from '@jest/globals';

// A window that counts how often its size is read. The module keeps one copy
// per window, so each test loads a fresh instance of it.
function fakeWindow(width, height, { events = true } = {}) {
    const win = events ? new EventTarget() : {};
    win.reads = 0;
    let w = width, h = height;
    Object.defineProperty(win, 'innerWidth', { get() { win.reads++; return w; } });
    Object.defineProperty(win, 'innerHeight', { get() { win.reads++; return h; } });
    win.resizeTo = (nextWidth, nextHeight) => { w = nextWidth; h = nextHeight; };
    return win;
}

async function load() {
    return import(`./viewport.js?case=${Math.random()}`);
}

afterEach(() => { delete global.window; });

describe('getViewportSize', () => {
    test('reads the window once, then keeps the size', async () => {
        global.window = fakeWindow(390, 844);
        const { getViewportSize } = await load();

        expect(getViewportSize()).toEqual({ width: 390, height: 844 });
        const readsAfterFirst = window.reads;
        for (let i = 0; i < 20; i++) getViewportSize();

        expect(window.reads).toBe(readsAfterFirst);
    });

    test('a resize brings the kept size up to date', async () => {
        global.window = fakeWindow(390, 844);
        const { getViewportSize } = await load();
        getViewportSize();

        window.resizeTo(1280, 720);
        expect(getViewportSize()).toEqual({ width: 390, height: 844 });

        window.dispatchEvent(new Event('resize'));
        expect(getViewportSize()).toEqual({ width: 1280, height: 720 });
    });

    test('a window that cannot report its resizes is read on every call', async () => {
        global.window = fakeWindow(320, 640, { events: false });
        const { getViewportSize } = await load();

        expect(getViewportSize()).toEqual({ width: 320, height: 640 });
        window.resizeTo(400, 640);
        expect(getViewportSize()).toEqual({ width: 400, height: 640 });
    });

    test('follows a window that replaced the previous one', async () => {
        global.window = fakeWindow(390, 844);
        const { getViewportSize } = await load();
        getViewportSize();

        global.window = fakeWindow(1024, 768);
        expect(getViewportSize()).toEqual({ width: 1024, height: 768 });
    });

    test('answers null without a window', async () => {
        const { getViewportSize } = await load();
        expect(getViewportSize()).toBeNull();
    });
});
