import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../../tools/utils.js', () => ({
    getAttribute: jest.fn(),
    isStateOn: jest.fn(),
    isStateRequiringAttention: jest.fn(),
    formatDateTime: jest.fn(),
    createElement: jest.fn(),
    getStateSurfaceColor: jest.fn(),
    getStyleGeneration: jest.fn(() => 1),
    getSurfaceIconTone: jest.fn(() => null),
    getState: jest.fn(),
    isTimerEntity: jest.fn(),
    timerTimeRemaining: jest.fn(),
    computeDisplayTimer: jest.fn(),
    startElementTimerInterval: jest.fn(),
    stopElementTimerInterval: jest.fn(),
    formatNumericValue: jest.fn(),
    getTemperatureUnit: jest.fn(),
}));
jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({ applyScrollingEffect: jest.fn() }));
jest.unstable_mockModule('../../tools/icon.js', () => ({
    getIcon: jest.fn(),
    getLightColorSignature: jest.fn(),
    getImage: jest.fn(),
}));
jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    addActions: jest.fn(),
    addFeedback: jest.fn(),
}));
jest.unstable_mockModule('../../tools/validate-condition.js', () => ({
    checkConditionsMet: jest.fn(),
    validateConditionalConfig: jest.fn(),
    ensureArray: jest.fn(),
}));

const { refreshSurfaceTones, revealConditionalSubButtons, updateBackground } = await import('./utils.js');
const { getStateSurfaceColor, getStyleGeneration, getSurfaceIconTone, isStateRequiringAttention } = await import('../../tools/utils.js');

// Minimal element: classList, parent chain and a class-based querySelectorAll
class StubElement {
    constructor(classNames = '') {
        this.children = [];
        this.parentElement = null;
        this.style = { display: '', removeProperty(name) { if (name === 'display') this.display = ''; } };
        const classes = new Set(classNames.split(' ').filter(Boolean));
        this.classList = {
            add: (name) => classes.add(name),
            remove: (name) => classes.delete(name),
            contains: (name) => classes.has(name),
        };
    }

    append(...children) {
        children.forEach(child => {
            this.children.push(child);
            child.parentElement = this;
        });
        return this;
    }

    querySelectorAll(selector) {
        const name = selector.replace(/^\./, '');
        const found = [];
        const walk = (node) => node.children.forEach(child => {
            if (child.classList.contains(name)) found.push(child);
            walk(child);
        });
        walk(this);
        return found;
    }
}

function buildCard() {
    const root = new StubElement();
    const lane = new StubElement('bubble-sub-button-alignment-lane hidden');
    const group = new StubElement('bubble-sub-button-group hidden');
    const conditional = new StubElement('bubble-sub-button hidden');
    conditional._hasVisibilityConditions = true;
    conditional._previousVisibilityState = false;

    root.append(lane);
    lane.append(group);
    group.append(conditional);
    return { root, lane, group, conditional };
}

describe('revealConditionalSubButtons', () => {
    test('reveals the button and everything collapsed around it', () => {
        const { root, lane, group, conditional } = buildCard();

        const restore = revealConditionalSubButtons(root);

        expect(conditional.classList.contains('hidden')).toBe(false);
        expect(group.classList.contains('hidden')).toBe(false);
        expect(lane.classList.contains('hidden')).toBe(false);

        restore();

        expect(conditional.classList.contains('hidden')).toBe(true);
        expect(group.classList.contains('hidden')).toBe(true);
        expect(lane.classList.contains('hidden')).toBe(true);
    });

    test('leaves a button hidden for any other reason alone', () => {
        const root = new StubElement();
        const group = new StubElement('bubble-sub-button-group hidden');
        const unavailable = new StubElement('bubble-sub-button hidden');
        root.append(group);
        group.append(unavailable);

        const restore = revealConditionalSubButtons(root);

        expect(unavailable.classList.contains('hidden')).toBe(true);
        expect(group.classList.contains('hidden')).toBe(true);

        restore();

        expect(unavailable.classList.contains('hidden')).toBe(true);
    });

    test('restores a group only once when several of its buttons are revealed', () => {
        const { root, group, conditional } = buildCard();
        const sibling = new StubElement('bubble-sub-button hidden');
        sibling._hasVisibilityConditions = true;
        sibling._previousVisibilityState = false;
        group.append(sibling);

        const restore = revealConditionalSubButtons(root);
        restore();

        expect(group.classList.contains('hidden')).toBe(true);
        expect(conditional.classList.contains('hidden')).toBe(true);
        expect(sibling.classList.contains('hidden')).toBe(true);
    });

    // An always visible slider replaces its host button and carries the height
    // of the row, so the measurement has to see it too
    test('reveals the wrapper of an always visible slider', () => {
        const { root, conditional } = buildCard();
        conditional.sliderWrapper = new StubElement('bubble-sub-slider-wrapper inline');
        conditional.sliderWrapper.style.display = 'none';

        const restore = revealConditionalSubButtons(root);
        expect(conditional.sliderWrapper.style.display).toBe('');

        restore();
        expect(conditional.sliderWrapper.style.display).toBe('none');
    });

    test('a card without conditional sub-buttons is left untouched', () => {
        const root = new StubElement();
        const visible = new StubElement('bubble-sub-button');
        visible._hasVisibilityConditions = true;
        visible._previousVisibilityState = true;
        root.append(visible);

        revealConditionalSubButtons(root)();

        expect(visible.classList.contains('hidden')).toBe(false);
    });
});

