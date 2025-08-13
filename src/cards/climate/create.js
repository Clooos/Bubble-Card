import { createBaseStructure } from "../../components/base-card/index.js";
import { addFeedback } from "../../tools/tap-actions.js";
import { createElement, getAttribute, forwardHaptic } from "../../tools/utils.js";
import styles from "./styles.css";

export function createStructure(context) {
    const cardType = 'climate';
    
    const elements = createBaseStructure(context, {
        type: cardType,
        styles: styles,
        withSubButtons: true,
        iconActions: true,
        buttonActions: true
    });

    elements.temperatureContainer = createElement('div', 'bubble-temperature-container');
    elements.targetTemperatureContainer = createElement('div', 'bubble-target-temperature-container');

    // Add backward compatibility
    elements.background.classList.add('bubble-color-background');
    
    elements.buttonsContainer.append(
        elements.temperatureContainer,
        elements.targetTemperatureContainer,
    );

    function createTemperatureControls(container, attribute, step) {
        const minusButton = createElement('div', 'bubble-climate-minus-button');
        const plusButton = createElement('div', 'bubble-climate-plus-button');

        const minusIcon = createElement('ha-icon', 'bubble-climate-minus-button-icon');
        minusIcon.setAttribute("icon", "mdi:minus");
        minusButton.appendChild(minusIcon);
        minusButton.haRipple = createElement('ha-ripple'),
        minusButton.appendChild(minusButton.haRipple);
        addFeedback(minusButton);

        const plusIcon = createElement('ha-icon', 'bubble-climate-plus-button-icon');
        plusIcon.setAttribute("icon", "mdi:plus");
        plusButton.appendChild(plusIcon);
        plusButton.haRipple = createElement('ha-ripple'),
        plusButton.appendChild(plusButton.haRipple);
        addFeedback(plusButton);

        let tempDisplay;
        if (attribute === 'temperature') {
            elements.tempDisplay = createElement('div', 'bubble-temperature-display');
            tempDisplay = elements.tempDisplay;
        } else if (attribute === 'target_temp_low') {
            elements.lowTempDisplay = createElement('div', 'bubble-low-temperature-display');
            tempDisplay = elements.lowTempDisplay;
        } else if (attribute === 'target_temp_high') {
            elements.highTempDisplay = createElement('div', 'bubble-high-temperature-display');
            tempDisplay = elements.highTempDisplay;
        }

        container.appendChild(minusButton);
        container.appendChild(tempDisplay);
        container.appendChild(plusButton);

        let tempTimeout;
        let currentTemp = parseFloat(getAttribute(context, attribute)) || 0;
        let lastSyncedTemp = currentTemp;

        function updateTempDisplay(newTemp) {
            if (attribute === 'temperature') {
                elements.tempDisplay.innerText = newTemp.toFixed(1);
            } else if (attribute === 'target_temp_low') {
                elements.lowTempDisplay.innerText = newTemp.toFixed(1);
            } else if (attribute === 'target_temp_high') {
                elements.highTempDisplay.innerText = newTemp.toFixed(1);
            }
        }

        function syncTemp() {
            const latestTemp = parseFloat(getAttribute(context, attribute)) || 0;
            if (latestTemp !== lastSyncedTemp) {
                currentTemp = latestTemp;
                lastSyncedTemp = latestTemp;
            }
        }

        function callSetTemperature() {
            syncTemp();

            const serviceData = { entity_id: context.config.entity };

            if (attribute === 'target_temp_low') {
                serviceData.target_temp_low = currentTemp;
                serviceData.target_temp_high = getAttribute(context, 'target_temp_high');
            } else if (attribute === 'target_temp_high') {
                serviceData.target_temp_high = currentTemp;
                serviceData.target_temp_low = getAttribute(context, 'target_temp_low');
            } else {
                serviceData[attribute] = currentTemp;
            }

            context._hass.callService('climate', 'set_temperature', serviceData);
        }

        function adjustTemperature(change) {
            syncTemp();
            
            const stateNow = context._hass.states[context.config.entity];
            const minTemp = context.config.min_temp ?? (stateNow?.attributes?.min_temp ?? 0);
            const maxTemp = context.config.max_temp ?? (stateNow?.attributes?.max_temp ?? 1000);
            let newTemp = parseFloat((currentTemp + change).toFixed(1));
            newTemp = Math.min(maxTemp, Math.max(minTemp, newTemp));

            if (newTemp < minTemp) {
                newTemp = minTemp;
            } else if (newTemp > maxTemp) {
                newTemp = maxTemp;
            }
            
            if (newTemp !== currentTemp) {
                currentTemp = newTemp;
                updateTempDisplay(currentTemp);
                
                clearTimeout(tempTimeout);
                tempTimeout = setTimeout(callSetTemperature, 700);
            } else {
                forwardHaptic("failure");
                const climateContainer = context.elements.mainContainer;
                climateContainer.style.animation = 'tap-warning 0.4s cubic-bezier(.36,.07,.19,.97) both';
                setTimeout(() => {
                    climateContainer.style.animation = '';
                }, 500);
            }
        }

        minusButton.addEventListener('click', () => adjustTemperature(-step));
        plusButton.addEventListener('click', () => adjustTemperature(step));
    }

    const state = context._hass.states[context.config.entity];
    const isCelcius = context._hass.config.unit_system.temperature === '°C';
    const defaultStep = context.config.step ?? (state.attributes.target_temp_step ? state.attributes.target_temp_step : isCelcius ? 0.5 : 1);

    createTemperatureControls(elements.temperatureContainer, 'temperature', defaultStep);

    elements.lowTempContainer = createElement('div', 'bubble-low-temp-container');
    createTemperatureControls(elements.lowTempContainer, 'target_temp_low', defaultStep);
    elements.targetTemperatureContainer.appendChild(elements.lowTempContainer);

    elements.highTempContainer = createElement('div', 'bubble-high-temp-container');
    createTemperatureControls(elements.highTempContainer, 'target_temp_high', defaultStep);
    elements.targetTemperatureContainer.appendChild(elements.highTempContainer);

    context.cardType = cardType;
}
