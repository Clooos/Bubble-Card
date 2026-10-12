import { jest, test, expect, afterEach } from '@jest/globals';
const changeEventList = jest.fn(async (context) => { context.events = ['fresh']; });
const changeEvents = jest.fn();
jest.unstable_mockModule('./changes.js', () => ({ changeEventList, changeEvents, changeStyle: jest.fn() }));
jest.unstable_mockModule('./create.js', () => ({ createStructure: jest.fn() }));
jest.unstable_mockModule('../../components/sub-button/changes.js', () => ({ changeSubButtons: jest.fn() }));
const { handleCalendar } = await import('./index.js');
const flush = async () => { for (let i = 0; i < 10; i++) await Promise.resolve(); };
afterEach(() => { jest.clearAllMocks(); jest.useRealTimers(); });

test('event-list notification refreshes even when calendar state is unchanged', async () => {
  jest.useFakeTimers();
  let notify;
  const context = { cardType: 'calendar', isConnected: true, config: { entities: [{ entity: 'calendar.lab' }] },
    _hass: { states: { 'calendar.lab': { state: 'off', attributes: { message: 'First event' } } },
      connection: { subscribeMessage: jest.fn(async (callback) => { notify = callback; return () => {}; }) } } };
  handleCalendar(context); await flush();
  handleCalendar(context); await flush();
  expect(changeEventList).toHaveBeenCalledTimes(1);
  expect(context._hass.connection.subscribeMessage).toHaveBeenCalledTimes(1);
  await notify({ events: [] }); await flush();
  expect(changeEventList).toHaveBeenCalledTimes(2);
  expect(changeEvents).toHaveBeenCalledTimes(2);
});

test('a late REST result cannot overwrite a newer update', async () => {
  jest.useFakeTimers();
  const pending = [];
  changeEventList.mockImplementationOnce((snapshot) => new Promise(resolve => pending.push(() => { snapshot.events = ['old']; resolve(); })))
    .mockImplementationOnce((snapshot) => new Promise(resolve => pending.push(() => { snapshot.events = ['new']; resolve(); })));
  const context = { cardType: 'calendar', isConnected: true, config: { entities: [{ entity: 'calendar.lab' }] },
    _hass: { states: { 'calendar.lab': { state: 'off' } } } };
  handleCalendar(context);
  context._hass.states['calendar.lab'] = { state: 'on' };
  handleCalendar(context);
  pending[1](); await flush(); pending[0](); await flush();
  expect(context.events).toEqual(['new']); expect(changeEvents).toHaveBeenCalledTimes(1);
});

test('a disconnected card does not render a completed fetch', async () => {
  jest.useFakeTimers(); let finish;
  changeEventList.mockImplementationOnce((snapshot) => new Promise(resolve => { finish = () => { snapshot.events = ['late']; resolve(); }; }));
  const context = { cardType: 'calendar', isConnected: true, config: { entities: [{ entity: 'calendar.lab' }] }, _hass: { states: {} } };
  handleCalendar(context); context.isConnected = false; finish(); await flush();
  expect(changeEvents).not.toHaveBeenCalled(); expect(context.events).toBeUndefined();
});
