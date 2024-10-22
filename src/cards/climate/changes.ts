import { initializesubButtonIcon } from '../../tools/global-changes.ts';
import { getClimateColor, getHvacModeIcon, getFanModeIcon, createHaAttributeIcon } from './helpers.ts';
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

    if (icon !== '') {
        context.elements.icon.icon = icon;
        context.elements.icon.style.color = isOn ? getClimateColor(state) : 'inherit';
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

export function changeStyle(context) {
    initializesubButtonIcon(context);
    setLayout(context);

    const state = getState(context);
    const isOn = state !== "off" && state !== "unknown";

    if (context.previousState !== state) {
        context.previousState = state;
        const element = context.elements.colorBackground;
        element.style.backgroundColor = `var(--bubble-climate-background-color, ${getClimateColor(state)})`;
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
