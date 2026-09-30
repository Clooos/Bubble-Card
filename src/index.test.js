import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// The element module pulls in every card handler; everything is mocked so the
// tests can drive the custom-element lifecycle contract in isolation.
jest.unstable_mockModule('./var/version.js', () => ({ version: 'test' }));
jest.unstable_mockModule('./tools/init.js', () => ({ initializeContent: jest.fn() }));
jest.unstable_mockModule('./tools/tap-actions.js', () => ({ cleanupTapActions: jest.fn() }));
jest.unstable_mockModule('./modules/registry.js', () => ({ preloadYAMLStyles: jest.fn() }));
jest.unstable_mockModule('./tools/style.js', () => ({ createBubbleDefaultColor: jest.fn() }));
jest.unstable_mockModule('./cards/pop-up/backdrop.js', () => ({ updateThemeBackgroundColor: jest.fn() }));
const stopTimerInterval = jest.fn();
const invalidateStyleCache = jest.fn();
jest.unstable_mockModule('./tools/utils.js', () => ({ invalidateStyleCache, stopTimerInterval, stopRelativeTimeInterval: jest.fn() }));
jest.unstable_mockModule('./tools/text-scrolling.js', () => ({ cleanupScrollingEffects: jest.fn(), resumeScrollingEffects: jest.fn() }));
jest.unstable_mockModule('./modules/suggestions.js', () => ({ getEntitySuggestion: jest.fn() }));
jest.unstable_mockModule('./cards/pop-up/helpers.js', () => ({
    registerPopupContext: jest.fn(),
    shouldHoldDashboardHassUpdate: jest.fn(() => false),
}));
jest.unstable_mockModule('./cards/pop-up/migration.js', () => ({ maybeShowMigrationNotice: jest.fn() }));
jest.unstable_mockModule('./tools/icon.js', () => ({
    registerForIconRefresh: jest.fn(),
    unregisterForIconRefresh: jest.fn(),
}));
const beginTemplateRender = jest.fn();
const sweepTemplates = jest.fn();
const releaseTemplates = jest.fn();
const refreshTemplateStyles = jest.fn(() => true);
jest.unstable_mockModule('./tools/render-template.js', () => ({
    beginTemplateRender,
    sweepTemplates,
    releaseTemplates,
    refreshTemplateStyles,
    TEMPLATE_STYLE: 2,
}));
jest.unstable_mockModule('./editor/bubble-card-editor.js', () => ({ default: class {} }));
jest.unstable_mockModule('./cards/pop-up/index.js', () => ({ cleanupPopUp: jest.fn(), handlePopUp: jest.fn() }));
const handleButton = jest.fn();
jest.unstable_mockModule('./cards/button/index.js', () => ({ handleButton }));
jest.unstable_mockModule('./cards/sub-buttons/index.js', () => ({ handleSubButtons: jest.fn() }));
jest.unstable_mockModule('./cards/separator/index.js', () => ({ handleSeparator: jest.fn() }));
jest.unstable_mockModule('./cards/cover/index.js', () => ({ handleCover: jest.fn() }));
jest.unstable_mockModule('./cards/empty-column/index.js', () => ({ handleEmptyColumn: jest.fn() }));
jest.unstable_mockModule('./cards/horizontal-buttons-stack/index.js', () => ({ handleHorizontalButtonsStack: jest.fn() }));
jest.unstable_mockModule('./cards/calendar/index.js', () => ({ handleCalendar: jest.fn() }));
jest.unstable_mockModule('./cards/media-player/index.js', () => ({ handleMediaPlayer: jest.fn() }));
jest.unstable_mockModule('./cards/select/index.js', () => ({ handleSelect: jest.fn() }));
jest.unstable_mockModule('./cards/climate/index.js', () => ({ handleClimate: jest.fn() }));

global.HTMLElement = class {};
const definedElements = {};
global.customElements = { define: jest.fn((name, cls) => { definedElements[name] = cls; }) };
global.window = {
    customCards: [],
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    history: {},
};
global.document = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    querySelector: jest.fn(() => null),
};

await import('./index.js');
const BubbleCard = definedElements['bubble-card'];

function createCard(config = { card_type: 'button' }) {
    const card = new BubbleCard();
    card.config = config;
    return card;
}

