import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// Minimal DOM: only what changeEvents touches (appendChild / classList /
// innerHTML / style), plus the fragment it builds the day list into.
class StubClassList {
    constructor() {
        this._set = new Set();
    }
    add(...names) { names.filter(Boolean).forEach(name => this._set.add(name)); }
    remove(...names) { names.forEach(name => this._set.delete(name)); }
    contains(name) { return this._set.has(name); }
    toggle(name, force) {
        const shouldAdd = force === undefined ? !this._set.has(name) : !!force;
        if (shouldAdd) this._set.add(name); else this._set.delete(name);
        return this._set.has(name);
    }
}

class StubElement {
    constructor(tag) {
        this.tagName = String(tag).toUpperCase();
        this.children = [];
        this.parentElement = null;
        this.classList = new StubClassList();
        this.dataset = {};
        this._innerHTML = '';
        this.scrollHeight = 0;
        this.scrollTop = 0;
        this.style = {
            _props: {},
            setProperty(name, value) { this._props[name] = value; },
            getPropertyValue(name) { return this._props[name] ?? ''; },
            removeProperty(name) { delete this._props[name]; },
        };
    }

    get innerHTML() { return this._innerHTML; }

    // Assigning innerHTML wipes the children, the way the card resets its
    // content before appending a freshly built fragment.
    set innerHTML(value) {
        this._innerHTML = value;
        this.children.forEach(child => { child.parentElement = null; });
        this.children = [];
    }

    getBoundingClientRect() { return { height: 0 }; }

    removeAttribute() {}

    appendChild(child) {
        // A fragment hands over its children instead of being inserted itself
        if (child instanceof StubFragment) {
            [...child.children].forEach(grandChild => this.appendChild(grandChild));
            child.children = [];
            return child;
        }
        if (child.parentElement) child.parentElement.removeChild(child);
        this.children.push(child);
        child.parentElement = this;
        return child;
    }

    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) this.children.splice(index, 1);
        child.parentElement = null;
        return child;
    }

    querySelectorAll(selector) {
        const wanted = selector.split(',').map(part => part.trim().replace(/^\./, '').split('.'));
        const found = [];
        const walk = (node) => {
            node.children.forEach(child => {
                if (wanted.some(parts => parts.every(name => child.classList.contains(name)))) found.push(child);
                walk(child);
            });
        };
        walk(this);
        return found;
    }

    querySelector(selector) { return this.querySelectorAll(selector)[0] ?? null; }
}

class StubFragment extends StubElement {
    constructor() { super('#document-fragment'); }
}

globalThis.DocumentFragment = StubFragment;
globalThis.document = { createElement: (tag) => new StubElement(tag) };

const addActions = jest.fn();

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: (tag, classNames = '') => {
        const element = new StubElement(tag);
        if (classNames) classNames.split(' ').filter(Boolean).forEach(name => element.classList.add(name));
        return element;
    },
    setLayout: jest.fn(),
    isDocumentRTL: () => false,
}));

jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({
    applyScrollingEffect: (context, element, text) => { element.innerHTML = text ?? ''; },
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const translations = {
    'cards.calendar.no_events': 'No events',
    'cards.calendar.all_day': 'All day',
    'cards.calendar.busy': 'Busy',
};

jest.unstable_mockModule('../../tools/localize.js', () => ({
    default: () => (key) => translations[key] ?? key,
}));

jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    addActions,
}));

const { changeEvents, changeEventList } = await import('./changes.js');

const eventAction = {
    tap_action: { action: 'more-info' },
    double_tap_action: { action: 'none' },
    hold_action: { action: 'none' },
};

function createContext(config = {}, events = []) {
    const calendarCardContent = new StubElement('div');
    calendarCardContent.classList.add('bubble-calendar-content');

    return {
        _hass: { locale: { language: 'en', time_format: '24' } },
        config: { show_place: true, event_action: eventAction, ...config },
        events,
        content: new StubElement('div'),
        elements: {
            calendarCardContent,
            mainContainer: { scrollHeight: 100, offsetHeight: 100 },
        },
    };
}

// A timed event on today, so it always lands in the rendered day range
function timedEvent(overrides = {}) {
    const now = new Date();
    const at = (hours) => new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, 0, 0).toISOString();

    return {
        summary: 'Stand-up',
        start: { dateTime: at(10) },
        end: { dateTime: at(11) },
        location: 'Office',
        entity: { entity: 'calendar.work' },
        ...overrides,
    };
}

const eventLines = (context) => context.elements.calendarCardContent.querySelectorAll('.bubble-event');
const placesOf = (element) => element.querySelectorAll('.bubble-event-place');
const actionCallsFor = (element) => addActions.mock.calls.filter(call => call[0] === element);

