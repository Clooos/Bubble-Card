import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const fireEvent = jest.fn();

jest.unstable_mockModule('../../tools/utils.js', () => ({ fireEvent }));

let toEventData;
let isEventMoreInfo;
let showEventDetails;

// The handler Home Assistant's calendar runs on a click, as far as this card
// relies on it. It reads hass, and fires show-dialog from itself.
function fullCalendarClass(handler) {
    class FullCalendar {}
    if (handler) FullCalendar.prototype._handleEventClick = handler;
    return FullCalendar;
}

const opensDialog = jest.fn(function (info) {
    this.dispatchEvent({ type: 'show-dialog', detail: { hass: this.hass, info, updated: () => this._fireViewChanged() } });
});

const event = (overrides = {}) => ({
    summary: 'Lawn feed',
    description: '35 g per square metre',
    location: 'Back garden',
    uid: 'abc',
    start: { dateTime: '2026-06-17T10:00:00+02:00' },
    end: { dateTime: '2026-06-17T11:00:00+02:00' },
    entity: { entity: 'calendar.yard' },
    ...overrides,
});

function setup({ defined, helpers } = {}) {
    const registry = new Map();
    if (defined) registry.set('ha-full-calendar', defined);
    globalThis.customElements = {
        get: (name) => registry.get(name),
        whenDefined: (name) => (registry.has(name) ? Promise.resolve() : new Promise(() => {})),
        registry,
    };
    globalThis.window = helpers === undefined ? {} : { loadCardHelpers: helpers };
}

const origin = () => ({ isConnected: true, dispatchEvent: jest.fn() });

beforeEach(async () => {
    jest.resetModules();
    fireEvent.mockClear();
    opensDialog.mockClear();
    ({ toEventData, isEventMoreInfo, showEventDetails } = await import('./event-details.js'));
});

afterEach(() => {
    delete globalThis.customElements;
    delete globalThis.window;
    jest.useRealTimers();
});

describe('the event handed to the dialog of Home Assistant', () => {
    test('carries what its calendar hands it, dates as plain strings', () => {
        expect(toEventData(event({ rrule: 'FREQ=WEEKLY', recurrence_id: 'r1' }))).toEqual({
            summary: 'Lawn feed',
            dtstart: '2026-06-17T10:00:00+02:00',
            dtend: '2026-06-17T11:00:00+02:00',
            description: '35 g per square metre',
            location: 'Back garden',
            uid: 'abc',
            recurrence_id: 'r1',
            rrule: 'FREQ=WEEKLY',
        });
    });

    test('reads the date of an all-day event', () => {
        const data = toEventData(event({ start: { date: '2026-06-17' }, end: { date: '2026-06-18' } }));
        expect(data.dtstart).toBe('2026-06-17');
        expect(data.dtend).toBe('2026-06-18');
    });

    test('describes the whole event behind one day of a multi-day one', () => {
        const whole = event({ start: { date: '2026-06-17' }, end: { date: '2026-06-20' } });
        const secondDay = { ...whole, start: { date: '2026-06-18' }, end: { date: '2026-06-19' }, isMultiDay: true, sourceEvent: whole };
        expect(toEventData(secondDay)).toMatchObject({ dtstart: '2026-06-17', dtend: '2026-06-20' });
    });

    test('leaves out what the calendar did not send', () => {
        const data = toEventData(event({ description: null, location: null, uid: null }));
        expect(data.description).toBeUndefined();
        expect(data.location).toBeUndefined();
        expect(data.uid).toBeUndefined();
    });
});

describe('the actions that mean the event itself', () => {
    const action = (name, config) => ({ detail: { action: name, config: { [`${name}_action`]: config } } });

    test('a more-info, on whichever gesture', () => {
        expect(isEventMoreInfo(action('tap', { action: 'more-info' }), 'calendar.yard')).toBe(true);
        expect(isEventMoreInfo(action('hold', { action: 'more-info' }), 'calendar.yard')).toBe(true);
        expect(isEventMoreInfo(action('tap', { action: 'more-info', entity: 'calendar.yard' }), 'calendar.yard')).toBe(true);
    });

    test('not a more-info aimed at another entity', () => {
        expect(isEventMoreInfo(action('tap', { action: 'more-info', entity: 'light.shed' }), 'calendar.yard')).toBe(false);
    });

    test('nor any other action', () => {
        expect(isEventMoreInfo(action('tap', { action: 'none' }), 'calendar.yard')).toBe(false);
        expect(isEventMoreInfo(action('tap', { action: 'navigate', navigation_path: '#yard' }), 'calendar.yard')).toBe(false);
        expect(isEventMoreInfo({ detail: {} }, 'calendar.yard')).toBe(false);
    });
});