describe('BubbleCard editor detection memoization', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('memoizes the editor-detection walk per connected lifetime', () => {
        const card = createCard();
        card._isInsideCardEditor = jest.fn(() => false);

        expect(card.detectedEditor).toBe(false);
        expect(card.detectedEditor).toBe(false);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(1);

        // A DOM move fires the lifecycle callbacks: the memo must reset so a
        // card moved into an editor preview is detected again.
        card.connectedCallback();
        expect(card.detectedEditor).toBe(false);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(2);

        card.disconnectedCallback();
        card._isInsideCardEditor.mockReturnValue(true);
        expect(card.detectedEditor).toBe(true);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(3);
        expect(card.detectedEditor).toBe(true);
        expect(card._isInsideCardEditor).toHaveBeenCalledTimes(3);
    });
});

describe('BubbleCard disconnect contract', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('stops the timer interval keyed on the element itself', () => {
        const card = createCard();

        card.disconnectedCallback();

        // The element IS the context registered by startTimerInterval: any
        // other key (the historical `this.context`) silently leaks the 1s
        // interval forever.
        expect(stopTimerInterval).toHaveBeenCalledWith(card);
    });

    test('lets go of its templates, and of a pending styles hold', () => {
        const card = createCard();
        card._templateHoldTimer = setTimeout(() => {}, 1000);

        card.disconnectedCallback();

        // Not forgotten: the card takes them back when it comes back.
        expect(releaseTemplates).toHaveBeenCalledWith(card);
        expect(releaseTemplates).not.toHaveBeenCalledWith(card, true);
        expect(card._templateHoldTimer).toBeNull();
    });

    test('removes the module refresh listeners and resets the flag for re-registration', () => {
        const card = createCard();
        const handler = () => {};
        card._moduleChangeHandler = handler;
        card._moduleChangeListenerAdded = true;

        card.disconnectedCallback();

        expect(window.removeEventListener).toHaveBeenCalledWith('bubble-card-modules-changed', handler);
        expect(window.removeEventListener).toHaveBeenCalledWith('bubble-card-module-updated', handler);
        expect(document.removeEventListener).toHaveBeenCalledWith('yaml-modules-updated', handler);
        expect(card._moduleChangeListenerAdded).toBe(false);
        expect(card._moduleChangeHandler).toBeNull();
    });
});

// Same instance the element module got, so the pop-up gating below can be
// asserted without touching the mock registrations above.
const { handlePopUp, cleanupPopUp } = await import('./cards/pop-up/index.js');
const { registerPopupContext, shouldHoldDashboardHassUpdate } = await import('./cards/pop-up/helpers.js');

describe('BubbleCard pre-connection rendering', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Home Assistant configures a card element and hands it `hass` well before
    // it puts it in the DOM. A pop-up is the one card type that keeps rendering
    // while detached, so it is the one that would render into nothing here.
    test('a pop-up that has never been connected renders nothing', () => {
        const card = createCard({ card_type: 'pop-up' });

        card.hass = { states: {} };

        expect(handlePopUp).not.toHaveBeenCalled();
    });

    test('a closed standalone pop-up still renders while detached', () => {
        const card = createCard({ card_type: 'pop-up' });
        card.connectedCallback();
        card.disconnectedCallback();

        card.hass = { states: {} };

        expect(handlePopUp).toHaveBeenCalledTimes(1);
    });

    test('a real pop-up card claims its hash in the URL dispatcher', () => {
        const card = createCard({ card_type: 'pop-up', hash: '#kitchen' });

        card.connectedCallback();

        expect(registerPopupContext).toHaveBeenCalledWith(card);
    });
});

