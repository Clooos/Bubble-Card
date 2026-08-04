import { describe, expect, jest, test } from '@jest/globals';

// Minimal DOM: only what the group containers need to be moved around
// (appendChild / insertBefore / remove / classList / dataset / querySelectorAll).
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
    get value() { return [...this._set].join(' '); }
}

class StubElement {
    constructor(tag) {
        this.tagName = String(tag).toUpperCase();
        this.children = [];
        this.parentElement = null;
        this.classList = new StubClassList();
        this.dataset = {};
        this.attributes = {};
        this.textContent = '';
        this.style = {
            _props: {},
            setProperty(name, value) { this._props[name] = value; },
            getPropertyValue(name) { return this._props[name] ?? ''; },
            removeProperty(name) { delete this._props[name]; },
        };
    }

    get className() { return this.classList.value; }
    get childElementCount() { return this.children.length; }
    get firstChild() { return this.children[0] ?? null; }

    get isConnected() {
        let node = this;
        while (node.parentElement) node = node.parentElement;
        return node._isRoot === true;
    }

    setAttribute(name, value) { this.attributes[name] = value; }
    getAttribute(name) { return this.attributes[name] ?? null; }
    removeAttribute(name) { delete this.attributes[name]; }

    appendChild(child) {
        if (child.parentElement) child.parentElement.removeChild(child);
        this.children.push(child);
        child.parentElement = this;
        return child;
    }

    insertBefore(child, reference) {
        if (reference == null) return this.appendChild(child);
        if (child.parentElement) child.parentElement.removeChild(child);
        const index = this.children.indexOf(reference);
        if (index === -1) this.children.push(child);
        else this.children.splice(index, 0, child);
        child.parentElement = this;
        return child;
    }

    prepend(child) { return this.insertBefore(child, this.children[0] ?? null); }

    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) this.children.splice(index, 1);
        child.parentElement = null;
        return child;
    }

    remove() { this.parentElement?.removeChild(this); }

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

globalThis.document = { createElement: (tag) => new StubElement(tag) };

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: (tag, classNames = '') => {
        const element = new StubElement(tag);
        if (classNames) classNames.split(' ').filter(Boolean).forEach(name => element.classList.add(name));
        return element;
    },
}));

jest.unstable_mockModule('../dropdown/index.js', () => ({
    createDropdownStructure: jest.fn(),
    createDropdownActions: jest.fn(),
}));

