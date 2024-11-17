import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.ts";

export function getClimateColor(stateObj) {
    let overlayColor = '';

    const currentTemp = stateObj.attributes.current_temperature;
    const hvacAction = stateObj.attributes.hvac_action;
    const state = stateObj.state;

    const isHeating = hvacAction === 'heating';
    const isCooling = hvacAction === 'cooling';

    switch (state) {
        case "heat":
            overlayColor = isHeating
                ? 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))'
                : '';
            break;
        case "cool":
            overlayColor = isCooling
                ? 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))'
                : '';
            break;
        case "heat_cool":
            if (isCooling) {
                overlayColor = 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
            } else if (isHeating) {
                overlayColor = 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))';
            } else {
                overlayColor = '';
            }
            break;
        case "fan_only":
            overlayColor = 'var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "dry":
            overlayColor = 'var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "auto":
            overlayColor = 'var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        default:
            overlayColor = '';
            break;
    }

    return overlayColor;
}
