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

function findByClassName(node, className) {
    if (node.classList?.contains(className)) {
        return node;
    }

    for (const child of node.children) {
        const found = findByClassName(child, className);
        if (found) {
            return found;
        }
    }

    return null;
}

function createMockElement(tag = 'div', classNames = '') {
    return {
        tagName: tag.toUpperCase(),
        children: [],
        parentNode: null,
        attributes: {},
        listeners: {},
        style: {
            setProperty: jest.fn(),
        },
        classList: createMockClassList(classNames ? classNames.split(' ') : []),
        appendChild(child) {
            if (child.parentNode) {
                child.parentNode.children = child.parentNode.children.filter((entry) => entry !== child);
            }
            child.parentNode = this;
            this.children.push(child);
            return child;
        },
        querySelector(selector) {
            if (!selector.startsWith('.')) {
                return null;
            }
            return findByClassName(this, selector.slice(1));
        },
        addEventListener(type, handler) {
            if (!this.listeners[type]) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(handler);
        },
        setAttribute(name, value) {
            this.attributes[name] = value;
        },
    };
}

function triggerEvent(element, type) {
    const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
    };

    for (const listener of element.listeners[type] || []) {
        listener(event);
    }

    return event;
}

const createElement = jest.fn((tag, classNames = '') => createMockElement(tag, classNames));
const forwardHaptic = jest.fn();
const navigateToPreviousPopup = jest.fn();
const removeHash = jest.fn(() => true);

jest.unstable_mockModule('./styles.css', () => ({
    default: '',
}));

jest.unstable_mockModule('../../tools/style.js', () => ({
    convertToRGBA: jest.fn(),
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement,
    forwardHaptic,
}));

jest.unstable_mockModule('../../cards/button/index.js', () => ({
    handleButton: jest.fn(),
}));

jest.unstable_mockModule('../../components/sub-button/utils.js', () => ({
    ensureNewSubButtonsSchemaObject: jest.fn((config) => config.sub_button ?? { main: [], bottom: [] }),
}));

jest.unstable_mockModule('./backdrop.js', () => ({
    getBackdrop: jest.fn(),
    getThemeBackgroundColor: jest.fn(),
}));

jest.unstable_mockModule('./helpers.js', () => ({
    navigateToPreviousPopup,
    openPopup: jest.fn(),
    registerPopupContext: jest.fn(),
    removeHash,
}));

jest.unstable_mockModule('./legacy.js', () => ({
    hideLegacyPopupContent: jest.fn(),
}));

const { createHeader } = await import('./create.js');

describe('createHeader', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('creates previous and close header buttons and wires their actions', () => {
        const context = {
            popUp: createMockElement('div'),
            config: {},
            elements: {},
        };

        createHeader(context);

        expect(context.elements.headerActions.children[0]).toBe(context.elements.previousButton);
        expect(context.elements.headerActions.children[1]).toBe(context.elements.closeButton);

        const previousClickEvent = triggerEvent(context.elements.previousButton, 'click');

        expect(navigateToPreviousPopup).toHaveBeenCalledWith(context);
        expect(previousClickEvent.preventDefault).toHaveBeenCalledTimes(1);
        expect(previousClickEvent.stopPropagation).toHaveBeenCalledTimes(1);

        const closeClickEvent = triggerEvent(context.elements.closeButton, 'click');

        expect(removeHash).toHaveBeenCalledTimes(1);
        expect(closeClickEvent.preventDefault).toHaveBeenCalledTimes(1);
        expect(closeClickEvent.stopPropagation).toHaveBeenCalledTimes(1);
        expect(forwardHaptic).toHaveBeenCalledTimes(2);
    });

    test('reuses an existing header without duplicating button handlers', () => {
        const context = {
            popUp: createMockElement('div'),
            config: {},
            elements: {},
        };

        createHeader(context);
        context.popUp.appendChild(context.elements.headerContainer);

        const previousButton = context.elements.previousButton;
        const closeButton = context.elements.closeButton;

        createHeader(context);

        triggerEvent(previousButton, 'click');
        triggerEvent(closeButton, 'click');

        expect(navigateToPreviousPopup).toHaveBeenCalledTimes(1);
        expect(removeHash).toHaveBeenCalledTimes(1);
    });
});