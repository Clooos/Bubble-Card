import { isColorCloseToWhite } from "./style.js";

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

export function isColorLight(cssVariable, threshold = 0.5) {
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
    const isLight = luminance > threshold;
    colorCache.set(computedColor, isLight);
    return isLight;
}

export function adjustColor(rgb, brightness) {
  return rgb.map(channel => Math.min(255, Math.round(channel * brightness)));
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

  if (attribute.includes(' ')) {
    return eval(`context._hass.states['${entity}']?.attributes['${attribute}']`) ?? '';
  } else {
    return eval(`context._hass.states['${entity}']?.attributes.${attribute}`) ?? '';
  }
}

export function isEntityType(context, entityType, entity = context.config.entity) {
  return entity?.startsWith(entityType + ".") ?? false;
}

export function isStateOn(context, entity = context.config.entity) {
    const state = getState(context, entity).toLowerCase();
    const isTemperature = getAttribute(context, "unit_of_measurement", entity)?.includes('°')
    const card = 
      context.config.card_type !== 'pop-up' ? 
        context.card : 
        context.elements.headerContainer;
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

    if (activeStringStates.includes(state) || numericState || isTemperature) {
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
    const { scrolling_effect: scrollingEffect = true } = context.config;

    if (!scrollingEffect) {
        applyNonScrollingStyle(element, text);
        return;
    }

    if (element.previousText === text) return;

    const className = getBubbleClassName(element);

    function updateContent() {
        if (element.templateDetected) return;

        element.innerHTML = `<div class="scrolling-container">${text}</div>`;
        element.style = '';

        setTimeout(() => {
            const contentWidth = element.scrollWidth;
            const containerWidth = element.parentNode?.offsetWidth || 0;

            if (contentWidth > containerWidth) {
                applyScrollingStyle(element, text, className);
            }
            element.previousText = text;
        }, 500);
    }

    requestAnimationFrame(updateContent);

    if (!element.eventAdded) {
        window.addEventListener('resize', debounce(updateContent, 300));
        element.eventAdded = true;
    }
}

function getBubbleClassName(element) {
    return element.className.split(' ').find(name => name.startsWith('bubble-'));
}

function applyScrollingStyle(element, text, className) {
    const separator = `<span class="bubble-scroll-separator"> | </span>`;
    const wrappedText = `<span>${text + separator + text + separator}</span>`;

    element.innerHTML = `<div class="scrolling-container">${wrappedText}</div>`;
    applyScrollingCSS(element, className);
}

function applyScrollingCSS(element, className) {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .${className} .scrolling-container {
            width: 100%;
            white-space: nowrap;
            mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);
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
    element.appendChild(styleElement);
}

function applyNonScrollingStyle(element, text) {
    element.innerHTML = text;
    element.previousText = text;

    Object.assign(element.style, {
        whiteSpace: 'normal',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis'
    });
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
    const homeAssistant = document.querySelector("body > home-assistant");
    const main = homeAssistant.shadowRoot.querySelector("home-assistant-main").shadowRoot;
    const drawer = main.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot;
    const huiRoot = drawer.querySelector("hui-root").shadowRoot;
    const masonryView = huiRoot.querySelector("#view > hui-view > hui-masonry-view");

    window.isSectionView = !masonryView;
    const defaultLayout = window.isSectionView ? "large" : "normal";
    const layoutClass = context.config.card_layout ?? defaultLayout;
    
    if (context.previousLayout === layoutClass) {
        return;
    }
    context.previousLayout = layoutClass;

    const needsLarge = layoutClass === 'large' || layoutClass === 'large-2-rows' || layoutClass === 'large-sub-buttons-grid';
    const needsRows2 = layoutClass === 'large-2-rows';
    const needsSubButtonsGrid = layoutClass === 'large-sub-buttons-grid';

    context.content.classList.toggle('large', needsLarge);
    context.content.classList.toggle('rows-2', needsRows2);
    context.content.classList.toggle('sub-buttons-grid', needsSubButtonsGrid);
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

let scrollY = 0;

function injectNoScrollStyles() {
    if (document.getElementById('no-scroll-styles')) return;

    const style = document.createElement('style');
    style.id = 'no-scroll-styles';
    style.textContent = `
        body.no-scroll {
            overflow: hidden;
            position: fixed;
            width: 100%;
            touch-action: none;
            left: 0;
        }
    `;

    document.head.appendChild(style);
}

export function toggleBodyScroll(disable) {
    injectNoScrollStyles();

    if (disable) {
        scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.classList.add('no-scroll');
    } else {
        // Garder la position fixée jusqu'à ce que nous soyons prêts à restaurer le scroll
        // Cela empêche le flash visuel où la page remonte en haut

        // Prépositionner le scroll avant de retirer les styles bloquants
        window.scrollTo(0, scrollY);
        
        // Retirer les styles bloquants dans le même cycle de rendu
        document.body.style.top = '';
        document.body.classList.remove('no-scroll');
    }
}