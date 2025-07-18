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
    const isHeating = hvacAction === 'heating' || state === "heat";
    const isCooling = hvacAction === 'cooling' || state === "cool";
    const isOn = state !== "off" && state !== "unknown";

    if (context.config.state_color) {
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
                } else if (isOn) {
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
    } else {
        overlayColor = '';
    }

    return overlayColor;
}
