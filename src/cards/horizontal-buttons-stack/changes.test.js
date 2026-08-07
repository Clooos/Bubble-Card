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
const { changeConfig, placeButtons } = await import('./changes.js');

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
