import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// utils.js pulls the whole card tree in through these two, and neither takes
// part in resolving a theme color.
jest.unstable_mockModule('../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));

jest.unstable_mockModule('./icon.js', () => ({
    getIconColor: jest.fn(() => 'var(--primary-color)'),
}));

function createInlineStyle() {
    const properties = new Map();

    return {
        get length() {
            return properties.size;
        },
        getPropertyValue: (name) => properties.get(name) ?? '',
        setProperty: (name, value) => properties.set(name, value),
        removeProperty: (name) => properties.delete(name),
    };
}

// Home Assistant writes its theme inline on <html>; everything below reads the
// computed values, which is where the substituted colors land. The observer
// watching that attribute is what tells Bubble Card the theme moved, so the mock
// hands the test a way to replay a write the way the browser would.
function mountTheme(themeVariables, { prefersDark = false } = {}) {
    const documentElement = { style: createInlineStyle() };
    const body = { style: createInlineStyle() };
    const observers = [];

    global.document = { documentElement, body };
    global.window = {
        matchMedia: jest.fn((query) => ({ matches: prefersDark && query.includes('dark') })),
    };
    global.getComputedStyle = jest.fn(() => ({
        getPropertyValue: (name) => themeVariables[name] ?? '',
    }));
    global.MutationObserver = class {
        constructor(callback) {
            this.callback = callback;
        }
        observe(target, options) {
            observers.push({ target, options, callback: this.callback });
        }
        disconnect() {}
    };

    return {
        documentElement,
        themeVariables,
        observers,
        // Replays the attribute change Home Assistant triggers when it applies a theme.
        applyThemeInline: (tokens) => {
            Object.entries(tokens).forEach(([name, value]) => {
                if (value === null) documentElement.style.removeProperty(name);
                else documentElement.style.setProperty(name, value);
            });
            observers.forEach(({ callback }) => callback([{ attributeName: 'style' }]));
        },
    };
}

describe('createBubbleDefaultColor', () => {
    let styleModule;
    let utilsModule;

    async function loadModules() {
        jest.resetModules();
        styleModule = await import('./style.js');
        utilsModule = await import('./utils.js');
    }

    afterEach(() => {
        delete global.document;
        delete global.window;
        delete global.getComputedStyle;
        delete global.MutationObserver;
    });

    test('keeps the active blue deep on the shorthand hex of the HA dark theme', async () => {
        // --primary-background-color is #111 there. Reading it as white produced
        // rgb(77, 178, 255), the washed out blue reported in #2536.
        mountTheme({ '--primary-background-color': '#111', '--primary-text-color': '#e1e1e1' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(5, 107, 184)');
    });

    test('mixes an rgba background the same way as a hex one', async () => {
        mountTheme({ '--primary-background-color': 'rgba(57, 54, 70, 1)' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(17, 118, 200)');
    });

    test('stays bright on the light theme background', async () => {
        mountTheme({ '--primary-background-color': '#fafafa', '--primary-text-color': '#141414' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(75, 177, 254)');
    });

    test('falls back on a dark background when only the text color is readable', async () => {
        // An unreadable background used to mean white, so a dark theme exposing a
        // color format Bubble Card cannot parse lost its deep blue.
        mountTheme({ '--primary-background-color': 'oklch(0.2 0.02 280)', '--primary-text-color': '#e1e1e1' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(5, 107, 184)');
    });

    test('follows the browser color scheme when the theme is not readable at all', async () => {
        mountTheme({}, { prefersDark: true });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(5, 107, 184)');

        mountTheme({}, { prefersDark: false });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(75, 177, 254)');
    });

    test('publishes the color on the document unless asked not to', async () => {
        const { documentElement } = mountTheme({ '--primary-background-color': '#111' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor(false)).toBe('rgb(5, 107, 184)');
        expect(documentElement.style.getPropertyValue('--bubble-default-color')).toBe('');

        styleModule.createBubbleDefaultColor();
        expect(documentElement.style.getPropertyValue('--bubble-default-color')).toBe('rgb(5, 107, 184)');
    });

    test('recomputes against the new theme once the style cache is invalidated', async () => {
        const mounted = mountTheme({ '--primary-background-color': '#fafafa', '--primary-text-color': '#141414' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(75, 177, 254)');

        mounted.themeVariables['--primary-background-color'] = '#111';
        mounted.themeVariables['--primary-text-color'] = '#e1e1e1';

        // Home Assistant hands the new theme over through the hass setter, which is
        // the only signal that reliably precedes any recomputation.
        utilsModule.invalidateStyleCache();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(5, 107, 184)');
    });

    test('watches the inline style Home Assistant writes when it applies a theme', async () => {
        const mounted = mountTheme({ '--primary-background-color': '#111' });
        await loadModules();

        const [observed] = mounted.observers;
        expect(observed.target).toBe(mounted.documentElement);
        expect(observed.options).toEqual({ attributes: true, attributeFilter: ['style'] });
    });

    test('recomputes when the theme applied inline on the document changes', async () => {
        const mounted = mountTheme({ '--primary-background-color': '#fafafa', '--primary-text-color': '#141414' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(75, 177, 254)');

        // A theme switch with no hass tick to announce it.
        mounted.themeVariables['--primary-background-color'] = '#111';
        mounted.themeVariables['--primary-text-color'] = '#e1e1e1';
        mounted.applyThemeInline({ '--primary-background-color': '#111', '--primary-text-color': '#e1e1e1' });

        expect(styleModule.createBubbleDefaultColor()).toBe('rgb(5, 107, 184)');
    });

    test('notices a theme that writes no color of its own but a different token count', async () => {
        const mounted = mountTheme({ '--primary-background-color': '#111' });
        mounted.documentElement.style.setProperty('--primary-background-color', '#111');
        await loadModules();

        expect(styleModule.createBubbleDefaultColor(false)).toBe('rgb(5, 107, 184)');

        // The HA default light theme clears every inline token: without the
        // declaration count in the fingerprint this looked unchanged.
        mounted.themeVariables['--primary-background-color'] = '#fafafa';
        mounted.applyThemeInline({ '--primary-background-color': null });

        expect(styleModule.createBubbleDefaultColor(false)).toBe('rgb(75, 177, 254)');
    });

    test('leaves the cache alone while nothing writes on the document', async () => {
        const mounted = mountTheme({ '--primary-background-color': '#111' });
        await loadModules();

        expect(styleModule.createBubbleDefaultColor(false)).toBe('rgb(5, 107, 184)');
        const readsAfterFirstColor = global.getComputedStyle.mock.calls.length;

        // A theme cannot change without touching the document, so repeated reads
        // must not pay for getComputedStyle again.
        styleModule.createBubbleDefaultColor(false);
        styleModule.createBubbleDefaultColor(false);

        expect(global.getComputedStyle.mock.calls.length).toBe(readsAfterFirstColor);
        expect(mounted.observers).toHaveLength(1);
    });
});
