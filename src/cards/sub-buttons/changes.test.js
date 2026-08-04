import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../../tools/utils.js', () => ({
    setLayout: jest.fn(),
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const { changeEditor, changeStyle } = await import('./changes.js');

function createCardContainer() {
    return {
        classList: { contains: (name) => name === 'card' },
        style: { position: '' },
        parentNode: { style: {} },
    };
}

function createContext({ insidePopup, cardContainer, editorClass = false }) {
    const classes = new Set(editorClass ? ['editor'] : []);
    const card = {
        classList: {
            contains: (name) => classes.has(name),
            add: (name) => classes.add(name),
            remove: (name) => classes.delete(name),
        },
        style: { setProperty: jest.fn() },
        offsetHeight: 56,
        getBoundingClientRect: () => ({ height: 56 }),
        closest: (selector) => (insidePopup && selector === '.bubble-pop-up' ? card : null),
    };
    card.getRootNode = () => card;
    card.parentNode = { host: { parentNode: { parentNode: cardContainer } } };

    return {
        card,
        config: { footer_mode: true },
        editor: false,
        detectedEditor: false,
    };
}

describe('sub-buttons footer mode style updates', () => {
    let haView;

    beforeEach(() => {
        haView = { style: {} };
        global.requestAnimationFrame = (callback) => { callback(); return 1; };
        // home-assistant → home-assistant-main → ha-panel-lovelace → hui-root
        // → hui-sections-view, each behind its own shadow root.
        const shell = (depth) => (depth === 0
            ? haView
            : { shadowRoot: { querySelector: () => shell(depth - 1) } });
        global.document = { querySelector: () => shell(4) };
    });

    afterEach(() => {
        delete global.document;
        delete global.requestAnimationFrame;
    });

    test('reserves room at the end of the dashboard for a dashboard footer', () => {
        const context = createContext({ insidePopup: false, cardContainer: createCardContainer() });

        changeStyle(context);

        expect(haView.style.paddingBottom).toBeDefined();
    });

    test('never pads the dashboard for a footer living in a pop-up', () => {
        const context = createContext({ insidePopup: true, cardContainer: createCardContainer() });

        changeStyle(context);

        expect(haView.style.paddingBottom).toBeUndefined();
        // The offset variable is a card-local concern and still applies.
        expect(context.card.style.setProperty).toHaveBeenCalledWith('--bubble-footer-bottom', '16px');
    });

    test('restores the dashboard cell positioning when leaving the editor', () => {
        const cardContainer = createCardContainer();
        const context = createContext({ insidePopup: false, cardContainer, editorClass: true });

        changeEditor(context);

        expect(cardContainer.style.position).toBe('absolute');
    });

    test('leaves a pop-up card wrapper alone when leaving the editor', () => {
        const cardContainer = createCardContainer();
        const context = createContext({ insidePopup: true, cardContainer, editorClass: true });

        changeEditor(context);

        expect(cardContainer.style.position).toBe('');
    });
});
