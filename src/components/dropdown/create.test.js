import { describe, expect, jest, test } from '@jest/globals';

// Minimal DOM: the dropdown actions only need element creation, appending and
// listeners. Everything the old Home Assistant menu does lives in its shadow
// root, which is absent here, so opening stops right after the visual styles.
class StubElement {
    constructor(tag) {
        this.tagName = String(tag).toUpperCase();
        this.children = [];
        this.parentElement = null;
        this.style = {};
        this.listeners = {};
        this.shadowRoot = null;
        this.classList = { add() {}, remove() {}, contains: () => false };
    }

    get isConnected() { return this.parentElement !== null; }

    appendChild(child) {
        if (child.parentElement) child.parentElement.removeChild(child);
        this.children.push(child);
        child.parentElement = this;
        return child;
    }

    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) this.children.splice(index, 1);
        child.parentElement = null;
        return child;
    }

    addEventListener(type, handler) {
        (this.listeners[type] ??= []).push(handler);
    }

    fire(type, detail = {}) {
        const event = {
            type,
            target: {},
            detail,
            stopPropagation() {},
            composedPath: () => [this],
        };
        (this.listeners[type] ?? []).forEach(handler => handler(event));
    }
}

globalThis.document = { createElement: (tag) => new StubElement(tag) };

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: (tag) => new StubElement(tag),
}));

// false pins the mwc menu path. The layering matters for every menu that is
// painted inside the card rather than in the browser top layer, which is the
// mwc menu always and ha-dropdown wherever the popover does not reach it.
jest.unstable_mockModule('./helpers.js', () => ({
    callSelectService: jest.fn(),
    isNewHaFrontend: () => false,
}));

jest.unstable_mockModule('./styles.css', () => ({ default: '' }));

const { createDropdownActions, destroyDropdown } = await import('./create.js');

function buildContext() {
    const mainContainer = new StubElement('div');
    const elements = {
        mainContainer,
        background: new StubElement('div'),
        dropdownArrow: new StubElement('ha-icon'),
        dropdownSelect: new StubElement('ha-select'),
    };
    mainContainer.appendChild(elements.background);
    return { config: {}, elements, _hass: {} };
}

describe('dropdown layering', () => {
    test('lifts the card above its neighbours while a menu is open', () => {
        const context = buildContext();
        const { mainContainer, background } = context.elements;

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        expect(mainContainer.style.zIndex).toBeUndefined();

        background.fire('click');

        // .bubble-container is a stacking context, so overflow alone still leaves
        // the menu painted below the cards that follow it in the view (#2334).
        expect(mainContainer.style.overflow).toBe('visible');
        expect(Number(mainContainer.style.zIndex)).toBeGreaterThan(0);
        // The same transform is also the containing block of a fixed menu panel.
        expect(mainContainer.style.transform).toBe('none');
    });

    test('gives the layering back when the menu closes', () => {
        const context = buildContext();
        const { mainContainer, background, dropdownSelect } = context.elements;

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        background.fire('click');
        dropdownSelect.fire('closed');

        expect(mainContainer.style.overflow).toBe('');
        expect(mainContainer.style.zIndex).toBe('');
        expect(mainContainer.style.transform).toBe('');
        expect(mainContainer.openDropdowns).toBe(0);
    });

    test('keeps the card lifted until its last menu is closed', () => {
        const context = buildContext();
        const { mainContainer } = context.elements;

        const second = new StubElement('div');
        second.mainContainer = mainContainer;
        second.background = second;
        second.dropdownArrow = new StubElement('ha-icon');
        second.dropdownSelect = new StubElement('ha-select');
        mainContainer.appendChild(second);

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        createDropdownActions(context, second, 'input_select.other', {});

        context.elements.background.fire('click');
        second.fire('click');
        expect(mainContainer.openDropdowns).toBe(2);

        context.elements.dropdownSelect.fire('closed');
        expect(Number(mainContainer.style.zIndex)).toBeGreaterThan(0);

        second.dropdownSelect.fire('closed');
        expect(mainContainer.style.zIndex).toBe('');
    });

    test('does not leave a card lifted when the dropdown is torn down while open', () => {
        const context = buildContext();
        const { mainContainer, background } = context.elements;

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        background.fire('click');
        destroyDropdown(context);

        expect(mainContainer.style.overflow).toBe('');
        expect(mainContainer.style.zIndex).toBe('');
        expect(mainContainer.style.transform).toBe('');
        expect(mainContainer.openDropdowns).toBe(0);
    });
});
