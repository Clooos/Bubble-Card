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

export function resolveCssVariable(cssVariable) {
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

export function hexToRgb(hex) {
    const match = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    return match ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)] : null;
}

export function rgbStringToRgb(rgbString) {
    const match = rgbString.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    return match ? [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)] : null;
}

export function calculateLuminance(r, g, b) {
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

export function isEntityType(context, entityType, entity) {
  if (entity === undefined) {
    entity = context?.config?.entity;
  }
  return entity && typeof entity === 'string' && entity.startsWith(entityType + ".") || false;
}

export function isStateOn(context, entity = context.config.entity) {
    const state = getState(context, entity).toLowerCase();
    const isTemperature = getAttribute(context, "unit_of_measurement", entity)?.includes('°');
    const numericState = Number(state);
    const activeStringStates = [
        'on', 
        'open', 
        'opening', 
        'closing', 
        'cleaning', 
        'true', 
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

    // Skip unnecessary updates
    if (element.previousText === text) return;
    
    // Store original text for future comparison
    element.previousText = text;

    // First show the text normally to check if it overflows
    element.innerHTML = text;
    element.style = '';
    element.removeAttribute('data-animated');

    // Function to check and apply scrolling if needed
    function checkAndApplyScrolling() {
        // Check if element is still in the DOM
        if (!element.isConnected) return;

        // Read dimensions: scrollWidth (total text width) vs clientWidth (visible area)
        const contentWidth = element.scrollWidth;
        const availableWidth = element.clientWidth;
        const shouldAnimate = contentWidth > availableWidth;

        // Apply scrolling if needed
        if (shouldAnimate) {
            const separator = `<span class="bubble-scroll-separator"> | </span>`;
            const wrappedText = `<span>${text + separator + text + separator}</span>`;
            element.innerHTML = `<div class="scrolling-container">${wrappedText}</div>`;
            element.setAttribute('data-animated', 'true');
            
            // Get the span element to calculate duration
            const spanElement = element.querySelector('.scrolling-container span');

            // Calculate and set animation duration after the element is rendered
            requestAnimationFrame(() => {
                if (spanElement && spanElement.scrollWidth > 0) {
                    const SCROLL_SPEED = 16; // Pixels per second
                    const scrollDistance = spanElement.scrollWidth / 2;
                    const duration = Math.max(1, scrollDistance / SCROLL_SPEED); // Min duration 1s
                    spanElement.style.animationDuration = `${duration.toFixed(2)}s`;
                }
            });
            
            // Observe visibility for performance
            if ('IntersectionObserver' in window) {
                if (!window.bubbleScrollObserver) {
                    window.bubbleScrollObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            const container = entry.target.querySelector('.scrolling-container span');
                            if (container) {
                                container.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
                            }
                        });
                    }, { threshold: 0.1 });
                }
                
                window.bubbleScrollObserver.observe(element);
            }
        }
    }

    // Try multiple approaches to ensure rendering is complete before measuring
    
    // 1. Use requestAnimationFrame for immediate first attempt
    requestAnimationFrame(() => {
        // 2. Use a small delay to allow for layout calculations
        setTimeout(() => {
            checkAndApplyScrolling();
            
            // 3. Try again after a longer delay for slower devices
            setTimeout(checkAndApplyScrolling, 300);
        }, 50);
    });

    // Add resize listener only once per element
    if (!element.eventAdded) {
        const debouncedUpdate = debounce(() => {
            element.innerHTML = text;
            checkAndApplyScrolling();
        }, 500);
        
        window.addEventListener('resize', debouncedUpdate);
        element.eventAdded = true;
    }
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

// Variables to store DOM references
let cachedHomeAssistant = null;
let cachedMain = null;
let cachedDrawer = null;
let cachedHuiRoot = null;
let isCached = false;

export function setLayout(context) {
    // Use cached references if available
    if (!isCached) {
        cachedHomeAssistant = document.querySelector("body > home-assistant");
        if (!cachedHomeAssistant) return;

        cachedMain = cachedHomeAssistant.shadowRoot?.querySelector("home-assistant-main");
        if (!cachedMain || !cachedMain.shadowRoot) return;

        cachedDrawer = cachedMain.shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace");
        if (!cachedDrawer || !cachedDrawer.shadowRoot) return;

        cachedHuiRoot = cachedDrawer.shadowRoot.querySelector("hui-root");
        if (!cachedHuiRoot || !cachedHuiRoot.shadowRoot) return;
        
        // Mark as cached only if all elements are found
        isCached = true;
    }
    
    // If an element is not available (for example after navigation), reset the cache
    if (!cachedHuiRoot.isConnected) {
        isCached = false;
        return;
    }
    
    const masonryView = cachedHuiRoot.shadowRoot.querySelector("#view > hui-view > hui-masonry-view");

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

    if (context.elements.mainContainer && (context.config.rows || context.config.grid_options?.rows)) {
        if (context.config.rows === 'auto' || context.config.grid_options?.rows === 'auto') return;
        // Set the row size for the large card layout (e.g. add the possibilty to set a custom row size inside of a pop-up)
        context.elements.mainContainer.style.setProperty('--row-size', context.config.rows || context.config.grid_options?.rows);
    }
}

export function throttle(mainFunction, delay = 300) {
    let throttleTimeout;
    let lastAction = new Date(0);
    let lastArgs;

    return (...args) => {
        lastArgs = args;
        const sinceLastAction = Date.now() - lastAction;

        if (sinceLastAction >= delay) {
            lastAction = Date.now();
            mainFunction(...lastArgs);
        } else if (!throttleTimeout) {
            throttleTimeout = setTimeout(() => {
                throttleTimeout = undefined;
                lastAction = Date.now();
                mainFunction(...lastArgs);
            }, delay - sinceLastAction);
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
        // Keep the fixed position until we're ready to restore the scroll
        // This prevents the visual flash where the page jumps back to the top
        
        // Pre-position the scroll before removing the blocking styles
        window.scrollTo(0, scrollY);
        
        // Remove the blocking styles in the same render cycle
        document.body.style.top = '';
        document.body.classList.remove('no-scroll');
    }
}