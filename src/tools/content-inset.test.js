import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

let documentRTL = false;

function versionAtLeast(version, minimum) {
    const current = String(version).split('.').map(Number);
    const wanted = String(minimum).split('.').map(Number);
    for (let i = 0; i < Math.max(current.length, wanted.length); i++) {
        if ((current[i] || 0) !== (wanted[i] || 0)) {
            return (current[i] || 0) > (wanted[i] || 0);
        }
    }
    return true;
}

jest.unstable_mockModule('./utils.js', () => ({
    isDocumentRTL: jest.fn(() => documentRTL),
    isHomeAssistantVersionAtLeast: jest.fn((hass, minimum) => versionAtLeast(hass?.config?.version, minimum)),
}));

const {
    CONTENT_INLINE_START_VAR,
    HA_SIDEBAR_WIDTH_VERSION,
    measureContentInlineStart,
    startContentInsetSync,
    stopContentInsetSync,
} = await import('./content-inset.js');

function rect(left, width) {
    return { left, right: left + width, width, height: 600, top: 0, bottom: 600 };
}

// A laid-out block, by default the panel itself, as the tests before #2641
// assumed. `display` feeds the getComputedStyle mock below.
function createPanel({ left = 0, width = 800, connected = true, display = 'block', children = [] } = {}) {
    const panel = {
        localName: 'partial-panel-resolver',
        isConnected: connected,
        display,
        children,
        getBoundingClientRect: jest.fn(() => rect(left, width)),
        moveTo(nextLeft, nextWidth) {
            panel.getBoundingClientRect.mockImplementation(() => rect(nextLeft, nextWidth));
        },
    };
    return panel;
}

// What HA really renders (#2641). partial-panel-resolver, the panel and
// hui-root are inline custom elements, the first real box is hui-root's
// wrapper div, and UIX slips a hidden node of its own in front of it.
function createPanelChain({ left = 56, width = 944 } = {}) {
    const wrapper = createPanel({ left, width });
    wrapper.localName = 'div';
    const huiRoot = {
        localName: 'hui-root',
        display: 'inline',
        isConnected: true,
        shadowRoot: {
            children: [
                { localName: 'uix-node', display: 'none', isConnected: true },
                { localName: 'style', isConnected: true },
                wrapper,
            ],
        },
    };
    const lovelacePanel = {
        localName: 'ha-panel-lovelace',
        display: 'inline',
        isConnected: true,
        shadowRoot: { children: [huiRoot] },
    };
    const resolver = createPanel({ left, width, display: 'inline', children: [lovelacePanel] });
    return { resolver, wrapper, huiRoot };
}

// HA's shell: <home-assistant> → <home-assistant-main> → the panel element,
// each behind its own shadow root.
function installHaShell(panel, { exposeSlot = true, exposeTag = true, version = '2026.5.1' } = {}) {
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
            hass: version ? { config: { version } } : undefined,
            shadowRoot: {
                querySelector: (inner) => (inner === 'home-assistant-main' ? { shadowRoot: mainShadowRoot } : null),
            },
        };
    });
}

function published() {
    return global.document.documentElement.style.properties[CONTENT_INLINE_START_VAR];
}

function writes() {
    return global.document.documentElement.style.setProperty.mock.calls.length;
}

let resizeObservers;
let frames;
let frameId;

// One rendering frame. The animation frame callbacks queued before it start,
// then the observer reports whatever layout moved (the test calls trigger()).
function runFrame() {
    const due = [...frames.entries()];
    frames.clear();
    for (const [, callback] of due) callback();
}

beforeEach(() => {
    documentRTL = false;
    resizeObservers = [];
    frames = new Map();
    frameId = 0;

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

    global.getComputedStyle = jest.fn((element) => ({ display: element?.display ?? 'block' }));
    global.requestAnimationFrame = jest.fn((callback) => {
        frameId++;
        frames.set(frameId, callback);
        return frameId;
    });
    global.cancelAnimationFrame = jest.fn((id) => {
        frames.delete(id);
    });

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
        // With a width, the entry the browser would deliver for the observed box.
        trigger(width) {
            this.callback(width === undefined ? [] : [{ contentRect: { width, height: 600 } }]);
        }
    };
});

