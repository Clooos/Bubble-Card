import { beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./backdrop.js', () => ({
    getBackdrop: jest.fn(() => ({
        backdropCustomStyle: null,
        hideBackdrop: jest.fn(),
        updateBackdropStyles: jest.fn(),
    })),
}));

jest.unstable_mockModule('./helpers.js', () => ({
    addHash: jest.fn(),
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
    markPopupPendingTriggerOpen: jest.fn(),
    appendPopup: jest.fn(),
    hideContent: jest.fn(),
    onEditorChange: jest.fn(),
    removeHash: jest.fn(),
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
    syncPopupModeClasses: jest.fn((popUp, config) => {
        const isFitContent = config?.popup_mode === 'fit-content';
        popUp?.classList?.toggle('popup-mode-fit-content', isFitContent);
        popUp?.classList?.toggle('popup-mode-with-bottom-offset', isFitContent && Boolean(config?.with_bottom_offset));
        return isFitContent ? 'fit-content' : 'default';
    }),
    syncPopupStyleClasses: jest.fn(),
    wasPopupOpenedByTrigger: jest.fn(),
}));

jest.unstable_mockModule('./legacy.js', () => ({
    appendLegacyPopup: jest.fn(),
    hideLegacyPopupContent: jest.fn(),
}));

jest.unstable_mockModule('./migration.js', () => ({
    isLegacyPopUpConfig: jest.fn(() => false),
}));

jest.unstable_mockModule('../../tools/validate-condition.js', () => ({
    checkConditionsMet: jest.fn(),
    ensureArray: jest.fn((value) => Array.isArray(value) ? value : [value]),
    validateConditionalConfig: jest.fn(() => false),
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: jest.fn(() => ({
        appendChild: jest.fn(),
        classList: {
            add: jest.fn(),
            remove: jest.fn(),
        },
        querySelector: jest.fn(() => null),
    })),
    setLayout: jest.fn(),
    toggleBodyScroll: jest.fn(),
}));

jest.unstable_mockModule('./cards/index.js', () => ({
    handlePopUpCards: jest.fn(),
    setStandalonePopUpCardsActive: jest.fn(),
}));

const { changeEditor, changeStyle, changeTriggered, syncHeaderVisibilityClasses } = await import('./changes.js');
const { handlePopUpCards } = await import('./cards/index.js');
const { addHash, markPopupPendingTriggerOpen, removeHash, wasPopupOpenedByTrigger } = await import('./helpers.js');
const { appendLegacyPopup, hideLegacyPopupContent } = await import('./legacy.js');
const { toggleBodyScroll } = await import('../../tools/utils.js');
const { checkConditionsMet, ensureArray, validateConditionalConfig } = await import('../../tools/validate-condition.js');

function createMockClassList(initialClasses = []) {
    const classes = new Set(initialClasses);

    return {
        add: (...names) => names.forEach((name) => classes.add(name)),
        remove: (...names) => names.forEach((name) => classes.delete(name)),
        toggle: (name, force) => {
            const shouldAdd = force === undefined ? !classes.has(name) : force;
            if (shouldAdd) {
                classes.add(name);
            } else {
                classes.delete(name);
            }
            return classes.has(name);
        },
        contains: (name) => classes.has(name),
    };
}

