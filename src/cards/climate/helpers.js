import { getClimateDomainConfig } from './domains.js';
import { 
    throttle, 
    getAttribute,
    isEntityType,
    formatNumericValue,
    getTemperatureUnit
} from "../../tools/utils.js";

// var(--a, var(--b, fallback)) from a list of names, outermost first.
function cssVarChain(names, fallback) {
    return names.reduceRight((inner, name) => `var(${name}, ${inner})`, fallback);
}

// A state or a device class reaches this as the name of a CSS variable, so
// anything an integration could put in there is reduced to what a variable name
// may hold.
function cssSafe(value) {
    return String(value).replace(/[^a-zA-Z0-9_]/g, '_');
}

// Home Assistant colours a humidifier by its device class first, then by its
// plain "on". The action attribute plays the part hvac_action plays for a
// thermostat: it is the one signal saying the entity is working right now, so it
// colours the card even when state_color is off.
function getHumidifierColor(context, stateObj) {
    const action = stateObj.attributes.action;
    const isWorking = action === 'humidifying' || action === 'drying';

    if (!isWorking && !(stateObj.state === 'on' && context.config.state_color)) return '';

    const deviceClass = stateObj.attributes.device_class;
    const names = [];
    if (deviceClass) {
        const dc = cssSafe(deviceClass);
        names.push(`--bubble-state-humidifier-${dc}-on-color`, `--state-humidifier-${dc}-on-color`);
    }
    names.push(
        '--bubble-state-humidifier-on-color',
        '--state-humidifier-on-color',
        '--state-humidifier-active-color'
    );

    return cssVarChain(names, 'var(--state-active-color)');
}

// A water heater reports no equivalent of hvac_action, so there is nothing that
// says it is heating right now: its operation mode is all there is, and it only
// colours the card when state_color asks for it.
function getWaterHeaterColor(context, stateObj) {
    const state = stateObj.state;
    const isOn = state !== 'off' && state !== 'unknown' && state !== 'unavailable';

    if (!isOn || !context.config.state_color) return '';

    const mode = cssSafe(state);

    return cssVarChain([
        `--bubble-state-water_heater-${mode}-color`,
        `--state-water_heater-${mode}-color`,
        '--state-water_heater-active-color',
    ], 'var(--state-active-color)');
}

export function getClimateColor(context) {
    let overlayColor = '';

    const stateObj = context._hass?.states?.[context.config.entity];
    if (!stateObj?.attributes) return '';

    const domainConfig = getClimateDomainConfig(context.config.entity);
    if (domainConfig.domain === 'humidifier') return getHumidifierColor(context, stateObj);
    if (domainConfig.domain === 'water_heater') return getWaterHeaterColor(context, stateObj);

    const hvacAction = stateObj.attributes.hvac_action;
    const state = stateObj.state;
    const isHeating = hvacAction === 'heating' || (state === "heat" && context.config.state_color);
    const isCooling = hvacAction === 'cooling' || (state === "cool" && context.config.state_color);
    const isOn = state !== "off" && state !== "unknown";

    switch (state) {
        case "fan_only":
            overlayColor = 'var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))';
            break;
        case "dry":
            overlayColor = 'var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))';
            break;
        default:
            if (isCooling) {
                overlayColor = 'var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))';
            } else if (isHeating) {
                overlayColor = 'var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))';
            } else if (isOn && context.config.state_color) {
                if (state === 'auto') {
                    overlayColor = 'var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))';
                } else if (state === "heat_cool") {
                    overlayColor = 'var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))';
                } else {
                    overlayColor = 'var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))';
                }
            } else {
                overlayColor = '';
            }
            break;
    }

    return overlayColor;
}

// Half a degree is a sensible smallest move on a Celsius thermostat and a whole
// one everywhere else; a humidity is always whole percents.
export function getDefaultStep(context) {
    const domainConfig = getClimateDomainConfig(context.config.entity);
    if (domainConfig.step !== undefined) return domainConfig.step;
    return context._hass?.config?.unit_system?.temperature === '°C' ? 0.5 : 1;
}

export function getTemperatureDecimals(context, stepOverride) {
    const stateObj = context._hass?.states?.[context.config.entity];
    const domainConfig = getClimateDomainConfig(context.config.entity);
    const effectiveStep = stepOverride ?? context.config.step ?? (stateObj?.attributes?.[domainConfig.stepAttribute] ?? getDefaultStep(context));
    return Number.isInteger(Number(effectiveStep)) ? 0 : 1;
}

export function formatTemperature(value, context, stepOverride) {
    const decimals = getTemperatureDecimals(context, stepOverride);
    const domainConfig = getClimateDomainConfig(context.config.entity);
    const unit = domainConfig.unit ?? getTemperatureUnit(context._hass);
    const locale = context._hass?.locale?.language || 'en-US';
    return formatNumericValue(value, decimals, unit, locale);
}