describe('calendar "No events" placeholder', () => {
    beforeEach(() => {
        addActions.mockClear();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    // The placeholder carries no location, and `undefined !== null` was true, so
    // the card printed the literal string "undefined" as a place (#2504).
    test('renders no location line even with show_place enabled', async () => {
        const context = createContext({ show_place: true }, []);

        await changeEvents(context);

        const [line] = eventLines(context);
        expect(line).toBeDefined();
        expect(line.querySelector('.bubble-event-name').innerHTML).toBe('No events');
        expect(placesOf(line)).toHaveLength(0);
    });

    // The placeholder is built with `entity: { color: 'transparent' }` and no
    // entity id, so a configured more-info failed with "Invalid entity_ids".
    test('wires no tap, hold or double tap action on the placeholder line', async () => {
        const context = createContext({ show_place: true }, []);

        await changeEvents(context);

        const [line] = eventLines(context);
        expect(actionCallsFor(line)).toHaveLength(0);
    });

    test('still wires the day chip of the placeholder day', async () => {
        const context = createContext({ show_place: true }, []);

        await changeEvents(context);

        const [dayChip] = context.elements.calendarCardContent.querySelectorAll('.bubble-day-chip');
        expect(actionCallsFor(dayChip)).toHaveLength(1);
    });
});

describe('calendar event location', () => {
    beforeEach(() => {
        addActions.mockClear();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    test('renders the location of a real event when show_place is enabled', async () => {
        const context = createContext({ show_place: true }, [timedEvent()]);

        await changeEvents(context);

        const [line] = eventLines(context);
        const places = placesOf(line);
        expect(places).toHaveLength(1);
        expect(places[0].innerHTML).toBe('Office');
    });

    // An empty location used to render an empty place line, which still took
    // its own row under the event name. It is now skipped like a missing one.
    test('renders no location line for an event whose location is an empty string', async () => {
        const context = createContext({ show_place: true }, [timedEvent({ location: '' })]);

        await changeEvents(context);

        expect(placesOf(eventLines(context)[0])).toHaveLength(0);
    });

    test('renders no location line for an event that has no location at all', async () => {
        const event = timedEvent();
        delete event.location;
        const context = createContext({ show_place: true }, [event]);

        await changeEvents(context);

        expect(placesOf(eventLines(context)[0])).toHaveLength(0);
    });

    test('renders no location line when show_place is disabled', async () => {
        const context = createContext({ show_place: false }, [timedEvent()]);

        await changeEvents(context);

        expect(placesOf(eventLines(context)[0])).toHaveLength(0);
    });
});

describe('calendar event actions', () => {
    beforeEach(() => {
        addActions.mockClear();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    test('wires the configured event actions on a real event line', async () => {
        const context = createContext({}, [timedEvent()]);

        await changeEvents(context);

        const [line] = eventLines(context);
        const calls = actionCallsFor(line);
        expect(calls).toHaveLength(1);
        expect(calls[0][1]).toBe(eventAction);
        expect(calls[0][2]).toBe('calendar.work');
        expect(calls[0][3]).toEqual({
            tap_action: { action: 'none' },
            double_tap_action: { action: 'none' },
            hold_action: { action: 'none' },
        });
    });

    test('wires a real event even when its location is empty', async () => {
        const context = createContext({}, [timedEvent({ location: '' })]);

        await changeEvents(context);

        expect(actionCallsFor(eventLines(context)[0])).toHaveLength(1);
    });

    // A real event next to the placeholder must keep its actions, so the gate
    // has to be read per event and not once for the whole list.
    test('keeps the actions of a real event when it is the only one', async () => {
        const context = createContext({}, [timedEvent(), timedEvent({ entity: { entity: 'calendar.home' } })]);

        await changeEvents(context);

        const lines = eventLines(context);
        expect(lines).toHaveLength(2);
        expect(actionCallsFor(lines[0])).toHaveLength(1);
        expect(actionCallsFor(lines[1])).toHaveLength(1);
    });
});


// ---------------------------------------------------------------------------
// The limit counts days, not lines: a multi-day event takes one line per day it
// covers since #2556, and a line based cap let it eat the whole budget.
// ---------------------------------------------------------------------------

const pad = (value) => String(value).padStart(2, '0');

// A date offset from today, as the "YYYY-MM-DD" an all day event carries
function dayAt(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function allDayEvent(summary, startOffset, endOffset) {
    return { summary, start: { date: dayAt(startOffset) }, end: { date: dayAt(endOffset) } };
}

function eventAt(summary, offset, hour = 10) {
    const start = new Date();
    start.setDate(start.getDate() + offset);
    start.setHours(hour, 0, 0, 0);
    const end = new Date(start);
    end.setHours(hour + 1);
    return { summary, start: { dateTime: start.toISOString() }, end: { dateTime: end.toISOString() } };
}

function listContext(config, apiEvents) {
    return {
        _hass: {
            locale: { language: 'en', time_format: '24' },
            callApi: jest.fn(async () => apiEvents.map(event => ({ ...event }))),
        },
        config: { entities: [{ entity: 'calendar.work' }], days: 7, ...config },
    };
}

// The rendered shape: one entry per day, in order, with the names it holds
const byDay = (context) => context.events.reduce((days, event) => {
    const last = days[days.length - 1];
    if (last && last.day === event.dayKey) last.names.push(event.summary);
    else days.push({ day: event.dayKey, names: [event.summary] });
    return days;
}, []);

describe('calendar limit', () => {
    test('keeps every day when no limit is set', async () => {
        const context = listContext({}, [eventAt('a', 0), eventAt('b', 1), eventAt('c', 2)]);

        await changeEventList(context);

        expect(byDay(context).map(entry => entry.names)).toEqual([['a'], ['b'], ['c']]);
    });

    test('caps the number of days holding an event', async () => {
        const context = listContext({ limit: 2 }, [eventAt('a', 0), eventAt('b', 1), eventAt('c', 2)]);

        await changeEventList(context);

        expect(byDay(context).map(entry => entry.names)).toEqual([['a'], ['b']]);
    });

    test('never cuts a day in half', async () => {
        const context = listContext({ limit: 1 }, [
            eventAt('morning', 0, 9), eventAt('noon', 0, 12), eventAt('tomorrow', 1),
        ]);

        await changeEventList(context);

        expect(byDay(context).map(entry => entry.names)).toEqual([['morning', 'noon']]);
    });

    // The reason for counting days: a week of holiday used to swallow a line
    // based limit and hide every other event behind it
    test('lets a week long event share the budget with the events of those days', async () => {
        const context = listContext({ limit: 4 }, [
            allDayEvent('holiday', -3, 4),
            eventAt('a', 0), eventAt('b', 1), eventAt('c', 2), eventAt('d', 3),
        ]);

        await changeEventList(context);

        expect(byDay(context).map(entry => entry.names)).toEqual([
            ['holiday', 'a'], ['holiday', 'b'], ['holiday', 'c'], ['holiday', 'd'],
        ]);
    });

    test('never shows a day before today', async () => {
        const context = listContext({ limit: 4 }, [allDayEvent('holiday', -3, 4)]);

        await changeEventList(context);

        expect(byDay(context)[0].day).toBe(dayAt(0));
    });

    test('keeps everything when the limit is above the number of days', async () => {
        const context = listContext({ limit: 99 }, [eventAt('a', 0), eventAt('b', 1)]);

        await changeEventList(context);

        expect(context.events).toHaveLength(2);
    });

    test('shows nothing on a limit of zero, as a slice of zero did', async () => {
        const context = listContext({ limit: 0 }, [eventAt('a', 0), eventAt('b', 1)]);

        await changeEventList(context);

        expect(context.events).toEqual([]);
    });

    test.each([[undefined], [null]])('reads a limit of %p as no limit', async (limit) => {
        const context = listContext({ limit }, [eventAt('a', 0), eventAt('b', 1)]);

        await changeEventList(context);

        expect(context.events).toHaveLength(2);
    });

    // A number selector that was emptied hands over an empty string, and a
    // slice of "" already showed nothing
    test('still shows nothing on an empty limit', async () => {
        const context = listContext({ limit: '' }, [eventAt('a', 0), eventAt('b', 1)]);

        await changeEventList(context);

        expect(context.events).toEqual([]);
    });

    // Deliberately kinder than the old slice, which turned any unreadable
    // value into zero and blanked the card
    test('ignores a limit that cannot be read as a number', async () => {
        const context = listContext({ limit: 'many' }, [eventAt('a', 0), eventAt('b', 1)]);

        await changeEventList(context);

        expect(context.events).toHaveLength(2);
    });

    test('reads a limit written as a string, as slice used to coerce it', async () => {
        const context = listContext({ limit: '2' }, [eventAt('a', 0), eventAt('b', 1), eventAt('c', 2)]);

        await changeEventList(context);

        expect(byDay(context).map(entry => entry.names)).toEqual([['a'], ['b']]);
    });

    // The hidden day must not spend a slot, otherwise the card loses a day for
    // nothing whenever an event is under way
    test('counts only the days left once show_started_events removed one', async () => {
        const started = eventAt('running', 0, 0);
        started.end = { dateTime: new Date(Date.now() + 3600 * 1000).toISOString() };
        const context = listContext({ limit: 2, show_started_events: false }, [
            started, eventAt('b', 1), eventAt('c', 2),
        ]);

        await changeEventList(context);

        expect(byDay(context).map(entry => entry.names)).toEqual([['b'], ['c']]);
    });

    test('tags every event with its own day', async () => {
        const context = listContext({}, [allDayEvent('holiday', 0, 3)]);

        await changeEventList(context);

        expect(context.events.map(event => event.dayKey)).toEqual([dayAt(0), dayAt(1), dayAt(2)]);
    });
});

describe('calendar limit on the rendered card', () => {
    beforeEach(() => {
        addActions.mockClear();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    // End to end: the day the grouping reads back must be the one the cap used
    test('renders one day chip per kept day', async () => {
        const listed = listContext({ limit: 2 }, [
            allDayEvent('holiday', 0, 4), eventAt('a', 0), eventAt('b', 1), eventAt('c', 2),
        ]);
        await changeEventList(listed);

        const context = createContext({ limit: 2 }, listed.events);
        await changeEvents(context);

        const chips = context.elements.calendarCardContent.querySelectorAll('.bubble-day-chip');
        expect(chips).toHaveLength(2);
        expect(eventLines(context).map(line => line.querySelector('.bubble-event-name').innerHTML))
            .toEqual(['holiday', 'a', 'holiday', 'b']);
    });
});