afterEach(() => {
    stopContentInsetSync();
    delete global.ResizeObserver;
    delete global.requestAnimationFrame;
    delete global.cancelAnimationFrame;
    delete global.getComputedStyle;
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

// From 2026.6 HA pads the content with --ha-sidebar-width and unsets it when
// the sidebar is hidden, and every placement falls back to it in CSS.
describe('Home Assistant versions that publish the inset themselves', () => {
    test('the threshold is the frontend that renamed the drawer token', () => {
        expect(HA_SIDEBAR_WIDTH_VERSION).toBe('2026.6');
    });

    test.each(['2026.6.0', '2026.9.2', '2027.1.0'])('%s is left to the CSS fallback, nothing observed or written', (version) => {
        installHaShell(createPanel({ left: 56, width: 944 }), { version });

        expect(startContentInsetSync()).toBe(false);
        // A pop-up calls it on every update, and it stays that cheap.
        expect(startContentInsetSync()).toBe(false);
        expect(resizeObservers).toHaveLength(0);
        expect(global.getComputedStyle).not.toHaveBeenCalled();
        expect(published()).toBeUndefined();
    });

    test.each(['2023.9.0', '2026.3.1', '2026.5.4'])('%s is still measured', (version) => {
        installHaShell(createPanel({ left: 56, width: 944 }), { version });

        expect(startContentInsetSync()).toBe(true);
        resizeObservers[0].trigger(944);
        expect(published()).toBe('56px');
    });

    test('decides nothing before hass is up, then picks it up on the next call', () => {
        const panel = createPanel({ left: 56, width: 944 });
        installHaShell(panel, { version: null });

        expect(startContentInsetSync()).toBe(false);
        expect(resizeObservers).toHaveLength(0);

        installHaShell(panel, { version: '2026.4.0' });
        expect(startContentInsetSync()).toBe(true);
        expect(resizeObservers[0].observed).toEqual([panel]);
    });
});

describe('content box', () => {
    test('observes the first rendered box under the inline panel chain, not the panel', () => {
        const { resolver, wrapper } = createPanelChain();
        installHaShell(resolver);

        expect(startContentInsetSync()).toBe(true);
        expect(resizeObservers[0].observed).toEqual([wrapper]);

        resizeObservers[0].trigger(944);
        expect(published()).toBe('56px');
    });

    test('observes the panel itself until it has rendered a box, then switches to the box', () => {
        const resolver = createPanel({ left: 56, width: 944, display: 'inline' });
        installHaShell(resolver);

        startContentInsetSync();
        expect(resizeObservers[0].observed).toEqual([resolver]);

        const { resolver: rendered, wrapper } = createPanelChain();
        resolver.children = rendered.children;
        startContentInsetSync();
        expect(resizeObservers[0].observed).toEqual([wrapper]);
    });

    test('stops looking for a box after enough failed lookups in a row', () => {
        installHaShell(createPanel({ left: 56, width: 944, display: 'inline' }));

        for (let i = 0; i < 20; i++) startContentInsetSync();
        const lookups = global.getComputedStyle.mock.calls.length;

        for (let i = 0; i < 10; i++) startContentInsetSync();
        expect(global.getComputedStyle.mock.calls.length).toBe(lookups);
    });

    test('follows a box HA replaces under the same panel', () => {
        const { resolver, huiRoot, wrapper } = createPanelChain();
        installHaShell(resolver);
        startContentInsetSync();

        const replacement = createPanel({ left: 56, width: 944 });
        wrapper.isConnected = false;
        huiRoot.shadowRoot.children = [replacement];

        startContentInsetSync();
        expect(resizeObservers[0].observed).toEqual([replacement]);
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

    test('does not measure again when only the height changed', () => {
        const panel = createPanel({ left: 56, width: 944 });
        installHaShell(panel);
        startContentInsetSync();
        resizeObservers[0].trigger(944);
        const measured = panel.getBoundingClientRect.mock.calls.length;

        // A card loads further down, same width and taller content.
        resizeObservers[0].trigger(944);
        resizeObservers[0].trigger(944);

        expect(panel.getBoundingClientRect.mock.calls.length).toBe(measured);
        expect(frames.size).toBe(0);
    });

    // HA animates the content area for a quarter of a second when the sidebar
    // moves, and each write restyles the whole document (#2641).
    test('writes once when the width holds still, not on every frame of the sidebar animation', () => {
        const panel = createPanel({ left: 56, width: 944 });
        installHaShell(panel);
        startContentInsetSync();
        resizeObservers[0].trigger(944);
        expect(published()).toBe('56px');
        const before = writes();

        for (const [left, width] of [[40, 960], [12, 988], [0, 1000]]) {
            panel.moveTo(left, width);
            resizeObservers[0].trigger(width);
            runFrame();
        }
        expect(writes()).toBe(before);

        // A frame without a width change, and the value goes out once.
        runFrame();
        expect(writes()).toBe(before + 1);
        expect(published()).toBe('0px');
    });

    test('publishes a zero inset when the sidebar goes away', () => {
        const withSidebar = createPanel({ left: 56, width: 944 });
        installHaShell(withSidebar);
        startContentInsetSync();
        resizeObservers[0].trigger(944);
        expect(published()).toBe('56px');

        // Same panel, sidebar hidden: HA gives the whole viewport to the content.
        withSidebar.moveTo(0, 1000);
        resizeObservers[0].trigger(1000);
        runFrame();
        runFrame();
        expect(published()).toBe('0px');
    });

    test('ignores sub-pixel jitter from browser zoom', () => {
        const panel = createPanel({ left: 56, width: 944 });
        installHaShell(panel);
        startContentInsetSync();
        resizeObservers[0].trigger(944);

        const before = writes();
        panel.moveTo(55.994, 944.006);
        resizeObservers[0].trigger(944.006);
        runFrame();
        runFrame();

        expect(writes()).toBe(before);
        expect(published()).toBe('56px');
    });

    test('follows the panel HA swaps in when the dashboard changes', () => {
        const first = createPanel({ left: 56, width: 944 });
        installHaShell(first);
        startContentInsetSync();
        resizeObservers[0].trigger(944);
        expect(published()).toBe('56px');

        first.isConnected = false;
        installHaShell(createPanel({ left: 256, width: 744 }));

        startContentInsetSync();
        resizeObservers[0].trigger(744);
        runFrame();
        runFrame();
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

    test('writes at once when the browser has no requestAnimationFrame', () => {
        delete global.requestAnimationFrame;
        const panel = createPanel({ left: 56, width: 944 });
        installHaShell(panel);
        startContentInsetSync();
        resizeObservers[0].trigger(944);

        panel.moveTo(256, 744);
        resizeObservers[0].trigger(744);
        expect(published()).toBe('256px');
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
