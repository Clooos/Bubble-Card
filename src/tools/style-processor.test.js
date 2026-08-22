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

const { handleCustomStyles, evalStyles, confineSelectorToPopupChrome } = await import('./style-processor.js');
const { runModuleTeardowns } = await import('./module-teardown.js');

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

describe('the onTeardown hook handed to a style template', () => {
    beforeEach(() => {
        global.window = { addEventListener: jest.fn(), removeEventListener: jest.fn() };
        global.document = { addEventListener: jest.fn(), removeEventListener: jest.fn() };
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

    // A module cannot see its card go away, and a pop-up rebuilds every card on
    // every open, so without this hook a timer it starts per card runs forever.
    test('is reachable from a template and registers what it is given', () => {
        const context = createStyleContext();

        evalStyles(context, '${onTeardown(() => {})} .x { color: red; }', { type: 'module', id: 'light' });

        expect(context._moduleTeardowns?.size).toBe(1);
    });

    test('keys by module, so two modules on one card keep their own slot', () => {
        const context = createStyleContext();

        evalStyles(context, '${onTeardown(() => {})} .a {}', { type: 'module', id: 'light' });
        evalStyles(context, '${onTeardown(() => {})} .b {}', { type: 'module', id: 'neon' });

        expect(context._moduleTeardowns.size).toBe(2);
    });

    test('does not stack one registration per style pass', () => {
        const context = createStyleContext();
        const styles = '${onTeardown(() => {})} .x { color: red; }';

        for (let i = 0; i < 7; i++) evalStyles(context, styles, { type: 'module', id: 'light' });

        expect(context._moduleTeardowns.size).toBe(1);
    });

    test('a template that never calls it registers nothing', () => {
        const context = createStyleContext();

        evalStyles(context, '.x { color: ${"red"}; }', { type: 'module', id: 'light' });

        expect(context._moduleTeardowns?.size ?? 0).toBe(0);
    });

    test('the registered callback is the module code, run on teardown', () => {
        const context = createStyleContext();
        global.window.__teardownProof = 0;

        evalStyles(context, '${onTeardown(() => { window.__teardownProof += 1; })} .x {}', { type: 'module', id: 'light' });
        expect(global.window.__teardownProof).toBe(0);

        runModuleTeardowns(context);
        expect(global.window.__teardownProof).toBe(1);
    });
});

describe('the hasChanged gate handed to a style template', () => {
    beforeEach(() => {
        global.window = { addEventListener: jest.fn(), removeEventListener: jest.fn() };
        global.document = { addEventListener: jest.fn(), removeEventListener: jest.fn() };
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

    // A side-effecting template is re-executed on every pass by design, so this
    // is the only way its imperative half can be skipped when nothing moved.
    test('is reachable from a template and answers true then false', () => {
        const context = createStyleContext();
        const styles = '${hasChanged("tint", "on") ? "" : ""} .x { color: red; }';

        evalStyles(context, styles, { type: 'module', id: 'light' });
        const first = context._moduleGates.get('module:light::tint');

        evalStyles(context, styles, { type: 'module', id: 'light' });

        expect(first).toBeDefined();
        expect(context._moduleGates.get('module:light::tint')).toBe(first);
    });

    test('keys by module, so two modules gating the same label do not share', () => {
        const context = createStyleContext();

        evalStyles(context, '${hasChanged("tint", "on") ? "" : ""} .a {}', { type: 'module', id: 'light' });
        evalStyles(context, '${hasChanged("tint", "off") ? "" : ""} .b {}', { type: 'module', id: 'neon' });

        expect(context._moduleGates.get('module:light::tint')).not.toBe(context._moduleGates.get('module:neon::tint'));
    });

    // The template has to carry a side effect marker, otherwise it is memoizable
    // and the second pass never re-executes it: the gate exists precisely for the
    // templates that are re-executed every time, and only those.
    test('lets the template observe the answer, which is the whole point', () => {
        const context = createStyleContext();
        const styles = '.x { --ran: ${hasChanged("tint", "on") ? 1 : 0}; } /* document */';

        expect(evalStyles(context, styles, { type: 'module', id: 'light' })).toContain('--ran: 1');
        expect(evalStyles(context, styles, { type: 'module', id: 'light' })).toContain('--ran: 0');
    });

    test('answers true again once a value it was given moves', () => {
        const context = createStyleContext();
        const tpl = (state) => `.x { --ran: \${hasChanged("tint", "${state}") ? 1 : 0}; } /* document */`;

        evalStyles(context, tpl('on'), { type: 'module', id: 'light' });

        expect(evalStyles(context, tpl('off'), { type: 'module', id: 'light' })).toContain('--ran: 1');
    });
});

// A pop-up's stylesheet shares a shadow root with the cards it carries, so a
// broad selector in a module matches those cards directly and restyles their
// internals. A module on a pop-up is meant for the pop-up and its header (#2529).
describe('confining a pop-up module to the pop-up chrome', () => {
  test('guards the universal selector, the one that does the damage', () => {
    expect(confineSelectorToPopupChrome('*')).toBe('*:not(.bubble-cards-grid-container, .bubble-cards-grid-container *)');
  });

  test('guards each selector of a list on its own', () => {
    expect(confineSelectorToPopupChrome('.a, .b .c')).toBe(
      '.a:not(.bubble-cards-grid-container, .bubble-cards-grid-container *), .b .c:not(.bubble-cards-grid-container, .bubble-cards-grid-container *)',
    );
  });

  test('guards the subject, not the ancestors', () => {
    // The rule must stop applying when its SUBJECT is inside the cards, which
    // is what a trailing guard expresses.
    expect(confineSelectorToPopupChrome('.bubble-header .bubble-name')).toBe(
      '.bubble-header .bubble-name:not(.bubble-cards-grid-container, .bubble-cards-grid-container *)',
    );
  });

  test('puts the guard in front of a pseudo-element, never after it', () => {
    // A pseudo-class after a pseudo-element is invalid and the engine would
    // drop the whole rule, which is worse than the leak.
    expect(confineSelectorToPopupChrome('.a::before')).toBe('.a:not(.bubble-cards-grid-container, .bubble-cards-grid-container *)::before');
    expect(confineSelectorToPopupChrome('.a:hover::after')).toBe('.a:hover:not(.bubble-cards-grid-container, .bubble-cards-grid-container *)::after');
    expect(confineSelectorToPopupChrome('div > .x::first-line')).toBe('div > .x:not(.bubble-cards-grid-container, .bubble-cards-grid-container *)::first-line');
  });

  test('keeps an attribute selector that contains a comma-like value intact', () => {
    expect(confineSelectorToPopupChrome('[class*="name"]')).toBe('[class*="name"]:not(.bubble-cards-grid-container, .bubble-cards-grid-container *)');
  });

  test('never leaves the guard after a pseudo-element, which would be invalid', () => {
    // A pseudo-class following a pseudo-element makes the engine drop the whole
    // rule, which is worse than the leak the guard is there to stop.
    for (const selector of ['*', '[class*="name"]', '.a::before', '.a:hover::after', '.b::first-line', '.c::slotted(span)']) {
      const confined = confineSelectorToPopupChrome(selector);
      expect(confined).not.toMatch(/::[\w-]+(?:\([^()]*\))?:not\(/);
      expect(confined).toContain(':not(.bubble-cards-grid-container, .bubble-cards-grid-container *)');
    }
  });

  test('leaves nothing unguarded in a list', () => {
    const confined = confineSelectorToPopupChrome('.a, .b, .c::after');
    // The guard itself carries a comma, so the count is what tells us every
    // selector of the list got one.
    expect(confined.match(/:not\(\.bubble-cards-grid-container, \.bubble-cards-grid-container \*\)/g)).toHaveLength(3);
  });
});