describe('getSubButtonOptions with a Home Assistant template', () => {
    test('renders the name with the sub-button entity as `entity`, escaped for the scrolling text', async () => {
        const { getSubButtonOptions } = await import('./utils.js');
        const { _resetTemplateStore } = await import('../../tools/render-template.js');
        const subscriptions = [];
        const hass = {
            connection: {
                subscribeMessage: jest.fn((callback, params) => {
                    subscriptions.push({ callback, params });
                    return Promise.resolve(() => {});
                }),
            },
            states: { 'sensor.h': { entity_id: 'sensor.h', state: '61' } },
            user: { name: 'Q' },
        };
        const context = { _hass: hass, config: { entity: 'light.a' } };
        const subButton = { entity: 'sensor.h', name: "{{ 'Wet' if states(entity) | float > 60 else 'Dry' }}", show_name: true };

        expect(getSubButtonOptions(context, subButton, 1).name).toBe('');
        await Promise.resolve();
        expect(subscriptions[0].params.variables).toEqual({ entity: 'sensor.h', config: { entity: 'sensor.h' } });

        subscriptions[0].callback({ result: '<Wet>' });
        expect(getSubButtonOptions(context, subButton, 1).name).toBe('&lt;Wet&gt;');
        _resetTemplateStore();
    });
});


// A sub-button element reduced to what updateBackground touches, its classes
// and the one custom property it writes.
function makeBackgroundElement() {
    const classes = new Set();
    const props = new Map();
    return {
        classList: {
            add: (...names) => names.forEach((n) => classes.add(n)),
            remove: (...names) => names.forEach((n) => classes.delete(n)),
            contains: (n) => classes.has(n),
            toggle: (n, force) => (force ? classes.add(n) : classes.delete(n)),
        },
        style: {
            setProperty: (n, v) => props.set(n, v),
            getPropertyValue: (n) => props.get(n) ?? '',
            removeProperty: (n) => props.delete(n),
        },
        has: (n) => classes.has(n),
        isConnected: true,
    };
}

const backgroundOptions = (overrides = {}) => ({
    showBackground: true,
    isOn: true,
    stateBackground: true,
    lightBackground: true,
    entity: 'light.a',
    state: { state: 'on' },
    context: { config: { entity: 'light.a', card_type: 'button' }, card: { style: { getPropertyValue: () => '' } } },
    ...overrides,
});

