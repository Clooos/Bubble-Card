// Turns the items of a `state_content` list into the text of a state line,
// for the card and for its sub-buttons alike. Each item renders the way Home
// Assistant renders it on its tile card, with what Bubble Card already had on
// top: attribute paths, the weather forecast units, and templates.

import {
    getAttribute,
    formatDateTime,
    isTimerEntity,
    timerTimeRemaining,
    computeDisplayTimer,
    formatNumericValue,
    getTemperatureUnit,
} from '../../tools/utils.js';
import { resolveTemplate } from '../../tools/render-template.js';
import { isTemplate } from '../../tools/jinja.js';
import {
    HIDDEN_ZERO_ATTRIBUTES_DOMAINS,
    TIMESTAMP_CONTENTS,
    TIMESTAMP_DOMAIN_CONTENTS,
    domainOf,
} from '../../tools/state-content.js';
import { isAlarmPanel, formatAlarmMode } from '../dropdown/alarm.js';

const CONTEXT_NAMES = { device_name: 'device', area_name: 'area', floor_name: 'floor' };

// What a state line is formatted with, as Home Assistant's own cards compare it
// before rewriting one (hasConfigChanged and hasConfigOrEntityChanged, in
// panels/lovelace/common/has-changed.ts). Home Assistant replaces its
// formatters once the translations and the registries are loaded, so a line
// written before them shows the raw state until it is written again.
export function stateLineFormatting(hass, entityId) {
    return {
        locale: hass?.locale,
        localize: hass?.localize,
        formatEntityState: hass?.formatEntityState,
        formatEntityAttributeName: hass?.formatEntityAttributeName,
        formatEntityAttributeValue: hass?.formatEntityAttributeValue,
        displayPrecision: hass?.entities?.[entityId]?.display_precision,
    };
}

export function stateLineFormattingChanged(previous, hass, entityId) {
    return !previous ||
        previous.locale !== hass?.locale ||
        previous.localize !== hass?.localize ||
        previous.formatEntityState !== hass?.formatEntityState ||
        previous.formatEntityAttributeName !== hass?.formatEntityAttributeName ||
        previous.formatEntityAttributeValue !== hass?.formatEntityAttributeValue ||
        previous.displayPrecision !== hass?.entities?.[entityId]?.display_precision;
}

function capitalize(text) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function isMissing(value) {
    return value === null || value === undefined || value === '' || value === 'unknown' || value === 'unavailable';
}

// A weather forecast value carries no unit of its own, the card adds the one
// of the installation.
function formatForecastAttribute(hass, name, value) {
    if (isMissing(value)) return '';
    const locale = hass?.locale?.language || 'en-US';
    const number = parseFloat(value);
    if (Number.isNaN(number)) return String(value);
    if (name.includes('temperature')) return formatNumericValue(number, number === 0 ? 0 : 1, getTemperatureUnit(hass), locale);
    if (name.includes('humidity')) return formatNumericValue(number, 0, '%', locale);
    if (name.includes('precipitation')) return formatNumericValue(number, 1, 'mm', locale);
    if (name.includes('wind_speed')) {
        const metric = hass?.config?.unit_system?.length === 'km';
        return formatNumericValue(number, 1, metric ? 'km/h' : 'mph', locale);
    }
    return String(value);
}

function relativeTime(hass, value, capitalizeTimes) {
    if (isMissing(value)) return '';
    const text = formatDateTime(value, hass?.locale?.language);
    return capitalizeTimes ? capitalize(text) : text;
}

function timerText(hass, state) {
    return computeDisplayTimer(hass, state, timerTimeRemaining(state)) || '';
}

// The dates a line ages with, so the caller can beat at the right pace.
export function stateContentTimestamps(content, state, entityId) {
    const out = [];
    if (!content || !state) return out;
    const domainTimestamps = TIMESTAMP_DOMAIN_CONTENTS[domainOf(entityId)];
    for (const item of content) {
        let value;
        if (item === 'last_changed' || item === 'last_updated') value = state[item];
        else if (item === 'last_triggered') value = state.attributes?.last_triggered;
        else if (domainTimestamps && domainTimestamps.includes(item)) {
            value = state.attributes?.[item];
            if (item === 'timestamp' && typeof value === 'number') value = value * 1000;
        }
        if (!isMissing(value)) out.push(value);
    }
    return out;
}

