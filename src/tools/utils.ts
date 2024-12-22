import { isColorCloseToWhite } from "./style.ts";

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

export function tapFeedback(feedbackElement) {
    if (feedbackElement === undefined) return;

    feedbackElement.style.display = '';
    feedbackElement.style.animation = 'tap-feedback .3s';

    setTimeout(() => {
        feedbackElement.style.animation = 'none';
        feedbackElement.style.display = 'none';
    }, 500);
}

export function getIcon(context, entity = context.config.entity, icon = context.config.icon) {
    const entityType = entity?.split('.')[0];
    const deviceClassType = getAttribute(context, "device_class", entity);
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
        case "power":
          return isOff ? "mdi:power-plug-off" : "mdi:power-plug";
        case "presence":
          return isOff ? "mdi:home-outline" : "mdi:home";
        case "running":
          return isOff ? "mdi:stop" : "mdi:play";
        case "safety":
          return isOff ? "mdi:check-circle" : "mdi:alert-circle";
        case "smoke":
          return isOff ? "mdi:check-circle" : "mdi:smoke";
        case "sound":
          return isOff ? "mdi:music-note-off" : "mdi:music-note";
        case "tamper":
          return isOff ? "mdi:check-circle" : "mdi:alert-circle";
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

    function sensorIcon() {
      const isOff = state === "off";
      const sensorType = getAttribute(context, 'device_class', entity);

      switch (sensorType) {
        case "battery":
            if (state == 100) {
                return "mdi:battery";
            } else if (state >= 90) {
                return "mdi:battery-90";
            } else if (state >= 80) {
                return "mdi:battery-80";
            } else if (state >= 70) {
                return "mdi:battery-70";
            } else if (state >= 60) {
                return "mdi:battery-60";
            } else if (state >= 50) {
                return "mdi:battery-50";
            } else if (state >= 40) {
                return "mdi:battery-40";
            } else if (state >= 30) {
                return "mdi:battery-30";
            } else if (state >= 20) {
                return "mdi:battery-20";
            } else if (state >= 10) {
                return "mdi:battery-10";
            } else {
                return "mdi:battery-alert";
            }
        case "humidity": return "mdi:water-percent";
        case "illuminance": return "mdi:brightness-5";
        case "temperature": return "mdi:thermometer";
        case "pressure": return "mdi:gauge";
        case "power": return "mdi:flash";
        case "signal_strength": return "mdi:wifi";
        case "energy": return "mdi:lightning-bolt";
        default: return "mdi:eye";
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
        sensor: sensorIcon(),
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

    if (configIcon) return configIcon;
    if (entityIcon) return entityIcon;
    if (defaultIcons[entityType]) return defaultIcons[entityType];
    if (defaultIcons[deviceClassType]) return defaultIcons[deviceClassType];

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

const colorCache = new Map();

function resolveCssVariable(cssVariable) {
    let value = cssVariable;
    const bodyStyles = getComputedStyle(document.body);

    while (value && value.startsWith('var(')) {
        const match = value.match(/var\((--[^,]+),?\s*(.*)?\)/);
        if (!match) break;
        const [, varName, fallback] = match;
        const resolvedValue = bodyStyles.getPropertyValue(varName).trim();

        value = resolvedValue || (fallback && fallback.trim()) || '';

    }

    return value;
}

function hexToRgb(hex) {
    const match = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    return match ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)] : null;
}

function rgbStringToRgb(rgbString) {
    const match = rgbString.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    return match ? [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)] : null;
}

