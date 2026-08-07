import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// handleCustomStyles pulls in the whole style pipeline; everything except the
// registration logic under test is mocked to a minimal, deterministic shape.
jest.unstable_mockModule('./utils.js', () => ({
    getState: jest.fn(() => null),
}));

jest.unstable_mockModule('./icon.js', () => ({
    getWeatherIcon: jest.fn(() => ''),
}));

jest.unstable_mockModule('../components/sub-button/changes.js', () => ({
    getSubButtonsStates: jest.fn(() => null),
}));

jest.unstable_mockModule('./validate-condition.js', () => ({
    checkConditionsMet: jest.fn(() => true),
}));

const templateChangeUnsubscribe = jest.fn();
const onTemplateChange = jest.fn(() => templateChangeUnsubscribe);
jest.unstable_mockModule('./render-template.js', () => ({
    onTemplateChange,
}));

// One inert module keeps handleCustomStyles on its synchronous path, plus the
// two shapes a module can legitimately have without styling anything.
const yamlKeysMap = new Map([
    ['default', { code: '' }],
    // A suggestions-only module: no `code` key at all.
    ['suggestions_only', { name: 'Suggestions only', suggestions_code: 'return null;' }],
    ['empty_code', { name: 'Empty', code: '' }],
]);
jest.unstable_mockModule('../modules/registry.js', () => ({ yamlKeysMap }));

jest.unstable_mockModule('../modules/bct-provider.js', () => ({
    isBCTAvailableSync: jest.fn(() => true),
}));

const cleanCSS = jest.fn((css) => css);
jest.unstable_mockModule('./clean-css.js', () => ({
    cleanCSS,
}));

const { handleCustomStyles, evalStyles } = await import('./style-processor.js');

function createCardElement() {
    const element = {
        tagName: 'DIV',
        style: {},
        dataset: {},
        querySelector: jest.fn(() => null),
    };
    element.appendChild = jest.fn((child) => {
        child.parentElement = element;
    });
    return element;
}

function createContext(element) {
    return {
        config: { card_type: 'button' },
        cardType: 'button',
        card: element,
        _hass: null,
    };
}

// Mirrors the cleanup contract of BubbleCard.disconnectedCallback.
function simulateDisconnect(context) {
    window.removeEventListener('bubble-card-modules-changed', context._moduleChangeHandler);
    window.removeEventListener('bubble-card-module-updated', context._moduleChangeHandler);
    document.removeEventListener('yaml-modules-updated', context._moduleChangeHandler);
    context._moduleChangeHandler = null;
    context._moduleChangeListenerAdded = false;
    context._templateChangeUnsubscribe();
    context._templateChangeUnsubscribe = null;
    context._templateChangeHandler = null;
}

