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

    remove() {
        this.parentElement?.removeChild(this);
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

// The node test environment has no HTMLElement, so the popover support that
// decides whether a menu reaches the top layer has to be stood up here.
class HTMLElementStub {}
globalThis.HTMLElement = HTMLElementStub;

function withPopoverSupport(supported) {
    if (supported) HTMLElementStub.prototype.popover = null;
    else delete HTMLElementStub.prototype.popover;
}

const fireEvent = jest.fn();
jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: (tag) => new StubElement(tag),
    fireEvent,
    forwardHaptic: jest.fn(),
}));

// The layering matters for every menu that is painted inside the card rather
// than in the browser top layer, which is the mwc menu always and ha-dropdown
// wherever the popover does not reach it. Defaults to the mwc menu path.
let newHaFrontend = false;
const callSelectService = jest.fn();
const callAlarmMode = jest.fn(() => Promise.resolve());
jest.unstable_mockModule('./helpers.js', () => ({
    callSelectService,
    callAlarmMode,
    isNewHaFrontend: () => newHaFrontend,
}));

// The keypad is drawn elsewhere and tested there. Here it is what the dropdown
// asks of it that matters, so each one made is kept with its callbacks.
const keypads = [];
jest.unstable_mockModule('./keypad.js', () => ({
    createCodeKeypad: jest.fn((options) => {
        const keypad = { element: new StubElement('div'), focus: jest.fn(), reject: jest.fn(), options };
        keypads.push(keypad);
        return keypad;
    }),
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
    beforeEach(() => {
        newHaFrontend = false;
        withPopoverSupport(false);
    });

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

    test('a press that closed the menu does not let the click put it back up', () => {
        // #2566: Home Assistant closes the menu on the press, so the click that
        // follows finds it closed. Read as a fresh open, it put the menu straight
        // back up and pressing the sub-button again looked like it never closed.
        const context = buildContext();
        const { background, dropdownSelect, dropdownArrow, mainContainer } = context.elements;

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        background.fire('click');
        expect(dropdownArrow.style.transform).toBe('rotate(180deg)');

        background.fire('pointerdown');
        dropdownSelect.fire('closed');
        background.fire('click');

        expect(dropdownArrow.style.transform).toBe('rotate(0deg)');
        expect(mainContainer.openDropdowns).toBe(0);
    });

    test('a press on a closed menu still opens it', () => {
        const context = buildContext();
        const { background, dropdownArrow } = context.elements;

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        background.fire('pointerdown');
        background.fire('click');

        expect(dropdownArrow.style.transform).toBe('rotate(180deg)');
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

    test('leaves the card clipped when the menu is painted in the top layer', () => {
        newHaFrontend = true;
        withPopoverSupport(true);

        const context = buildContext();
        const { mainContainer, background } = context.elements;

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        background.fire('click');

        // Un-clipping a card that already carries its menu just lets a bottom
        // row spill past the rounded corners for as long as the menu is open.
        expect(mainContainer.style.overflow).toBeUndefined();
        expect(mainContainer.style.zIndex).toBeUndefined();
        expect(mainContainer.style.transform).toBeUndefined();
        expect(mainContainer.openDropdowns).toBe(1);
    });

    test('still lifts the card when the popover does not reach the top layer', () => {
        newHaFrontend = true;
        withPopoverSupport(false);

        const context = buildContext();
        const { mainContainer, background } = context.elements;

        createDropdownActions(context, context.elements, 'input_select.test', context.config);
        background.fire('click');

        expect(mainContainer.style.overflow).toBe('visible');
        expect(Number(mainContainer.style.zIndex)).toBeGreaterThan(0);
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

// A panel that wants its code used to have no place in a dropdown at all. The
// menu now keeps the pick, swaps its options for a keypad and sends the mode
// with the code, the way Home Assistant does from a dialog of its own.
describe('an alarm mode that wants its code', () => {
    const ENTITY = 'alarm_control_panel.home';
    const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

    function buildAlarm({ attributes = { code_format: 'number', code_arm_required: true, supported_features: 3 }, registry, config = { select_attribute: 'alarm_modes' } } = {}) {
        const context = buildContext();
        const haDropdown = new StubElement('ha-dropdown');
        haDropdown.open = true;
        context.elements.dropdownSelect.shadowRoot = { querySelector: (selector) => (selector === 'ha-dropdown' ? haDropdown : null) };
        context._hass = {
            states: { [ENTITY]: { state: 'disarmed', attributes } },
            localize: () => '',
            callWS: jest.fn(() => (registry ? Promise.resolve(registry) : Promise.reject(new Error('not found')))),
        };
        createDropdownActions(context, context.elements, ENTITY, config);
        const pick = (mode) => {
            const event = { detail: { item: { value: mode } }, preventDefault: jest.fn(), stopImmediatePropagation: jest.fn(), stopPropagation() {} };
            (haDropdown.listeners['wa-select'] ?? []).forEach((handler) => handler(event));
            return event;
        };
        return { context, haDropdown, pick, select: context.elements.dropdownSelect };
    }

    beforeEach(() => {
        newHaFrontend = true;
        withPopoverSupport(true);
        keypads.length = 0;
        fireEvent.mockClear();
        callSelectService.mockClear();
        callAlarmMode.mockClear();
        callAlarmMode.mockImplementation(() => Promise.resolve());
    });

    test('keeps the menu open, sends nothing yet and shows the keypad in it', async () => {
        const { pick, select, haDropdown } = buildAlarm();

        const event = pick('armed_away');
        expect(event.preventDefault).toHaveBeenCalled();
        // ha-select must not take the pick for a choice that was made.
        expect(event.stopImmediatePropagation).toHaveBeenCalled();
        await flush();

        expect(keypads).toHaveLength(1);
        expect(select.children).toContain(keypads[0].element);
        expect(keypads[0].focus).toHaveBeenCalled();
        expect(callAlarmMode).not.toHaveBeenCalled();
        expect(haDropdown.open).toBe(true);
    });

    test('sends the mode with the code that was typed, then closes the menu', async () => {
        const { pick, haDropdown, context } = buildAlarm();
        pick('disarmed');
        await flush();

        keypads[0].options.onSubmit('2580');
        await flush();

        expect(callAlarmMode).toHaveBeenCalledWith(context, ENTITY, 'disarmed', '2580');
        expect(haDropdown.open).toBe(false);
    });

    test('keeps the keypad up and shakes it when Home Assistant refuses the code', async () => {
        const { pick, haDropdown } = buildAlarm();
        callAlarmMode.mockImplementation(() => Promise.reject(new Error('Invalid code')));
        pick('disarmed');
        await flush();

        keypads[0].options.onSubmit('0000');
        await flush();

        expect(keypads[0].reject).toHaveBeenCalled();
        expect(haDropdown.open).toBe(true);
    });

    test('goes back to the options when the keypad is left, and when the menu closes', async () => {
        const { pick, select, haDropdown } = buildAlarm();
        pick('armed_home');
        await flush();
        keypads[0].options.onBack();
        expect(select.children).not.toContain(keypads[0].element);

        pick('armed_home');
        await flush();
        haDropdown.fire('wa-after-hide');
        expect(select.children).not.toContain(keypads[1].element);
    });

    // setProtectedAlarmControlPanelMode skips its dialog the same way, since
    // Home Assistant sends the saved code itself.
    test('asks nothing when a default code is saved in Home Assistant', async () => {
        const { pick, haDropdown, context } = buildAlarm({ registry: { options: { alarm_control_panel: { default_code: 'saved' } } } });

        pick('disarmed');
        await flush();

        expect(keypads).toHaveLength(0);
        expect(callAlarmMode).toHaveBeenCalledWith(context, ENTITY, 'disarmed');
        expect(haDropdown.open).toBe(false);
    });

    test('leaves a mode that needs no code to the plain pick', async () => {
        const { pick } = buildAlarm({ attributes: { code_format: 'number', code_arm_required: false, supported_features: 3 } });

        const event = pick('armed_away');
        await flush();

        expect(event.preventDefault).not.toHaveBeenCalled();
        expect(event.stopImmediatePropagation).not.toHaveBeenCalled();
        expect(keypads).toHaveLength(0);
    });

    test('hands a code with letters to the more info dialog and lets the menu close', async () => {
        const { pick, select } = buildAlarm({ attributes: { code_format: 'text', code_arm_required: true, supported_features: 3 } });

        const event = pick('armed_away');
        await flush();

        expect(fireEvent).toHaveBeenCalledWith(select, 'hass-more-info', { entityId: ENTITY });
        expect(event.preventDefault).not.toHaveBeenCalled();
        expect(event.stopImmediatePropagation).toHaveBeenCalled();
        expect(keypads).toHaveLength(0);
        expect(callAlarmMode).not.toHaveBeenCalled();
    });

    test('a pick made while the first one was still being looked up wins', async () => {
        const { pick, context } = buildAlarm();
        pick('armed_home');
        pick('armed_away');
        await flush();

        expect(keypads).toHaveLength(1);
        keypads[0].options.onSubmit('1');
        await flush();
        expect(callAlarmMode).toHaveBeenCalledWith(context, ENTITY, 'armed_away', '1');
    });

    test('no other list is watched this way', () => {
        const { haDropdown } = buildAlarm({ config: { select_attribute: 'effect_list' } });

        expect(haDropdown.listeners['wa-select']).toBeUndefined();
    });

    // The mwc menu closes on the pick and has no room for anything but items.
    test('on an older Home Assistant, a mode that wants a code opens the more info dialog', () => {
        newHaFrontend = false;
        withPopoverSupport(false);
        const context = buildContext();
        context._hass = { states: { [ENTITY]: { state: 'armed_home', attributes: { code_format: 'number' } } } };
        const select = context.elements.dropdownSelect;
        createDropdownActions(context, context.elements, ENTITY, { select_attribute: 'alarm_modes' });
        const choose = (value) => select.listeners.click.forEach((handler) => handler({ target: { value }, stopPropagation() {} }));

        choose('disarmed');
        expect(fireEvent).toHaveBeenCalledWith(select, 'hass-more-info', { entityId: ENTITY });
        expect(callSelectService).not.toHaveBeenCalled();

        choose('armed_away');
        expect(callSelectService).toHaveBeenCalledTimes(1);
    });
});