// One item as text, empty when it has nothing to show.
export function renderStateItem(context, entityId, item, options = {}) {
    const hass = context._hass;
    const state = hass?.states?.[entityId];

    if (item === 'state') {
        if (!state) return '';
        if (context?._alarmCountdown !== null && context?._alarmCountdown !== undefined && context._alarmCountdown > 0 && isAlarmPanel(entityId) && (state.state === 'arming' || state.state === 'pending')) {
            const stateLabel = formatAlarmMode(hass, state) || (state.state === 'arming' ? 'Arming' : 'Pending');
            return `${stateLabel} (${context._alarmCountdown}s)`;
        }
        if (isAlarmPanel(entityId)) {
            return formatAlarmMode(hass, state);
        }
        return isTimerEntity(entityId) ? timerText(hass, state) : hass.formatEntityState(state);
    }
    if (item === 'name') return options.name ?? '';
    if (item === 'entity-id') return entityId ?? '';
    if (isTemplate(item)) return resolveTemplate(context, item, entityId, true);
    if (!state) return '';

    if (item === 'remaining_time' && isTimerEntity(entityId)) return timerText(hass, state);
    if (item === 'install_status') return hass.formatEntityState(state);
    if (CONTEXT_NAMES[item]) {
        return typeof hass.formatEntityName === 'function'
            ? (hass.formatEntityName(state, { type: CONTEXT_NAMES[item] }) || '')
            : '';
    }
    if (item === 'last_changed' || item === 'last_updated') return relativeTime(hass, state[item], options.capitalizeTimes);
    if (item === 'last_triggered') return relativeTime(hass, state.attributes?.last_triggered, options.capitalizeTimes);
    const domain = domainOf(entityId);
    const domainTimestamps = TIMESTAMP_DOMAIN_CONTENTS[domain];
    if (domainTimestamps && domainTimestamps.includes(item)) {
        let value = state.attributes?.[item];
        if (item === 'timestamp' && typeof value === 'number') value = value * 1000;
        return relativeTime(hass, value, options.capitalizeTimes);
    }

    const raw = getAttribute(context, item, entityId);
    if (isMissing(raw)) return '';
    if (HIDDEN_ZERO_ATTRIBUTES_DOMAINS[domain]?.includes(item) && Number(raw) === 0) return '';
    if (item.includes('forecast')) return formatForecastAttribute(hass, item, raw);
    // A path into an attribute has no formatter of its own.
    if (item.includes('[') || item.includes('.')) return String(raw);

    if (isAlarmPanel(entityId) && (item === 'arm_mode' || item === 'alarm_modes' || (typeof raw === 'string' && (raw.startsWith('armed_') || raw === 'disarmed' || raw === 'arming' || raw === 'pending')))) {
        if (context?._alarmCountdown !== null && context?._alarmCountdown !== undefined && context._alarmCountdown > 0 && (state?.state === 'arming' || state?.state === 'pending')) {
            const stateLabel = formatAlarmMode(hass, state) || (state?.state === 'arming' ? 'Arming' : 'Pending');
            return `${stateLabel} (${context._alarmCountdown}s)`;
        }
        return formatAlarmMode(hass, state, raw);
    }

    const formatted = typeof hass.formatEntityAttributeValue === 'function' ? hass.formatEntityAttributeValue(state, item) : undefined;
    return formatted === undefined || formatted === null ? String(raw) : String(formatted);
}

// The parts of the line, empty ones left out. A list that asked for something
// and got nothing shows the state, like Home Assistant does, so an off light
// asked for its brightness reads "Off".
export function renderStateLine(context, entityId, content, options = {}) {
    if (!content || content.length === 0) return [];
    const parts = [];
    for (const item of content) {
        const text = renderStateItem(context, entityId, item, options);
        if (text) parts.push(text);
    }
    if (parts.length === 0) {
        const state = context._hass?.states?.[entityId];
        if (state) {
            if (context?._alarmCountdown !== null && context?._alarmCountdown !== undefined && context._alarmCountdown > 0 && isAlarmPanel(entityId) && (state.state === 'arming' || state.state === 'pending')) {
                const stateLabel = formatAlarmMode(context._hass, state) || (state.state === 'arming' ? 'Arming' : 'Pending');
                parts.push(`${stateLabel} (${context._alarmCountdown}s)`);
            } else if (isAlarmPanel(entityId)) {
                parts.push(formatAlarmMode(context._hass, state));
            } else {
                parts.push(isTimerEntity(entityId) ? timerText(context._hass, state) : context._hass.formatEntityState(state));
            }
        }
    }
    return parts;
}
