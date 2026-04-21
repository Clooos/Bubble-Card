import { beforeEach, describe, expect, jest, test } from '@jest/globals';

function createMockClassList(initialClasses = []) {
    const classes = new Set(initialClasses);

    return {
        add: (...names) => names.forEach((name) => classes.add(name)),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
        contains: (name) => classes.has(name),
        toggle: (name, force) => {
            const shouldAdd = force === undefined ? !classes.has(name) : force;
            if (shouldAdd) {
                classes.add(name);
            } else {
                classes.delete(name);
            }
            return classes.has(name);
        },
    };
}

function createMockElement(tag = 'div', classNames = '') {
    return {
        tagName: tag.toUpperCase(),
        children: [],
        listeners: {},
        style: {},
        classList: createMockClassList(classNames ? classNames.split(' ') : []),
        appendChild(child) {
            this.children.push(child);
            return child;
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
const forwardHaptic = jest.fn();
const navigate = jest.fn();
const addHash = jest.fn();
const removeHash = jest.fn();

jest.unstable_mockModule('./styles.css', () => ({
    default: '',
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement,
    forwardHaptic,
    navigate,
}));

jest.unstable_mockModule('../pop-up/helpers.js', () => ({
    addHash,
    removeHash,
}));

const { createButton } = await import('./create.js');

function buildContext(link) {
    return {
        config: {
            '1_name': 'Kitchen',
            '1_icon': 'mdi:home',
            '1_link': link,
        },
        elements: {
            buttons: [],
        },
    };
}

function clickButton(button) {
    for (const listener of button.listeners.click || []) {
        listener();
    }
}

describe('horizontal buttons stack navigation', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.localStorage = {
            getItem: jest.fn(() => null),
            setItem: jest.fn(),
        };
        global.location = {
            hash: '',
            pathname: '/dashboard',
        };
        global.window = {
            addEventListener: jest.fn(),
            location: global.location,
        };
    });

    test('navigates to a Lovelace path without turning it into a hash', () => {
        const context = buildContext('/lovelace/');
        const button = createButton(context, 1);

        clickButton(button);

        expect(navigate).toHaveBeenCalledWith(button, '/lovelace/');
        expect(addHash).not.toHaveBeenCalled();
        expect(removeHash).not.toHaveBeenCalled();
        expect(forwardHaptic).toHaveBeenCalledWith('light');
    });

    test('keeps popup hash links on the popup hash flow', () => {
        const context = buildContext('#kitchen');
        const button = createButton(context, 1);

        clickButton(button);

        expect(addHash).toHaveBeenCalledWith('#kitchen');
        expect(navigate).not.toHaveBeenCalled();
        expect(forwardHaptic).toHaveBeenCalledWith('light');
    });

    test('uses the current button link after a live config change', () => {
        const context = buildContext('#kitchen');
        const button = createButton(context, 1);
        button.link = '/lovelace/';

        clickButton(button);

        expect(navigate).toHaveBeenCalledWith(button, '/lovelace/');
        expect(addHash).not.toHaveBeenCalled();
    });
});