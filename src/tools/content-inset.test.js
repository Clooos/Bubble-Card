import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

let documentRTL = false;

jest.unstable_mockModule('./utils.js', () => ({
    isDocumentRTL: jest.fn(() => documentRTL),
}));

const {
    CONTENT_INLINE_START_VAR,
    measureContentInlineStart,
    startContentInsetSync,
    stopContentInsetSync,
} = await import('./content-inset.js');

function createPanel({ left = 0, width = 800, connected = true } = {}) {
    const panel = {
        isConnected: connected,
        getBoundingClientRect: () => ({
            left,
            right: left + width,
            width,
            height: 600,
            top: 0,
            bottom: 600,
        }),
    };
    return panel;
}

// HA's shell: <home-assistant> → <home-assistant-main> → the panel element,
// each behind its own shadow root.
function installHaShell(panel, { exposeSlot = true, exposeTag = true } = {}) {
    const mainShadowRoot = {
        querySelector: (selector) => {
            if (selector === '[slot="appContent"]') return exposeSlot ? panel : null;
            if (selector === 'partial-panel-resolver') return exposeTag ? panel : null;
            return null;
        },
    };

    global.document.querySelector = jest.fn((selector) => {
        if (selector !== 'home-assistant') return null;
        return {
            shadowRoot: {
                querySelector: (inner) => (inner === 'home-assistant-main' ? { shadowRoot: mainShadowRoot } : null),
            },
        };
    });
}

function published() {
    return global.document.documentElement.style.properties[CONTENT_INLINE_START_VAR];
}

let resizeObservers;

beforeEach(() => {
    documentRTL = false;
    resizeObservers = [];

    const properties = {};
    global.document = {
        querySelector: jest.fn(() => null),
        documentElement: {
            clientWidth: 1000,
            style: {
                properties,
                setProperty: jest.fn((name, value) => {
                    properties[name] = value;
                }),
                removeProperty: jest.fn((name) => {
                    delete properties[name];
                }),
            },
        },
    };

    global.window = {
        innerWidth: 1000,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    };

    global.ResizeObserver = class {
        constructor(callback) {
            this.callback = callback;
            this.observed = [];
            resizeObservers.push(this);
        }
        observe(element) {
            this.observed.push(element);
        }
        disconnect() {
            this.observed = [];
        }
        trigger() {
            this.callback();
        }
    };
});

afterEach(() => {
    stopContentInsetSync();
    delete global.ResizeObserver;
    delete global.window;
    delete global.document;
});

describe('content inset measurement', () => {
    test('reports where the rendered panel starts, sidebar shown', () => {
        expect(measureContentInlineStart(createPanel({ left: 56, width: 944 }))).toBe(56);
        expect(measureContentInlineStart(createPanel({ left: 256, width: 744 }))).toBe(256);
    });

    // #2537: HA hides the sidebar by dropping --ha-sidebar-width, which used to
    // let the legacy --mdc-drawer-width answer in its place. Geometry cannot
    // lie the same way: no sidebar on screen, no inset.
    test('reports no inset when the sidebar is not on screen', () => {
        expect(measureContentInlineStart(createPanel({ left: 0, width: 1000 }))).toBe(0);
    });

    test('measures from the inline start edge on RTL dashboards', () => {
        documentRTL = true;
        // Viewport 1000 wide, sidebar on the right: the panel ends 56px short.
        expect(measureContentInlineStart(createPanel({ left: 0, width: 944 }))).toBe(56);
    });

    test('treats an unlaid-out panel as unknown rather than as "no sidebar"', () => {
        const notRendered = {
            isConnected: true,
            getBoundingClientRect: () => ({ left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0 }),
        };
        expect(measureContentInlineStart(notRendered)).toBeNull();
        expect(measureContentInlineStart(null)).toBeNull();
    });
});

