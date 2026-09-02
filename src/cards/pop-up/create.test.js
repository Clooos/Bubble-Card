import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

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
        parentElement: null,
        attributes: {},
        hidden: false,
        listeners: {},
        style: {
            display: '',
            position: '',
            setProperty: jest.fn(),
        },
        classList: createMockClassList(classNames ? classNames.split(' ') : []),
        appendChild(child) {
            if (child.parentNode) {
                child.parentNode.children = child.parentNode.children.filter((entry) => entry !== child);
            }
            child.parentNode = this;
            child.parentElement = this;
            this.children.push(child);
            return child;
        },
        removeChild(child) {
            this.children = this.children.filter((entry) => entry !== child);
            if (child.parentNode === this) {
                child.parentNode = null;
                child.parentElement = null;
            }
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
const render = jest.fn();

jest.unstable_mockModule('lit', () => ({
    html: jest.fn((strings, ...values) => ({ strings, values })),
    render,
}));

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
    hasClassicHeader: (config) => config?.popup_style === 'classic' || config?.popup_style === 'home-assistant',
    isHomeAssistantStyle: (config) => config?.popup_style === 'home-assistant',
    keepPopupHostMounted: jest.fn((context) => {
        if (context.sectionRow?.tagName?.toLowerCase() === 'hui-card') {
            context.sectionRow.hidden = false;
            context.sectionRow.style.display = '';
        }
        if (context.sectionRowContainer?.classList?.contains?.('card')) {
            context.sectionRowContainer.style.display = '';
            context.sectionRowContainer.style.position = 'absolute';
        }
    }),
    navigateToPreviousPopup,
    openPopup: jest.fn(),
    registerPopupContext: jest.fn(),
    removeHash,
    resolvePopupHostElements: jest.fn((context) => {
        if (!context.sectionRow && typeof context.closest === 'function') {
            context.sectionRow = context.closest('hui-card');
        }
        if (!context.sectionRowContainer) {
            const hostContainer = context.sectionRow?.closest?.('.card') || context.sectionRow?.parentElement || null;
            context.sectionRowContainer = hostContainer?.classList?.contains?.('card') ? hostContainer : null;
        }
    }),
    restorePopupHostLayout: jest.fn((context) => {
        if (context.sectionRow?.tagName?.toLowerCase() === 'hui-card') {
            context.sectionRow.hidden = false;
            context.sectionRow.style.display = '';
        }
        if (context.sectionRowContainer?.classList?.contains?.('card')) {
            context.sectionRowContainer.style.display = '';
            context.sectionRowContainer.style.position = '';
        }
    }),
    suspendPopupHostLayout: jest.fn((context) => {
        if (context.sectionRow?.tagName?.toLowerCase() === 'hui-card') {
            context.sectionRow.hidden = true;
            context.sectionRow.style.display = 'none';
        }
        if (context.sectionRowContainer?.classList?.contains?.('card')) {
            context.sectionRowContainer.style.display = 'none';
            context.sectionRowContainer.style.position = '';
        }
    }),
    syncPopupModeClasses: jest.fn(),
    syncPopupPerformanceModeClasses: jest.fn(),
}));

jest.unstable_mockModule('./legacy.js', () => ({
    hideLegacyPopupContent: jest.fn(),
}));

jest.unstable_mockModule('./editor.js', () => ({
    renderPopupOnboarding: jest.fn((context) => ({
        values: [context?.config?.popup_mode ?? 'default'],
    })),
}));

const { createHeader, createStructure, prepareStandaloneStructure, prepareStructure } = await import('./create.js');

// `location` is a read-only global under Node, so it is replaced rather than
// assigned to.
function setLocationHash(hash) {
    Object.defineProperty(globalThis, 'location', {
        value: { hash },
        configurable: true,
        writable: true,
    });
}

function buildStandalonePopupContext() {
    const shadowRoot = createMockElement('div');
    const context = {
        config: {},
        content: createMockElement('div'),
        shadowRoot,
        popUp: createMockElement('div'),
        editor: false,
        detectedEditor: false,
        closest: jest.fn(() => null),
        elements: {},
    };

    prepareStandaloneStructure(context);
    createHeader(context);
    createStructure(context);

    return context;
}

