import { initializesubButtonIcon } from '../../tools/global-changes.ts';
import { 
    getClimateColor, 
    getHvacModeIcon, 
    getFanModeIcon, 
    createHaAttributeIcon 
} from './helpers.ts';
import { 
    applyScrollingEffect,
    getIcon,
    getIconColor,
    getImage,
    getName,
    getState,
    getAttribute,
    getWeatherIcon,
    isEntityType,
    isStateOn,
    setLayout
} from '../../tools/utils.ts';

export function changeIcon(context) {
    const isOn = isStateOn(context);
    const icon = getIcon(context);
    const state = getState(context);
    const stateObj = context._hass.states[context.config.entity];

    if (icon !== '') {
        context.elements.icon.icon = icon;
        context.elements.icon.style.color = isOn ? getClimateColor(stateObj) : 'inherit';
        context.elements.icon.style.display = '';
    } else {
        context.elements.icon.style.display = 'none';
    }
}

export function changeName(context) {
    const name = getName(context);

    if (name !== context.previousName && context.elements.name) {
        context.elements.name.innerText = name;
        context.previousName = name;
        applyScrollingEffect(context, context.elements.name, name);
    }
}

export function changeStatus(context) {
    const state = getState(context);

    if (state === 'unavailable') {
        context.card.classList.add('is-unavailable');
    } else {
        context.card.classList.remove('is-unavailable');
    }

    if (isStateOn(context)) {
        context.card.classList.add('is-on');
    } else {
        context.card.classList.remove('is-on');
    }
}

export function changeTemperature(context) {
    const temperature = getAttribute(context, "temperature");

    if (temperature === '') {
        context.elements.temperatureContainer?.classList.add('hidden');
    } else {
        context.elements.temperatureContainer?.classList.remove('hidden');
    }

    if (temperature !== context.previousTemp) {
        context.previousTemp = temperature;
        if (context.elements.tempDisplay) {
            context.elements.tempDisplay.innerText = parseFloat(temperature).toFixed(1);
        }
    }
}

export function changeTargetTempLow(context) {
    const targetTempLow = getAttribute(context, "target_temp_low");

    if (targetTempLow === '') {
        context.elements.targetTemperatureContainer?.classList.add('hidden');
    } else {
        context.elements.targetTemperatureContainer?.classList.remove('hidden');
    }

    if (targetTempLow !== context.previousTargetTempLow) {
        context.previousTargetTempLow = targetTempLow;
        if (context.elements.lowTempDisplay) {
            context.elements.lowTempDisplay.innerText = parseFloat(targetTempLow).toFixed(1);
        }
    }
}

export function changeTargetTempHigh(context) {
    const targetTempHigh = getAttribute(context, "target_temp_high");
    if (targetTempHigh !== context.previousTargetTempHigh) {
        context.previousTargetTempHigh = targetTempHigh;
        if (context.elements.highTempDisplay) {
            context.elements.highTempDisplay.innerText = parseFloat(targetTempHigh).toFixed(1);
        }
    }
}

export function changeStyle(context) {
    initializesubButtonIcon(context);
    setLayout(context);

    const stateObj = context._hass.states[context.config.entity];
    const state = getState(context);
    const isOn = state !== "off" && state !== "unknown";

    if (context.previousState !== state) {
        context.previousState = state;
        const element = context.elements.colorBackground;
        element.style.backgroundColor = `var(--bubble-climate-background-color, ${getClimateColor(stateObj)})`;
    }

    const cardLayout = context.config.card_layout;
    const dropdown = context.elements.hvacModeDropdown;

    if (!context.config.styles) return;

    let customStyle = '';

    try {
        customStyle = context.config.styles
            ? Function('hass', 'entity', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', 'card', `return \`${context.config.styles}\`;`)
              (context._hass, context.config.entity, state, context.elements.icon, context.subButtonIcon, getWeatherIcon, context.card)
            : '';
    } catch (error) {
        throw new Error(`Error in generating climate custom templates: ${error.message}`);
    }

    if (context.elements.customStyle) {
        context.elements.customStyle.innerText = customStyle;
    }
}