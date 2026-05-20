import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

async function flushPromiseQueue() {
    await Promise.resolve();
    await Promise.resolve();
}

describe('getRenderedTemplate', () => {
    let consoleWarnSpy;

    beforeEach(() => {
        jest.resetModules();
        consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleWarnSpy.mockRestore();
    });

    test('handles aborted template subscriptions without an unhandled rejection', async () => {
        const { getRenderedTemplate } = await import('./render-template.js');
        const template = '{{ states("sensor.example") }}';
        const abortReason = { name: 'AbortError', message: 'Transition was skipped' };
        const unsubscribe = jest.fn();
        const subscribeMessage = jest.fn()
            .mockRejectedValueOnce(abortReason)
            .mockResolvedValueOnce(unsubscribe);
        const hass = { connection: { subscribeMessage } };

        expect(getRenderedTemplate(hass, template)).toBeUndefined();
        await flushPromiseQueue();

        expect(consoleWarnSpy).toHaveBeenCalledWith(
            'Bubble Card - Template subscription aborted: AbortError: Transition was skipped'
        );

        expect(getRenderedTemplate(hass, template)).toBeUndefined();
        await flushPromiseQueue();

        expect(subscribeMessage).toHaveBeenCalledTimes(2);
    });
});