describe('content inset publication', () => {
    test('publishes the measured inset once the panel has been laid out', () => {
        installHaShell(createPanel({ left: 56, width: 944 }));

        expect(startContentInsetSync()).toBe(true);
        // The observer reports the first layout, so nothing is measured eagerly.
        expect(published()).toBeUndefined();

        resizeObservers[0].trigger();
        expect(published()).toBe('56px');
    });

    test('publishes a zero inset when the sidebar goes away', () => {
        const withSidebar = createPanel({ left: 56, width: 944 });
        installHaShell(withSidebar);
        startContentInsetSync();
        resizeObservers[0].trigger();
        expect(published()).toBe('56px');

        // Same panel, sidebar hidden: HA gives the whole viewport to the content.
        withSidebar.getBoundingClientRect = () => ({
            left: 0, right: 1000, width: 1000, height: 600, top: 0, bottom: 600,
        });
        resizeObservers[0].trigger();
        expect(published()).toBe('0px');
    });

    test('ignores sub-pixel jitter from browser zoom', () => {
        const panel = createPanel({ left: 56, width: 944 });
        installHaShell(panel);
        startContentInsetSync();
        resizeObservers[0].trigger();

        const writes = global.document.documentElement.style.setProperty.mock.calls.length;
        panel.getBoundingClientRect = () => ({
            left: 55.994, right: 999.994, width: 944, height: 600, top: 0, bottom: 600,
        });
        resizeObservers[0].trigger();

        expect(global.document.documentElement.style.setProperty.mock.calls.length).toBe(writes);
        expect(published()).toBe('56px');
    });

    test('follows the panel HA swaps in when the dashboard changes', () => {
        const first = createPanel({ left: 56, width: 944 });
        installHaShell(first);
        startContentInsetSync();
        resizeObservers[0].trigger();
        expect(published()).toBe('56px');

        first.isConnected = false;
        installHaShell(createPanel({ left: 256, width: 744 }));

        startContentInsetSync();
        resizeObservers[0].trigger();
        expect(published()).toBe('256px');
    });

    test('falls back to the tag name when HA stops slotting the panel', () => {
        installHaShell(createPanel({ left: 56, width: 944 }), { exposeSlot: false });

        expect(startContentInsetSync()).toBe(true);
        resizeObservers[0].trigger();
        expect(published()).toBe('56px');
    });

    test('publishes nothing when HA\'s shell cannot be found, leaving the CSS fallback in charge', () => {
        expect(startContentInsetSync()).toBe(false);
        expect(published()).toBeUndefined();
    });

    test('measures immediately when the browser has no ResizeObserver', () => {
        delete global.ResizeObserver;
        installHaShell(createPanel({ left: 56, width: 944 }));

        expect(startContentInsetSync()).toBe(true);
        expect(published()).toBe('56px');
        expect(global.window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function), { passive: true });
    });
});

// The contract this module exists to enforce, checked across the whole
// codebase: nothing may fall back on --mdc-drawer-width. HA stopped defining
// it (frontend 20260527 renamed it to --ha-sidebar-width) and hides the
// sidebar by dropping --ha-sidebar-width entirely, so a fallback to the legacy
// token hands the layout to whatever stale definition a theme, an older HA or
// a sidebar/kiosk mod still exposes. Issue #2537 is what that costs.
describe('legacy sidebar token contract', () => {
    function collectStylesheets(directory, found = []) {
        for (const entry of readdirSync(directory, { withFileTypes: true })) {
            const path = join(directory, entry.name);
            if (entry.isDirectory()) {
                collectStylesheets(path, found);
            } else if (entry.name.endsWith('.css')) {
                found.push(path);
            }
        }
        return found;
    }

    test('no stylesheet reads the legacy drawer-width token', () => {
        const src = join(dirname(fileURLToPath(import.meta.url)), '..');
        const offenders = collectStylesheets(src)
            .filter((path) => /var\(\s*--mdc-drawer-width/.test(readFileSync(path, 'utf8')))
            .map((path) => path.slice(src.length + 1));

        expect(offenders).toEqual([]);
    });
});