describe('createHeader', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.window = global.window || {};
        delete global.window.popUpError;
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

        expect(removeHash).toHaveBeenCalledWith(true);
        expect(removeHash).toHaveBeenCalledTimes(1);
        expect(closeClickEvent.preventDefault).toHaveBeenCalledTimes(1);
        expect(closeClickEvent.stopPropagation).toHaveBeenCalledTimes(1);
        expect(forwardHaptic).toHaveBeenCalledTimes(2);
    });

    test('leaves the press feedback to the ripple instead of an empty box', () => {
        const context = {
            popUp: createMockElement('div'),
            config: {},
            elements: {},
        };

        createHeader(context);

        // The feedback boxes these buttons used to carry had no styling and
        // nobody read them: the visible press feedback is the ha-ripple, and
        // the haptic tick comes from the pointerup listener.
        for (const button of [context.elements.previousButton, context.elements.closeButton]) {
            expect(button.haRipple).toBeTruthy();
            expect(button.feedback).toBeUndefined();
            const classes = button.children.map((child) => child.className || '').join(' ');
            expect(classes).not.toContain('feedback');
        }
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
        expect(removeHash).toHaveBeenCalledWith(true);
        expect(removeHash).toHaveBeenCalledTimes(1);
    });

    test('re-adds the missing hash warning after a rerender even if the global flag is already set', () => {
        const firstContent = createMockElement('div');

        prepareStructure({
            config: {},
            content: firstContent,
            getRootNode: () => null,
        });

        expect(global.window.popUpError).toBe(true);
        expect(firstContent.querySelector('.bubble-error-text')).not.toBeNull();
        expect(render).toHaveBeenCalledTimes(1);

        const secondContent = createMockElement('div');

        prepareStructure({
            config: {},
            content: secondContent,
            getRootNode: () => null,
        });

        expect(secondContent.querySelector('.bubble-error-text')).not.toBeNull();
        expect(render).toHaveBeenCalledTimes(2);
    });

    test('missing hash fallback reflects the configured popup_mode', () => {
        const content = createMockElement('div');

        prepareStructure({
            config: { popup_mode: 'centered' },
            content,
            getRootNode: () => null,
        });

        expect(render).toHaveBeenCalledTimes(1);
        const templateArg = render.mock.calls[0][0];
        expect(templateArg.values).toContain('centered');
    });

    test('missing hash fallback defaults to "default" mode when popup_mode is not set', () => {
        const content = createMockElement('div');

        prepareStructure({
            config: {},
            content,
            getRootNode: () => null,
        });

        expect(render).toHaveBeenCalledTimes(1);
        const templateArg = render.mock.calls[0][0];
        expect(templateArg.values).toContain('default');
    });
});

describe('prepareStructure', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        global.window = global.window || {};
        delete global.window.popUpError;
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('detaches a closed legacy popup after the initial visibility guard window', () => {
        const popUp = createMockElement('div');
        const cardTitle = createMockElement('div', 'card-header');
        const sectionRowContainer = createMockElement('div', 'card');
        const sectionRow = createMockElement('hui-card');
        sectionRowContainer.appendChild(sectionRow);

        const verticalStack = {
            host: { parentElement: sectionRow },
            contains: jest.fn((child) => child === popUp),
            removeChild: jest.fn(),
            querySelector: jest.fn((selector) => {
                if (selector === '#root') {
                    return popUp;
                }
                if (selector === '.card-header') {
                    return cardTitle;
                }
                return null;
            }),
        };

        const context = {
            config: {},
            content: createMockElement('div'),
            getRootNode: () => verticalStack,
            editor: false,
        };

        prepareStructure(context);

        expect(popUp.style.visibility).toBe('hidden');

        jest.advanceTimersByTime(100);

        expect(verticalStack.removeChild).toHaveBeenCalledWith(popUp);
        expect(popUp.style.visibility).toBe('');
    });
});

