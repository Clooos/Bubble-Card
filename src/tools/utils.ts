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

export function getIcon(context, entity = context.config.entity, icon = context.config.icon) {
    const entityIcon = getAttribute(context, "icon", entity);
    const configIcon = icon;
    const entityType = entity?.split('.')[0];

    const defaultIcons = {
        light: 'mdi:lightbulb',
        switch: 'mdi:toggle-switch',
        sensor: 'mdi:sensor',
        media_player: 'mdi:speaker',
        climate: 'mdi:thermostat',
        binary_sensor: 'mdi:radiobox-blank',
        cover: 'mdi:window-shutter',
        fan: 'mdi:fan',
        lock: 'mdi:lock',
        alarm_control_panel: 'mdi:shield',
        camera: 'mdi:camera',
        automation: 'mdi:playlist-play',
        group: 'mdi:google-circles-communities',
        input_boolean: 'mdi:toggle-switch-off-outline',
        input_number: 'mdi:numeric',
        input_text: 'mdi:form-textbox',
        input_select: 'mdi:format-list-bulleted',
        scene: 'mdi:palette',
        script: 'mdi:file-document-outline',
    };

    if (configIcon) return configIcon;
    if (entityIcon) return entityIcon;
    if (defaultIcons[entityType]) return defaultIcons[entityType];

    return '';
}

export function getIconColor(context) {
    const entity = context.config.entity;
    const defaultColor = `var(--accent-color)`;
    const entityRgbColor = getAttribute(context, "rgb_color");

    if (!entity) return defaultColor;
    if (entity.startsWith("light.") === false) return defaultColor;

    const defaultLightOnColor = 'rgba(255, 220, 200)';
    const defaultLightOffColor = 'rgba(255, 255, 255)';
    const defaultLightColor = isStateOn(context) ? defaultLightOnColor : defaultLightOffColor;

    if (!entityRgbColor) return defaultLightColor;

    return isColorCloseToWhite(entityRgbColor) ? defaultLightOnColor : `rgba(${entityRgbColor.join(', ')})`;
}

export function getImage(context) {
    if (context.config.force_icon) return '';

    const entityImageLocal = getAttribute(context, "entity_picture_local");
    const entityImage = getAttribute(context, "entity_picture");

    if (entityImageLocal) return entityImageLocal;
    if (entityImage) return entityImage;

    return '';
}

export function getName(context) {
    const configName = context.config.name;
    const entityName = getAttribute(context, "friendly_name"); 

    if (configName) return configName;
    if (entityName) return entityName;

    return '';
}

export function getState(context, entity = context.config.entity) {
    return context._hass.states[entity]?.state ?? '';
}

export function getAttribute(context, attribute, entity = context.config.entity) {
    return context._hass.states[entity]?.attributes[attribute] ?? '';
}

export function isEntityType(context, entityType) {
  return context.config.entity?.startsWith(entityType + ".") ?? false;
}

export function isStateOn(context, entity = context.config.entity) {
    const state = getState(context, entity);
    const numericState = Number(state);
    const activeStringStates = ['on', 'open', 'opening', 'closing', 'cleaning', 'true', 'idle', 'home', 'playing', 'locked', 'occupied', 'available', 'running', 'active', 'connected'];

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

export function applyScrollingEffect(element, text) {
    // Add a scrolling effect on any text element that is longer than its container
    // You need to manually add "overflow: hidden" to your container CSS

    if (element.previousText === text) return;

    // Get the class name from the element
    const classNames = element.className.split(' ');
    const className = classNames.find(name => name.startsWith('bubble-'));

    // Remove the previous scrolling effect if it exists
    element.innerHTML = text;
    element.style = '';

    // Check if the text is longer than its container
    requestAnimationFrame(() => {
        if (element.scrollWidth > element.parentNode.offsetWidth) {
            // Apply the scrolling effect
            const separator = `<span class="bubble-scroll-separator">|</span>`
            element.innerHTML = `<span>${text + separator + text + separator}</span>`;
            
            // Add the CSS for the scrolling effect
            const css = createScrollingEffectCSS(className);
            element.styleElement = createElement('style');
            element.styleElement.innerHTML = css;
            element.appendChild(element.styleElement);
        }
    });

    element.previousText = text;

    function createScrollingEffectCSS(className) {
        return `
            .${className} {
                white-space: nowrap;
                mask-image: linear-gradient(to right, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);
                caca: 100px;
            }
            .${className} span {
                display: inline-block;
                animation: scroll 14s linear infinite;
            }

            .bubble-scroll-separator {
                opacity: .3; 
                margin: 0 6px 0 8px;
            }

            @keyframes scroll {
                from { transform: translateX(0%); }
                to { transform: translateX(-50%); }
            }
        `;
    }
}

export function formatDateTime(datetime, locale) {
    if (!datetime) return '';
    const date = new Date(datetime);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    let unit;
    let value;
    if (diffInSeconds < 60) {
        unit = 'second';
        value = diffInSeconds;
    } else if (diffInSeconds < 3600) {
        unit = 'minute';
        value = Math.floor(diffInSeconds / 60);
    } else if (diffInSeconds < 86400) {
        unit = 'hour';
        value = Math.floor(diffInSeconds / 3600);
    } else {
        unit = 'day';
        value = Math.floor(diffInSeconds / 86400);
    }

    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    return rtf.format(-value, unit);
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