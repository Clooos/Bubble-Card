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
    feedbackElement.style.animation = 'tap-feedback .3s';

    setTimeout(() => {
        feedbackElement.style.animation = 'none';
        feedbackElement.style.display = 'none';
    }, 500);
}

export function getIcon(context, entity = context.config.entity, icon = context.config.icon) {
    const entityType = entity?.split('.')[0];
    const entityIcon = getAttribute(context, "icon", entity);
    const configIcon = icon;
    const state = getState(context, entity);

    function coverIcon() {
      const open = state !== "closed";
      const coverType = getAttribute(context, 'device_class', entity);

      switch (coverType) {
        case 'awning':
          return open ? "mdi:awning-outline" : "mdi:awning";
        case "blind":
          return open ? "mdi:blinds-open" : "mdi:blinds";
        case 'curtain':
          return open ? "mdi:curtains-open" : "mdi:curtains";
        case 'damper':
          return open ? "mdi:window-shutter-open" : "mdi:window-shutter"; // To be defined
        case "door":
          return open ? "mdi:door-open" : "mdi:door-closed";
        case "garage":
          return open ? "mdi:garage-open" : "mdi:garage";
        case 'gate':
          return open ? "mdi:gate-open" : "mdi:gate";
        case 'shade':
          return open ? "mdi:roller-shade" : "mdi:roller-shade-closed";
        case "shutter":
          return open ? "mdi:window-shutter-open" : "mdi:window-shutter";
        case "window":
          return open ? "mdi:window-open" : "mdi:window-closed";
        default:
          return open ? "mdi:window-shutter-open" : "mdi:window-shutter";
      }
    }

    function binarySensorIcon() {
      const isOff = state === "off";
      const binarySensorType = getAttribute(context, 'device_class', entity);

      switch (binarySensorType) {
        case "battery":
          return isOff ? "mdi:battery" : "mdi:battery-outline";
        case "battery_charging":
          return isOff ? "mdi:battery" : "mdi:battery-charging";
        case "cold":
          return isOff ? "mdi:thermometer" : "mdi:snowflake";
        case "connectivity":
          return isOff ? "mdi:server-network-off" : "mdi:server-network";
        case "door":
          return isOff ? "mdi:door-closed" : "mdi:door-open";
        case "garage_door":
          return isOff ? "mdi:garage" : "mdi:garage-open";
        case "power":
          return isOff ? "mdi:power-plug-off" : "mdi:power-plug";
        case "tamper":
          return isOff ? "mdi:check-circle" : "mdi:alert-circle";
        case "smoke":
          return isOff ? "mdi:check-circle" : "mdi:smoke";
        case "heat":
          return isOff ? "mdi:thermometer" : "mdi:fire";
        case "light":
          return isOff ? "mdi:brightness-5" : "mdi:brightness-7";
        case "lock":
          return isOff ? "mdi:lock" : "mdi:lock-open";
        case "moisture":
          return isOff ? "mdi:water-off" : "mdi:water";
        case "motion":
          return isOff ? "mdi:motion-sensor-off" : "mdi:motion-sensor";
        case "occupancy":
          return isOff ? "mdi:home-outline" : "mdi:home";
        case "opening":
          return isOff ? "mdi:square" : "mdi:square-outline";
        case "plug":
          return isOff ? "mdi:power-plug-off" : "mdi:power-plug";
        case "presence":
          return isOff ? "mdi:home-outline" : "mdi:home";
        case "running":
          return isOff ? "mdi:stop" : "mdi:play";
        case "sound":
          return isOff ? "mdi:music-note-off" : "mdi:music-note";
        case "update":
          return isOff ? "mdi:package" : "mdi:package-up";
        case "vibration":
          return isOff ? "mdi:crop-portrait" : "mdi:vibrate";
        case "window":
          return isOff ? "mdi:window-closed" : "mdi:window-open";
        default:
          return isOff ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
      }
    }

    function weatherIcon(weatherType = getState(context, entity)) {
      switch (weatherType) {
        case 'cloudy':
          return "mdi:weather-cloudy";
        case 'partlycloudy':
          return "mdi:weather-partly-cloudy";
        case 'rainy':
          return "mdi:weather-rainy";
        case 'snowy':
          return "mdi:weather-snowy";
        case 'sunny':
          return "mdi:weather-sunny";
        case 'clear-night':
          return "mdi:weather-night";
        case 'fog':
          return "mdi:weather-fog";
        case 'hail':
          return "mdi:weather-hail";
        case 'lightning':
          return "mdi:weather-lightning";
        case 'lightning-rainy':
          return "mdi:weather-lightning-rainy";
        case 'pouring':
          return "mdi:weather-pouring";
        case 'windy':
          return "mdi:weather-windy";
        case 'windy-variant':
          return "mdi:weather-windy-variant";
        case 'exceptional':
          return "mdi:alert-circle-outline";
        default:
          return "mdi:weather-cloudy";
      }
    }

    const defaultIcons = {
        alarm_control_panel: 'mdi:shield',
        alert: "mdi:alert",
        automation: "mdi:playlist-play",
        binary_sensor: binarySensorIcon(),
        calendar: "mdi:calendar",
        camera: "mdi:video",
        climate: "mdi:thermostat",
        configurator: "mdi:settings",
        conversation: "mdi:text-to-speech",
        cover: coverIcon(),
        device_tracker: "mdi:account",
        fan: "mdi:fan",
        group: "mdi:google-circles-communities",
        history_graph: "mdi:chart-line",
        homeassistant: "mdi:home-assistant",
        homekit: "mdi:home-automation",
        image_processing: "mdi:image-filter-frames",
        input_boolean: "mdi:drawing",
        input_datetime: "mdi:calendar-clock",
        input_number: "mdi:ray-vertex",
        input_select: "mdi:format-list-bulleted",
        input_text: "mdi:textbox",
        light: "mdi:lightbulb",
        lock: 'mdi:lock',
        mailbox: "mdi:mailbox",
        media_player: 'mdi:speaker',
        mower: "mdi:robot-mower",
        notify: "mdi:comment-alert",
        person: "mdi:account",
        plant: "mdi:flower",
        proximity: "mdi:apple-safari",
        remote: "mdi:remote",
        scene: "mdi:palette",
        script: "mdi:file-document",
        sensor: "mdi:eye",
        simple_alarm: "mdi:bell",
        sun: "mdi:white-balance-sunny",
        switch: "mdi:flash",
        timer: "mdi:timer",
        updater: "mdi:cloud-upload",
        vacuum: "mdi:robot-vacuum",
        water_heater: "mdi:thermometer",
        weather: weatherIcon(),
        weblink: "mdi:open-in-new"
    };

    if (configIcon && entityType !== 'weather') return configIcon;
    if (entityIcon) return entityIcon;
    if (defaultIcons[entityType]) return defaultIcons[entityType];

    return '';
}

