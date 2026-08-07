import { beforeEach, describe, expect, jest, test } from '@jest/globals';

function createMockClassList(initialClasses = []) {
    const classes = new Set(initialClasses);

    return {
        add: (...names) => names.forEach((name) => classes.add(name)),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
        contains: (name) => classes.has(name),
    };
}

function createMockStyle() {
    return {
        setProperty(name, value) {
            this[name] = value;
        },
    };
}

function createMockElement(tag = 'div', classNames = '') {
    return {
        tagName: tag.toUpperCase(),
        children: [],
        listeners: {},
        parentNode: null,
        offsetWidth: 0,
        style: createMockStyle(),
        classList: createMockClassList(classNames ? classNames.split(' ') : []),
        appendChild(child) {
            this.children.push(child);
            child.parentNode = this;
            return child;
        },
        remove() {
            const index = this.parentNode?.children.indexOf(this) ?? -1;
            if (index !== -1) {
                this.parentNode.children.splice(index, 1);
            }
            this.parentNode = null;
        },
        addEventListener(type, handler) {
            if (!this.listeners[type]) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(handler);
        },
    };
}

const createElement = jest.fn((tag, classNames = '') => createMockElement(tag, classNames));

jest.unstable_mockModule('./styles.css', () => ({
    default: '',
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement,
    forwardHaptic: jest.fn(),
    navigate: jest.fn(),
    isDocumentRTL: jest.fn(() => false),
}));

jest.unstable_mockModule('../pop-up/helpers.js', () => ({
    addHash: jest.fn(),
    removeHash: jest.fn(),
}));

jest.unstable_mockModule('../../tools/content-inset.js', () => ({
    startContentInsetSync: jest.fn(),
}));

jest.unstable_mockModule('../../tools/ha-boundary.js', () => ({
    isHaCardWrapper: jest.fn(() => false),
}));

jest.unstable_mockModule('../../tools/style.js', () => ({
    isColorCloseToWhite: jest.fn(() => false),
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const { createStructure } = await import('./create.js');
const { changeConfig, placeButtons, sortButtons } = await import('./changes.js');

// Widths the buttons report once they are laid out, in creation order.
const BUTTON_WIDTHS = [100, 80, 60, 40];

function buildContext() {
    return {
        config: {
            rise_animation: false,
            '1_name': 'Kitchen',
            '1_icon': 'mdi:silverware-fork-knife',
            '1_link': '#kitchen',
            '2_name': 'Living room',
            '2_icon': 'mdi:sofa',
            '2_link': '#living-room',
        },
        card: {
            classList: createMockClassList(),
            style: createMockStyle(),
            parentNode: { host: null },
        },
        content: createMockElement('div', 'card-content'),
    };
}

// placeButtons measures the DOM, which the mock elements cannot do on their own.
function measureButtons(context) {
    context.elements.buttons.forEach((button, index) => {
        button.offsetWidth = BUTTON_WIDTHS[index];
    });
    placeButtons(context);
}

function transformsByLink(context) {
    return Object.fromEntries(
        context.elements.buttons.map((button) => [button.link, button.style.transform]),
    );
}

describe('changeConfig adding a button to a live stack', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        const values = new Map();
        global.localStorage = {
            getItem: (key) => (values.has(key) ? values.get(key) : null),
            setItem: (key, value) => { values.set(key, value); },
        };
        global.location = { hash: '', pathname: '/dashboard' };
        global.window = { addEventListener: jest.fn(), location: global.location };
    });

    test('lists the new button once, puts it in the DOM and leaves the others in place', () => {
        const context = buildContext();
        createStructure(context);
        measureButtons(context);
        const positionsBefore = transformsByLink(context);

        context.config['3_name'] = 'Office';
        context.config['3_icon'] = 'mdi:desk';
        context.config['3_link'] = '#office';
        changeConfig(context);

        const newButtons = context.elements.buttons.filter((button) => button.link === '#office');
        expect(newButtons).toHaveLength(1);
        expect(context.elements.buttons).toHaveLength(3);
        // createButton owns the DOM insertion, so the changeConfig path cannot
        // build a button that never reaches the container.
        expect(context.elements.cardContainer.children).toContain(newButtons[0]);

        measureButtons(context);
        const positionsAfter = transformsByLink(context);
        expect(positionsAfter['#kitchen']).toBe(positionsBefore['#kitchen']);
        expect(positionsAfter['#living-room']).toBe(positionsBefore['#living-room']);
        // 100 + 12 + 80 + 12: no gap left by a button counted twice.
        expect(positionsAfter['#office']).toBe('translateX(204px)');
        expect(context.elements.cardContainer.style.width).toBe('276px');
    });

    test('adds each button once when several arrive in the same config change', () => {
        const context = buildContext();
        createStructure(context);

        context.config['3_link'] = '#office';
        context.config['4_link'] = '#garage';
        changeConfig(context);

        expect(context.elements.buttons.map((button) => button.link)).toEqual([
            '#kitchen',
            '#living-room',
            '#office',
            '#garage',
        ]);
        expect(context.elements.buttons.map((button) => button.index)).toEqual([1, 2, 3, 4]);
    });

    test('does not add the button again on the next config change', () => {
        const context = buildContext();
        createStructure(context);

        context.config['3_link'] = '#office';
        changeConfig(context);
        changeConfig(context);

        expect(context.elements.buttons).toHaveLength(3);
        expect(context.elements.cardContainer.children.filter(
            (child) => child.link === '#office',
        )).toHaveLength(1);
    });

    test('creates a button that the removal path took out of the stack', () => {
        const context = buildContext();
        createStructure(context);

        delete context.config['2_link'];
        changeConfig(context);
        expect(context.elements.buttons).toHaveLength(1);

        context.config['2_link'] = '#bedroom';
        changeConfig(context);

        expect(context.elements.buttons.map((button) => button.link)).toEqual([
            '#kitchen',
            '#bedroom',
        ]);
        expect(context.elements.cardContainer.children).toContain(context.elements.buttons[1]);
    });
});