describe('updateBackground and the icon tone on a state colour (#2450)', () => {
    const DARK_TONE = { tone: 'dark', textIsLight: true };
    const LIGHT_TONE_DARK_THEME = { tone: 'light', textIsLight: true };
    const LIGHT_TONE_LIGHT_THEME = { tone: 'light', textIsLight: false };

    beforeEach(() => {
        jest.clearAllMocks();
        getStyleGeneration.mockReturnValue(1);
        isStateRequiringAttention.mockReturnValue(false);
        getStateSurfaceColor.mockReturnValue('rgb(255, 193, 7)');
        getSurfaceIconTone.mockReturnValue(LIGHT_TONE_DARK_THEME);
        delete globalThis.getComputedStyle;
    });

    test('a colour that reads better with a dark icon gets one', () => {
        getSurfaceIconTone.mockReturnValue(DARK_TONE);
        const element = makeBackgroundElement();

        updateBackground(element, backgroundOptions());

        expect(element.has('bright-background')).toBe(true);
        expect(element.has('dark-background')).toBe(false);
        expect(element.has('background-on')).toBe(true);
    });

    test('a dark theme keeps its own light text where the light icon wins', () => {
        const element = makeBackgroundElement();

        updateBackground(element, backgroundOptions());

        expect(element.has('bright-background')).toBe(false);
        expect(element.has('dark-background')).toBe(false);
    });

    test('a light theme keeps its own dark text where the dark icon wins', () => {
        getSurfaceIconTone.mockReturnValue({ tone: 'dark', textIsLight: false });
        const element = makeBackgroundElement();

        updateBackground(element, backgroundOptions());

        expect(element.has('bright-background')).toBe(false);
        expect(element.has('dark-background')).toBe(false);
    });

    // The dark text of a light theme vanished on a navy or a violet.
    test('a light theme gets a light icon where the light icon wins', () => {
        getSurfaceIconTone.mockReturnValue(LIGHT_TONE_LIGHT_THEME);
        const element = makeBackgroundElement();

        updateBackground(element, backgroundOptions());

        expect(element.has('dark-background')).toBe(true);
        expect(element.has('bright-background')).toBe(false);
    });

    // An accent a card or a module scopes to itself is invisible from the
    // document, and only resolves once the card has drawn the sub-button.
    test('a variable is resolved where the sub-button stands, on the next frame', () => {
        jest.useFakeTimers();
        getStateSurfaceColor.mockReturnValue('var(--bubble-accent-color, var(--bubble-default-color))');
        globalThis.getComputedStyle = () => ({ getPropertyValue: (name) => (name === '--bubble-sub-button-light-background-color' ? ' #ffeb3b ' : '') });
        getSurfaceIconTone.mockReturnValue(DARK_TONE);
        const element = makeBackgroundElement();

        updateBackground(element, backgroundOptions({ entity: 'switch.a' }));
        expect(getSurfaceIconTone).not.toHaveBeenCalled();

        jest.advanceTimersByTime(16);
        expect(getSurfaceIconTone).toHaveBeenCalledWith('#ffeb3b', expect.anything());
        expect(element.has('bright-background')).toBe(true);
        jest.useRealTimers();
    });

    test('a sub-button not drawn yet is tried again, then read from the document after three frames', () => {
        jest.useFakeTimers();
        getStateSurfaceColor.mockReturnValue('var(--bubble-accent-color)');
        let reads = 0;
        globalThis.getComputedStyle = () => ({ getPropertyValue: () => { reads += 1; return ''; } });

        updateBackground(makeBackgroundElement(), backgroundOptions({ entity: 'switch.a' }));
        jest.advanceTimersByTime(16 * 10);

        expect(reads).toBe(3);
        expect(getSurfaceIconTone).toHaveBeenCalledTimes(1);
        expect(getSurfaceIconTone).toHaveBeenCalledWith('var(--bubble-accent-color)', expect.anything());
        jest.useRealTimers();
    });

    test('a colour already written out is decided at once', () => {
        updateBackground(makeBackgroundElement(), backgroundOptions());

        expect(getSurfaceIconTone).toHaveBeenCalledWith('rgb(255, 193, 7)', expect.anything());
    });

    test('an entity that goes off drops both classes', () => {
        getSurfaceIconTone.mockReturnValue(DARK_TONE);
        const element = makeBackgroundElement();
        updateBackground(element, backgroundOptions());
        getSurfaceIconTone.mockReturnValue(LIGHT_TONE_LIGHT_THEME);
        getStyleGeneration.mockReturnValue(2);
        updateBackground(element, backgroundOptions());

        updateBackground(element, backgroundOptions({ isOn: false }));

        expect(element.has('bright-background')).toBe(false);
        expect(element.has('dark-background')).toBe(false);
        expect(element.has('background-off')).toBe(true);
    });

    test('turning the background off drops them too', () => {
        getSurfaceIconTone.mockReturnValue(DARK_TONE);
        const element = makeBackgroundElement();
        updateBackground(element, backgroundOptions());

        updateBackground(element, backgroundOptions({ showBackground: false }));

        expect(element.has('bright-background')).toBe(false);
    });

    test('an unchanged colour is not read again', () => {
        const element = makeBackgroundElement();
        updateBackground(element, backgroundOptions());
        getSurfaceIconTone.mockClear();

        updateBackground(element, backgroundOptions());

        expect(getSurfaceIconTone).not.toHaveBeenCalled();
    });

    test('but a theme change makes it read again, because the expression paints something else', () => {
        jest.useFakeTimers();
        globalThis.getComputedStyle = () => ({ getPropertyValue: () => 'rgb(255, 235, 59)' });
        const element = makeBackgroundElement();
        getStateSurfaceColor.mockReturnValue('var(--state-light-active-color)');
        updateBackground(element, backgroundOptions());
        jest.advanceTimersByTime(16);
        getSurfaceIconTone.mockClear();
        getSurfaceIconTone.mockReturnValue(DARK_TONE);

        getStyleGeneration.mockReturnValue(2);
        updateBackground(element, backgroundOptions());
        jest.advanceTimersByTime(16);

        expect(getSurfaceIconTone).toHaveBeenCalledTimes(1);
        expect(element.has('bright-background')).toBe(true);
        jest.useRealTimers();
    });

    // A card's styles land after its sub-buttons on the first render.
    test('the styles of the card make every lit sub-button read again', () => {
        jest.useFakeTimers();
        globalThis.getComputedStyle = () => ({ getPropertyValue: () => '#e0e0e0' });
        const lit = makeBackgroundElement();
        lit.style.setProperty('--bubble-sub-button-light-background-color', 'var(--bubble-accent-color)');
        const content = { querySelectorAll: (selector) => (selector === '.bubble-sub-button.background-on' ? [lit] : []) };
        getSurfaceIconTone.mockReturnValue(DARK_TONE);

        refreshSurfaceTones({ config: { card_type: 'button' }, content });
        jest.advanceTimersByTime(16);

        expect(getSurfaceIconTone).toHaveBeenCalledWith('#e0e0e0', expect.anything());
        expect(lit.has('bright-background')).toBe(true);
        jest.useRealTimers();
    });
});
