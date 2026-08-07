import { beforeEach, describe, expect, jest, test } from '@jest/globals';

let inPicker = true;
jest.unstable_mockModule('./lazy-preview.js', () => ({
    isSuggestionPickerPreview: jest.fn(() => inPicker),
}));

const { previewBadgeText, updatePreviewBadge } = await import('./preview-badge.js');

// Enough of an element for the module: a shadow root it can append to, and a
// style object it can position.
function createContext(config, { preview = true } = {}) {
    const children = [];
    const style = {
        values: {},
        setProperty(name, value) { this.values[name] = value; },
        removeProperty(name) { delete this.values[name]; },
        set position(value) { this.values.position = value; },
        get position() { return this.values.position; },
    };
    return {
        config,
        preview,
        style,
        shadowRoot: {
            children,
            appendChild(node) {
                const at = children.indexOf(node);
                if (at !== -1) children.splice(at, 1);
                children.push(node);
                node.isConnected = true;
                node.parent = children;
            },
        },
        ownerDocument: {
            createElement: () => ({
                className: '',
                textContent: '',
                isConnected: false,
                attributes: {},
                setAttribute(name, value) { this.attributes[name] = value; },
                remove() {
                    this.isConnected = false;
                    const at = this.parent?.indexOf(this) ?? -1;
                    if (at !== -1) this.parent.splice(at, 1);
                },
            }),
        },
    };
}

const badgeOf = (context) => context.shadowRoot.children.find((n) => n.className === 'bubble-preview-badge');

beforeEach(() => {
    inPicker = true;
});

describe('what a preview says about its address', () => {
    test('a pop-up states the hash it answers to', () => {
        expect(previewBadgeText({ card_type: 'pop-up', hash: '#salon' })).toBe('#salon');
    });

    test('a card states the hash it navigates to, wherever the action sits', () => {
        const navigate = (path) => ({ action: 'navigate', navigation_path: path });

        expect(previewBadgeText({ card_type: 'button', button_action: { tap_action: navigate('#salon') } }))
            .toBe('→ #salon');
        expect(previewBadgeText({ card_type: 'button', tap_action: navigate('#cuisine') }))
            .toBe('→ #cuisine');
        expect(previewBadgeText({
            card_type: 'button',
            sub_button: { main: [{ group: [{ tap_action: navigate('#rooms') }] }], bottom: [] },
        })).toBe('→ #rooms');
    });

    // The pair is readable precisely because the two chips carry the same hash.
    test('a pop-up and its trigger name the same hash', () => {
        const popup = previewBadgeText({ card_type: 'pop-up', hash: '#salon' });
        const trigger = previewBadgeText({
            card_type: 'button',
            button_action: { tap_action: { action: 'navigate', navigation_path: '#salon' } },
        });

        expect(trigger).toBe(`→ ${popup}`);
    });

    test('says nothing when there is no address to state', () => {
        expect(previewBadgeText({ card_type: 'button', entity: 'light.a' })).toBeNull();
        expect(previewBadgeText({ card_type: 'pop-up' })).toBeNull();
        // A navigation to a view is not a pop-up address.
        expect(previewBadgeText({
            card_type: 'button',
            tap_action: { action: 'navigate', navigation_path: '/lovelace/0' },
        })).toBeNull();
        expect(previewBadgeText({ card_type: 'button', tap_action: { action: 'toggle' } })).toBeNull();
        expect(previewBadgeText(null)).toBeNull();
    });
});

describe('where the badge is allowed to draw', () => {
    test('draws on a picker preview, and positions its host so it can anchor', () => {
        const context = createContext({ card_type: 'pop-up', hash: '#salon' });

        updatePreviewBadge(context);

        expect(badgeOf(context)?.textContent).toBe('#salon');
        expect(context.style.values.position).toBe('relative');
    });

    // `preview` is true on every card of a dashboard in edit mode, so keying off
    // it alone would stamp a chip on every card the moment a user starts editing.
    test('never draws outside the picker', () => {
        inPicker = false;
        const context = createContext({ card_type: 'pop-up', hash: '#salon' });

        updatePreviewBadge(context);

        expect(badgeOf(context)).toBeUndefined();
        expect(context.style.values.position).toBeUndefined();
    });

    test('never draws on a card that is not a preview', () => {
        const context = createContext({ card_type: 'pop-up', hash: '#salon' }, { preview: false });

        updatePreviewBadge(context);

        expect(badgeOf(context)).toBeUndefined();
    });

    test('is taken back down when the card stops being a preview', () => {
        const context = createContext({ card_type: 'pop-up', hash: '#salon' });
        updatePreviewBadge(context);
        expect(badgeOf(context)).toBeDefined();

        context.preview = false;
        updatePreviewBadge(context);

        expect(badgeOf(context)).toBeUndefined();
        expect(context.style.values.position).toBeUndefined();
    });

    // The render pass rebuilds the card's content, so a badge that is only
    // attached once disappears on the next hass tick.
    test('re-attaches after a render pass emptied the shadow root', () => {
        const context = createContext({ card_type: 'pop-up', hash: '#salon' });
        updatePreviewBadge(context);

        // What the DOM really does when a node leaves its tree.
        context.shadowRoot.children.forEach((node) => { node.isConnected = false; });
        context.shadowRoot.children.length = 0;
        updatePreviewBadge(context);

        expect(badgeOf(context)?.textContent).toBe('#salon');
    });

    test('does no work when nothing changed', () => {
        const context = createContext({ card_type: 'pop-up', hash: '#salon' });
        updatePreviewBadge(context);
        const first = badgeOf(context);

        updatePreviewBadge(context);

        expect(badgeOf(context)).toBe(first);
        expect(context.shadowRoot.children).toHaveLength(1);
    });

    test('follows the hash when the config changes under it', () => {
        const context = createContext({ card_type: 'pop-up', hash: '#salon' });
        updatePreviewBadge(context);

        context.config = { card_type: 'pop-up', hash: '#cuisine' };
        updatePreviewBadge(context);

        expect(badgeOf(context)?.textContent).toBe('#cuisine');
        expect(context.shadowRoot.children).toHaveLength(1);
    });

    test('a render can never be broken by the badge', () => {
        const context = createContext({ card_type: 'pop-up', hash: '#salon' });
        context.shadowRoot = null;

        expect(() => updatePreviewBadge(context)).not.toThrow();
    });
});
