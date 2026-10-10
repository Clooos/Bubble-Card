import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// Enough of an element for the keypad, which needs children, classes,
// attributes and the two listeners it sets on itself.
class StubElement {
    constructor(tag, classNames = '') {
        this.tagName = String(tag).toUpperCase();
        this.children = [];
        this.parent = null;
        this.dataset = {};
        this.attributes = {};
        this.listeners = {};
        this._text = '';
        const classes = new Set(String(classNames).split(' ').filter(Boolean));
        this.classList = {
            add: (name) => classes.add(name),
            remove: (name) => classes.delete(name),
            contains: (name) => classes.has(name),
            toggle: (name, on) => (on ? classes.add(name) : classes.delete(name)),
        };
    }

    set textContent(value) { this._text = value; this.children = []; }
    get textContent() { return this._text; }
    setAttribute(name, value) { this.attributes[name] = value; }
    appendChild(child) { child.parent = this; this.children.push(child); return child; }
    addEventListener(type, handler) { this.listeners[type] = handler; }
    closest(selector) { return this.classList.contains(selector.replace('.', '')) ? this : null; }
    focus() { this.focused = true; }
}

const forwardHaptic = jest.fn();
jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: (tag, classNames) => new StubElement(tag, classNames),
    forwardHaptic,
}));

const { createCodeEntry, createCodeKeypad } = await import('./keypad.js');

describe('the code being typed', () => {
    test('grows with each digit and tells how long it is, never what it is', () => {
        const onChange = jest.fn();
        const entry = createCodeEntry({ onChange });

        entry.press('4');
        entry.press('2');

        expect(entry.length).toBe(2);
        expect(onChange.mock.calls).toEqual([[1], [2]]);
        expect(Object.keys(entry)).not.toContain('code');
    });

    test('takes digits only, and only so many', () => {
        const entry = createCodeEntry({ maxLength: 3 });

        for (const key of ['a', '12', '', ' ', '1', '2', '3', '4']) entry.press(key);

        expect(entry.length).toBe(3);
    });

    test('steps back one digit at a time, then out of the keypad', () => {
        const onBack = jest.fn();
        const entry = createCodeEntry({ onBack });

        entry.press('1');
        entry.press('2');
        entry.back();
        expect(entry.length).toBe(1);
        expect(onBack).not.toHaveBeenCalled();

        entry.back();
        expect(entry.length).toBe(0);
        expect(onBack).not.toHaveBeenCalled();

        entry.back();
        expect(onBack).toHaveBeenCalledTimes(1);
    });

    test('is handed over whole on submit, and an empty one is not sent', () => {
        const onSubmit = jest.fn();
        const entry = createCodeEntry({ onSubmit });

        entry.submit();
        expect(onSubmit).not.toHaveBeenCalled();

        entry.press('0');
        entry.press('7');
        entry.submit();
        expect(onSubmit).toHaveBeenCalledWith('07');
    });

    test('can be wiped', () => {
        const onChange = jest.fn();
        const entry = createCodeEntry({ onChange });

        entry.clear();
        expect(onChange).not.toHaveBeenCalled();

        entry.press('9');
        entry.clear();
        expect(entry.length).toBe(0);
        expect(onChange).toHaveBeenLastCalledWith(0);
    });
});

