// Which lists a dropdown can offer, and what is in them. It imports nothing but
// the table of alarm modes, on purpose, so the editor can ask without pulling
// the dropdown itself along.
import { getAlarmModes, isAlarmPanel } from './alarm.js';

// Every list a dropdown can drive, named by the attribute that holds it. The
// editor offers these and the cards read them, from this one place. Each name
// here needs its current value, its labels and its service in helpers.js.
export const SELECTABLE_ATTRIBUTES = [
    'source_list',
    'sound_mode_list',
    'hvac_modes',
    'fan_modes',
    'swing_modes',
    'swing_horizontal_modes',
    'preset_modes',
    'effect_list',
    'available_modes',
    'operation_list',
    'fan_speed_list',
    'activity_list',
    'direction',
    'alarm_modes',
];

// Two of them are not attributes at all. What they offer is worked out from
// what the entity supports, and they are added after its real attributes.
const COMPUTED_LISTS = ['direction', 'alarm_modes'];

// A fan has no list for its direction, only the direction itself. Home
// Assistant offers the two there are (more-info-fan.ts), and only on a fan that
// says it can be reversed.
const FAN_DIRECTIONS = ['forward', 'reverse'];
const FAN_SUPPORTS_DIRECTION = 4;

function isFanDirection(entityId, state, attribute) {
    return attribute === 'direction'
        && entityId?.split('.')[0] === 'fan'
        && ((state?.attributes?.supported_features ?? 0) & FAN_SUPPORTS_DIRECTION) !== 0;
}

function offersSelectList(entityId, state, attribute) {
    // The word is common enough to sit on entities that have nothing to turn
    // round, so this one is read from what the fan supports, not from the key.
    if (attribute === 'direction') return isFanDirection(entityId, state, attribute);
    if (attribute === 'alarm_modes') return isAlarmPanel(entityId) && Boolean(state);
    const list = state?.attributes?.[attribute];
    // A list with nothing in it is not a menu. A remote often carries one.
    return Array.isArray(list) ? list.length > 0 : Boolean(list);
}

export function hasSelectableAttribute(entityId, state) {
    return SELECTABLE_ATTRIBUTES.some((attribute) => offersSelectList(entityId, state, attribute));
}

// In the order the entity lists its attributes, which is the order the editor
// has always shown them in.
export function getSelectableAttributes(entityId, state) {
    const offered = Object.keys(state?.attributes ?? {})
        .filter((attribute) => SELECTABLE_ATTRIBUTES.includes(attribute) && offersSelectList(entityId, state, attribute));
    // A fan that can be reversed may not have reported a direction yet, and the
    // modes of an alarm are never an attribute.
    for (const attribute of COMPUTED_LISTS) {
        if (!offered.includes(attribute) && offersSelectList(entityId, state, attribute)) offered.push(attribute);
    }
    return offered;
}

export function getSelectOptions(entityId, state, attribute) {
    if (entityId?.startsWith('input_select') || entityId?.startsWith('select')) return state.attributes.options;
    if (isFanDirection(entityId, state, attribute)) return FAN_DIRECTIONS;
    if (attribute === 'alarm_modes' && isAlarmPanel(entityId)) return getAlarmModes(state);
    return state.attributes[attribute];
}

// The name the editor shows for a list. The modes of an alarm have no attribute
// to be named after, so they take the word Home Assistant uses for them.
export function getSelectListLabel(hass, state, attribute) {
    if (attribute === 'alarm_modes') {
        return hass.localize?.('ui.card.alarm_control_panel.modes_label') || 'Modes';
    }
    return hass.formatEntityAttributeName(state, attribute);
}
