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

    test('preloads each unique built-in type once with its real config, skipping custom cards', async () => {
        const lightConfig = { type: 'light', entity: 'light.kitchen' };
        const context = {
            config: {
                cards: [
                    lightConfig,
                    { type: 'custom:some-card' },
                    { type: 'light', entity: 'light.desk' },
                    { type: 'vertical-stack', cards: [{ type: 'thermostat', entity: 'climate.a' }] },
                    { type: 'conditional', card: { type: 'media-control', entity: 'media_player.tv' } },
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
        expect(preloadedTypes).toEqual(['conditional', 'light', 'media-control', 'thermostat', 'vertical-stack']);

        // The real config is passed, so setConfig validation passes silently
        // instead of throwing on a minimal {type} stub.
        const lightCall = createCardElement.mock.calls.find(([config]) => config.type === 'light');
        expect(lightCall[0]).toBe(lightConfig);
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
