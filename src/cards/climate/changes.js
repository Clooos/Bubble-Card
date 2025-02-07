import { initializesubButtonIcon } from '../../tools/global-changes.js';
import { 
    getClimateColor, 
    getHvacModeIcon, 
    getFanModeIcon, 
    createHaAttributeIcon 
} from './helpers.js';
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
} from '../../tools/utils.js';
import { handleCustomStyles } from '../../tools/style-utils.js';

export function changeIcon(context) {
    const isOn = isStateOn(context);
    const newIcon = getIcon(context);
    const newImage = getImage(context);

    const currentImage = context.elements.image.style.backgroundImage;
    const currentIcon = context.elements.icon.icon;
    const currentIconColor = context.elements.icon.style.color;

    if (newImage !== '') {
        const newBackgroundImage = 'url(' + newImage + ')';
        if (currentImage !== newBackgroundImage) {
            context.elements.image.style.backgroundImage = newBackgroundImage;
        }
        if (context.elements.icon.style.display !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (context.elements.image.style.display !== '') {
            context.elements.image.style.display = '';
        }
    } else if (newIcon !== '') {
        if (currentIcon !== newIcon) {
            context.elements.icon.icon = newIcon;
        }
        const newColor = isOn ? `${getClimateColor(context)}` : 'inherit';
        if (currentIconColor !== newColor) {
            context.elements.icon.style.color = newColor;
        }
        if (context.elements.icon.style.display !== '') {
            context.elements.icon.style.display = '';
        }
        if (context.elements.image.style.display !== 'none') {
            context.elements.image.style.display = 'none';
        }
    } else {
        if (context.elements.icon.style.display !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (context.elements.image.style.display !== 'none') {
            context.elements.image.style.display = 'none';
        }
    }
}

export function changeName(context) {
    if (context.config.styles?.includes("card.querySelector('.bubble-name').innerText")) return;
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
    const hideTargetTempLow = context.config.hide_target_temp_low;

    if (targetTempLow === '') {
        context.elements.targetTemperatureContainer?.classList.add('hidden');
    } else {
        context.elements.targetTemperatureContainer?.classList.remove('hidden');
    }

    if (hideTargetTempLow) {
        context.elements.lowTempContainer?.classList.add('hidden');
    } else {
        context.elements.lowTempContainer?.classList.remove('hidden');
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
    const hideTargetTempHigh = context.config.hide_target_temp_high;

    if (hideTargetTempHigh) {
        context.elements.highTempContainer?.classList.add('hidden');
    } else {
        context.elements.highTempContainer?.classList.remove('hidden');
    }

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
    handleCustomStyles(context);

    const state = getState(context);

    if (context.previousState !== state) {
        context.previousState = state;
        const element = context.elements.colorBackground;
        element.style.backgroundColor = `var(--bubble-climate-background-color, ${getClimateColor(context)})`;
    }

    const cardLayout = context.config.card_layout;
    const dropdown = context.elements.hvacModeDropdown;
}