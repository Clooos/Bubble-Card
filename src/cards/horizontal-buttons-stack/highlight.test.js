import { beforeEach, describe, expect, jest, test } from '@jest/globals';

import { releaseButtonHighlightListener, syncButtonHighlightListener } from './highlight.js';

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

// The highlight only ever reads `link` and writes a class, so a button is
// exactly that here. Building real ones would drag styles.css into the graph.
function buildStack(links, extraConfig = {}) {
    return {
        config: { highlight_current_view: true, ...extraConfig },
        elements: {
            buttons: links.map((link) => ({ link, classList: createMockClassList() })),
        },
    };
}

const listenersFor = (type) => global.window.addEventListener.mock.calls
    .filter(([eventType]) => eventType === type)
    .map(([, handler]) => handler);

describe('horizontal buttons stack current view highlight', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.location = { hash: '', pathname: '/dashboard' };
        global.window = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            location: global.location,
        };
    });

    test('listens once per card, not once per button', () => {
        const context = buildStack(['#kitchen', '#living', '#garden']);

        syncButtonHighlightListener(context);

        // Three event types for three buttons. Registering inside createButton
        // gave nine, and not one of them was ever removed.
        expect(global.window.addEventListener).toHaveBeenCalledTimes(3);
        expect(listenersFor('location-changed')).toHaveLength(1);
        expect(listenersFor('popstate')).toHaveLength(1);
        expect(listenersFor('hashchange')).toHaveLength(1);
    });

    test('clears the highlight when a pop-up is closed with the browser back button', () => {
        const context = buildStack(['#kitchen']);
        const [button] = context.elements.buttons;
        syncButtonHighlightListener(context);

        global.location.hash = '#kitchen';
        listenersFor('location-changed')[0]();
        expect(button.classList.contains('highlight')).toBe(true);

        // The back button pops the entry addHash pushed. It fires popstate and
        // hashchange, never location-changed, which is what left the button lit.
        global.location.hash = '';
        listenersFor('popstate')[0]();
        expect(button.classList.contains('highlight')).toBe(false);
    });

    test('answers one navigation once, not three times', () => {
        const context = buildStack(['#kitchen']);
        const [button] = context.elements.buttons;
        syncButtonHighlightListener(context);

        global.location.hash = '#kitchen';
        listenersFor('location-changed')[0]();
        expect(button.classList.contains('highlight')).toBe(true);

        // The same navigation, now arriving through the two browser events.
        const toggle = jest.fn();
        button.classList.toggle = toggle;
        listenersFor('popstate')[0]();
        listenersFor('hashchange')[0]();

        expect(toggle).not.toHaveBeenCalled();
    });

    test('highlights the matching button as soon as it registers', () => {
        global.location.hash = '#kitchen';
        const context = buildStack(['#kitchen', '#living']);

        syncButtonHighlightListener(context);

        // No navigation has happened. The highlight used to wait for one.
        expect(context.elements.buttons[0].classList.contains('highlight')).toBe(true);
        expect(context.elements.buttons[1].classList.contains('highlight')).toBe(false);
    });

    test('matches a Lovelace path as well as a pop-up hash', () => {
        global.location.pathname = '/lovelace/home';
        const context = buildStack(['/lovelace/home', '#kitchen']);

        syncButtonHighlightListener(context);

        expect(context.elements.buttons[0].classList.contains('highlight')).toBe(true);
        expect(context.elements.buttons[1].classList.contains('highlight')).toBe(false);
    });

    test('gives a button added after the first render its highlight', () => {
        global.location.hash = '#garden';
        const context = buildStack(['#kitchen']);
        syncButtonHighlightListener(context);

        context.elements.buttons.push({ link: '#garden', classList: createMockClassList() });
        syncButtonHighlightListener(context);

        expect(context.elements.buttons[1].classList.contains('highlight')).toBe(true);
        // Still one registration, a second render must not add another.
        expect(global.window.addEventListener).toHaveBeenCalledTimes(3);
    });

    test('does not listen at all when the option is off, and takes back a stale highlight', () => {
        const context = buildStack(['#kitchen'], { highlight_current_view: false });
        context.elements.buttons[0].classList.add('highlight');

        syncButtonHighlightListener(context);

        expect(global.window.addEventListener).not.toHaveBeenCalled();
        expect(context.elements.buttons[0].classList.contains('highlight')).toBe(false);
    });

    test('stops listening when the option is switched off in the editor', () => {
        const context = buildStack(['#kitchen']);
        syncButtonHighlightListener(context);
        const handler = listenersFor('location-changed')[0];

        context.config.highlight_current_view = false;
        syncButtonHighlightListener(context);

        expect(global.window.removeEventListener).toHaveBeenCalledWith('location-changed', handler);
        expect(context._buttonHighlightHandler).toBeNull();
    });

    test('releases every listener on disconnect', () => {
        const context = buildStack(['#kitchen']);
        syncButtonHighlightListener(context);
        const handler = listenersFor('location-changed')[0];

        releaseButtonHighlightListener(context);

        expect(global.window.removeEventListener).toHaveBeenCalledTimes(3);
        for (const type of ['location-changed', 'popstate', 'hashchange']) {
            expect(global.window.removeEventListener).toHaveBeenCalledWith(type, handler);
        }
        expect(context._buttonHighlightHandler).toBeNull();
    });

    test('registers again after a disconnect and a reconnect', () => {
        const context = buildStack(['#kitchen']);
        syncButtonHighlightListener(context);
        releaseButtonHighlightListener(context);

        syncButtonHighlightListener(context);

        expect(global.window.addEventListener).toHaveBeenCalledTimes(6);
        expect(context._buttonHighlightHandler).not.toBeNull();
    });

    test('releasing a card that never listened is a no-op', () => {
        releaseButtonHighlightListener(buildStack(['#kitchen']));
        releaseButtonHighlightListener(undefined);

        expect(global.window.removeEventListener).not.toHaveBeenCalled();
    });
});
