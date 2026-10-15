// The modes of an alarm control panel, as Home Assistant lists them in
// src/data/alarm_control_panel.ts. Which ones a panel supports, the service
// behind each, and when a code has to be typed first. No imports, like lists.js.

export const ALARM_MODES = {
    armed_home: { feature: 1, service: 'alarm_arm_home', icon: 'mdi:home' },
    armed_away: { feature: 2, service: 'alarm_arm_away', icon: 'mdi:lock' },
    armed_night: { feature: 4, service: 'alarm_arm_night', icon: 'mdi:moon-waning-crescent' },
    armed_vacation: { feature: 32, service: 'alarm_arm_vacation', icon: 'mdi:airplane' },
    armed_custom_bypass: { feature: 16, service: 'alarm_arm_custom_bypass', icon: 'mdi:shield' },
    disarmed: { service: 'alarm_disarm', icon: 'mdi:shield-off' },
};

export function isAlarmPanel(entityId) {
    return entityId?.split('.')[0] === 'alarm_control_panel';
}

// Disarmed is always there, every other mode only if the panel supports it.
export function getAlarmModes(state) {
    const supported = state?.attributes?.supported_features ?? 0;
    return Object.keys(ALARM_MODES).filter((mode) => {
        const { feature } = ALARM_MODES[mode];
        return !feature || (supported & feature) !== 0;
    });
}

// Disarming asks for the code whenever the panel has one. Arming asks for it
// only when the panel says so.
export function needsAlarmCode(state, mode) {
    const format = state?.attributes?.code_format;
    if (!format) return false;
    return mode === 'disarmed' || Boolean(state.attributes.code_arm_required);
}

// A code made of digits fits a keypad. One with letters does not.
export function hasNumericAlarmCode(state) {
    return state?.attributes?.code_format === 'number';
}

export const ALARM_MODE_LABELS = {
    armed_home: 'Home',
    armed_away: 'Away',
    armed_night: 'Night',
    armed_vacation: 'Vacation',
    armed_custom_bypass: 'Custom Bypass',
    disarmed: 'Disarmed',
    arming: 'Arming',
    pending: 'Pending',
    triggered: 'Triggered',
};

export function formatAlarmMode(hass, state, mode = state?.state) {
    const rawMode = typeof mode === 'string' ? mode : (state?.state || '');
    if (!rawMode) return '';
    const localized = hass?.localize?.(`ui.card.alarm_control_panel.modes.${rawMode}`)
        || hass?.localize?.(`component.alarm_control_panel.entity_component._.state.${rawMode}`)
        || hass?.localize?.(`ui.card.alarm_control_panel.${rawMode}`);
    if (localized) return localized;
    const formatted = typeof hass?.formatEntityState === 'function' ? hass.formatEntityState(state, rawMode) : null;
    if (formatted && formatted !== rawMode) return formatted;
    if (ALARM_MODE_LABELS[rawMode]) return ALARM_MODE_LABELS[rawMode];
    const cleaned = rawMode.replace(/_/g, ' ');
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