describe('opening the details of an event', () => {
    test('runs the click of Home Assistant\'s calendar with the event, from the line that was pressed', async () => {
        setup({ defined: fullCalendarClass(opensDialog) });
        const from = origin();
        const onChanged = jest.fn();
        const hass = { states: {} };

        await showEventDetails({ _hass: hass }, event(), from, 'red', onChanged);

        expect(opensDialog).toHaveBeenCalledTimes(1);
        const info = opensDialog.mock.calls[0][0];
        expect(info.event.backgroundColor).toBe('red');
        // Where Home Assistant 2026.11 reads it.
        expect(info.event.color).toBe('red');
        expect(info.event.extendedProps.calendar).toBe('calendar.yard');
        expect(info.event.extendedProps.eventData.description).toBe('35 g per square metre');

        const dialogEvent = from.dispatchEvent.mock.calls[0][0];
        expect(dialogEvent.type).toBe('show-dialog');
        expect(dialogEvent.detail.hass).toBe(hass);
        expect(fireEvent).not.toHaveBeenCalled();

        // What the dialog calls once the event was edited or deleted.
        dialogEvent.detail.updated();
        expect(onChanged).toHaveBeenCalledTimes(1);
    });

    test('asks the card helpers for the calendar the first time', async () => {
        const createCardElement = jest.fn(() => { globalThis.customElements.registry.set('ha-full-calendar', fullCalendarClass(opensDialog)); });
        setup({ helpers: jest.fn(async () => ({ createCardElement })) });
        globalThis.customElements.whenDefined = () => Promise.resolve();
        const from = origin();

        await showEventDetails({ _hass: {} }, event(), from, 'red');

        expect(createCardElement).toHaveBeenCalledWith({ type: 'calendar', entities: ['calendar.yard'] });
        expect(from.dispatchEvent.mock.calls[0][0].type).toBe('show-dialog');
    });

    test('goes from the card when the line is gone by then', async () => {
        setup({ defined: fullCalendarClass(opensDialog) });
        const card = { dispatchEvent: jest.fn() };

        await showEventDetails({ _hass: {}, card }, event(), { isConnected: false, dispatchEvent: jest.fn() }, 'red');

        expect(card.dispatchEvent.mock.calls[0][0].type).toBe('show-dialog');
    });

    describe('falls back on the more-info of the calendar', () => {
        const expectMoreInfo = (from) => expect(fireEvent).toHaveBeenCalledWith(from, 'hass-more-info', { entityId: 'calendar.yard' });

        test('when the calendar has no such click any more', async () => {
            setup({ defined: fullCalendarClass(null) });
            const from = origin();
            await showEventDetails({ _hass: {} }, event(), from, 'red');
            expectMoreInfo(from);
        });

        test('when that click throws', async () => {
            setup({ defined: fullCalendarClass(() => { throw new Error('changed'); }) });
            const from = origin();
            await showEventDetails({ _hass: {} }, event(), from, 'red');
            expectMoreInfo(from);
        });

        test('when it opens nothing', async () => {
            setup({ defined: fullCalendarClass(() => {}) });
            const from = origin();
            await showEventDetails({ _hass: {} }, event(), from, 'red');
            expectMoreInfo(from);
        });

        test('when there are no card helpers', async () => {
            setup({});
            const from = origin();
            await showEventDetails({ _hass: {} }, event(), from, 'red');
            expectMoreInfo(from);
        });

        test('when the calendar never loads', async () => {
            jest.useFakeTimers();
            setup({ helpers: jest.fn(async () => ({ createCardElement: jest.fn() })) });
            const from = origin();

            const pending = showEventDetails({ _hass: {} }, event(), from, 'red');
            await jest.advanceTimersByTimeAsync(10000);
            await pending;

            expectMoreInfo(from);
        });
    });
});
