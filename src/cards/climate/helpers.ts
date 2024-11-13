import { 
    throttle, 
    getAttribute,
    isEntityType
} from "../../tools/utils.ts";

// export function getClimateColor(state) {
//     let overlayColor = '';

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
//         case "heat_cool":
//             overlayColor = 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         case "dry":
//             overlayColor = 'var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         case "auto":
//             overlayColor = 'var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color)))';
//             break;
//         default:
//             overlayColor = 'rgba(0, 0, 0, 0)';
//             break;
//     }

//     return overlayColor;
// }

export function getClimateColor(stateObj) {
    let overlayColor = '';

    // Récupération des températures actuelles et cibles
    const currentTemp = stateObj.attributes.current_temperature;
    const targetTemp = stateObj.attributes.temperature;
    const targetTempLow = stateObj.attributes.target_temp_low;
    const targetTempHigh = stateObj.attributes.target_temp_high;
    const state = stateObj.state;

    // Gestion des couleurs en fonction de l'état et des valeurs de température
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
        case "dry":
            overlayColor = 'var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "auto":
            overlayColor = 'var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color)))';
            break;
        case "heat_cool":
            // Logique dynamique pour le mode heat_cool
            if (currentTemp !== undefined) {
                // Cas avec l'attribut 'temperature'
                if (targetTemp !== undefined) {
                    overlayColor = currentTemp > targetTemp
                        ? 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))'
                        : 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))';
                }
                // Cas sans 'temperature' mais avec 'target_temp_low' et 'target_temp_high'
                else if (targetTempLow !== undefined && targetTempHigh !== undefined) {
                    overlayColor = currentTemp > targetTempHigh
                        ? 'var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)))'
                        : (currentTemp < targetTempLow
                            ? 'var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)))'
                            : 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))');
                } else {
                    // Si aucune température cible n'est définie, couleur par défaut pour heat_cool
                    overlayColor = 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
                }
            } else {
                // Pas de température courante, couleur par défaut pour heat_cool
                overlayColor = 'var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color)))';
            }
            break;
        default:
            overlayColor = 'rgba(0, 0, 0, 0)';
            break;
    }

    return overlayColor;
}