describe('the keypad drawn in the menu', () => {
    const hass = { localize: (key) => ({ 'ui.card.alarm_control_panel.code': 'Code', 'ui.common.back': 'Back' })[key] };
    const keyOf = (keypad, key) => keypad.element.children.find((child) => child.dataset.key === key);
    const click = (keypad, key) => keypad.element.listeners.click({ target: keyOf(keypad, key), stopPropagation: jest.fn() });
    const dots = (keypad) => keypad.element.children[0].children.length;

    beforeEach(() => forwardHaptic.mockClear());

    test('has the ten digits in the order of a phone, the arrow on the left and the confirm on the right', () => {
        const keypad = createCodeKeypad({ hass });
        const keys = keypad.element.children.slice(1).map((child) => child.dataset.key);

        expect(keys).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', 'back', '0', 'submit']);
    });

    test('draws the arrow and the confirm as icons, and names them for a screen reader', () => {
        const keypad = createCodeKeypad({ hass, submitLabel: 'Disarm' });
        const back = keyOf(keypad, 'back');
        const submit = keyOf(keypad, 'submit');

        expect(back.children[0].tagName).toBe('HA-ICON');
        expect(back.children[0].attributes.icon).toBe('mdi:arrow-left');
        expect(submit.children[0].attributes.icon).toBe('mdi:check');
        expect(submit.classList.contains('bubble-keypad-submit')).toBe(true);
        expect(back.attributes['aria-label']).toBe('Back');
        expect(submit.attributes['aria-label']).toBe('Disarm');
    });

    test('shows a dot per digit and never the digits', () => {
        const keypad = createCodeKeypad({ hass });
        const display = keypad.element.children[0];

        expect(display.textContent).toBe('Code');
        expect(keypad.element.classList.contains('is-empty')).toBe(true);

        click(keypad, '4');
        click(keypad, '2');

        expect(dots(keypad)).toBe(2);
        expect(display.textContent).toBe('');
        expect(keypad.element.classList.contains('is-empty')).toBe(false);
        expect(JSON.stringify(display.children.map((dot) => dot.textContent))).not.toMatch(/[42]/);
    });

    test('sends the code with the confirm key, and leaves through the arrow once empty', () => {
        const onSubmit = jest.fn();
        const onBack = jest.fn();
        const keypad = createCodeKeypad({ hass, onSubmit, onBack });

        click(keypad, '1');
        click(keypad, '2');
        click(keypad, 'back');
        click(keypad, '3');
        click(keypad, 'submit');
        expect(onSubmit).toHaveBeenCalledWith('13');

        click(keypad, 'back');
        click(keypad, 'back');
        expect(onBack).not.toHaveBeenCalled();
        click(keypad, 'back');
        expect(onBack).toHaveBeenCalledTimes(1);
    });

    test('a press never reaches the card under the menu', () => {
        const keypad = createCodeKeypad({ hass });
        const stopPropagation = jest.fn();

        keypad.element.listeners.click({ target: keyOf(keypad, '5'), stopPropagation });

        expect(stopPropagation).toHaveBeenCalled();
    });

    test('takes a code from a real keyboard, and keeps those keys from the menu', () => {
        const onSubmit = jest.fn();
        const keypad = createCodeKeypad({ hass, onSubmit });
        const type = (key) => {
            const event = { key, preventDefault: jest.fn(), stopPropagation: jest.fn() };
            keypad.element.listeners.keydown(event);
            return event;
        };

        expect(type('8').stopPropagation).toHaveBeenCalled();
        type('9');
        type('Backspace');
        type('1');
        type('Enter');

        expect(onSubmit).toHaveBeenCalledWith('81');
        // Escape is the menu's to close, a letter is nobody's.
        expect(type('Escape').stopPropagation).not.toHaveBeenCalled();
        expect(type('a').preventDefault).not.toHaveBeenCalled();
    });

    test('shakes and starts again when the code is refused', () => {
        jest.useFakeTimers();
        try {
            const keypad = createCodeKeypad({ hass });
            const display = keypad.element.children[0];
            click(keypad, '1');

            keypad.reject();
            expect(display.classList.contains('is-wrong')).toBe(true);
            expect(dots(keypad)).toBe(1);

            jest.advanceTimersByTime(400);
            expect(dots(keypad)).toBe(0);
            expect(display.textContent).toBe('Code');
            expect(display.classList.contains('is-wrong')).toBe(false);
        } finally {
            jest.useRealTimers();
        }
    });
});
