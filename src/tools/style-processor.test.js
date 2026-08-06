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

jest.unstable_mockModule('../modules/registry.js', () => ({
    // One inert module keeps handleCustomStyles on its synchronous path.
    yamlKeysMap: new Map([['default', { code: '' }]]),
}));

jest.unstable_mockModule('../modules/bct-provider.js', () => ({
    isBCTAvailableSync: jest.fn(() => true),
}));

jest.unstable_mockModule('./clean-css.js', () => ({
    cleanCSS: jest.fn((css) => css),
}));

const { handleCustomStyles } = await import('./style-processor.js');

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
});
