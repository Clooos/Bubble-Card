import { createBaseStructure } from "../../components/base-card/index.js";
import { addFeedback } from "../../tools/tap-actions.js";
import { createElement, getAttribute, forwardHaptic } from "../../tools/utils.js";
import { getClimateDomainConfig } from "./domains.js";
import { getDefaultStep, getTemperatureDecimals, formatTemperature } from "./helpers.js";
import styles from "./styles.css";

export function createStructure(context) {
    const cardType = 'climate';
    const domainConfig = getClimateDomainConfig(context.config.entity);
    
    const elements = createBaseStructure(context, {
        type: cardType,
        styles: styles,
        withSubButtons: true,
        iconActions: true,
        buttonActions: true
    });

    // The background element is new, whatever the previous card type had put on
    // the old one: its colour memo starts over with it.
    context.previousClimateBackground = undefined;

    elements.temperatureContainer = createElement('div', 'bubble-temperature-container');
    elements.targetTemperatureContainer = createElement('div', 'bubble-target-temperature-container');

    // Add backward compatibility
    elements.background.classList.add('bubble-color-background');
    
    elements.buttonsContainer.append(
        elements.temperatureContainer,
        elements.targetTemperatureContainer,
    );

    function createTemperatureControls(container, attribute, step) {
        const decimals = getTemperatureDecimals(context, step);
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

        // The main control reads whatever the domain calls its target, so the
        // element it writes into is picked from the range slot rather than from
        // the attribute name.
        let displayKey = 'tempDisplay';
        let displayClass = 'bubble-temperature-display';
        if (attribute === 'target_temp_low') {
            displayKey = 'lowTempDisplay';
            displayClass = 'bubble-low-temperature-display';
        } else if (attribute === 'target_temp_high') {
            displayKey = 'highTempDisplay';
            displayClass = 'bubble-high-temperature-display';
        }

        elements[displayKey] = createElement('div', `${displayClass} bubble-climate-temp-display`);
        const tempDisplay = elements[displayKey];

        container.appendChild(minusButton);
        container.appendChild(tempDisplay);
        container.appendChild(plusButton);

        let tempTimeout;
        let currentTemp = parseFloat(getAttribute(context, attribute)) || 0;
        let lastSyncedTemp = currentTemp;

        function updateTempDisplay(newTemp) {
            elements[displayKey].innerText = formatTemperature(newTemp, context, step);
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

            context._hass.callService(domainConfig.domain, domainConfig.setService, serviceData);
        }

        function adjustTemperature(change) {
            syncTemp();

            const stateNow = context._hass?.states?.[context.config.entity];
            const minTemp = context.config.min_temp ?? (stateNow?.attributes?.[domainConfig.minAttribute] ?? domainConfig.fallbackMin);
            const maxTemp = context.config.max_temp ?? (stateNow?.attributes?.[domainConfig.maxAttribute] ?? domainConfig.fallbackMax);
            let newTemp = parseFloat((currentTemp + change).toFixed(decimals));
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

    const state = context._hass?.states?.[context.config.entity];
    const defaultStep = context.config.step ?? (state?.attributes?.[domainConfig.stepAttribute] ?? getDefaultStep(context));

    createTemperatureControls(elements.temperatureContainer, domainConfig.target, defaultStep);

    elements.lowTempContainer = createElement('div', 'bubble-low-temp-container');
    createTemperatureControls(elements.lowTempContainer, 'target_temp_low', defaultStep);
    elements.targetTemperatureContainer.appendChild(elements.lowTempContainer);

    elements.highTempContainer = createElement('div', 'bubble-high-temp-container');
    createTemperatureControls(elements.highTempContainer, 'target_temp_high', defaultStep);
    elements.targetTemperatureContainer.appendChild(elements.highTempContainer);

    context.cardType = cardType;
}
