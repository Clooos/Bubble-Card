import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { createDragClickSwallow } from './drag-click.js';

function createMockElement() {
    const listeners = [];

    return {
        listeners,
        addEventListener: jest.fn((type, handler, capture) => listeners.push({ type, handler, capture })),
        removeEventListener: jest.fn((type, handler, capture) => {
            const index = listeners.findIndex(
                (entry) => entry.type === type && entry.handler === handler && entry.capture === capture
            );
            if (index >= 0) listeners.splice(index, 1);
        }),
        click() {
            const event = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
            listeners.filter((entry) => entry.type === 'click').forEach((entry) => entry.handler(event));
            return event;
        }
    };
}

describe('createDragClickSwallow', () => {
    let element;
    let swallow;

    beforeEach(() => {
        jest.useFakeTimers();
        element = createMockElement();
        swallow = createDragClickSwallow(element);
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('swallows the click a drag ends with', () => {
        swallow.arm();

        const event = element.click();

        expect(event.preventDefault).toHaveBeenCalled();
        expect(event.stopPropagation).toHaveBeenCalled();
    });

    test('lets go of the card once the gesture is over', () => {
        // #2593: a touch drag ends without any click, and what stayed armed for
        // it swallowed the next tap anywhere in the card instead.
        swallow.arm();
        swallow.scheduleRelease();
        jest.advanceTimersByTime(1);

        expect(element.listeners).toHaveLength(0);

        const event = element.click();

        expect(event.preventDefault).not.toHaveBeenCalled();
    });

    test('still swallows the click that lands in the same turn as the release', () => {
        swallow.arm();
        swallow.scheduleRelease();

        // The click a mouse produces arrives before the release runs.
        const event = element.click();

        expect(event.preventDefault).toHaveBeenCalled();
    });

    test('a second gesture does not stack a listener on the card', () => {
        swallow.arm();
        swallow.arm();
        swallow.arm();

        expect(element.listeners).toHaveLength(1);
    });

    test('a gesture starting during the wind-down keeps its own swallow', () => {
        swallow.arm();
        swallow.scheduleRelease();
        swallow.arm();
        jest.advanceTimersByTime(1);

        // The release belonged to the gesture before, it must not disarm this one.
        expect(element.listeners).toHaveLength(1);
        expect(element.click().preventDefault).toHaveBeenCalled();
    });

    test('an element that cannot take listeners is not a crash', () => {
        const orphan = createDragClickSwallow(null);

        expect(() => { orphan.arm(); orphan.scheduleRelease(); jest.advanceTimersByTime(1); }).not.toThrow();
    });
});
