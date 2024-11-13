import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, getState, getAttribute, isStateOn, forwardHaptic } from "../../tools/utils.ts";
import styles from "./styles.ts";

export function createStructure(context) {
    context.dragging = false;
    context.elements = {};

    const entity = context.config.entity;
    const state = context._hass.states[entity];
    const isCelcius = context._hass.config.unit_system.temperature === '°C';
    const defaultStep = state.attributes.target_temp_step ? state.attributes.target_temp_step : isCelcius ? 0.5 : 1;

    context.elements.climateContainer = createElement('div', 'bubble-climate-container');
    context.elements.climateCard = createElement('div', 'bubble-climate');
    context.elements.buttonContainer = createElement('div', 'bubble-button-container');
    context.elements.nameContainer = createElement('div', 'bubble-name-container');
    context.elements.iconContainer = createElement('div', 'bubble-icon-container');

    context.elements.name = createElement('div', 'bubble-name');
    context.elements.state = createElement('div', 'bubble-state');
    context.elements.icon = createElement('ha-icon', 'bubble-icon');
    context.elements.colorBackground = createElement('div', 'bubble-color-background');
    context.elements.style = createElement('style');
    context.elements.customStyle = createElement('style');
    context.elements.style.innerText = styles;

    context.elements.iconContainer.appendChild(context.elements.icon);
    context.elements.nameContainer.appendChild(context.elements.name);
    context.elements.nameContainer.appendChild(context.elements.state);

    function createTemperatureControls(container, attribute, step) {
        const minusButton = createElement('div', 'bubble-climate-minus-button');
        const plusButton = createElement('div', 'bubble-climate-plus-button');

        const minusIcon = createElement('ha-icon', 'bubble-climate-minus-button-icon');
        minusIcon.setAttribute("icon", "mdi:minus");
        minusButton.appendChild(minusIcon);
        addFeedback(minusButton);

        const plusIcon = createElement('ha-icon', 'bubble-climate-plus-button-icon');
        plusIcon.setAttribute("icon", "mdi:plus");
        plusButton.appendChild(plusIcon);
        addFeedback(plusButton);

        let tempDisplay;
        if (attribute === 'temperature') {
            context.elements.tempDisplay = createElement('div', 'bubble-temperature-display');
            tempDisplay = context.elements.tempDisplay;
        } else if (attribute === 'target_temp_low') {
            context.elements.lowTempDisplay = createElement('div', 'bubble-low-temperature-display');
            tempDisplay = context.elements.lowTempDisplay;
        } else if (attribute === 'target_temp_high') {
            context.elements.highTempDisplay = createElement('div', 'bubble-high-temperature-display');
            tempDisplay = context.elements.highTempDisplay;
        }

        container.appendChild(minusButton);
        container.appendChild(tempDisplay);
        container.appendChild(plusButton);

        minusButton.addEventListener('click', () => {
            let currentTemp = parseFloat(getAttribute(context, attribute)) || 0;
            currentTemp = parseFloat((currentTemp - step).toFixed(1));
            adjustTemperature(attribute, currentTemp);
        });

        plusButton.addEventListener('click', () => {
            let currentTemp = parseFloat(getAttribute(context, attribute)) || 0;
            currentTemp = parseFloat((currentTemp + step).toFixed(1));
            adjustTemperature(attribute, currentTemp);
        });
    }

    function adjustTemperature(attribute, newTemp) {
        const serviceData = { entity_id: context.config.entity };

        if (attribute === 'target_temp_low') {
            serviceData.target_temp_low = newTemp;
            serviceData.target_temp_high = getAttribute(context, 'target_temp_high');
        } else if (attribute === 'target_temp_high') {
            serviceData.target_temp_high = newTemp;
            serviceData.target_temp_low = getAttribute(context, 'target_temp_low');
        } else {
            serviceData[attribute] = newTemp;
        }

        context._hass.callService('climate', 'set_temperature', serviceData);
    }

    const hasTargetTempLow = state?.attributes?.target_temp_low !== undefined;
    const hasTargetTempHigh = state?.attributes?.target_temp_high !== undefined;
    const hasTemperature = state?.attributes?.temperature !== undefined;

    if (hasTemperature) {
        context.elements.temperatureContainer = createElement('div', 'bubble-temperature-container');
        createTemperatureControls(context.elements.temperatureContainer, 'temperature', defaultStep);
        context.elements.buttonContainer.appendChild(context.elements.temperatureContainer);
    }

    if (hasTargetTempLow || hasTargetTempHigh) {
        context.elements.targetTemperatureContainer = createElement('div', 'bubble-target-temperature-container');

        if (hasTargetTempLow) {
            context.elements.lowTempContainer = createElement('div', 'bubble-low-temp-container');
            createTemperatureControls(context.elements.lowTempContainer, 'target_temp_low', defaultStep);
            context.elements.targetTemperatureContainer.appendChild(context.elements.lowTempContainer);
        }

        if (hasTargetTempHigh) {
            context.elements.highTempContainer = createElement('div', 'bubble-high-temp-container');
            createTemperatureControls(context.elements.highTempContainer, 'target_temp_high', defaultStep);
            context.elements.targetTemperatureContainer.appendChild(context.elements.highTempContainer);
        }

        context.elements.buttonContainer.appendChild(context.elements.targetTemperatureContainer);
    }

    context.elements.climateCard.appendChild(context.elements.iconContainer);
    context.elements.climateCard.appendChild(context.elements.nameContainer);
    context.elements.climateCard.appendChild(context.elements.buttonContainer);

    context.elements.climateContainer.appendChild(context.elements.colorBackground);
    context.elements.climateContainer.appendChild(context.elements.climateCard);

    context.content.innerHTML = '';
    context.content.appendChild(context.elements.climateContainer);
    context.content.appendChild(context.elements.style);
    context.content.appendChild(context.elements.customStyle);

    addActions(context.elements.icon, context.config, context.config.entity);

    context.cardType = `climate`;
}