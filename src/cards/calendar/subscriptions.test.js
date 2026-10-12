import { jest, test, expect, afterEach } from '@jest/globals';
import { updateCalendarSubscriptions, cleanupCalendarSubscriptions } from './subscriptions.js';
const flush = async () => { for (let i = 0; i < 10; i++) await Promise.resolve(); };
afterEach(() => jest.useRealTimers());
function setup() {
  const callbacks = [], unsubscribers = [];
  const connection = { subscribeMessage: jest.fn(async (callback) => {
    callbacks.push(callback); const unsub = jest.fn(); unsubscribers.push(unsub); return unsub;
  }) };
  return { context: { config: { entities: [{ entity: 'calendar.lab' }] }, _hass: { connection } }, callbacks, unsubscribers, connection };
}
test('repeated renders deduplicate, then config changes replace subscriptions', async () => {
  const { context, connection, unsubscribers } = setup(); const refresh = jest.fn();
  updateCalendarSubscriptions(context, refresh); await flush();
  updateCalendarSubscriptions(context, refresh); await flush();
  expect(connection.subscribeMessage).toHaveBeenCalledTimes(1);
  context.config.entities = [{ entity: 'calendar.other' }];
  updateCalendarSubscriptions(context, refresh); await flush();
  expect(unsubscribers[0]).toHaveBeenCalledTimes(1);
  expect(connection.subscribeMessage).toHaveBeenCalledTimes(2);
  cleanupCalendarSubscriptions(context);
});
test('disconnect ignores old callbacks and releases a late subscription', async () => {
  const { context, connection } = setup(); let accept, notify; const unsubscribe = jest.fn();
  connection.subscribeMessage.mockImplementation((cb) => { notify = cb; return new Promise(resolve => { accept = resolve; }); });
  const refresh = jest.fn(); updateCalendarSubscriptions(context, refresh); await flush();
  cleanupCalendarSubscriptions(context); accept(unsubscribe); await flush(); await notify({events: []});
  expect(unsubscribe).toHaveBeenCalledTimes(1); expect(refresh).not.toHaveBeenCalled();
});
test('coalesces updates arriving while a fetch is in flight', async () => {
  const { context, callbacks } = setup(); let release;
  const refresh = jest.fn().mockImplementationOnce(() => new Promise(resolve => { release = resolve; })).mockResolvedValue(undefined);
  updateCalendarSubscriptions(context, refresh); await flush();
  const pending = callbacks[0]({events: []}); callbacks[0]({events: []}); callbacks[0]({events: []});
  expect(refresh).toHaveBeenCalledTimes(1); release(); await pending;
  expect(refresh).toHaveBeenCalledTimes(2); cleanupCalendarSubscriptions(context);
});
test('unsupported endpoint keeps the existing REST fallback and does not retry every render', async () => {
  const { context, connection } = setup(); connection.subscribeMessage.mockRejectedValue({ code: 'unknown_command' });
  updateCalendarSubscriptions(context, jest.fn()); await flush();
  updateCalendarSubscriptions(context, jest.fn()); await flush();
  expect(connection.subscribeMessage).toHaveBeenCalledTimes(1); cleanupCalendarSubscriptions(context);
});
test('new day or changed connection renews the subscription window', async () => {
  jest.useFakeTimers().setSystemTime(new Date('2026-10-12T12:00:00Z'));
  const { context, connection, unsubscribers } = setup();
  updateCalendarSubscriptions(context, jest.fn()); await flush();
  jest.setSystemTime(new Date('2026-10-13T12:00:00Z'));
  updateCalendarSubscriptions(context, jest.fn()); await flush();
  expect(unsubscribers[0]).toHaveBeenCalledTimes(1); expect(connection.subscribeMessage).toHaveBeenCalledTimes(2);
  context._hass.connection = { subscribeMessage: jest.fn(async () => () => {}) };
  updateCalendarSubscriptions(context, jest.fn()); await flush();
  expect(unsubscribers[1]).toHaveBeenCalledTimes(1); cleanupCalendarSubscriptions(context);
});


test('cleanup handles rejected and throwing unsubscribers without skipping others', async () => {
  const { context, connection } = setup();
  context.config.entities = [{ entity: 'calendar.one' }, { entity: 'calendar.two' }, { entity: 'calendar.three' }];
  const unsubscribers = [jest.fn(() => { throw new Error('closed'); }), jest.fn(async () => { throw new Error('closed'); }), jest.fn()];
  unsubscribers.forEach(unsubscribe => connection.subscribeMessage.mockResolvedValueOnce(unsubscribe));
  updateCalendarSubscriptions(context, jest.fn()); await flush();
  expect(() => cleanupCalendarSubscriptions(context)).not.toThrow(); await flush();
  unsubscribers.forEach(unsubscribe => expect(unsubscribe).toHaveBeenCalledTimes(1));
});

test('late subscription cleanup handles a rejected unsubscribe', async () => {
  const { context, connection } = setup(); let accept;
  const unsubscribe = jest.fn(async () => { throw new Error('closed'); });
  connection.subscribeMessage.mockImplementation(() => new Promise(resolve => { accept = resolve; }));
  updateCalendarSubscriptions(context, jest.fn()); await flush();
  cleanupCalendarSubscriptions(context); accept(unsubscribe); await flush();
  expect(unsubscribe).toHaveBeenCalledTimes(1);
});