describe('changeEditor', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.window = {
            addEventListener: jest.fn(),
        };
        global.IntersectionObserver = jest.fn(() => ({
            observe: jest.fn(),
            disconnect: jest.fn(),
        }));
        global.location = {
            hash: '',
            pathname: '/lovelace/test',
        };
    });

    test('returns immediately outside editor when there is no editor state to tear down', () => {
        const context = {
            isStandalonePopUp: true,
            popUp: {},
            editor: false,
            detectedEditor: false,
            editorAccess: false,
        };

        changeEditor(context);

        expect(context.bubbleInstanceId).toBeUndefined();
        expect(handlePopUpCards).not.toHaveBeenCalled();
        expect(toggleBodyScroll).not.toHaveBeenCalled();
    });

    test('shows a closed standalone popup shell in editor mode even if it was hidden before', () => {
        let placeholder = null;
        const containerClassList = createMockClassList();
        const contentClassList = createMockClassList();
        const popUpClassList = createMockClassList(['is-popup-closed']);
        const sectionRowContainer = {
            style: {
                display: '',
                position: 'absolute',
            },
            classList: {
                contains: jest.fn((name) => name === 'card'),
            },
        };
        const popUpContainer = {
            appendChild: jest.fn((child) => {
                placeholder = child;
            }),
            querySelector: jest.fn((selector) => selector === '.bubble-editor-placeholder' ? placeholder : null),
            classList: containerClassList,
        };
        const context = {
            isStandalonePopUp: true,
            editor: true,
            detectedEditor: false,
            editorAccess: false,
            hideContentTimeout: 12,
            popUp: {
                classList: popUpClassList,
                style: {
                    display: 'none',
                    visibility: 'hidden',
                },
            },
            elements: {
                content: { classList: contentClassList },
                popUpContainer,
            },
            sectionRow: {
                tagName: 'HUI-CARD',
                style: {
                    display: '',
                },
                hidden: false,
            },
            sectionRowContainer,
            config: {
                hash: '#kitchen-popup',
                cards: [{ type: 'entities' }],
            },
        };

        changeEditor(context);

        expect(context.popUp.style.display).toBe('');
        expect(context.popUp.style.visibility).toBe('');
        expect(context.popUp.classList.contains('editor')).toBe(true);
        expect(popUpContainer.classList.contains('has-placeholder')).toBe(true);
        expect(sectionRowContainer.style.position).toBe('');
        expect(handlePopUpCards).toHaveBeenCalledWith(context);
        expect(appendLegacyPopup).toHaveBeenCalledWith(context, true);
    });

    test('does not route standalone editor teardown through the legacy hide helper', () => {
        const popUpClassList = createMockClassList(['is-popup-closed', 'editor']);
        const contentClassList = createMockClassList(['popup-content-in-editor-mode']);
        const sectionRowContainer = {
            style: {
                display: '',
                position: '',
            },
            classList: {
                contains: jest.fn((name) => name === 'card'),
            },
        };
        const context = {
            isStandalonePopUp: true,
            editor: false,
            detectedEditor: false,
            editorAccess: true,
            popUp: {
                classList: popUpClassList,
                style: {
                    display: 'none',
                    visibility: 'hidden',
                },
            },
            elements: {
                content: { classList: contentClassList },
                popUpContainer: {
                    querySelector: jest.fn(() => null),
                    classList: createMockClassList(),
                },
            },
            sectionRow: {
                tagName: 'HUI-CARD',
                style: {
                    display: '',
                },
                hidden: false,
            },
            sectionRowContainer,
            config: {
                hash: '#kitchen-popup',
                cards: [{ type: 'entities' }],
            },
        };

        changeEditor(context);

        expect(hideLegacyPopupContent).not.toHaveBeenCalled();
        expect(context.popUp.style.display).toBe('');
        expect(context.popUp.style.visibility).toBe('');
        expect(context.popUp.classList.contains('editor')).toBe(false);
        expect(context.sectionRow.hidden).toBe(true);
        expect(context.sectionRow.style.display).toBe('none');
        expect(sectionRowContainer.style.display).toBe('none');
        expect(sectionRowContainer.style.position).toBe('');
        expect(context.editorAccess).toBe(false);
    });

    test('syncs popup header action classes from config', () => {
        const context = {
            config: {
                show_header: true,
                show_previous_button: true,
                show_close_button: false,
            },
            popUp: {
                classList: createMockClassList(),
            },
        };

        syncHeaderVisibilityClasses(context);

        expect(context.popUp.classList.contains('no-header')).toBe(false);
        expect(context.popUp.classList.contains('show-previous-button')).toBe(true);
        expect(context.popUp.classList.contains('hide-close-button')).toBe(true);
        expect(context.popUp.classList.contains('no-header-actions')).toBe(false);

        context.config = {
            show_header: false,
            show_previous_button: false,
            show_close_button: false,
        };

        changeStyle(context);

        expect(context.popUp.classList.contains('no-header')).toBe(true);
        expect(context.popUp.classList.contains('show-previous-button')).toBe(false);
        expect(context.popUp.classList.contains('hide-close-button')).toBe(true);
        expect(context.popUp.classList.contains('no-header-actions')).toBe(true);
    });

    test('syncs fit-content popup mode class from config', () => {
        const context = {
            config: {
                popup_mode: 'fit-content',
                with_bottom_offset: true,
            },
            popUp: {
                classList: createMockClassList(),
            },
        };

        changeStyle(context);

        expect(context.popUp.classList.contains('popup-mode-fit-content')).toBe(true);
        expect(context.popUp.classList.contains('popup-mode-with-bottom-offset')).toBe(true);

        context.config = {
            popup_mode: 'default',
            with_bottom_offset: true,
        };

        changeStyle(context);

        expect(context.popUp.classList.contains('popup-mode-fit-content')).toBe(false);
        expect(context.popUp.classList.contains('popup-mode-with-bottom-offset')).toBe(false);
    });

    test('caches trigger preparation while the trigger config reference stays unchanged', () => {
        checkConditionsMet.mockReturnValue(false);
        validateConditionalConfig.mockReturnValue(true);

        const trigger = { entity: 'light.kitchen', state: 'on' };
        const context = {
            config: {
                hash: '#kitchen-popup',
                trigger,
                trigger_close: true,
            },
            _hass: {
                states: {
                    'light.kitchen': { state: 'off' },
                },
            },
            hasPageLoaded: false,
            previousTrigger: undefined,
        };

        changeTriggered(context);
        changeTriggered(context);

        expect(ensureArray).toHaveBeenCalledTimes(1);
        expect(validateConditionalConfig).toHaveBeenCalledTimes(1);
        expect(checkConditionsMet).toHaveBeenCalledTimes(2);
    });

    test('rebuilds the cached trigger preparation when the trigger config changes', () => {
        checkConditionsMet.mockReturnValue(false);
        validateConditionalConfig.mockReturnValue(true);

        const context = {
            config: {
                hash: '#kitchen-popup',
                trigger: { entity: 'light.kitchen', state: 'on' },
                trigger_close: true,
            },
            _hass: {
                states: {
                    'light.kitchen': { state: 'off' },
                },
            },
            hasPageLoaded: false,
            previousTrigger: undefined,
        };

        changeTriggered(context);
        context.config = {
            ...context.config,
            trigger: { entity: 'light.kitchen', state: 'off' },
        };
        changeTriggered(context);

        expect(ensureArray).toHaveBeenCalledTimes(2);
        expect(validateConditionalConfig).toHaveBeenCalledTimes(2);
    });

    test('does not auto-close a manually opened conditional-trigger popup when conditions drop', () => {
        validateConditionalConfig.mockReturnValue(true);
        checkConditionsMet.mockReturnValue(false);
        wasPopupOpenedByTrigger.mockReturnValue(false);
        global.location.hash = '#kitchen-popup';

        const context = {
            config: {
                hash: '#kitchen-popup',
                trigger: { entity: 'light.kitchen', state: 'on' },
                trigger_close: true,
            },
            _hass: {
                states: {
                    'light.kitchen': { state: 'off' },
                },
            },
            hasPageLoaded: true,
            previousTrigger: true,
        };

        changeTriggered(context);

        expect(removeHash).not.toHaveBeenCalled();
        expect(context.previousTrigger).toBe(false);
    });

    test('marks conditional-trigger popup opens so trigger_close only applies to trigger opens', () => {
        validateConditionalConfig.mockReturnValue(true);
        checkConditionsMet.mockReturnValue(true);

        const context = {
            config: {
                hash: '#kitchen-popup',
                trigger: { entity: 'light.kitchen', state: 'on' },
                trigger_close: true,
            },
            _hass: {
                states: {
                    'light.kitchen': { state: 'on' },
                },
            },
            hasPageLoaded: true,
            previousTrigger: false,
        };

        changeTriggered(context);

        expect(markPopupPendingTriggerOpen).toHaveBeenCalledWith(context);
        expect(addHash).toHaveBeenCalledWith('#kitchen-popup');
    });

    test('does not auto-close a manually opened entity-trigger popup when the entity changes away', () => {
        wasPopupOpenedByTrigger.mockReturnValue(false);
        global.location.hash = '#kitchen-popup';

        const context = {
            config: {
                hash: '#kitchen-popup',
                trigger_entity: 'binary_sensor.motion',
                trigger_state: 'on',
                trigger_close: true,
            },
            _hass: {
                states: {
                    'binary_sensor.motion': { state: 'off' },
                },
            },
            hasPageLoaded: true,
            oldTriggerEntityState: 'on',
        };

        changeTriggered(context);

        expect(removeHash).not.toHaveBeenCalled();
        expect(context.oldTriggerEntityState).toBe('off');
    });

    test('marks entity-trigger popup opens so trigger_close still works for trigger-driven opens', () => {
        const context = {
            config: {
                hash: '#kitchen-popup',
                trigger_entity: 'binary_sensor.motion',
                trigger_state: 'on',
                trigger_close: true,
            },
            _hass: {
                states: {
                    'binary_sensor.motion': { state: 'on' },
                },
            },
            hasPageLoaded: true,
            oldTriggerEntityState: 'off',
        };

        changeTriggered(context);

        expect(markPopupPendingTriggerOpen).toHaveBeenCalledWith(context);
        expect(addHash).toHaveBeenCalledWith('#kitchen-popup');
    });
});