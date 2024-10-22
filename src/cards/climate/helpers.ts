import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.ts";

export function getClimateColor(state) {
    let overlayColor = '';

    switch (state) {
        case "heat":
            overlayColor = 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color, rgb(255, 0, 0))))';
            break;
        case "cool":
            overlayColor = 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color, rgb(0, 140, 255))))';
            break;
        case "fan_only":
            overlayColor = 'var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color, rgb(0, 255, 0))))';
            break;
        case "auto":
            overlayColor = 'var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color, rgb(255, 255, 0))))';
            break;
        default:
            overlayColor = 'rgba(0, 0, 0, 0)';
            break;
    }

    return overlayColor;
}