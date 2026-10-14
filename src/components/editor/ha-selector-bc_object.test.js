import { describe, expect, jest, test } from '@jest/globals';

// The element only needs lit at render time; these tests exercise the pure
// data path (_itemFormData -> _itemChanged), so lit and the DOM registry are
// stubbed out.
jest.unstable_mockModule('lit', () => ({
    html: () => null,
    css: () => null,
    nothing: Symbol('nothing'),
    LitElement: class {
        requestUpdate() {}
    },
}));

const fireEvent = jest.fn();
jest.unstable_mockModule('../../tools/utils.js', () => ({ fireEvent }));

global.customElements = { define: jest.fn(), get: jest.fn() };

const { HaBcObjectSelector } = await import('./ha-selector-bc_object.js');

function makeSelector({ fields, value, multiple = true }) {
    const el = new HaBcObjectSelector();
    el.selector = { bc_object: { fields, multiple } };
    el.value = value;
    return el;
}

const ev = (value) => ({ stopPropagation: () => {}, detail: { value } });

// The backward-compat contract of the editor features: whatever synthetic
// `__*` UI keys and display-only defaults _itemFormData injects, _itemChanged
// must strip back out — the stored config keeps its original flat shape.
describe('bc_object synthetic-key round trip', () => {
    const fields = {
        color: { label: 'Color', selector: { text: {} } },
        color_js: { variant_of: 'color', variant: 'JS', selector: { text: {} } },
        size: { default: 'medium', selector: { select: { options: ['small', 'medium'] } } },
    };

    test('form data round-trips to the stored item unchanged', () => {
        const item = { color: 'red' };
        const el = makeSelector({ fields, value: [item] });

        const formData = el._itemFormData(item, 0);
        // Injected for the UI...
        expect(formData.__color_mode).toBe('Static');
        expect(formData.size).toBe('medium');
        expect('__card_entity' in formData).toBe(true);

        // ...and stripped on the way back.
        el._itemChanged(ev(formData), 0);
        expect(fireEvent).toHaveBeenLastCalledWith(el, 'value-changed', { value: [item] });
    });

    test('mode dropdown choice stays in UI state, never in the emitted value', () => {
        const el = makeSelector({ fields, value: [{ color: 'red' }] });

        el._itemChanged(ev({ color: 'red', __color_mode: 'JS' }), 0);

        expect(el._uiState[0].__color_mode).toBe('JS');
        expect(fireEvent).toHaveBeenLastCalledWith(el, 'value-changed', { value: [{ color: 'red' }] });
    });

    test('selecting the default on a previously-unset key stores nothing; an explicit stored default survives', () => {
        const el = makeSelector({ fields, value: [{ color: 'red' }, { color: 'blue', size: 'medium' }] });

        el._itemChanged(ev({ color: 'red', size: 'medium' }), 0);
        expect(fireEvent).toHaveBeenLastCalledWith(el, 'value-changed', {
            value: [{ color: 'red' }, { color: 'blue', size: 'medium' }],
        });

        el._itemChanged(ev({ color: 'blue', size: 'medium' }), 1);
        expect(fireEvent).toHaveBeenLastCalledWith(el, 'value-changed', {
            value: [{ color: 'red' }, { color: 'blue', size: 'medium' }],
        });
    });

    test('0 and false are real values, not strip candidates', () => {
        const zeroFields = {
            from: { default: 5, selector: { select: { options: [0, 5] } } },
            flag: { selector: { boolean: {} } },
        };
        const el = makeSelector({ fields: zeroFields, value: [{}] });

        el._itemChanged(ev({ from: 0, flag: false }), 0);

        expect(fireEvent).toHaveBeenLastCalledWith(el, 'value-changed', { value: [{ from: 0, flag: false }] });
    });
});

// #2661, typing in a YAML field of an item froze the tab. The selector drew the
// item again with the value it held before the parent answered, the YAML field
// took the old text back and sent it, and old and new took turns for ever.
describe('bc_object keeps the value it has just sent', () => {
    const fields = {
        name: { selector: { text: {} } },
        map: { selector: { object: {} } },
    };

    test('a list holds the new item at once, before the parent hands it back', () => {
        const el = makeSelector({ fields, value: [{ name: 'a', map: { a: 1 } }, { name: 'b' }] });
        const second = el.value[1];

        el._itemChanged(ev({ name: 'a', map: { a: 1, b: 2 }, __card_entity: undefined }), 0);

        expect(el.value[0]).toEqual({ name: 'a', map: { a: 1, b: 2 } });
        expect(el.value[1]).toBe(second);
        expect(fireEvent).toHaveBeenLastCalledWith(el, 'value-changed', { value: el.value });
    });

    test('a single object holds its new value too, without the keys of the interface', () => {
        const el = makeSelector({ fields, value: { name: 'a', map: { a: 1 } }, multiple: false });

        el._itemChanged(ev({ name: 'a', map: { a: 2 }, __card_entity: 'light.kitchen' }), 0);

        expect(el.value).toEqual({ name: 'a', map: { a: 2 } });
        expect(fireEvent).toHaveBeenLastCalledWith(el, 'value-changed', { value: el.value });
    });

    test('a redraw before the parent answers hands the item form the new text', () => {
        const el = makeSelector({ fields, value: [{ name: 'a', map: { a: 1 } }] });

        el._itemChanged(ev({ ...el._itemFormData(el.value[0], 0), map: { a: 1, b: 2 } }), 0);

        expect(el._itemFormData(el.value[0], 0).map).toEqual({ a: 1, b: 2 });
    });
});

