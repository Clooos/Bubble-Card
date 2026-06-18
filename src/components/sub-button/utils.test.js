import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// Controls the color returned by getStateSurfaceColor (via the mocked getIconColor).
let mockIconColor = 'rgb(255, 230, 120)';

// Mock the sibling modules that sub-button/utils.js (and the real tools/utils.js it
// imports) depend on, so the module graph resolves without a DOM. tools/utils.js itself
// is kept REAL, so the test exercises the real isColorLight + getStateSurfaceColor wiring.
jest.unstable_mockModule('../../tools/icon.js', () => ({
    getIcon: jest.fn(() => ''),
    getImage: jest.fn(() => ''),
    getLightColorSignature: jest.fn(() => 'sig'),
    getIconColor: jest.fn(() => mockIconColor),
}));

jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({
    applyScrollingEffect: jest.fn(),
}));

jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    addActions: jest.fn(),
    addFeedback: jest.fn(),
}));

jest.unstable_mockModule('../../tools/validate-condition.js', () => ({
    checkConditionsMet: jest.fn(() => true),
    validateConditionalConfig: jest.fn(() => true),
    ensureArray: jest.fn((value) => (Array.isArray(value) ? value : [value])),
}));

jest.unstable_mockModule('../../tools/style.js', () => ({
    isColorCloseToWhite: jest.fn(() => false),
}));

jest.unstable_mockModule('../../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));

function createMockClassList(initialClasses = []) {
    const classes = new Set(initialClasses);
    return {
        add: (...names) => names.forEach((name) => classes.add(name)),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
        contains: (name) => classes.has(name),
        toggle: (name, force) => {
            const shouldAdd = force === undefined ? !classes.has(name) : force;
            if (shouldAdd) classes.add(name);
            else classes.delete(name);
            return classes.has(name);
        },
    };
}

function createMockStyle() {
    const props = new Map();
    return {
        setProperty: (name, value) => props.set(name, value),
        getPropertyValue: (name) => props.get(name) ?? '',
        removeProperty: (name) => props.delete(name),
    };
}

function createMockElement(initialClasses = []) {
    return {
        style: createMockStyle(),
        classList: createMockClassList(initialClasses),
    };
}

function createContext() {
    return {
        config: { card_type: 'button', button_type: 'default', entity: 'climate.test' },
        card: { style: createMockStyle() },
        popUp: { style: createMockStyle() },
        _hass: { states: { 'climate.test': { state: 'heat', attributes: {} } } },
    };
}

function createOptions(overrides = {}) {
    const context = createContext();
    return {
        showBackground: true,
        isOn: true,
        stateBackground: true,
        lightBackground: true,
        entity: 'climate.test',
        context,
        state: context._hass.states['climate.test'],
        ...overrides,
    };
}

describe('updateBackground bright-background class', () => {
    let updateBackground;

    beforeEach(async () => {
        jest.resetModules();
        mockIconColor = 'rgb(255, 230, 120)';
        ({ updateBackground } = await import('./utils.js'));
    });

    test('adds bright-background when the state background color is light', () => {
        const element = createMockElement();
        updateBackground(element, createOptions());

        expect(element.classList.contains('background-on')).toBe(true);
        expect(element.classList.contains('bright-background')).toBe(true);
    });

    test('does not add bright-background when the state background color is dark', () => {
        mockIconColor = 'rgb(20, 20, 30)';
        const element = createMockElement();
        updateBackground(element, createOptions());

        expect(element.classList.contains('background-on')).toBe(true);
        expect(element.classList.contains('bright-background')).toBe(false);
    });

    test('removes a stale bright-background when the entity turns off', () => {
        const element = createMockElement(['background-on', 'bright-background']);
        updateBackground(element, createOptions({ isOn: false }));

        expect(element.classList.contains('background-off')).toBe(true);
        expect(element.classList.contains('bright-background')).toBe(false);
    });

    test('removes a stale bright-background when the background is hidden', () => {
        const element = createMockElement(['background-on', 'bright-background']);
        updateBackground(element, createOptions({ showBackground: false }));

        expect(element.classList.contains('bright-background')).toBe(false);
    });
});