describe('handleCustomStyles refresh listener registration', () => {
    beforeEach(() => {
        global.window = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        };
        global.document = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            createElement: jest.fn(() => ({
                tagName: 'STYLE',
                textContent: '',
                id: '',
                parentElement: null,
            })),
        };
        onTemplateChange.mockClear();
        templateChangeUnsubscribe.mockClear();
    });

    afterEach(() => {
        delete global.window;
        delete global.document;
    });

    test('registers the refresh listeners and keeps the template unsubscribe on first load', () => {
        const element = createCardElement();
        const context = createContext(element);

        handleCustomStyles(context, element);

        const windowEvents = window.addEventListener.mock.calls.map(([type]) => type);
        expect(windowEvents).toEqual(expect.arrayContaining(['bubble-card-modules-changed', 'bubble-card-module-updated']));
        expect(document.addEventListener).toHaveBeenCalledWith('yaml-modules-updated', context._moduleChangeHandler);
        expect(onTemplateChange).toHaveBeenCalledTimes(1);
        expect(context._templateChangeUnsubscribe).toBe(templateChangeUnsubscribe);
        expect(context._moduleChangeListenerAdded).toBe(true);
    });

    test('re-registers after a disconnect/reconnect cycle even once the card is loaded', () => {
        const element = createCardElement();
        const context = createContext(element);

        handleCustomStyles(context, element);
        expect(context.cardLoaded).toBe(true);

        simulateDisconnect(context);
        expect(templateChangeUnsubscribe).toHaveBeenCalledTimes(1);

        // HA re-attaches cached view elements: the next style pass must wire
        // the refresh listeners again even though cardLoaded is already set.
        handleCustomStyles(context, element);

        expect(onTemplateChange).toHaveBeenCalledTimes(2);
        expect(context._moduleChangeListenerAdded).toBe(true);
        expect(typeof context._moduleChangeHandler).toBe('function');
        expect(context._templateChangeUnsubscribe).toBe(templateChangeUnsubscribe);
    });

    test('resyncs module caches on reconnect so changes missed while detached apply', () => {
        const element = createCardElement();
        const context = createContext(element);

        handleCustomStyles(context, element);
        // First load takes the fresh path: no resync bump.
        expect(context._moduleListVersion).toBeUndefined();

        simulateDisconnect(context);
        // While detached, module events were not heard: the fingerprint must
        // be invalidated on reconnect or stale caches would keep applying.
        handleCustomStyles(context, element);

        expect(context._moduleListVersion).toBe(1);
    });

    test('does not register twice while the listeners are still wired', () => {
        const element = createCardElement();
        const context = createContext(element);

        handleCustomStyles(context, element);
        handleCustomStyles(context, element);

        expect(onTemplateChange).toHaveBeenCalledTimes(1);
        const moduleChangeRegistrations = window.addEventListener.mock.calls
            .filter(([type]) => type === 'bubble-card-modules-changed');
        expect(moduleChangeRegistrations).toHaveLength(1);
    });

    test('never registers listeners for direct style-element targets', () => {
        const styleElement = {
            tagName: 'STYLE',
            textContent: '',
            style: {},
            dataset: {},
        };
        const context = createContext(styleElement);

        handleCustomStyles(context, styleElement);

        expect(onTemplateChange).not.toHaveBeenCalled();
        expect(context._moduleChangeListenerAdded).toBeUndefined();
    });
});

describe('template target detection', () => {
    const WRITES_STATE = "${card.querySelector('.bubble-state').innerText = 'x'}";

    beforeEach(() => {
        global.window = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        };
        global.document = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            createElement: jest.fn(() => ({
                tagName: 'STYLE',
                textContent: '',
                id: '',
                parentElement: null,
            })),
        };
    });

    afterEach(() => {
        delete global.window;
        delete global.document;
    });

    function createTargetContext(styles) {
        const element = createCardElement();
        const context = createContext(element);
        context.config = { ...context.config, styles };
        context.elements = { state: {}, name: {} };
        return { context, element };
    }

    test('marks the element a template writes into, and only that one', () => {
        const { context, element } = createTargetContext(WRITES_STATE);

        handleCustomStyles(context, element);

        expect(context.elements.state.templateDetected).toBe(true);
        expect(context.elements.name.templateDetected).toBeUndefined();
    });

    test('leaves both unmarked when the template writes into neither', () => {
        const { context, element } = createTargetContext('.bubble-state { color: red; }');

        handleCustomStyles(context, element);

        expect(context.elements.state.templateDetected).toBeUndefined();
        expect(context.elements.name.templateDetected).toBeUndefined();
    });

    // The scan verdict is cached per template string, shared across every card:
    // a second card using the same template must still get marked.
    test('marks a second card using the same template string', () => {
        const first = createTargetContext(WRITES_STATE);
        handleCustomStyles(first.context, first.element);
        expect(first.context.elements.state.templateDetected).toBe(true);

        const second = createTargetContext(WRITES_STATE);
        handleCustomStyles(second.context, second.element);

        expect(second.context.elements.state.templateDetected).toBe(true);
    });

    // A calendar, a separator and a sub-buttons card are built without the base
    // elements. A global module writing into .bubble-state reaches them too, and
    // marking an element that is not there threw the module's styles away.
    test('survives a card that has no state and no name element', () => {
        const { context, element } = createTargetContext(WRITES_STATE);
        context.elements = {};

        expect(() => handleCustomStyles(context, element)).not.toThrow();
    });
});

