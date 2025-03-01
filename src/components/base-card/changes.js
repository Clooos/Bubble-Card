import {
    applyScrollingEffect,
    formatDateTime,
    getState,
    getAttribute,
    isEntityType,
    isStateOn,
    getName
} from '../../tools/utils.js';
import { getIcon, getImage, getIconColor } from '../../tools/icon.js';
import { getClimateColor } from '../../cards/climate/helpers.js';

export function changeState(context) {
    const state = context._hass.states[context.config.entity];
    const attribute = getAttribute(context, context.config.attribute, context.config.entity);
    const lastChanged = state?.last_changed;

    const buttonType = context.config.button_type;
    const defaultShowState = buttonType === 'state';
    const showName = context.config.show_name ?? true;
    const showIcon = context.config.show_icon ?? true;
    const showState = context.config.show_state ?? defaultShowState;
    const showAttribute = context.config.show_attribute ?? defaultShowState;
    const showLastChanged = context.config.show_last_changed ?? context.config.show_last_updated ?? false;
    const scrollingEffect = context.config.scrolling_effect ?? true;

    const previousConfig = context.previousConfig || {};

    const configChanged = (
        context.previousState !== state ||
        context.previousAttribute !== attribute ||
        context.previousLastChanged !== lastChanged ||
        previousConfig.showName !== showName ||
        previousConfig.showIcon !== showIcon ||
        previousConfig.showState !== showState ||
        previousConfig.showAttribute !== showAttribute ||
        previousConfig.showLastChanged !== showLastChanged ||
        previousConfig.scrollingEffect !== scrollingEffect
    );

    if (!configChanged) return;

    let formattedState = state && showState ? context._hass.formatEntityState(state) : '';
    let formattedAttribute = '';
    let formattedLastChanged = '';
    let displayedState = '';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (showAttribute && attribute) {
        formattedAttribute = state ? context._hass.formatEntityAttributeValue(state, context.config.attribute) ?? attribute : '';
    }

    if (showLastChanged && state) {
        formattedLastChanged = state ? capitalizeFirstLetter(
            formatDateTime(lastChanged, context._hass.locale.language)
        ) : '';
    }

    displayedState = [formattedState, formattedAttribute, formattedLastChanged]
        .filter(Boolean)
        .join(' • ');

    context.elements.name.classList.toggle('hidden', !showName);
    context.elements.iconContainer.classList.toggle('hidden', !showIcon);
    context.elements.nameContainer.classList.toggle('name-without-icon', !showIcon);
    context.elements.state.classList.toggle('state-without-name', (showState || showLastChanged || showAttribute) && !showName);
    context.elements.state.classList.toggle('display-state', showState || showLastChanged || showAttribute);
    context.elements.state.classList.toggle('hidden', !(showState || showLastChanged || showAttribute));

    applyScrollingEffect(context, context.elements.state, displayedState);
    
    // Update previous values
    context.previousState = state;
    context.previousAttribute = attribute;
    context.previousConfig = {
        showName,
        showIcon,
        showState,
        showAttribute,
        showLastChanged,
        scrollingEffect,
    };
}

export function changeIcon(context) {
    const entityType = isEntityType(context);
    const cardType = context.config.card_type;
    const buttonType = context.config.button_type;
    const isOn = isStateOn(context);
    const newIcon = getIcon(context);
    const newImage = getImage(context);
    const useAccentColor = context.config.use_accent_color;
    const currentIconColor = context.elements.iconContainer?.style.color;
    const currentImage = context.elements.image?.style.backgroundImage;
    const currentIcon = context.elements.icon?.icon;
    const currentIconDisplay = context.elements.icon?.style.display;
    const currentImageDisplay = context.elements.image?.style.display;
    const noColor = 
        buttonType === 'name' ||
        (cardType === 'pop-up' && !buttonType)

    let newIconColor = 'inherit';
    
    if (isOn) {
        if ((isEntityType(context, "light") && !useAccentColor) || !noColor) {
            newIconColor = `var(--bubble-icon-background-color, ${getIconColor(context)})`;
        } else if (entityType === 'climate') {
            newIconColor = getClimateColor(context);
        }
    }

    if (context.elements.iconContainer) {
        if (newIconColor !== 'inherit') {
            if (currentIconColor !== newIconColor) {
                context.elements.iconContainer.style.color = newIconColor;
            }
        } else if (currentIconColor !== '') {
            context.elements.iconContainer.style.color = '';
        }
    }

    if (newImage !== '') {
        const newBackgroundImage = `url(${newImage})`;
        if (currentImage !== newBackgroundImage) {
            context.elements.image.style.backgroundImage = newBackgroundImage;
        }
        if (currentIconDisplay !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (currentImageDisplay !== '') {
            context.elements.image.style.display = '';
        }
    } else if (newIcon !== '') {
        if (currentIcon !== newIcon) {
            context.elements.icon.icon = newIcon;
        }
        if (context.elements.icon.style.color !== newIconColor) {
            context.elements.icon.style.color = newIconColor;
        }
        if (currentIconDisplay !== '') {
            context.elements.icon.style.display = '';
        }
        if (currentImageDisplay !== 'none') {
            context.elements.image.style.display = 'none';
        }
    } else {
        if (currentIconDisplay !== 'none') {
            context.elements.icon.style.display = 'none';
        }
        if (currentImageDisplay !== 'none') {
            context.elements.image.style.display = 'none';
        }
    }
}

export function changeName(context, textScrolling = true) {
    const buttonType = context.config.button_type;
    const name = buttonType !== 'name' ? getName(context) : context.config.name;
    if (name !== context.previousName && context.elements.name) {
        context.elements.name.innerText = name;
        context.previousName = name;
        if (textScrolling) {
            applyScrollingEffect(context, context.elements.name, name);
        }
    }
}

export function changeStatus(context) {
    const state = getState(context);

    if (state === 'unavailable') {
        context.card.classList.add('is-unavailable');
    } else {
        context.card.classList.remove('is-unavailable');
    }
}
