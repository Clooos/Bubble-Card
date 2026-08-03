import { afterEach, describe, expect, jest, test } from '@jest/globals';

const { HA_CARD_WRAPPER_TAG, isDialogNode, isHaCardWrapper, resolveContentSurface, resolveLegacyStackRoot } = await import('./ha-boundary.js');

// Contract tests for the Home Assistant DOM assumptions the pop-up runtime
// makes. They exist so a HA release that moves one of these fails here, during
// an upgrade, instead of degrading silently on users' dashboards.
describe('HA card wrapper contract', () => {
    test('recognises the per-card wrapper HA puts around cards in a view', () => {
        expect(isHaCardWrapper({ tagName: 'HUI-CARD' })).toBe(true);
        expect(isHaCardWrapper({ tagName: 'hui-card' })).toBe(true);
        expect(HA_CARD_WRAPPER_TAG).toBe('hui-card');
    });

    test('does not mistake neighbouring layout elements for the wrapper', () => {
        expect(isHaCardWrapper({ tagName: 'HUI-VIEW' })).toBe(false);
        expect(isHaCardWrapper({ tagName: 'HUI-SECTION' })).toBe(false);
        expect(isHaCardWrapper({ tagName: 'HA-CARD' })).toBe(false);
        expect(isHaCardWrapper(null)).toBe(false);
        expect(isHaCardWrapper({})).toBe(false);
    });
});

describe('HA dialog contract', () => {
    function node(nodeName, role = null) {
        return { nodeName, getAttribute: (name) => (name === 'role' ? role : null) };
    }

    test('recognises the dialog tags HA ships today', () => {
        expect(isDialogNode(node('HA-DIALOG'))).toBe(true);
        expect(isDialogNode(node('HA-MORE-INFO-DIALOG'))).toBe(true);
        expect(isDialogNode(node('HA-DIALOG-DATE-PICKER'))).toBe(true);
    });

    test('recognises dialog tags HA has not shipped yet', () => {
        expect(isDialogNode(node('HA-MD-DIALOG'))).toBe(true);
        expect(isDialogNode(node('DIALOG'))).toBe(true);
        expect(isDialogNode(node('MWC-DIALOG'))).toBe(true);
    });

    test('recognises dialog content through the accessibility role', () => {
        expect(isDialogNode(node('SOME-OVERLAY', 'dialog'))).toBe(true);
        expect(isDialogNode(node('SOME-OVERLAY', 'alertdialog'))).toBe(true);
    });

    test('does not mistake ordinary dashboard elements for dialogs', () => {
        expect(isDialogNode(node('HUI-VIEW'))).toBe(false);
        expect(isDialogNode(node('HA-CARD'))).toBe(false);
        expect(isDialogNode(node('DIV', 'button'))).toBe(false);
        // Menus and tooltips carry their own roles: a click in one of those
        // must still close the pop-up underneath.
        expect(isDialogNode(node('HA-TOOLTIP', 'tooltip'))).toBe(false);
        expect(isDialogNode(node('HA-MD-MENU', 'menu'))).toBe(false);
        expect(isDialogNode(null)).toBe(false);
    });
});

describe('legacy vertical-stack root contract', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('resolves the stack render root HA exposes today', () => {
        const root = { id: 'root' };
        const stack = { querySelector: (sel) => (sel === '#root' ? root : null), firstElementChild: { other: true } };

        expect(resolveLegacyStackRoot(stack)).toBe(root);
    });

    test('falls back to the first child and warns when HA moves the root id', () => {
        const fallback = { fallback: true };
        const stack = { querySelector: () => null, firstElementChild: fallback };
        jest.spyOn(console, 'warn').mockImplementation(() => {});

        expect(resolveLegacyStackRoot(stack)).toBe(fallback);
        expect(console.warn).toHaveBeenCalledTimes(1);
        expect(String(console.warn.mock.calls[0][0])).toContain('#root');
    });

    test('reports nothing rather than throwing when there is no stack at all', () => {
        expect(resolveLegacyStackRoot(null)).toBeNull();
        expect(resolveLegacyStackRoot({})).toBeNull();
        expect(resolveLegacyStackRoot({ querySelector: () => null, firstElementChild: null })).toBeNull();
    });
});

describe('HA content surface contract', () => {
    afterEach(() => {
        delete global.document;
    });

    function installShell(mainShadowRoot) {
        global.document = {
            querySelector: (selector) => (selector === 'home-assistant'
                ? {
                    shadowRoot: {
                        querySelector: (inner) => (inner === 'home-assistant-main'
                            ? { shadowRoot: mainShadowRoot }
                            : null),
                    },
                }
                : null),
        };
    }

    test('recognises the panel by the slot the drawer gives it', () => {
        const panel = { slot: 'appContent' };
        installShell({ querySelector: (sel) => (sel === '[slot="appContent"]' ? panel : null) });

        expect(resolveContentSurface()).toBe(panel);
    });

    test('falls back to the tag name HA uses today', () => {
        const panel = { tag: 'partial-panel-resolver' };
        installShell({ querySelector: (sel) => (sel === 'partial-panel-resolver' ? panel : null) });

        expect(resolveContentSurface()).toBe(panel);
    });

    // No panel means no measurement: pop-ups then keep their CSS fallback
    // instead of being positioned against a guess.
    test('reports nothing rather than throwing when HA\'s shell is not there', () => {
        installShell({ querySelector: () => null });
        expect(resolveContentSurface()).toBeNull();

        global.document = { querySelector: () => null };
        expect(resolveContentSurface()).toBeNull();

        global.document = { querySelector: () => ({ shadowRoot: null }) };
        expect(resolveContentSurface()).toBeNull();
    });
});