describe('static style templates', () => {
    beforeEach(() => {
        global.window = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        };
        global.document = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            createElement: jest.fn(() => ({
                tagName: 'STYLE',
                textContent: '',
                id: '',
                parentElement: null,
            })),
        };
        cleanCSS.mockClear();
    });

    afterEach(() => {
        delete global.window;
        delete global.document;
    });

    function createStyleContext() {
        const context = createContext(createCardElement());
        context.elements = {};
        return context;
    }

    // The source string is not the output: a template literal resolves its escape
    // sequences, and CSS is full of them (content: "\2192" and friends). The
    // static path must still run the template once instead of shortcutting to the
    // text it was written from.
    test('resolves escape sequences instead of returning the source string', () => {
        const result = evalStyles(createStyleContext(), '.arrow::after { content: "\\u2192"; }');

        expect(result).toBe('.arrow::after { content: "→"; }');
    });

    test('resolves a static template once for every card that uses it', () => {
        const styles = '.resolved-once { color: red; }';

        const first = evalStyles(createStyleContext(), styles);
        const second = evalStyles(createStyleContext(), styles);

        expect(second).toBe(first);
        expect(cleanCSS).toHaveBeenCalledTimes(1);
    });

    // The global cache must never swallow a template that interpolates: those
    // still depend on the card and on hass.
    test('keeps re-evaluating a template that interpolates', () => {
        const context = createStyleContext();
        const styles = '.card { --resolved-state: ${state}; }';

        expect(evalStyles(context, styles, undefined, null, 'on')).toBe('.card { --resolved-state: on; }');
        expect(evalStyles(context, styles, undefined, null, 'off')).toBe('.card { --resolved-state: off; }');
    });
});


describe('a module that styles nothing', () => {
    beforeEach(() => {
        global.window = { addEventListener: jest.fn(), removeEventListener: jest.fn() };
        global.document = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            createElement: jest.fn(() => ({ tagName: 'STYLE', textContent: '', id: '', parentElement: null })),
        };
        cleanCSS.mockClear();
    });

    afterEach(() => {
        delete global.window;
        delete global.document;
    });

    // A module is not required to carry `code`: one that only declares
    // `suggestions:` or `suggestions_code:` has none. The whole module object
    // used to be handed to evalStyles as if it were the style string, which
    // threw "s.includes is not a function" on every render of every card
    // listing it, and the card lost its custom styles with it.
    const styleOf = (modules) => {
        const element = createCardElement();
        const context = createContext(element);
        context.config = { ...context.config, modules };
        handleCustomStyles(context);
        return context;
    };

    test('contributes nothing instead of throwing', () => {
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        expect(() => styleOf(['suggestions_only'])).not.toThrow();
        expect(error).not.toHaveBeenCalled();

        error.mockRestore();
    });

    test('an empty code is the same non-answer', () => {
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        expect(() => styleOf(['empty_code'])).not.toThrow();
        expect(error).not.toHaveBeenCalled();

        error.mockRestore();
    });

    test('does not take the styles of the module next to it down with it', () => {
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});
        yamlKeysMap.set('real', { name: 'Real', code: '.bubble-name { color: red; }' });

        const context = styleOf(['suggestions_only', 'real']);

        expect(error).not.toHaveBeenCalled();
        expect(JSON.stringify(cleanCSS.mock.calls)).toContain('color: red');
        yamlKeysMap.delete('real');
        error.mockRestore();
    });
});