const BUTTON_FIELDS = ['_name', '_icon', '_link', '_entity', '_pir_sensor'];

// Mirrors removeButton in editor.js: deleting a button shifts every following
// button down a slot, so the configured slots stay contiguous.
function removeButtonFromConfig(config, index, lastIndex) {
    for (let i = index; i < lastIndex; i++) {
        BUTTON_FIELDS.forEach((field) => {
            config[i + field] = config[(i + 1) + field];
        });
    }
    BUTTON_FIELDS.forEach((field) => {
        delete config[lastIndex + field];
    });
}

describe('changeConfig removing a button while auto_order sorts the row', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        const values = new Map();
        global.localStorage = {
            getItem: (key) => (values.has(key) ? values.get(key) : null),
            setItem: (key, value) => { values.set(key, value); },
        };
        global.location = { hash: '', pathname: '/dashboard' };
        global.window = { addEventListener: jest.fn(), location: global.location };
    });

    // Three rooms, and PIR activity that puts the row in an order the config
    // does not have: living room, then office, then kitchen.
    function buildSortedContext() {
        const context = {
            config: {
                rise_animation: false,
                auto_order: true,
                '1_name': 'Kitchen',
                '1_icon': 'mdi:silverware-fork-knife',
                '1_link': '#kitchen',
                '1_pir_sensor': 'binary_sensor.kitchen',
                '2_name': 'Living room',
                '2_icon': 'mdi:sofa',
                '2_link': '#living-room',
                '2_pir_sensor': 'binary_sensor.living_room',
                '3_name': 'Office',
                '3_icon': 'mdi:desk',
                '3_link': '#office',
                '3_pir_sensor': 'binary_sensor.office',
            },
            _hass: {
                states: {
                    'binary_sensor.kitchen': { state: 'off', last_updated: '2026-08-07T12:00:01Z' },
                    'binary_sensor.living_room': { state: 'off', last_updated: '2026-08-07T12:00:03Z' },
                    'binary_sensor.office': { state: 'off', last_updated: '2026-08-07T12:00:02Z' },
                },
            },
            card: {
                classList: createMockClassList(),
                style: createMockStyle(),
                parentNode: { host: null },
            },
            content: createMockElement('div', 'card-content'),
        };
        createStructure(context);
        sortButtons(context);
        return context;
    }

    function slot(context, index) {
        return context.elements.buttons.find((button) => button.index === index);
    }

    test('leaves every remaining button on its own config slot', () => {
        const context = buildSortedContext();
        // The list is in PIR order now, so position no longer tells the slot.
        expect(context.elements.buttons.map((button) => button.index)).toEqual([2, 3, 1]);

        // The user deletes the living room button in the editor.
        removeButtonFromConfig(context.config, 2, 3);
        changeConfig(context);

        expect(context.elements.buttons).toHaveLength(2);
        expect(slot(context, 1).link).toBe('#kitchen');
        expect(slot(context, 1).name.innerText).toBe('Kitchen');
        expect(slot(context, 2).link).toBe('#office');
        expect(slot(context, 2).name.innerText).toBe('Office');
    });

    test('never gives two buttons the same config slot', () => {
        const context = buildSortedContext();

        removeButtonFromConfig(context.config, 2, 3);
        changeConfig(context);

        // Numbering by list position used to hand the kitchen button the slot
        // the office button already had, so the row showed the office twice.
        const links = context.elements.buttons.map((button) => button.link);
        expect(new Set(links).size).toBe(links.length);
        expect(links).toContain('#kitchen');
        expect(links).toContain('#office');
    });

    test('keeps the order auto_order settled on', () => {
        const context = buildSortedContext();

        removeButtonFromConfig(context.config, 2, 3);
        changeConfig(context);

        // Renumbering must not reshuffle the row back into config order.
        expect(context.elements.buttons.map((button) => button.link)).toEqual([
            '#office',
            '#kitchen',
        ]);
    });

    test('still renumbers so the next added button gets a free slot', () => {
        const context = buildSortedContext();
        removeButtonFromConfig(context.config, 2, 3);
        changeConfig(context);

        context.config['3_name'] = 'Garage';
        context.config['3_icon'] = 'mdi:garage';
        context.config['3_link'] = '#garage';
        changeConfig(context);

        expect(context.elements.buttons).toHaveLength(3);
        expect(slot(context, 3).link).toBe('#garage');
        expect(slot(context, 1).link).toBe('#kitchen');
        expect(slot(context, 2).link).toBe('#office');
    });
});