export function getWeatherIcon(weatherType) {
    switch (weatherType) {
        case 'cloudy':
          return "mdi:weather-cloudy";
        case 'partlycloudy':
          return "mdi:weather-partly-cloudy";
        case 'rainy':
          return "mdi:weather-rainy";
        case 'snowy':
          return "mdi:weather-snowy";
        case 'sunny':
          return "mdi:weather-sunny";
        case 'clear-night':
          return "mdi:weather-night";
        case 'fog':
          return "mdi:weather-fog";
        case 'hail':
          return "mdi:weather-hail";
        case 'lightning':
          return "mdi:weather-lightning";
        case 'lightning-rainy':
          return "mdi:weather-lightning-rainy";
        case 'pouring':
          return "mdi:weather-pouring";
        case 'windy':
          return "mdi:weather-windy";
        case 'windy-variant':
          return "mdi:weather-windy-variant";
        case 'exceptional':
          return "mdi:alert-circle-outline";
        default:
          return "mdi:weather-cloudy";
    }
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
    const activeStringStates = ['on', 'open', 'opening', 'closing', 'cleaning', 'true', 'idle', 'home', 'playing', 'locked', 'occupied', 'available', 'running', 'active', 'connected', 'mowing'];

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

export function applyScrollingEffect(context, element, text) {
    // Add a scrolling effect on any text element that is longer than its container
    // You need to manually add "overflow: hidden" to your container CSS

    const scrollingEffect = context.config.scrolling_effect ?? true;

    if (element.previousText === text || element.style.whiteSpace === 'normal') return;

    const classNames = element.className.split(' ');
    const className = classNames.find(name => name.startsWith('bubble-'));

    // Remove the previous scrolling effect if it exists
    element.innerHTML = text;
    element.style = '';

    // Check if the text is longer than its container
    function checkIfContentIsLonger() {
        if (scrollingEffect && element.scrollWidth > element.parentNode.offsetWidth) {
            // Add the CSS for the scrolling effect
            const separator = `<span class="bubble-scroll-separator">|</span>`;
            element.innerHTML = `<span>${text + separator + text + separator}</span>`;

            const css = createScrollingEffectCSS(className);
            element.styleElement = document.createElement('style');
            element.appendChild(element.styleElement);
            element.styleElement.innerHTML = css;
        } else {
            // If the text fits without scrolling, remove the style element
            if (scrollingEffect && element.styleElement) {
                element.styleElement = null;
            }
            // If scrollingEffect is false, limit the text to two lines
            if (!scrollingEffect) {
                element.style.whiteSpace = 'normal';
                element.style.display = '-webkit-box';
                element.style.webkitLineClamp = '2';
                element.style.webkitBoxOrient = 'vertical';
                element.style.textOverflow = 'ellipsis';
            }
            // If the condition is not met, check again at the next frame
            requestAnimationFrame(checkIfContentIsLonger);
        }
    }

    requestAnimationFrame(checkIfContentIsLonger);

    element.previousText = text;

    function createScrollingEffectCSS(className) {
        return `
            .${className} {
                white-space: nowrap;
                mask-image: linear-gradient(to right, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);
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
    let diffInSeconds = Math.floor((now - date) / 1000);

    if (isNaN(diffInSeconds)) {
        // datetime was not a valid date
        return '';
    }

    let unit;
    let value;
    if (diffInSeconds < 60) {
        unit = 'second';
        value = diffInSeconds + 1;
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

export function setLayout(context) {
    const cardLayout = context.config.card_layout;

    if (cardLayout === 'large') {
        if (!context.content.classList.contains('large')) {
            context.content.classList.add('large');
        }
        if (context.content.classList.contains('rows-2')) {
            context.content.classList.remove('rows-2');
        } 
    } else if (cardLayout === 'large-2-rows') {
        if (!context.content.classList.contains('large')) {
            context.content.classList.add('large');
        } 
        if (!context.content.classList.contains('rows-2')) {
            context.content.classList.add('rows-2');
        } 
    } else {
        context.content.classList.remove('large');
        context.content.classList.remove('rows-2');
    }
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