describe('BubbleCard held previews claim no shared resource', () => {
    // A held preview is a card the picker built and may throw away without ever
    // showing it. Anything global it registers itself with outlives it.
    let observed;

    beforeEach(() => {
        jest.clearAllMocks();
        observed = [];
        globalThis.IntersectionObserver = class {
            constructor(callback, options) { this.callback = callback; this.options = options; observed.push(this); }
            observe(target) { this.target = target; }
            unobserve() {}
            disconnect() {}
        };
        globalThis.getComputedStyle = () => ({ overflowY: 'visible' });
    });

    function pickerPreview(config) {
        const card = createCard(config);
        card.style = { setProperty() {}, removeProperty() {} };
        card.getBoundingClientRect = () => ({ height: 0 });
        card.parentNode = { tagName: 'HUI-CARD', parentNode: { tagName: 'HUI-SUGGESTION-CARD', parentNode: null } };
        card.preview = true;
        return card;
    }

    // The hash of a suggested pop-up is whatever the suggestion proposes, and a
    // room pop-up is named after its area. Registering it would take the URL
    // dispatcher away from the dashboard card that really owns that hash, then
    // delete the entry outright when the picker closes.
    test('a suggested pop-up never claims its hash', () => {
        const card = pickerPreview({ card_type: 'pop-up', hash: '#kitchen' });

        card.connectedCallback();

        expect(registerPopupContext).not.toHaveBeenCalled();
        expect(handlePopUp).not.toHaveBeenCalled();

        observed[0].callback([{ target: card, isIntersecting: true }]);
        expect(handlePopUp).toHaveBeenCalledTimes(1);
    });

    // shouldHoldDashboardHassUpdate adds the element to a module-level Set that
    // holds a strong reference until the next drain.
    test('a held preview is never handed to the pop-up open gate', () => {
        const card = pickerPreview({ card_type: 'button' });
        card.connectedCallback();

        card.hass = { states: {} };

        expect(shouldHoldDashboardHassUpdate).not.toHaveBeenCalled();
        expect(handleButton).not.toHaveBeenCalled();
    });
});

describe('BubbleCard hass render coalescing', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    function connectedCard() {
        const card = createCard({ card_type: 'button', entity: 'light.a' });
        card.isConnected = true;
        return card;
    }

    // A tick that really moves this card's entity. The render gate drops ticks
    // where nothing the card depends on changed, so a fixture handing out the
    // same state twice would be measuring the gate rather than the window.
    let movingTick = 0;
    const movingHass = (extra = {}) => ({
        states: { 'light.a': { state: `s${movingTick++}`, attributes: {} } },
        ...extra,
    });

    test('renders straight away when the card has been idle', () => {
        const card = connectedCard();

        card.hass = movingHass();

        expect(handleButton).toHaveBeenCalledTimes(1);
    });

    test('renders once for a burst instead of once per state change', () => {
        const card = connectedCard();

        card.hass = movingHass();
        expect(handleButton).toHaveBeenCalledTimes(1);

        // Five more state changes land inside the window: none of them renders.
        for (let i = 0; i < 5; i++) {
            jest.advanceTimersByTime(6);
            card.hass = movingHass();
        }
        expect(handleButton).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(50);
        expect(handleButton).toHaveBeenCalledTimes(2);
    });

    // The whole safety of coalescing rests on this: the waiting pass reads the
    // newest hass, so a card is at most one window late and never stale.
    test('the waiting pass renders the newest hass, not the one that scheduled it', () => {
        const card = connectedCard();
        card.hass = movingHass({ tag: 'first' });

        card.hass = movingHass({ tag: 'second' });
        card.hass = movingHass({ tag: 'third' });
        jest.advanceTimersByTime(50);

        expect(handleButton).toHaveBeenCalledTimes(2);
        expect(card._hass.tag).toBe('third');
    });

    test('an isolated state change still renders immediately', () => {
        const card = connectedCard();
        card.hass = movingHass();

        jest.advanceTimersByTime(500);
        card.hass = movingHass();

        expect(handleButton).toHaveBeenCalledTimes(2);
    });

    // What the window cannot do on its own: a tick that moves nothing this card
    // depends on is not worth a render at all, however long ago the last one was.
    test('drops a tick that changes nothing the card depends on', () => {
        const card = connectedCard();
        const settled = { state: 'on', attributes: {} };
        const shared = { 'light.a': settled, 'sensor.elsewhere': { state: '1', attributes: {} } };

        card.hass = { states: shared };
        expect(handleButton).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(500);
        // A different hass object, but this card's entity is the same one.
        card.hass = { states: { ...shared, 'sensor.elsewhere': { state: '2', attributes: {} } } };
        jest.advanceTimersByTime(500);

        expect(handleButton).toHaveBeenCalledTimes(1);
        expect(jest.getTimerCount()).toBe(0);

        // And it still renders the moment its own entity moves.
        card.hass = { states: { ...shared, 'light.a': { state: 'off', attributes: {} } } };
        expect(handleButton).toHaveBeenCalledTimes(2);
    });

    // The render guard alone would keep a torn-down card from drawing, so this
    // also checks the timer is dropped rather than left to fire on a dead card.
    test('a card torn down while a pass waits leaves nothing pending', () => {
        const card = connectedCard();
        card.hass = movingHass();
        card.hass = movingHass();
        expect(handleButton).toHaveBeenCalledTimes(1);
        expect(jest.getTimerCount()).toBe(1);

        card.disconnectedCallback();

        expect(jest.getTimerCount()).toBe(0);
        jest.advanceTimersByTime(500);
        expect(handleButton).toHaveBeenCalledTimes(1);
    });
});

