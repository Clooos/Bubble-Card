import { describe, expect, test } from '@jest/globals';
import { keepEqualParts, withoutRepeatedUsers, acceptConditions } from './config-identity.js';

const clone = (value) => JSON.parse(JSON.stringify(value));
const deepFreeze = (value) => {
    if (value && typeof value === 'object') { Object.values(value).forEach(deepFreeze); Object.freeze(value); }
    return value;
};

describe('keepEqualParts', () => {
    const config = () => ({
        card_type: 'pop-up',
        hash: '#kitchen',
        trigger: [
            { condition: 'screen', media_query: '(max-width: 767px)' },
            { condition: 'user', users: ['a'] },
        ],
        styles: '',
    });

    test('a deep copy with the same content is the previous object, all the way down', () => {
        const previous = config();
        expect(keepEqualParts(previous, clone(previous))).toBe(previous);
    });

    test('one changed leaf gives a new object that keeps every untouched part', () => {
        const previous = config();
        const next = clone(previous);
        next.trigger[1].users = ['a', 'b'];
        const kept = keepEqualParts(previous, next);
        expect(kept).not.toBe(previous);
        expect(kept).toEqual(next);
        expect(kept.trigger).not.toBe(previous.trigger);
        expect(kept.trigger[0]).toBe(previous.trigger[0]);
        expect(kept.trigger[1]).toBe(next.trigger[1]);
    });

    test('a key added, a key removed and a longer list are all seen as changes', () => {
        const previous = config();
        const added = { ...clone(previous), name: 'Kitchen' };
        expect(keepEqualParts(previous, added)).toEqual(added);
        expect(keepEqualParts(previous, added)).not.toBe(previous);

        const removed = clone(previous); delete removed.styles;
        expect(keepEqualParts(previous, removed)).toEqual(removed);
        expect(keepEqualParts(previous, removed).trigger).toBe(previous.trigger);

        const longer = clone(previous); longer.trigger.push({ condition: 'state', entity: 'sun.sun', state: 'on' });
        const kept = keepEqualParts(previous, longer);
        expect(kept.trigger).toHaveLength(3);
        expect(kept.trigger[0]).toBe(previous.trigger[0]);
        expect(kept.trigger[1]).toBe(previous.trigger[1]);
    });

    test('a key holding undefined is not the same as no key', () => {
        const previous = { a: 1 };
        const next = { a: 1, b: undefined };
        expect(keepEqualParts(previous, next)).not.toBe(previous);
        expect(keepEqualParts(next, previous)).not.toBe(next);
    });

    test('a list is never taken for an object, nor a value for a container', () => {
        expect(keepEqualParts({ a: [] }, { a: {} })).toEqual({ a: {} });
        expect(keepEqualParts({ a: { b: 1 } }, { a: 1 })).toEqual({ a: 1 });
        expect(keepEqualParts(undefined, { a: 1 })).toEqual({ a: 1 });
        expect(keepEqualParts({ a: 1 }, null)).toBe(null);
    });

    test('frozen inputs are read and never written', () => {
        const previous = deepFreeze(config());
        const next = deepFreeze({ ...clone(previous), hash: '#living' });
        const kept = keepEqualParts(previous, next);
        expect(kept.hash).toBe('#living');
        expect(kept.trigger).toBe(previous.trigger);
    });
});

describe('withoutRepeatedUsers', () => {
    test('a list with nothing repeated comes back as the very same list', () => {
        const conditions = [{ condition: 'user', users: ['a', 'b'] }, { condition: 'state', entity: 'sun.sun', state: 'on' }];
        expect(withoutRepeatedUsers(conditions)).toBe(conditions);
    });

    test('a user listed several times is kept once, in the order of the first sighting', () => {
        const state = { condition: 'state', entity: 'sun.sun', state: 'on' };
        const conditions = [state, { condition: 'user', users: ['a', 'b', 'a', 'a', 'b'] }];
        const cleaned = withoutRepeatedUsers(conditions);
        expect(cleaned).toEqual([state, { condition: 'user', users: ['a', 'b'] }]);
        expect(cleaned[0]).toBe(state);
        expect(conditions[1].users).toHaveLength(5);
    });

    test('a user condition nested in an and, an or or a not is cleaned too', () => {
        const conditions = [{ condition: 'or', conditions: [
            { condition: 'not', conditions: [{ condition: 'user', users: ['a', 'a'] }] },
            { condition: 'screen', media_query: '(max-width: 767px)' },
        ] }];
        const cleaned = withoutRepeatedUsers(conditions);
        expect(cleaned[0].conditions[0].conditions[0].users).toEqual(['a']);
        expect(cleaned[0].conditions[1]).toBe(conditions[0].conditions[1]);
    });

    test('anything that is not a list of conditions is given back untouched', () => {
        expect(withoutRepeatedUsers(undefined)).toBe(undefined);
        expect(withoutRepeatedUsers('nope')).toBe('nope');
        const odd = [null, 'text', { condition: 'user' }, { condition: 'user', users: 'a' }];
        expect(withoutRepeatedUsers(odd)).toBe(odd);
    });
});

describe('acceptConditions', () => {
    const current = () => [
        { condition: 'screen', media_query: '(max-width: 767px)' },
        { condition: 'user', users: ['a'] },
    ];

    test('the user Home Assistant adds again on its own changes nothing', () => {
        const kept = current();
        const reported = [kept[0], { ...kept[1], users: ['a', 'a'] }];
        expect(acceptConditions(kept, reported)).toBe(kept);
    });

    test('the same report coming back as a deep copy changes nothing either', () => {
        const kept = current();
        expect(acceptConditions(kept, clone([kept[0], { condition: 'user', users: ['a', 'a'] }]))).toBe(kept);
    });

    test('a user really ticked is kept, with the object Home Assistant reported for it', () => {
        const kept = current();
        const changed = { ...kept[1], users: ['a', 'b'] };
        const accepted = acceptConditions(kept, [kept[0], changed]);
        expect(accepted).not.toBe(kept);
        expect(accepted[0]).toBe(kept[0]);
        expect(accepted[1]).toBe(changed);
    });

    test('a list already full of repeats is cleaned as soon as it is reported', () => {
        const polluted = [{ condition: 'user', users: ['a', 'a', 'a', 'a'] }];
        expect(acceptConditions(polluted, [{ condition: 'user', users: ['a', 'a', 'a', 'a', 'a'] }])).toEqual([{ condition: 'user', users: ['a'] }]);
    });

    test('the first conditions of a card are accepted as they are', () => {
        const reported = [{ condition: 'user', users: ['a'] }];
        expect(acceptConditions(undefined, reported)).toBe(reported);
    });
});
