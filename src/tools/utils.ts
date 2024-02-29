import { isColorCloseToWhite } from "./style.ts";

export function hasStateChanged(context, hass, entityId) {
    context.hasState = hass.states[entityId];
    if (context.hasState) {
        context.newState = [context.hasState.state, context.hasState.attributes.rgb_color];
        if (!context.oldState || context.newState[0] !== context.oldState[0] || context.newState[1] !== context.oldState[1]) {
            context.oldState = context.newState;
            context.stateChanged = true;
        } else {
            context.stateChanged = false;
        }
        
        return context.stateChanged;
    }
}

export function configChanged(context, card) {
    if (  
        card.classList.contains('editor') &&
        context.config !== context.previousConfig
    ){
        context.previousConfig = context.config;
        return true;
    } else {
        return false;
    }
}

export const fireEvent = (node, type, detail, options) => {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

export const forwardHaptic = hapticType => {
    fireEvent(window, "haptic", hapticType)
}

export const navigate = (_node, path, replace = false) => {
    if (replace) {
        history.replaceState(null, "", path)
    } else {
        history.pushState(null, "", path)
    }
    fireEvent(window, "location-changed", {
        replace
    })
}

export function toggleEntity(hass, entityId) {
    hass.callService('homeassistant', 'toggle', {
        entity_id: entityId
    });
}

export function tapFeedback(feedbackElement) {
    if (feedbackElement === undefined) return;

    forwardHaptic("success");

    feedbackElement.style.display = '';
    feedbackElement.style.animation = 'tap-feedback .5s';

    setTimeout(() => {
        feedbackElement.style.animation = 'none';
        feedbackElement.style.display = 'none';
    }, 500);
}

export function getIcon(context) {
    const entityIcon = context._hass.states[context.config.entity]?.attributes.icon;
    const configIcon = context.config.icon;

    if (configIcon) return configIcon;
    if (entityIcon) return entityIcon;

    return '';
}

export function getIconColor(context) {
    const entity = context.config.entity;
    const defaultColor = `var(--accent-color)`;
    const entityRgbColor = context._hass.states[entity]?.attributes.rgb_color;

    if (!entity) return defaultColor;
    if (entity.startsWith("light.") === false) return defaultColor;

    const defaultLightOnColor = 'rgba(255, 220, 200)';
    const defaultLightOffColor = 'rgba(255, 255, 255)';
    const defaultLightColor = isStateOn(context) ? defaultLightOnColor : defaultLightOffColor;

    if (!entityRgbColor) return defaultLightColor;

    return isColorCloseToWhite(entityRgbColor) ? defaultLightOnColor : `rgba(${entityRgbColor.join(', ')})`;
}

export function getImage(context) {
    const entityImage = context._hass.states[context.config.entity]?.attributes.entity_picture;

    if (entityImage) return entityImage;

    return '';
}

export function getName(context) {
    const configName = context.config.name;
    const entityName = context._hass.states[context.config.entity]?.attributes.friendly_name 

    if (configName) return configName;
    if (entityName) return entityName;

    return '';
}

export function getState(context) {
    return context._hass.states[context.config.entity]?.state ?? '';
}

export function getBrightness(context) {
    return context._hass.states[context.config.entity]?.attributes.brightness ?? 0;
}

export function getVolume(context) {
    return context._hass.states[context.config.entity]?.attributes.volume_level ?? 0;
}

export function isStateOn(context) {
    const state = getState(context);
    const numericState = Number(state);
    const activeStringStates = ['on', 'open', 'cleaning', 'true', 'home', 'playing'];

    if (activeStringStates.includes(state) || numericState > 0) {
        return true;
    }

    return false;
}

export function createElement(tag, classNames = '') {
    const element = document.createElement(tag);

    if (classNames !== '') {
        classNames.split(' ').forEach(className => {
            element.classList.add(className);
        });
    }

    return element;
}

export function throttle(mainFunction, delay = 300) {
    let timerFlag;

    return (...args) => {
        if (timerFlag === undefined) {
            mainFunction(...args);
            timerFlag = setTimeout(() => {
                timerFlag = undefined;
            }, delay);
        }
    };
  }