describe('BubbleCard and the template store', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('a reconfigured card lets go of its templates', () => {
        const card = createCard();
        card.setConfig({ card_type: 'button', entity: 'light.a', name: "{{ states('sensor.t') }}" });
        expect(releaseTemplates).toHaveBeenCalledWith(card, true);
        expect(card.config.name).toBe("{{ states('sensor.t') }}");
    });

    test('an unquoted template, which YAML reads as a mapping, is rejected with a hint', () => {
        const card = createCard();
        const unquoted = { "{{ states('sensor.t') }}": null };
        expect(() => card.setConfig({ card_type: 'button', entity: 'light.a', name: unquoted })).toThrow(/Wrap the template in quotes/);
        expect(() => card.setConfig({ card_type: 'button', entity: 'light.a', icon: unquoted })).toThrow(/Wrap the template in quotes/);
        expect(() => card.setConfig({ card_type: 'button', entity: 'light.a', sub_button: [{ name: unquoted }] })).toThrow(/Wrap the template in quotes/);
        expect(() => card.setConfig({ card_type: 'button', entity: 'light.a', sub_button: { main: [{ group: [{ icon: unquoted }] }], bottom: [] } })).toThrow(/Wrap the template in quotes/);
        expect(() => card.setConfig({ card_type: 'horizontal-buttons-stack', '1_link': '#a', '1_name': unquoted })).toThrow(/Wrap the template in quotes/);
        expect(() => card.setConfig({ card_type: 'button', entity: 'light.a', name: 'Kitchen', sub_button: [{ name: 'Sub' }] })).not.toThrow();
    });

    test('a render stamps its templates and sweeps the ones it stopped reading', () => {
        const card = createCard();
        card.isConnected = true;
        card._hass = { states: {} };

        card.updateBubbleCard();

        expect(beginTemplateRender).toHaveBeenCalledWith(card);
        expect(handleButton).toHaveBeenCalledTimes(1);
        expect(sweepTemplates).toHaveBeenCalledWith(card);
        expect(card._templatePending).toBe(false);
    });

    test('a result that only concerns styles refreshes them, anything else renders the card', () => {
        const card = createCard();
        card.isConnected = true;
        card.card = {};
        card._hass = { states: {} };
        card.renderCoalesced = jest.fn();
        card._bb_cache = { lastStateSignature: 'stale' };

        card.onTemplateResults(2);
        expect(refreshTemplateStyles).toHaveBeenCalledWith(card);
        expect(card.renderCoalesced).not.toHaveBeenCalled();
        expect(card._templateResultVersion).toBe(1);
        expect(card.lastEvaluatedStyles).toBe('');
        expect(card._bb_cache.lastStateSignature).toBe('');

        card.onTemplateResults(1 | 2);
        expect(card.renderCoalesced).toHaveBeenCalledTimes(1);
        expect(card._templateResultVersion).toBe(2);
    });

    test('a pop-up always renders whole, its styles live on the shell', () => {
        const card = createCard({ card_type: 'pop-up', hash: '#a' });
        card.isConnected = true;
        card.card = {};
        card.renderCoalesced = jest.fn();

        card.onTemplateResults(2);

        expect(refreshTemplateStyles).not.toHaveBeenCalled();
        expect(card.renderCoalesced).toHaveBeenCalledTimes(1);
    });

    test('a card held behind an opening pop-up waits for the drain of that gate', async () => {
        const helpers = await import('./cards/pop-up/helpers.js');
        helpers.shouldHoldDashboardHassUpdate.mockReturnValueOnce(true);
        const card = createCard();
        card.isConnected = true;
        card.card = {};
        card.renderCoalesced = jest.fn();

        card.onTemplateResults(1);

        expect(card._templateResultVersion).toBe(1);
        expect(card.renderCoalesced).not.toHaveBeenCalled();
        expect(refreshTemplateStyles).not.toHaveBeenCalled();
    });
});

