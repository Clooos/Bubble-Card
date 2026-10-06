import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('lit', () => ({
    html: jest.fn(() => ''),
}));

jest.unstable_mockModule('../../tools/localize.js', () => ({
    default: () => (key) => key,
}));

jest.unstable_mockModule('../../components/editor/ha-selector-calendar_entity.js', () => ({}));

const { renderCalendarEditor } = await import('./editor.js');

// Minimal stand-in for the Bubble Card editor element, only what the calendar
// editor template touches while it is being evaluated.
function makeEditor(config) {
    return {
        _config: { ...config },
        hass: { states: {} },
        cardTypeList: [],
        _computeLabelCallback: () => '',
        _optionalLabel: (label) => label,
        _valueChanged: jest.fn(),
        makeDropdown: jest.fn(),
        makeSubButtonPanel: jest.fn(),
        makeActionPanel: jest.fn(),
        makeLayoutOptions: jest.fn(),
        makeStyleEditor: jest.fn(),
        makeModulesEditor: jest.fn(),
        makeVersion: jest.fn(),
    };
}

const eventPanels = (editor) => editor.makeActionPanel.mock.calls.filter((call) => call[3] === 'event_action');

describe('the actions on the events of a calendar, in the editor', () => {
    // Opening the editor used to write the three default actions into the
    // card, so every calendar carried an event_action nobody had chosen.
    test('opening the editor writes nothing into the card', () => {
        const editor = makeEditor({ card_type: 'calendar', entities: [{ entity: 'calendar.a' }] });

        renderCalendarEditor(editor);

        expect(editor._config).not.toHaveProperty('event_action');
    });

    test('shows the defaults the card applies, more-info on a tap and nothing else', () => {
        const editor = makeEditor({ card_type: 'calendar', entities: [] });

        renderCalendarEditor(editor);

        expect(eventPanels(editor).map((call) => [call[0], call[2]])).toEqual([
            ['tap', 'more-info'],
            ['double_tap', 'none'],
            ['hold', 'none'],
        ]);
    });

    test('hands the panels the actions already chosen', () => {
        const event_action = { tap_action: { action: 'navigate', navigation_path: '#agenda' } };
        const editor = makeEditor({ card_type: 'calendar', entities: [], event_action });

        renderCalendarEditor(editor);

        expect(eventPanels(editor).every((call) => call[1] === event_action)).toBe(true);
        expect(editor._config.event_action).toBe(event_action);
    });
});
