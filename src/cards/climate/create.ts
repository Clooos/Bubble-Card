import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity, getState, getAttribute, isStateOn, forwardHaptic } from "../../tools/utils.ts";
import styles from "./styles.ts";

export function createStructure(context) {
    context.dragging = false;
    context.elements = {};

    const entity = context.config.entity;
    const state = context._hass.states[entity];
    const isCelcius = context._hass.config.unit_system.temperature === '°C';
    const defaultStep = isCelcius ? 0.5 : 1;

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

    context.elements.minusButton = createElement('div', 'bubble-climate-minus-button');
    context.elements.minusButtonIcon = createElement('ha-icon', 'bubble-climate-minus-button-icon');
    context.elements.minusButtonIcon.setAttribute("icon", "mdi:minus");
    context.elements.minusButton.appendChild(context.elements.minusButtonIcon);
    context.elements.minusButtonFeedbackContainer = createElement('div', 'bubble-feedback-container');
    context.elements.minusButtonFeedback = createElement('div', 'bubble-feedback-element');
    context.elements.minusButtonFeedbackContainer.appendChild(context.elements.minusButtonFeedback);
    context.elements.minusButton.appendChild(context.elements.minusButtonFeedbackContainer);
    addFeedback(context.elements.minusButton, context.elements.minusButtonFeedback);
    
    context.elements.plusButton = createElement('div', 'bubble-climate-plus-button');
    context.elements.plusButtonIcon = createElement('ha-icon', 'bubble-climate-plus-button-icon');
    context.elements.plusButtonIcon.setAttribute("icon", "mdi:plus");
    context.elements.plusButton.appendChild(context.elements.plusButtonIcon);
    context.elements.plusButtonFeedbackContainer = createElement('div', 'bubble-feedback-container');
    context.elements.plusButtonFeedback = createElement('div', 'bubble-feedback-element');
    context.elements.plusButtonFeedbackContainer.appendChild(context.elements.plusButtonFeedback);
    context.elements.plusButton.appendChild(context.elements.plusButtonFeedbackContainer);
    addFeedback(context.elements.plusButton, context.elements.plusButtonFeedback);

    context.elements.buttonContainer.appendChild(context.elements.minusButton);
    context.elements.buttonContainer.appendChild(context.elements.plusButton);

    context.elements.climateCard.appendChild(context.elements.colorBackground);
    context.elements.climateCard.appendChild(context.elements.iconContainer);
    context.elements.climateCard.appendChild(context.elements.nameContainer);
    context.elements.climateCard.appendChild(context.elements.buttonContainer);
    context.elements.climateContainer.appendChild(context.elements.climateCard);
    
    context.content.innerHTML = '';
    context.content.appendChild(context.elements.climateContainer);
    context.content.appendChild(context.elements.style);
    context.content.appendChild(context.elements.customStyle);

    addActions(context.elements.icon, context.config, context.config.entity);

        //     let currentMode = getState(context);
        // let currentTemp = state.attributes.temperature 
        //     ? getAttribute(context, "temperature")
        //     : currentMode === 'heat'
        //         ? getAttribute(context, "target_temp_high")
        //         : getAttribute(context, "target_temp_low");

    // context.elements.minusButton.addEventListener('click', () => {
    //     let currentTemp = getAttribute(context, "temperature");
    //     const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
    //     const minTemperature = state?.attributes?.min_temp ?? 0;
    //     const maxTemperature = state?.attributes?.max_temp ?? 1000;
    //     currentTemp = Math.max(minTemperature, currentTemp - temperatureStep);

    //     context._hass.callService('climate', 'set_temperature', {
    //         entity_id: context.config.entity,
    //         temperature: currentTemp
    //     });
    // });

    // context.elements.plusButton.addEventListener('click', () => {
    //     let currentTemp = getAttribute(context, "temperature");
    //     const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
    //     const minTemperature = state?.attributes?.min_temp ?? 0;
    //     const maxTemperature = state?.attributes?.max_temp ?? 1000;
    //     currentTemp = Math.min(maxTemperature, currentTemp + temperatureStep);
    //     currentTemp = parseFloat(currentTemp.toFixed(1));

    //     context._hass.callService('climate', 'set_temperature', {
    //         entity_id: context.config.entity,
    //         temperature: currentTemp
    //     });
    // });

    // context.elements.minusButton.addEventListener('click', () => {
    //     let tempAction = ""
    //     let currentTemp = getAttribute(context, "temperature");
    //     const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
    //     const minTemperature = state?.attributes?.min_temp ?? 0;
    //     const maxTemperature = state?.attributes?.max_temp ?? 1000;

    //     if (currentTemp === undefined) {

    //         const mode = getState(context);
    //         if (mode === 'heat') {
    //             currentTemp = getAttribute(context, "target_temp_low");

    //         } else if (mode === 'cool') {
    //             currentTemp = getAttribute(context, "target_temp_high");
    //         }
    //     }

    //     currentTemp = Math.max(minTemperature, currentTemp - temperatureStep);

    //     context._hass.callService('climate', 'set_temperature', {
    //         entity_id: context.config.entity,
    //         temperature: currentTemp
    //     });
    // });

    // context.elements.plusButton.addEventListener('click', () => {
    //     let currentTemp = getAttribute(context, "temperature");
    //     const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
    //     const minTemperature = state?.attributes?.min_temp ?? 0;
    //     const maxTemperature = state?.attributes?.max_temp ?? 1000;

    //     if (currentTemp === undefined) {
    //         const mode = getState(context);
    //         if (mode === 'heat') {
    //             currentTemp = getAttribute(context, "target_temp_low");
    //         } else if (mode === 'cool') {
    //             currentTemp = getAttribute(context, "target_temp_high");
    //         }
    //     }

    //     currentTemp = Math.min(maxTemperature, currentTemp + temperatureStep);
    //     currentTemp = parseFloat(currentTemp.toFixed(1));

    //     context._hass.callService('climate', 'set_temperature', {
    //         entity_id: context.config.entity,
    //         temperature: currentTemp
    //     });
    // });




    // context.elements.minusButton.addEventListener('click', () => {
    //     let currentTemp = getAttribute(context, "temperature");
    //     const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
    //     const minTemperature = state?.attributes?.min_temp ?? 0;
    //     const maxTemperature = state?.attributes?.max_temp ?? 1000;
    //     let serviceData = {
    //         entity_id: context.config.entity
    //     };

    //     if (currentTemp === undefined) {
    //         const mode = getState(context);
    //         if (mode === 'heat') {
    //             currentTemp = getAttribute(context, "target_temp_low");
    //             serviceData.target_temp_low = currentTemp;
    //         } else if (mode === 'cool') {
    //             currentTemp = getAttribute(context, "target_temp_high");
    //             serviceData.target_temp_high = currentTemp;
    //         }
    //     } else {
    //         currentTemp = Math.max(minTemperature, currentTemp - temperatureStep);
    //         serviceData.temperature = currentTemp;
    //     }

    //     context._hass.callService('climate', 'set_temperature', serviceData);
    // });

    // context.elements.plusButton.addEventListener('click', () => {
    //     let currentTemp = getAttribute(context, "temperature");
    //     const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
    //     const minTemperature = state?.attributes?.min_temp ?? 0;
    //     const maxTemperature = state?.attributes?.max_temp ?? 1000;
    //     let serviceData = {
    //         entity_id: context.config.entity
    //     };

    //     if (currentTemp === undefined) {
    //         const mode = getState(context);
    //         if (mode === 'heat') {
    //             currentTemp = getAttribute(context, "target_temp_low");
    //             serviceData.target_temp_low = currentTemp;
    //         } else if (mode === 'cool') {
    //             currentTemp = getAttribute(context, "target_temp_high");
    //             serviceData.target_temp_high = currentTemp;
    //         }
    //     } else {
    //         currentTemp = Math.min(maxTemperature, currentTemp + temperatureStep);
    //         currentTemp = parseFloat(currentTemp.toFixed(1));
    //         serviceData.temperature = currentTemp;
    //     }

    //     context._hass.callService('climate', 'set_temperature', serviceData);
    // });


    context.elements.minusButton.addEventListener('click', () => {
        let currentTemp = getAttribute(context, "temperature");
        const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
        const minTemperature = state?.attributes?.min_temp ?? 0;
        const maxTemperature = state?.attributes?.max_temp ?? 1000;
        let serviceData = {
            entity_id: context.config.entity
        };

        if (currentTemp === undefined) {
            const mode = getState(context);
            if (mode === 'heat') {
                currentTemp = getAttribute(context, "target_temp_low");
                currentTemp = Math.max(minTemperature, currentTemp - temperatureStep);
                serviceData.target_temp_low = currentTemp;
            } else if (mode === 'cool') {
                currentTemp = getAttribute(context, "target_temp_high");
                currentTemp = Math.max(minTemperature, currentTemp - temperatureStep);
                serviceData.target_temp_high = currentTemp;
            }
        } else {
            currentTemp = Math.max(minTemperature, currentTemp - temperatureStep);
            serviceData.temperature = currentTemp;
        }

        context._hass.callService('climate', 'set_temperature', serviceData);
    });

    context.elements.plusButton.addEventListener('click', () => {
        let currentTemp = getAttribute(context, "temperature");
        const temperatureStep = state?.attributes?.target_temp_step ?? defaultStep;
        const minTemperature = state?.attributes?.min_temp ?? 0;
        const maxTemperature = state?.attributes?.max_temp ?? 1000;
        let serviceData = {
            entity_id: context.config.entity
        };

        if (currentTemp === undefined) {
            const mode = getState(context);
            if (mode === 'heat') {
                currentTemp = getAttribute(context, "target_temp_low");
                currentTemp = Math.min(maxTemperature, currentTemp + temperatureStep);
                currentTemp = parseFloat(currentTemp.toFixed(1));
                serviceData.target_temp_low = currentTemp;
            } else if (mode === 'cool') {
                currentTemp = getAttribute(context, "target_temp_high");
                currentTemp = Math.min(maxTemperature, currentTemp + temperatureStep);
                currentTemp = parseFloat(currentTemp.toFixed(1));
                serviceData.target_temp_high = currentTemp;
            }
        } else {
            currentTemp = Math.min(maxTemperature, currentTemp + temperatureStep);
            currentTemp = parseFloat(currentTemp.toFixed(1));
            serviceData.temperature = currentTemp;
        }

        context._hass.callService('climate', 'set_temperature', serviceData);
    });


    context.cardType = `climate`;
}
