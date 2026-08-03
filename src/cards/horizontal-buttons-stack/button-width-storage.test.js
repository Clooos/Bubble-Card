import { afterEach, describe, expect, jest, test } from '@jest/globals';

const { getStoredButtonWidth, storeButtonWidth } = await import('./button-width-storage.js');

const originalLocalStorage = global.localStorage;

function useStorage(impl) {
    Object.defineProperty(global, 'localStorage', { value: impl, configurable: true, writable: true });
}

function createMemoryStorage() {
    const values = new Map();
    return {
        values,
        getItem: jest.fn((key) => (values.has(key) ? values.get(key) : null)),
        setItem: jest.fn((key, value) => { values.set(key, value); }),
    };
}

afterEach(() => {
    useStorage(originalLocalStorage);
});

describe('getStoredButtonWidth', () => {
    test('reads the width cached for that link', () => {
        const storage = createMemoryStorage();
        storage.values.set('bubbleButtonWidth-#kitchen', '120');
        useStorage(storage);

        expect(getStoredButtonWidth('#kitchen')).toBe('120');
    });

    test('returns null instead of throwing when storage is unavailable', () => {
        useStorage({
            getItem: () => { throw new DOMException('blocked', 'SecurityError'); },
            setItem: () => { throw new DOMException('blocked', 'SecurityError'); },
        });

        expect(() => getStoredButtonWidth('#kitchen')).not.toThrow();
        expect(getStoredButtonWidth('#kitchen')).toBeNull();
    });
});

describe('storeButtonWidth', () => {
    test('persists the measured width for that link', () => {
        const storage = createMemoryStorage();
        useStorage(storage);

        storeButtonWidth('#kitchen', 120);

        expect(storage.values.get('bubbleButtonWidth-#kitchen')).toBe('120');
    });

    test('skips the write when the width has not moved', () => {
        // placeButtons runs on every hass tick and localStorage is synchronous.
        const storage = createMemoryStorage();
        useStorage(storage);

        storeButtonWidth('#kitchen', 120);
        storeButtonWidth('#kitchen', 120);
        storeButtonWidth('#kitchen', 121);

        expect(storage.setItem).toHaveBeenCalledTimes(2);
    });

    test('swallows a quota error so the stack keeps rendering', () => {
        // A full origin quota used to throw all the way up and take the whole
        // horizontal-buttons-stack handler down.
        useStorage({
            getItem: () => null,
            setItem: () => { throw new DOMException('exceeded the quota', 'QuotaExceededError'); },
        });

        expect(() => storeButtonWidth('#isolation-test', 120)).not.toThrow();
    });
});