function calculateLuminance(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

export function isColorLight(cssVariable) {
    const computedColor = resolveCssVariable(cssVariable);
    if (!computedColor) return false;


    if (colorCache.has(computedColor)) {
        return colorCache.get(computedColor);
    }

    let rgb = hexToRgb(computedColor) || rgbStringToRgb(computedColor);

    if (!rgb) {
        colorCache.set(computedColor, false);
        return false;
    }
    
    const luminance = calculateLuminance(...rgb);
    const isLight = luminance > 0.5;
    colorCache.set(computedColor, isLight);
    return isLight;
}

function adjustColor(rgb, brightness) {
  return rgb.map(channel => Math.min(255, Math.round(channel * brightness)));
}

export function getIconColor(context, entity = context.config.entity, brightness = 1) {
    const { card_type: cardType, use_accent_color: useAccentColor } = context.config;
    const defaultColor = `var(--bubble-accent-color, var(--accent-color))`;
    const entityRgbColor = getAttribute(context, "rgb_color", entity);
    const isThemeLight = isColorLight('var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))');

    const adjustedBrightness = isThemeLight ? brightness - 0.2 : brightness;

    if (!entity) return defaultColor;

    if (isEntityType(context, "light") && !useAccentColor) {
        if (cardType === 'button') {
            context.card.classList.add('is-light');
        } else if (cardType === 'pop-up') {
            context.elements.headerContainer.classList.add('is-light');
        }
    } else {
        if (cardType === 'button') {
            context.card.classList.remove('is-light');
        } else if (cardType === 'pop-up') {
            context.elements.headerContainer.classList.remove('is-light');
        }
    }

    if (!entity.startsWith("light.") || useAccentColor) return defaultColor;

    const defaultLightColor = [225, 225, 210];
    const adjustedDefaultLightColor = adjustColor(defaultLightColor, adjustedBrightness);


    if (!entityRgbColor) {
      return `var(--bubble-light-color, rgba(${adjustedDefaultLightColor.join(', ')}))`;
    }


   const adjustedColor = adjustColor(entityRgbColor, adjustedBrightness);
   return isColorCloseToWhite(entityRgbColor) ?
        `var(--bubble-light-color, rgba(${adjustedDefaultLightColor.join(', ')}))` :
       `var(--bubble-light-color, rgba(${adjustedColor.join(', ')}))`;
}

export function getImage(context, entity = context.config.entity) {
    if (context.config.force_icon) return '';

    const entityPicture =
      getAttribute(context, "entity_picture_local", entity) ||
      getAttribute(context, "entity_picture", entity);

    if (!entityPicture) return '';

    let imageUrl = context._hass.hassUrl(entityPicture);

    return imageUrl;
}

export function getName(context) {
    const configName = context.config.name;
    const entityName = getAttribute(context, "friendly_name"); 
    const templateName = context.name;

    if (templateName) return templateName;
    if (configName) return configName;
    if (entityName) return entityName;

    return '';
}

export function getState(context, entity = context.config.entity) {
    return context._hass.states[entity]?.state ?? '';
}

export function getAttribute(context, attribute, entity = context.config.entity) {
    if (!attribute) return '';

    return eval(`context._hass.states['${entity}']?.attributes.${attribute}`) ?? '';
}

export function isEntityType(context, entityType) {
  return context.config.entity?.startsWith(entityType + ".") ?? false;
}

export function isStateOn(context, entity = context.config.entity) {
    const state = getState(context, entity).toLowerCase();
    const numericState = Number(state);
    const activeStringStates = [
        'on', 
        'open', 
        'opening', 
        'closing', 
        'cleaning', 
        'true', 
        'idle', 
        'home', 
        'playing', 
        'paused',
        'locked', 
        'occupied', 
        'available', 
        'running', 
        'active', 
        'connected', 
        'online',
        'mowing', 
        'starting',
        'heat',
        'cool',
        'dry',
        'heat_cool',
        'fan_only',
        'auto',
        'alarm'
    ];

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

export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

export function applyScrollingEffect(context, element, text) {
    const scrollingEffect = context.config.scrolling_effect ?? true;

    if (!scrollingEffect) {
        applyNonScrollingStyle(element, text);
        return;
    }

    if (element.previousText === text) return;

    const classNames = element.className.split(' ');
    const className = classNames.find(name => name.startsWith('bubble-'));

    function checkIfContentIsLonger() {
        element.innerHTML = `<div class="scrolling-container">${text}</div>`;
        element.style = '';

        const contentWidth = element.scrollWidth;
        const containerWidth = element.parentNode?.offsetWidth || 0;

        if (scrollingEffect && contentWidth > containerWidth) {
            applyScrollingStyle(element, text, className);
            element.previousText = text;
        } else {
            element.previousText = text;
            return;
        }
    }

    requestAnimationFrame(checkIfContentIsLonger);

    if (!element.eventAdded) {
        window.addEventListener('resize', debounce(checkIfContentIsLonger, 300));
        element.eventAdded = true;
    }

    function applyScrollingStyle(element, text, className) {
        const separator = `<span class="bubble-scroll-separator"> | </span>`;
        const wrappedText = `<span>${text + separator + text + separator}</span>`;

        element.innerHTML = `<div class="scrolling-container">${wrappedText}</div>`;

        const css = createScrollingEffectCSS(className);
        element.styleElement = document.createElement('style');
        element.appendChild(element.styleElement);
        element.styleElement.innerHTML = css;
    }

    function createScrollingEffectCSS(className) {
        return `
            .${className} .scrolling-container {
                width: 100%;
                white-space: nowrap;
                mask-image: linear-gradient(to right, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);
                mask-image: linear-gradient(to left, transparent, black calc(0% + 8px), black calc(100% - 8px), transparent);
            }
            .${className} .scrolling-container span {
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

function applyNonScrollingStyle(element, text) {
    element.innerHTML = text;
    element.previousText = text;

    element.style.whiteSpace = 'normal';
    element.style.display = '-webkit-box';
    element.style.webkitLineClamp = '2';
    element.style.webkitBoxOrient = 'vertical';
    element.style.textOverflow = 'ellipsis';
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
    const layoutClass = context.config.card_layout;
    const needsLarge = layoutClass === 'large' || layoutClass === 'large-2-rows';
    const needsRows2 = layoutClass === 'large-2-rows';
    const needAlternativeLayout = (context.config.AlternativeLayout ?? false) && needsLarge;

    if (needsLarge !== context.content.classList.contains('large')) {
        context.content.classList.toggle('large', needsLarge);
    }
    if (needsRows2 !== context.content.classList.contains('rows-2')) {
        context.content.classList.toggle('rows-2', needsRows2);
    }
    if (needAlternativeLayout !== context.content.classList.contains('AlternativeLayout')) {
        context.content.classList.toggle('AlternativeLayout', needAlternativeLayout);
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