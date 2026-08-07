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

const { changeEvents } = await import('./changes.js');

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
