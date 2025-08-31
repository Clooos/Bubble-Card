import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.js";

export function getClimateColor(context) {
    let overlayColor = '';

    const stateObj = context._hass.states[context.config.entity];
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

export function getTemperatureDecimals(context, stepOverride) {
    const hass = context._hass;
    const stateObj = hass?.states?.[context.config.entity];
    const isCelcius = hass?.config?.unit_system?.temperature === '°C';
    const effectiveStep = stepOverride ?? context.config.step ?? (stateObj?.attributes?.target_temp_step ?? (isCelcius ? 0.5 : 1));
    return Number.isInteger(Number(effectiveStep)) ? 0 : 1;
}

export function formatTemperature(value, context, stepOverride) {
    const decimals = getTemperatureDecimals(context, stepOverride);
    const num = Number(value);
    if (Number.isNaN(num)) return '';
    return num.toFixed(decimals);
}