describe('prepareStandaloneStructure', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Object.defineProperty(global, 'location', {
            value: { hash: '' },
            configurable: true,
        });
    });

    test('suspends the standalone host wrapper in live mode until the popup opens', () => {
        const sectionRowContainer = createMockElement('div', 'card');
        const sectionRow = createMockElement('hui-card');
        sectionRowContainer.appendChild(sectionRow);

        const context = {
            config: {},
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn((selector) => selector === 'hui-card' ? sectionRow : null),
        };

        prepareStandaloneStructure(context);

        expect(context.sectionRow).toBe(sectionRow);
        expect(context.sectionRowContainer).toBe(sectionRowContainer);
        expect(sectionRow.hidden).toBe(true);
        expect(sectionRow.style.display).toBe('none');
        expect(sectionRowContainer.style.display).toBe('none');
        expect(sectionRowContainer.style.position).toBe('');
    });

    test('mounts popUp on shadowRoot (not content/ha-card) so card-mod backdrop-filter cannot trap fixed positioning', () => {
        const shadowRoot = createMockElement('div');
        const content = createMockElement('div');
        const card = createMockElement('ha-card');
        shadowRoot.appendChild(card); // simulate what initializeContent does

        const context = {
            config: { background_update: true },
            content,
            shadowRoot,
            card,
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);

        expect(context.popUp).toBeDefined();
        expect(shadowRoot.children).toContain(context.popUp);
        expect(content.children).not.toContain(context.popUp);
        expect(context.popUp.id).toBe('root');
        // ha-card shell must be detached so card-mod styles on it have zero DOM effect
        expect(card.parentNode).toBeNull();
        expect(shadowRoot.children).not.toContain(card);
    });

    test('keeps the legacy #root selector target on reused standalone popup shells', () => {
        const popUp = createMockElement('div');
        const context = {
            config: {},
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp,
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);

        expect(context.popUp).toBe(popUp);
        expect(context.popUp.id).toBe('root');
    });

    test('marks popups with configured shadow for the opening CSS state', () => {
        const context = {
            config: { shadow_opacity: '100' },
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--custom-shadow-opacity', 1);
        expect(context.popUp.classList.contains('has-popup-shadow')).toBe(true);
    });

    test('the Home Assistant style takes the dialog width of Home Assistant', () => {
        // Written inline, so no stylesheet could carry this: wa-dialog sizes
        // itself from --ha-dialog-width-md, ha-dialog.ts:345.
        const context = {
            config: { popup_style: 'home-assistant' },
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        createStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--desktop-width', 'var(--ha-dialog-width-md, 580px)');
    });

    test('every other style keeps the width it has always had', () => {
        const context = {
            config: {},
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        createStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--desktop-width', '540px');
    });

    test('a width_desktop written by the user still wins', () => {
        const context = {
            config: { popup_style: 'home-assistant', width_desktop: '720px' },
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        createStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--desktop-width', '720px');
    });

    test('the Home Assistant style paints an opaque surface with no blur', () => {
        // ha-bottom-sheet.ts leaves its surface filter at none and paints
        // --ha-dialog-surface-background flat, so the reproduction cannot keep
        // the translucency and the blur of a Bubble pop-up.
        const context = {
            config: { popup_style: 'home-assistant' },
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--custom-popup-filter', 'blur(0px)');
    });

    test('every other style keeps the blur it has always had', () => {
        const context = {
            config: {},
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--custom-popup-filter', 'blur(10px)');
    });

    test('a bg_blur written by the user wins over the style', () => {
        const context = {
            config: { popup_style: 'home-assistant', bg_blur: '16' },
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--custom-popup-filter', 'blur(16px)');
    });

    test('marks the shell as scrolled so the header can shadow its content', () => {
        const popUp = createMockElement('div', 'bubble-pop-up');
        const container = createMockElement('div');
        container.scrollTop = 0;
        container.closest = () => popUp;
        const context = {
            config: {},
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp,
            elements: { popUpContainer: container },
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);
        const scroller = container.listeners && container.listeners.scroll;
        if (!scroller) return; // the listener lives elsewhere in this stub

        container.scrollTop = 120;
        scroller[0]();
        expect(popUp.classList.contains('is-scrolled')).toBe(true);

        container.scrollTop = 0;
        scroller[0]();
        expect(popUp.classList.contains('is-scrolled')).toBe(false);
    });

    test('clears the opening shadow marker when shadow opacity is zero', () => {
        const context = {
            config: { shadow_opacity: '0' },
            content: createMockElement('div'),
            shadowRoot: createMockElement('div'),
            popUp: createMockElement('div', 'has-popup-shadow'),
            editor: false,
            detectedEditor: false,
            closest: jest.fn(() => null),
        };

        prepareStandaloneStructure(context);

        expect(context.popUp.style.setProperty).toHaveBeenCalledWith('--custom-shadow-opacity', 0);
        expect(context.popUp.classList.contains('has-popup-shadow')).toBe(false);
    });

    test('gives the shell one passive touchstart and nothing else to carry', () => {
        const context = buildStandalonePopupContext();

        expect(typeof context.handleTouchStart).toBe('function');
        expect(typeof context.releasePopupSlideToClose).toBe('function');
        // The header no longer owns a gesture of its own: touchstart on the
        // shell covers it, and the drag runs on the document from there.
        expect(context.handleHeaderTouchMove).toBeUndefined();
        expect(context.handleHeaderTouchEnd).toBeUndefined();
        expect(context.handleTouchMove).toBeUndefined();
        expect(context.handleTouchEnd).toBeUndefined();
        expect(context.handleTouchCancel).toBeUndefined();
    });

    test('closes on Escape only while the pop-up owns the hash', () => {
        const context = buildStandalonePopupContext();
        context.config.hash = '#kitchen';
        setLocationHash('#kitchen');

        context.closeOnEscape({ key: 'Escape' });
        expect(removeHash).toHaveBeenCalledWith(true);

        removeHash.mockClear();
        setLocationHash('#garden');
        context.closeOnEscape({ key: 'Escape' });
        expect(removeHash).not.toHaveBeenCalled();
    });

    test('does not install a popup-level wheel blocker', () => {
        const context = buildStandalonePopupContext();

        expect(context.handleWheel).toBeUndefined();
    });
});