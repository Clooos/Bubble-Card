import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.ts";

export function getClimateColor(state) {
    let overlayColor = '';

    switch (state) {
        case "heat":
            overlayColor = 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "cool":
            overlayColor = 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "fan_only":
            overlayColor = 'var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "heat_cool":
            overlayColor = 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "dry":
            overlayColor = 'var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "auto":
            overlayColor = 'var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        default:
            overlayColor = 'rgba(0, 0, 0, 0)';
            break;
    }

    return overlayColor;
}