import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const { schedulePopupCardModulePreload } = await import('./preload.js');

describe('popup card module preload', () => {
    let createCardElement;

    beforeEach(() => {
        jest.useFakeTimers();
        createCardElement = jest.fn();
        global.window = {
            loadCardHelpers: jest.fn(async () => ({ createCardElement })),
        };
    });

    afterEach(async () => {
        // Flush any queued idle slices so state never leaks across tests.
        jest.runAllTimers();
        await Promise.resolve();
        jest.useRealTimers();
        delete global.window;
    });

    test('preloads each unique card type once, one idle slice at a time', async () => {
        const context = {
            config: {
                cards: [
                    { type: 'light' },
                    { type: 'custom:some-card' },
                    { type: 'light' },
                    { type: 'vertical-stack', cards: [{ type: 'thermostat' }] },
                    { type: 'conditional', card: { type: 'media-control' } },
                ],
            },
        };

        schedulePopupCardModulePreload(context);
        expect(createCardElement).not.toHaveBeenCalled();

        // One type per idle slice (setTimeout fallback without rIC).
        for (let i = 0; i < 7; i++) {
            jest.runOnlyPendingTimers();
            await Promise.resolve();
            await Promise.resolve();
        }

        const preloadedTypes = createCardElement.mock.calls.map(([config]) => config.type).sort();
        expect(preloadedTypes).toEqual(['conditional', 'custom:some-card', 'light', 'media-control', 'thermostat', 'vertical-stack']);
    });

    test('never preloads the same type twice across pop-ups', async () => {
        schedulePopupCardModulePreload({ config: { cards: [{ type: 'weather-forecast' }] } });
        schedulePopupCardModulePreload({ config: { cards: [{ type: 'weather-forecast' }] } });

        jest.runAllTimers();
        await Promise.resolve();
        await Promise.resolve();

        const forecastLoads = createCardElement.mock.calls.filter(([config]) => config.type === 'weather-forecast');
        expect(forecastLoads).toHaveLength(1);
    });

    test('skips editor contexts and empty configs', () => {
        schedulePopupCardModulePreload({ config: { cards: [] } });
        schedulePopupCardModulePreload({ config: { cards: [{ type: 'light-editor-only' }] }, editor: true });
        jest.runAllTimers();

        expect(global.window.loadCardHelpers).not.toHaveBeenCalled();
    });
});