// The header of the more info dialog is a title, built as a switch with nothing
// to read, so it is the one header that needs no entity. The check used to name
// the classic style, and the Home Assistant one arrived wearing the same header.
describe('the entity a pop-up header is asked for', () => {
    const popUp = (extra) => ({
        card_type: 'pop-up',
        hash: '#chambre',
        button_type: 'slider',
        show_header: true,
        modules: ['default'],
        ...extra,
    });

    test.each(['classic', 'home-assistant'])('%s asks for none', (style) => {
        expect(() => createCard().setConfig(popUp({ popup_style: style }))).not.toThrow();
    });

    test('a Bubble header still asks for one', () => {
        expect(() => createCard().setConfig(popUp())).toThrow(/entity/i);
        expect(() => createCard().setConfig(popUp({ popup_style: 'bubble' }))).toThrow(/entity/i);
    });

    test('an entity satisfies every style', () => {
        for (const style of [undefined, 'bubble', 'classic', 'home-assistant']) {
            expect(() => createCard().setConfig(popUp({ popup_style: style, entity: 'light.chambre' }))).not.toThrow();
        }
    });

    test('a name header never needed one', () => {
        expect(() => createCard().setConfig(popUp({ button_type: 'name' }))).not.toThrow();
    });
});

// Home Assistant takes a card down and puts it straight back whenever it moves it
// in the DOM, which a view rebuilt on navigation does (#2589, uix-forge). The
// pop-up must come through that whole, and its shell must still slide.
describe('a pop-up card moved in the DOM', () => {
    let styleReads;

    function createShell(classes) {
        const set = new Set(classes);
        return {
            isConnected: true,
            classes: set,
            classList: {
                contains: (name) => set.has(name),
                add: (name) => set.add(name),
                remove: (name) => set.delete(name),
            },
        };
    }

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        styleReads = [];
        global.getComputedStyle = jest.fn((element) => {
            styleReads.push([...element.classes]);
            return { opacity: '1' };
        });
    });

    afterEach(() => {
        jest.useRealTimers();
        delete global.getComputedStyle;
    });

    test('keeps its pop-up when it comes straight back', () => {
        const card = createCard({ card_type: 'pop-up', hash: '#kitchen' });
        card.connectedCallback();

        card.disconnectedCallback();
        card.connectedCallback();
        jest.runAllTimers();

        expect(cleanupPopUp).not.toHaveBeenCalled();
    });

    test('tears its pop-up down once it stays out of the document', () => {
        const card = createCard({ card_type: 'pop-up', hash: '#kitchen' });
        card.connectedCallback();

        card.disconnectedCallback();
        expect(cleanupPopUp).not.toHaveBeenCalled();
        jest.runAllTimers();

        expect(cleanupPopUp).toHaveBeenCalledTimes(1);
        expect(cleanupPopUp).toHaveBeenCalledWith(card);
    });

    test('replays a close under way from the open position', () => {
        const card = createCard({ card_type: 'pop-up', hash: '#kitchen' });
        card.connectedCallback();
        card.popUp = createShell(['bubble-pop-up', 'is-popup-opened', 'is-closing']);

        card.disconnectedCallback();
        card.connectedCallback();

        // The style is read without the close, which makes the open position
        // the start of the transition, then the close goes back on.
        expect(styleReads).toEqual([['bubble-pop-up', 'is-popup-opened']]);
        expect(card.popUp.classes.has('is-closing')).toBe(true);
    });

    test('gives the shell its style back after a move with nothing under way', () => {
        const card = createCard({ card_type: 'pop-up', hash: '#kitchen' });
        card.connectedCallback();
        card.popUp = createShell(['bubble-pop-up', 'is-popup-opened']);

        card.disconnectedCallback();
        card.connectedCallback();

        expect(styleReads).toEqual([['bubble-pop-up', 'is-popup-opened']]);
        expect([...card.popUp.classes]).toEqual(['bubble-pop-up', 'is-popup-opened']);
    });

    test('leaves a detached shell alone', () => {
        const card = createCard({ card_type: 'pop-up', hash: '#kitchen' });
        card.connectedCallback();
        card.popUp = createShell(['bubble-pop-up', 'is-popup-closed']);
        card.popUp.isConnected = false;

        card.disconnectedCallback();
        card.connectedCallback();

        expect(styleReads).toEqual([]);
    });
});