// A stable merge sort, which is not the algorithm V8 runs. A comparator that
// holds up gives the same row through either one.
function mergeSort(items, comparator) {
    if (items.length < 2) return items;

    const middle = Math.floor(items.length / 2);
    const left = mergeSort(items.slice(0, middle), comparator);
    const right = mergeSort(items.slice(middle), comparator);
    const merged = [];

    while (left.length > 0 && right.length > 0) {
        merged.push(comparator(left[0], right[0]) <= 0 ? left.shift() : right.shift());
    }

    return [...merged, ...left, ...right];
}

describe('sortButtons ordering the row by PIR activity', () => {
    // The row from #1431: six buttons watching a room, seven without a sensor.
    const WATCHED = ['bedroom', 'bathroom', 'kitchen', 'living_room', 'porch', 'servers'];
    const PLAIN = ['vehicles', 'vacuum', 'music', 'vector', 'camera', 'plants', 'automation'];

    function buildRow(entries, states) {
        return {
            config: { auto_order: true },
            _hass: { states },
            elements: {
                buttons: entries.map(([link, pirSensor]) => ({ link, pirSensor })),
            },
        };
    }

    function buildReportedRow() {
        const states = {};
        WATCHED.forEach((room, i) => {
            states[`binary_sensor.${room}`] = {
                state: 'off',
                last_updated: `2026-08-07T12:00:${String(10 + i).padStart(2, '0')}Z`,
            };
        });
        const entries = [
            ...WATCHED.map((room) => [room, `binary_sensor.${room}`]),
            ...PLAIN.map((name) => [name, undefined]),
        ];
        return buildRow(entries, states);
    }

    // sortButtons sorts the list in place, so shadowing sort on it hands us the
    // comparator. The resulting order alone hides the defect, because V8 does
    // not run the algorithm Firefox runs.
    function captureComparator(context) {
        let comparator = null;
        const buttons = context.elements.buttons;
        buttons.sort = function (fn) {
            comparator = fn;
            return Array.prototype.sort.call(this, fn);
        };
        sortButtons(context);
        delete buttons.sort;
        return comparator;
    }

    const links = (context) => context.elements.buttons.map((button) => button.link);

    test('never claims that each of two buttons comes after the other', () => {
        const context = buildReportedRow();
        const comparator = captureComparator(context);
        const buttons = context.elements.buttons;

        // Answering 1 to both a,b and b,a is what left the order up to the
        // engine. Every pair has to agree with itself, reversed.
        for (const a of buttons) {
            for (const b of buttons) {
                const forward = Math.sign(comparator(a, b));
                const backward = Math.sign(comparator(b, a));
                expect(forward + backward).toBe(0);
            }
        }
    });

    test('settles on the same row whatever algorithm the browser sorts with', () => {
        const context = buildReportedRow();
        const comparator = captureComparator(context);

        const otherEngine = mergeSort(buildReportedRow().elements.buttons, comparator)
            .map((button) => button.link);

        expect(otherEngine).toEqual(links(context));
    });

    test('leaves the buttons without a sensor in their configured order', () => {
        const context = buildReportedRow();

        sortButtons(context);

        expect(links(context).slice(-PLAIN.length)).toEqual(PLAIN);
    });

    test('does not reshuffle the row on the next state update', () => {
        const context = buildReportedRow();
        sortButtons(context);
        const settled = links(context);

        sortButtons(context);
        sortButtons(context);

        expect(links(context)).toEqual(settled);
    });

    test('puts an active sensor first, then the most recently updated', () => {
        const context = buildRow(
            [
                ['plain', undefined],
                ['kitchen', 'binary_sensor.kitchen'],
                ['porch', 'binary_sensor.porch'],
                ['hall', 'binary_sensor.hall'],
            ],
            {
                'binary_sensor.kitchen': { state: 'off', last_updated: '2026-08-07T12:00:30Z' },
                'binary_sensor.porch': { state: 'on', last_updated: '2026-08-07T12:00:10Z' },
                'binary_sensor.hall': { state: 'off', last_updated: '2026-08-07T12:00:20Z' },
            },
        );

        sortButtons(context);

        expect(links(context)).toEqual(['porch', 'kitchen', 'hall', 'plain']);
    });

    test('leaves the row alone when auto_order is off', () => {
        const context = buildReportedRow();
        context.config.auto_order = false;

        sortButtons(context);

        expect(links(context)).toEqual([...WATCHED, ...PLAIN]);
    });
});
