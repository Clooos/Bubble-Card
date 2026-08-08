import { beforeEach, describe, expect, jest, test } from '@jest/globals';

import { registerModuleTeardown, runModuleTeardowns, teardownKey } from './module-teardown.js';

describe('teardownKey', () => {
    test('keeps one slot per module, so two modules on a card do not share', () => {
        expect(teardownKey({ type: 'module', id: 'a' })).not.toBe(teardownKey({ type: 'module', id: 'b' }));
    });

    test('separates a card custom styles slot from a module slot', () => {
        expect(teardownKey({ type: 'custom_styles' })).not.toBe(teardownKey({ type: 'module', id: 'custom_styles' }));
    });

    test('answers something usable for a source it does not recognize', () => {
        expect(typeof teardownKey(undefined)).toBe('string');
        expect(teardownKey(undefined).length).toBeGreaterThan(0);
    });
});

describe('module teardowns', () => {
    let context;
    let warn;

    beforeEach(() => {
        context = {};
        warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    test('runs what a module registered when its card goes away', () => {
        const release = jest.fn();
        registerModuleTeardown(context, 'module:light', release);

        runModuleTeardowns(context);

        expect(release).toHaveBeenCalledTimes(1);
    });

    test('keeps one callback per module however many passes registered it', () => {
        // The style pass runs about seven times per card per pop-up open, so a
        // module registering every time must not end up with seven callbacks.
        const release = jest.fn();
        for (let i = 0; i < 7; i++) registerModuleTeardown(context, 'module:light', release);

        runModuleTeardowns(context);

        expect(release).toHaveBeenCalledTimes(1);
    });

    test('keeps the last callback a module registered, not the first', () => {
        const stale = jest.fn();
        const fresh = jest.fn();
        registerModuleTeardown(context, 'module:light', stale);
        registerModuleTeardown(context, 'module:light', fresh);

        runModuleTeardowns(context);

        expect(stale).not.toHaveBeenCalled();
        expect(fresh).toHaveBeenCalledTimes(1);
    });

    test('runs every module of the card, each in its own slot', () => {
        const light = jest.fn();
        const neon = jest.fn();
        registerModuleTeardown(context, 'module:light', light);
        registerModuleTeardown(context, 'module:neon', neon);

        runModuleTeardowns(context);

        expect(light).toHaveBeenCalledTimes(1);
        expect(neon).toHaveBeenCalledTimes(1);
    });

    test('one broken teardown does not keep the others from running', () => {
        const before = jest.fn();
        const after = jest.fn();
        registerModuleTeardown(context, 'a', before);
        registerModuleTeardown(context, 'b', () => { throw new Error('module is broken'); });
        registerModuleTeardown(context, 'c', after);

        expect(() => runModuleTeardowns(context)).not.toThrow();

        expect(before).toHaveBeenCalledTimes(1);
        expect(after).toHaveBeenCalledTimes(1);
        expect(warn).toHaveBeenCalled();
    });

    test('never runs the same teardown twice', () => {
        const release = jest.fn();
        registerModuleTeardown(context, 'module:light', release);

        runModuleTeardowns(context);
        runModuleTeardowns(context);

        expect(release).toHaveBeenCalledTimes(1);
    });

    test('a module that re-registers from inside its own teardown does not loop', () => {
        let calls = 0;
        const release = jest.fn(() => {
            calls += 1;
            if (calls < 5) registerModuleTeardown(context, 'module:light', release);
        });
        registerModuleTeardown(context, 'module:light', release);

        runModuleTeardowns(context);

        // The re-registration survives for the next disconnect, it does not run
        // again inside this one.
        expect(release).toHaveBeenCalledTimes(1);
    });

    test('a card that registered nothing tears down without touching anything', () => {
        expect(() => runModuleTeardowns({})).not.toThrow();
        expect(() => runModuleTeardowns(undefined)).not.toThrow();
    });

    test('ignores a registration that is not a function', () => {
        registerModuleTeardown(context, 'module:light', 'clearInterval(x)');
        registerModuleTeardown(context, 'module:neon', null);

        expect(() => runModuleTeardowns(context)).not.toThrow();
    });
});