jest.unstable_mockModule('../base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));

jest.unstable_mockModule('./utils.js', () => ({
    ensureNewSubButtonsSchemaObject: (config) => ({
        main: Array.isArray(config?.sub_button?.main) ? [...config.sub_button.main] : [],
        bottom: Array.isArray(config?.sub_button?.bottom) ? [...config.sub_button.bottom] : [],
    }),
    applyFillWidthClass: jest.fn(),
    applyWidthStyles: jest.fn(),
    applyHeightStyles: jest.fn(),
}));

jest.unstable_mockModule('./styles.css', () => ({ default: '' }));

const { createSubButtonStructure, syncLaneFillStateForGroup } = await import('./create.js');

function buildContext(config) {
    const root = new StubElement('div');
    root._isRoot = true;
    const cardWrapper = new StubElement('div');
    cardWrapper.classList.add('bubble-wrapper');
    root.appendChild(cardWrapper);
    return { config, content: root, elements: { cardWrapper } };
}

function build(context) {
    createSubButtonStructure(context, {
        container: context.content,
        appendTo: context.elements.cardWrapper,
        before: false,
    });
}

// Flattens a parent to the list of group ids it renders, in DOM order,
// descending into the bottom alignment lanes.
function groupOrder(parent) {
    const order = [];
    const walk = (node) => {
        node?.children.forEach(child => {
            const id = child.getAttribute?.('data-group-id');
            if (id) order.push(id);
            else walk(child);
        });
    };
    walk(parent);
    return order;
}

function group(name, buttons, extra = {}) {
    return { name, buttons_layout: 'inline', group: buttons, ...extra };
}

describe('createSubButtonStructure group placement', () => {
    test('bottom groups in rows layout follow the configured order', () => {
        const context = buildContext({
            sub_button: {
                bottom_layout: 'rows',
                main: [{ entity: 'sensor.temperature' }],
                bottom: [
                    group('Utilities', [{ entity: 'switch.lamp' }]),
                    group('Lights', [{ entity: 'switch.spot' }]),
                    group('AC', [{ entity: 'climate.ac' }]),
                ],
            },
        });

        build(context);

        expect(groupOrder(context.elements.bottomSubButtonContainer))
            .toEqual(['g_bottom_0', 'g_bottom_1', 'g_bottom_2']);
        expect(groupOrder(context.elements.subButtonContainer)).toEqual(['g_main_auto']);
    });

    // A group whose container disappears (its buttons are gone from the config)
    // and comes back used to be appended at the end of its parent, so it moved
    // to the last row and pushed every following row up (#2517).
    test('a re-created container returns to its configured row', () => {
        const withLights = {
            sub_button: {
                bottom_layout: 'rows',
                main: [],
                bottom: [
                    group('Utilities', [{ entity: 'switch.lamp' }]),
                    group('Lights', [{ entity: 'switch.spot' }]),
                    group('AC', [{ entity: 'climate.ac' }]),
                ],
            },
        };
        const withoutLights = {
            sub_button: {
                bottom_layout: 'rows',
                main: [],
                bottom: [
                    group('Utilities', [{ entity: 'switch.lamp' }]),
                    group('Lights', []),
                    group('AC', [{ entity: 'climate.ac' }]),
                ],
            },
        };

        const context = buildContext(withLights);
        build(context);

        context.config = withoutLights;
        build(context);
        expect(groupOrder(context.elements.bottomSubButtonContainer))
            .toEqual(['g_bottom_0', 'g_bottom_2']);

        context.config = withLights;
        build(context);
        expect(groupOrder(context.elements.bottomSubButtonContainer))
            .toEqual(['g_bottom_0', 'g_bottom_1', 'g_bottom_2']);
    });

    test('a bottom button declared before a group is rendered before it', () => {
        const context = buildContext({
            sub_button: {
                bottom_layout: 'rows',
                main: [],
                bottom: [
                    { entity: 'light.hall' },
                    group('Utilities', [{ entity: 'switch.lamp' }]),
                    { entity: 'light.porch' },
                ],
            },
        });

        build(context);

        expect(groupOrder(context.elements.bottomSubButtonContainer))
            .toEqual(['g_bottom_individual_0', 'g_bottom_1', 'g_bottom_individual_1']);
    });

    test('the main auto group takes the place of the first individual button', () => {
        const context = buildContext({
            sub_button: {
                main_layout: 'rows',
                main: [
                    { entity: 'sensor.temperature' },
                    group('Row', [{ entity: 'switch.lamp' }]),
                ],
                bottom: [],
            },
        });

        build(context);

        expect(groupOrder(context.elements.subButtonContainer))
            .toEqual(['g_main_auto', 'g_main_1']);
    });

    test('a group declared before the individual buttons keeps its place', () => {
        const context = buildContext({
            sub_button: {
                main_layout: 'rows',
                main: [
                    group('Row', [{ entity: 'switch.lamp' }]),
                    { entity: 'sensor.temperature' },
                ],
                bottom: [],
            },
        });

        build(context);

        expect(groupOrder(context.elements.subButtonContainer))
            .toEqual(['g_main_0', 'g_main_auto']);
    });

    test('groups sharing an alignment lane keep the configured order', () => {
        const context = buildContext({
            sub_button: {
                main: [],
                bottom: [
                    group('Left', [{ entity: 'switch.a' }], { justify_content: 'start' }),
                    group('Right', [{ entity: 'switch.b' }], { justify_content: 'end' }),
                    group('Left again', [{ entity: 'switch.c' }], { justify_content: 'start' }),
                ],
            },
        });

        build(context);

        const lanes = context.elements.bottomAlignmentLanes;
        expect(groupOrder(lanes.start)).toEqual(['g_bottom_0', 'g_bottom_2']);
        expect(groupOrder(lanes.end)).toEqual(['g_bottom_1']);
    });

    test('re-running the build does not move containers around', () => {
        const context = buildContext({
            sub_button: {
                bottom_layout: 'rows',
                main: [{ entity: 'sensor.temperature' }],
                bottom: [
                    group('Utilities', [{ entity: 'switch.lamp' }]),
                    group('Lights', [{ entity: 'switch.spot' }]),
                ],
            },
        });

        build(context);
        const containers = ['g_bottom_0', 'g_bottom_1'].map(key => context.elements.groups[key].container);

        build(context);

        expect(groupOrder(context.elements.bottomSubButtonContainer)).toEqual(['g_bottom_0', 'g_bottom_1']);
        expect(['g_bottom_0', 'g_bottom_1'].map(key => context.elements.groups[key].container))
            .toEqual(containers);
    });
});

describe('bottom alignment lanes', () => {
    function laneContext() {
        const context = buildContext({
            sub_button: {
                main: [],
                bottom: [
                    group('Left', [{ entity: 'switch.a' }], { justify_content: 'start' }),
                    group('Left again', [{ entity: 'switch.b' }], { justify_content: 'start' }),
                ],
            },
        });
        build(context);
        return context;
    }

    // The lane kept the gap of a row that has nothing left to show (#2241)
    test('a lane whose groups are all hidden is collapsed', () => {
        const context = laneContext();
        const lane = context.elements.bottomAlignmentLanes.start;
        const containers = ['g_bottom_0', 'g_bottom_1'].map(key => context.elements.groups[key].container);

        containers.forEach(container => {
            container.classList.add('hidden');
            syncLaneFillStateForGroup(container);
        });

        expect(lane.classList.contains('hidden')).toBe(true);
    });

    test('the lane comes back as soon as one group is visible again', () => {
        const context = laneContext();
        const lane = context.elements.bottomAlignmentLanes.start;
        const containers = ['g_bottom_0', 'g_bottom_1'].map(key => context.elements.groups[key].container);

        containers.forEach(container => {
            container.classList.add('hidden');
            syncLaneFillStateForGroup(container);
        });

        containers[1].classList.remove('hidden');
        containers.forEach(container => syncLaneFillStateForGroup(container));

        expect(lane.classList.contains('hidden')).toBe(false);
    });
});
