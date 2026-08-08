import { beforeEach, describe, expect, test } from '@jest/globals';

import { hasChanged } from './module-gate.js';

describe('the side effect gate handed to a style template', () => {
    let context;

    beforeEach(() => { context = {}; });

    test('answers true the first time, so work is never skipped on a fresh card', () => {
        expect(hasChanged(context, 'tint', ['on'])).toBe(true);
    });

    test('answers false while nothing it was given has changed', () => {
        hasChanged(context, 'tint', ['on', [255, 204, 167]]);

        // This is the case that matters: roughly seven style passes per card per
        // pop-up open, all with the same inputs.
        for (let i = 0; i < 6; i++) {
            expect(hasChanged(context, 'tint', ['on', [255, 204, 167]])).toBe(false);
        }
    });

    test('answers true again as soon as one value moves', () => {
        hasChanged(context, 'tint', ['on', [255, 204, 167]]);

        expect(hasChanged(context, 'tint', ['off', [255, 204, 167]])).toBe(true);
    });

    test('separates two lights whose colours differ by one unit', () => {
        hasChanged(context, 'tint', [[255, 204, 167]]);

        expect(hasChanged(context, 'tint', [[255, 206, 166]])).toBe(true);
    });

    test('keeps one memory per label, so a module can gate several things', () => {
        hasChanged(context, 'tint', ['on']);
        hasChanged(context, 'glow', ['on']);

        expect(hasChanged(context, 'tint', ['on'])).toBe(false);
        expect(hasChanged(context, 'glow', ['off'])).toBe(true);
        expect(hasChanged(context, 'tint', ['on'])).toBe(false);
    });

    test('does not confuse two argument lists that would join to the same text', () => {
        hasChanged(context, 'k', ['a', 'b']);

        expect(hasChanged(context, 'k', ['ab'])).toBe(true);
    });

    test('treats null and undefined as a value, not as a reason to re-run', () => {
        hasChanged(context, 'k', [null]);

        expect(hasChanged(context, 'k', [null])).toBe(false);
        expect(hasChanged(context, 'k', [undefined])).toBe(false);
        expect(hasChanged(context, 'k', ['x'])).toBe(true);
    });

    test('never throws on a value that cannot be serialized', () => {
        const circular = {};
        circular.self = circular;

        // JSON.stringify here would take the whole style pass down with it.
        expect(() => hasChanged(context, 'k', [circular])).not.toThrow();
    });

    test('answers true without a context rather than skipping the work', () => {
        expect(hasChanged(null, 'k', ['a'])).toBe(true);
        expect(hasChanged(undefined, 'k', ['a'])).toBe(true);
    });

    test('gives a rebuilt card its own memory, since the gate lives on the card', () => {
        hasChanged(context, 'tint', ['on']);

        expect(hasChanged({}, 'tint', ['on'])).toBe(true);
    });
});
