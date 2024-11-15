import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.ts";

// export function getClimateColor(stateObj) {
//     let overlayColor = '';

//     // Récupération des températures actuelles et cibles
//     const currentTemp = stateObj.attributes.current_temperature;
//     const targetTemp = stateObj.attributes.temperature;
//     const targetTempLow = stateObj.attributes.target_temp_low;
//     const targetTempHigh = stateObj.attributes.target_temp_high;
//     const state = stateObj.state;

//     switch (state) {
//         case "heat":
//             overlayColor = 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         case "cool":
//             overlayColor = 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         case "fan_only":
//             overlayColor = 'var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         case "dry":
//             overlayColor = 'var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         case "auto":
//             overlayColor = 'var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         case "heat_cool":
//             if (currentTemp !== undefined) {
//                 if (targetTemp !== undefined) {
//                     overlayColor = currentTemp > targetTemp
//                         ? 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))'
//                         : 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))';
//                 }
//                 else if (targetTempLow !== undefined && targetTempHigh !== undefined) {
//                     overlayColor = currentTemp > targetTempHigh
//                         ? 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))'
//                         : (currentTemp < targetTempLow
//                             ? 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))'
//                             : 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))');
//                 } else {
//                     overlayColor = 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
//                 }
//             } else {
//                 overlayColor = 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
//             }
//             break;
//         default:
//             overlayColor = 'rgba(0, 0, 0, 0)';
//             break;
//     }

//     return overlayColor;
// }

export function getClimateColor(stateObj) {
    let overlayColor = '';

    const currentTemp = stateObj.attributes.current_temperature;
    const targetTemp = stateObj.attributes.temperature;
    const targetTempLow = stateObj.attributes.target_temp_low;
    const targetTempHigh = stateObj.attributes.target_temp_high;
    const state = stateObj.state;

    const isHeating = targetTemp !== undefined ? currentTemp < targetTemp : currentTemp < targetTempLow;
    const isCooling = targetTemp !== undefined ? currentTemp > targetTemp : currentTemp > targetTempHigh;

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
            if (currentTemp !== undefined) {
                if (isCooling) {
                    overlayColor = 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
                } else if (isHeating) {
                    overlayColor = 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))';
                } else {
                    overlayColor = 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
                }
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
