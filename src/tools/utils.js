import { isColorCloseToWhite } from "./style.js";
import { updateContentContainerFixedClass } from "../components/base-card/index.js";
import { getIconColor } from "./icon.js";

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

const colorCache = new Map();

// Cache for getComputedStyle to avoid expensive recalculations
// Cache is invalidated on each animation frame to ensure accuracy
let cachedDocumentElementStyles = null;
let rafScheduled = false;

function invalidateStyleCache() {
    cachedDocumentElementStyles = null;
    rafScheduled = false;
}

export function getCachedDocumentElementStyles() {
    if (!cachedDocumentElementStyles) {
        cachedDocumentElementStyles = getComputedStyle(document.documentElement);
        if (!rafScheduled) {
            requestAnimationFrame(invalidateStyleCache);
            rafScheduled = true;
        }
    }
    return cachedDocumentElementStyles;
}

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

// Compare two RGB colors to check if they are similar (within a threshold)
export function areColorsSimilar(rgb1, rgb2, threshold = 15) {
  if (!rgb1 || !rgb2 || rgb1.length !== 3 || rgb2.length !== 3) return false;
  const diff = Math.abs(rgb1[0] - rgb2[0]) + Math.abs(rgb1[1] - rgb2[1]) + Math.abs(rgb1[2] - rgb2[2]);
  return diff <= threshold;
}

export function getStateSurfaceColor(context, entity = context.config.entity, useLightBackground = true, cardBackgroundColor = null, subButtonColor = null) {
  
  // If light_background is false, force use of accent color instead of RGB light color
  const originalUseAccentColor = context.config.use_accent_color;
  if (!useLightBackground && entity?.startsWith('light.')) {
    context.config.use_accent_color = true;
  }
  
  const baseColorExpr = getIconColor(context, entity);
  
  // Restore original config
  if (!useLightBackground && entity?.startsWith('light.')) {
    context.config.use_accent_color = originalUseAccentColor;
  }

  try {
    // Resolve CSS variables recursively
    let resolved = resolveCssVariable(baseColorExpr);
    // If still a variable, try resolving from document root
    if (resolved && resolved.startsWith('var(')) {
      const match = resolved.match(/var\((--[^,]+),?\s*(.*)?\)/);
      if (match) {
        const [, varName] = match;
        const computed = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
        if (computed) resolved = computed;
      }
    }
    
    const rgb = hexToRgb(resolved) || rgbStringToRgb(resolved);

    if (!rgb) {
      return baseColorExpr;
    }

    // For RGB light colors (useLightBackground === true), always apply derivation
    // For accent colors (useLightBackground === false), only apply if card background matches or sub-button color matches
    const isRgbLightColor = useLightBackground && entity?.startsWith('light.') && !context.config.use_accent_color;
    
    // Check if sub-button color matches (for slider contrast)
    let shouldApplyDerivation = false;
    let subButtonRgb = null;
    
    if (subButtonColor) {
      let subButtonResolved = resolveCssVariable(subButtonColor);
      if (subButtonResolved && subButtonResolved.startsWith('var(')) {
        const match = subButtonResolved.match(/var\((--[^,]+),?\s*(.*)?\)/);
        if (match) {
          const [, varName] = match;
          const computed = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
          if (computed) subButtonResolved = computed;
        }
      }
      subButtonRgb = hexToRgb(subButtonResolved) || rgbStringToRgb(subButtonResolved);
      
      if (subButtonRgb && areColorsSimilar(rgb, subButtonRgb)) {
        shouldApplyDerivation = true;
      }
    }
    
    if (!isRgbLightColor && cardBackgroundColor) {
      // Check if card background matches sub-button color
      // Only apply derivation if colors are similar (to avoid unnecessary changes)
      let cardResolved = resolveCssVariable(cardBackgroundColor);
      if (cardResolved && cardResolved.startsWith('var(')) {
        const match = cardResolved.match(/var\((--[^,]+),?\s*(.*)?\)/);
        if (match) {
          const [, varName] = match;
          const computed = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
          if (computed) cardResolved = computed;
        }
      }
      const cardRgb = hexToRgb(cardResolved) || rgbStringToRgb(cardResolved);
      
      // Only apply derivation if card background and sub-button colors are similar
      if (cardRgb && areColorsSimilar(rgb, cardRgb)) {
        shouldApplyDerivation = true;
      }
    }
    
    // For accent colors, only apply derivation if card background or sub-button color matches
    // For RGB light colors, always apply derivation
    if (!isRgbLightColor && !shouldApplyDerivation) {
      return baseColorExpr;
    }

    // Check if text color is light (white/light colors)
    // If text is light, we need to darken the background to maintain contrast
    // If text is dark, we need to lighten the background
    const textColor = resolveCssVariable('var(--primary-text-color, #ffffff)');
    const textRgb = hexToRgb(textColor) || rgbStringToRgb(textColor);
    const isTextLight = textRgb ? calculateLuminance(...textRgb) > 0.5 : true;
    
    // Darken if text is light (to contrast with white text), lighten if text is dark (to contrast with dark text)
    const factor = isRgbLightColor
      ? (isTextLight ? 0.84 : 1.16)  // Stronger adjustment for RGB light colors
      : (isTextLight ? 0.92 : 1.08); // Subtle adjustment for accent colors
    
    const adjustedRgb = adjustColor(rgb, factor);

    return `rgb(${adjustedRgb[0]}, ${adjustedRgb[1]}, ${adjustedRgb[2]})`;
  } catch (_) {
    return baseColorExpr;
  }
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

    // Resolve nested attributes safely without using eval
    // Supports dot and bracket notation, e.g., forecast[0].datetime or forecast.0.datetime
    function resolveObjectPath(objectRoot, pathExpression) {
        if (!objectRoot || !pathExpression || typeof pathExpression !== 'string') return undefined;
        const tokenRegex = /[^.\[\]]+|\[(?:'([^']+)'|"([^"]+)"|(\d+))\]/g;
        let match;
        let current = objectRoot;
        while ((match = tokenRegex.exec(pathExpression)) && current != null) {
            const [, singleQuoted, doubleQuoted, numeric] = match;
            const key = numeric !== undefined
                ? Number(numeric)
                : (singleQuoted !== undefined ? singleQuoted : (doubleQuoted !== undefined ? doubleQuoted : match[0]));
            // If match[0] was a simple token (no brackets), it's already the key
            const resolvedKey = (singleQuoted !== undefined || doubleQuoted !== undefined || numeric !== undefined)
                ? key
                : match[0];
            current = current?.[resolvedKey];
        }
        return current;
    }

    try {
        const attributesRoot = context?._hass?.states?.[entity]?.attributes;
        if (!attributesRoot) return '';

        // When attribute contains spaces, treat it as a flat key
        if (attribute.includes(' ')) {
            const value = attributesRoot[attribute];
            return value === 0 ? '0' : (value ?? '');
        }
        
        const result = resolveObjectPath(attributesRoot, attribute);
        return result === 0 ? '0' : (result ?? '');
    } catch (error) {
        console.warn(`Error accessing attribute '${attribute}' for entity '${entity}':`, error);
        return '';
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
        'locked', 
        'unlocked',
        'occupied', 
        'available', 
        'running', 
        'active', 
        'connected', 
        'online',
        'mowing', 
        'edgecut',
        'starting',
        'heat',
        'cool',
        'dry',
        'heat_cool',
        'fan_only',
        'auto',
        'alarm',
        'error'
    ];

    if (activeStringStates.includes(state) || numericState || isTemperature) {
        return true;
    }

    return false;
}

export function isStateRequiringAttention(context, entity = context.config.entity) {
    const state = getState(context, entity).toLowerCase();
    const attentionStates = [
        'unlocked',
        'error'
    ];
    
    return attentionStates.includes(state);
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

// Shared state and observers for scrolling effect
const bubbleScrollState = new WeakMap();

function getBubbleResizeObserver() {
    if (!window.bubbleScrollResizeObserver) {
        window.bubbleScrollResizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                const state = bubbleScrollState.get(element);
                if (!state) return;

                if (!element.isConnected) {
                    try { window.bubbleScrollResizeObserver.unobserve(element); } catch (e) {}
                    if (window.bubbleScrollObserver) {
                        try { window.bubbleScrollObserver.unobserve(element); } catch (e) {}
                    }
                    bubbleScrollState.delete(element);
        return;
    }

                measureAndApplyScrolling(element, state);
            });
        });
    }
    return window.bubbleScrollResizeObserver;
}

function getBubbleIntersectionObserver() {
    if (!window.bubbleScrollObserver) {
        window.bubbleScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const span = entry.target.querySelector('.scrolling-container span');
                if (span) {
                    span.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
                }
            });
        }, { threshold: 0.1 });
    }
    return window.bubbleScrollObserver;
}

function measureAndApplyScrolling(element, state) {
    const text = state.text;
    if (!text) return;
        if (!element.isConnected) return;

        const availableWidth = element.clientWidth;
    const isAnimated = element.getAttribute('data-animated') === 'true';
    const SCROLL_SPEED = 16; // Pixels per second

    if (isAnimated) {
        const span = element.querySelector('.scrolling-container span');
        if (!span) return;

        const baseWidth = Math.max(1, span.scrollWidth / 2);
        if (baseWidth <= availableWidth) {
            element.removeAttribute('data-animated');
            element.innerHTML = text;
            if (state.observed && window.bubbleScrollObserver) {
                try { window.bubbleScrollObserver.unobserve(element); } catch (e) {}
                state.observed = false;
            }
            return;
        }

        const scrollDistance = baseWidth;
        const duration = Math.max(1, scrollDistance / SCROLL_SPEED);
        span.style.animationDuration = `${duration.toFixed(2)}s`;
        return;
    } else {
        const baseWidth = element.scrollWidth;
        if (baseWidth > availableWidth) {
            const separator = `<span class="bubble-scroll-separator"> | </span>`;
            const wrappedText = `<span>${text + separator + text + separator}</span>`;
            element.innerHTML = `<div class="scrolling-container">${wrappedText}</div>`;
            element.setAttribute('data-animated', 'true');
            
            const span = element.querySelector('.scrolling-container span');
            if (span && span.scrollWidth > 0) {
                const scrollDistance = Math.max(1, span.scrollWidth / 2);
                const duration = Math.max(1, scrollDistance / SCROLL_SPEED);
                span.style.animationDuration = `${duration.toFixed(2)}s`;
            }

            const io = getBubbleIntersectionObserver();
            try { io.observe(element); } catch (e) {}
            state.observed = true;
            return;
        } else if (state.observed && window.bubbleScrollObserver) {
            try { window.bubbleScrollObserver.unobserve(element); } catch (e) {}
            state.observed = false;
        }
    }
}

export function applyScrollingEffect(context, element, text) {
    const { scrolling_effect: scrollingEffect = true } = context.config;

    if (!scrollingEffect) {
		applyNonScrollingStyle(element, text);
		// Cleanup observers if present
		const ro = window.bubbleScrollResizeObserver;
		if (ro) {
			try { ro.unobserve(element); } catch (e) {}
		}
		const io = window.bubbleScrollObserver;
		if (io && element) {
			try { io.unobserve(element); } catch (e) {}
		}
		bubbleScrollState.delete(element);
                return;
            }

	// Skip unnecessary updates but ensure observers remain
	if (element.previousText === text && bubbleScrollState.has(element)) return;

	// Store original text for future comparison
	element.previousText = text;
	bubbleScrollState.set(element, { text });

	// Check if animation is already running
	const isAnimated = element.getAttribute('data-animated') === 'true';
	const existingSpan = element.querySelector('.scrolling-container span');
	
	if (isAnimated && existingSpan) {
		// Update content without interrupting animation
		const separator = `<span class="bubble-scroll-separator"> | </span>`;
		const wrappedText = `${text + separator + text + separator}`;
		existingSpan.innerHTML = wrappedText;
		
		// Check if text now fits in container
		const availableWidth = element.clientWidth;
		const baseWidth = Math.max(1, existingSpan.scrollWidth / 2);
		
		if (baseWidth <= availableWidth) {
			// Text now fits, disable animation
			element.removeAttribute('data-animated');
			element.innerHTML = text;
			const state = bubbleScrollState.get(element);
			if (state && state.observed && window.bubbleScrollObserver) {
				try { window.bubbleScrollObserver.unobserve(element); } catch (e) {}
				state.observed = false;
			}
			return;
		}
		
		// Recalculate animation duration if needed
		const SCROLL_SPEED = 16;
		const scrollDistance = baseWidth;
		const duration = Math.max(1, scrollDistance / SCROLL_SPEED);
		existingSpan.style.animationDuration = `${duration.toFixed(2)}s`;
		
		// Ensure observers remain active
		const ro = getBubbleResizeObserver();
		try { ro.observe(element); } catch (e) {}
		
		return;
	}

	// Set plain text first; ResizeObserver will decide to animate
	element.innerHTML = text;
	element.style = '';
	element.removeAttribute('data-animated');

	const ro = getBubbleResizeObserver();
	try { ro.observe(element); } catch (e) {}

	// Measure immediately to avoid relying solely on observer scheduling
	const state = bubbleScrollState.get(element);
	measureAndApplyScrolling(element, state);
}

function applyNonScrollingStyle(element, text) {
    element.innerHTML = text;
    element.previousText = text;

    Object.assign(element.style, {
        whiteSpace: 'normal',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        lineHeight: 'normal'
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
        value = Math.round(diffInSeconds / 60);
    } else if (diffInSeconds < 86400) {
        unit = 'hour';
        value = Math.round(diffInSeconds / 3600);
    } else {
        unit = 'day';
        value = Math.round(diffInSeconds / 86400);
    }

    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    return rtf.format(-value, unit);
}

// Timer utility functions
export function durationToSeconds(duration) {
    if (!duration) return 0;
    
    if (typeof duration === 'number') {
        return duration;
    }
    
    if (typeof duration === 'string') {
        // Parse ISO 8601 duration format (PT1H30M45S) or simple format (1:30:45)
        let seconds = 0;
        
        // Try ISO 8601 format first
        const isoMatch = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
        if (isoMatch) {
            seconds += (parseInt(isoMatch[1] || 0, 10) * 3600);
            seconds += (parseInt(isoMatch[2] || 0, 10) * 60);
            seconds += parseInt(isoMatch[3] || 0, 10);
            return seconds;
        }
        
        // Try simple format (HH:MM:SS or MM:SS)
        const parts = duration.split(':').map(p => parseInt(p, 10));
        if (parts.length === 3) {
            return parts[0] * 3600 + parts[1] * 60 + parts[2];
        } else if (parts.length === 2) {
            return parts[0] * 60 + parts[1];
        }
    }
    
    return 0;
}

export function secondsToDuration(seconds) {
    if (seconds === undefined || seconds === null || isNaN(seconds)) {
        return null;
    }
    
    const totalSeconds = Math.floor(seconds);
    if (totalSeconds < 0) return '0';
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    } else if (minutes > 0) {
        return `${minutes}:${String(secs).padStart(2, '0')}`;
    } else {
        return `0:${String(secs).padStart(2, '0')}`;
    }
}

export function isTimerEntity(entity) {
    return entity && typeof entity === 'string' && entity.startsWith('timer.');
}

export function timerTimeRemaining(stateObj) {
    if (!stateObj || !stateObj.attributes) {
        return undefined;
    }
    
    if (!stateObj.attributes.remaining) {
        return undefined;
    }
    
    let timeRemaining = durationToSeconds(stateObj.attributes.remaining);
    
    if (stateObj.state === 'active' && stateObj.attributes.finishes_at) {
        const now = new Date().getTime();
        const finishes = new Date(stateObj.attributes.finishes_at).getTime();
        timeRemaining = Math.max((finishes - now) / 1000, 0);
    }
    
    return timeRemaining;
}

export function computeDisplayTimer(hass, stateObj, timeRemaining) {
    if (!stateObj) {
        return null;
    }
    
    if (stateObj.state === 'idle' || timeRemaining === 0) {
        return hass.formatEntityState(stateObj);
    }
    
    let display = secondsToDuration(timeRemaining || 0) || '0';
    
    if (stateObj.state === 'paused') {
        display = `${display} (${hass.formatEntityState(stateObj)})`;
    }
    
    return display;
}

// Timer interval management for active timers
const timerIntervals = new WeakMap();
const elementTimerIntervals = new WeakMap();

export function startTimerInterval(context, entity, updateCallback) {
    // Stop any existing interval for this context
    stopTimerInterval(context);
    
    const state = context._hass?.states?.[entity];
    if (!state || state.state !== 'active') {
        return;
    }
    
    // Create interval that updates every second
    const intervalId = setInterval(() => {
        // Check if context is still valid and entity still exists
        if (!context._hass?.states?.[entity]) {
            stopTimerInterval(context);
            return;
        }
        
        const currentState = context._hass.states[entity];
        // Stop interval if timer is no longer active
        if (!currentState || currentState.state !== 'active') {
            stopTimerInterval(context);
            return;
        }
        
        // Call the update callback
        if (updateCallback) {
            updateCallback();
        }
    }, 1000);
    
    timerIntervals.set(context, intervalId);
}

export function stopTimerInterval(context) {
    const intervalId = timerIntervals.get(context);
    if (intervalId) {
        clearInterval(intervalId);
        timerIntervals.delete(context);
    }
}

// Timer interval management for sub-button elements
export function startElementTimerInterval(element, context, entity, updateCallback) {
    // Stop any existing interval for this element
    stopElementTimerInterval(element);
    
    const state = context._hass?.states?.[entity];
    if (!state || state.state !== 'active') {
        return;
    }
    
    // Create interval that updates every second
    const intervalId = setInterval(() => {
        // Check if element is still in DOM
        if (!element.isConnected) {
            stopElementTimerInterval(element);
            return;
        }
        
        // Check if context is still valid and entity still exists
        if (!context._hass?.states?.[entity]) {
            stopElementTimerInterval(element);
            return;
        }
        
        const currentState = context._hass.states[entity];
        // Stop interval if timer is no longer active
        if (!currentState || currentState.state !== 'active') {
            stopElementTimerInterval(element);
            return;
        }
        
        // Call the update callback
        if (updateCallback) {
            updateCallback();
        }
    }, 1000);
    
    elementTimerIntervals.set(element, intervalId);
}

export function stopElementTimerInterval(element) {
    const intervalId = elementTimerIntervals.get(element);
    if (intervalId) {
        clearInterval(intervalId);
        elementTimerIntervals.delete(element);
    }
}

// Variables to store DOM references
let cachedHomeAssistant = null;
let cachedMain = null;
let cachedDrawer = null;
let cachedHuiRoot = null;
let isCached = false;

export function setLayout(context, targetElementOverride = null, defaultLayoutOverride = null) {
    const targetElement = targetElementOverride || context.content;

    if (!targetElement) return;

    const applyMainButtonsLayout = () => {
        const buttonsContainer = context.elements?.buttonsContainer;
        const cardWrapper = context.elements?.cardWrapper;
        const bottomSubButtonContainer = context.elements?.bottomSubButtonContainer;
        if (!buttonsContainer || !cardWrapper) {
            return;
        }

        const position = context.config?.main_buttons_position || 'default';
        const alignment = context.config?.main_buttons_alignment || 'end';
        // Set main_buttons_full_width to true by default when position is bottom
        const fullWidth = context.config?.main_buttons_full_width ?? (position === 'bottom' ? true : false);

        const alignClasses = ['align-start', 'align-center', 'align-end', 'align-space-between'];
        buttonsContainer.classList.remove('bottom-fixed', 'full-width', ...alignClasses);
        cardWrapper.classList.remove('has-bottom-buttons');
        bottomSubButtonContainer?.classList.remove('with-main-buttons-bottom');

        if (position !== 'bottom') {
            return;
        }

        const alignmentClassMap = {
            start: 'align-start',
            center: 'align-center',
            end: 'align-end',
            'space-between': 'align-space-between'
        };

        const resolvedAlignClass = alignmentClassMap[alignment] || 'align-end';

        buttonsContainer.classList.add('bottom-fixed', resolvedAlignClass);
        if (fullWidth) {
            buttonsContainer.classList.add('full-width');
        }

        cardWrapper.classList.add('has-bottom-buttons');
        
        // Only add with-main-buttons-bottom if main buttons are actually visible
        const isMainButtonsVisible = !buttonsContainer.classList.contains('hidden') && 
                                     buttonsContainer.style.display !== 'none' &&
                                     getComputedStyle(buttonsContainer).display !== 'none';
        
        if (isMainButtonsVisible) {
            bottomSubButtonContainer?.classList.add('with-main-buttons-bottom');
        }
    };

    let determinedLayoutClass;

    if (defaultLayoutOverride) {
        determinedLayoutClass = context.config.card_layout ?? defaultLayoutOverride;
    } else {
        if (!isCached) {
            cachedHomeAssistant = document.querySelector("body > home-assistant");
            cachedMain = cachedHomeAssistant?.shadowRoot?.querySelector("home-assistant-main");
            cachedDrawer = cachedMain?.shadowRoot?.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace");
            cachedHuiRoot = cachedDrawer?.shadowRoot?.querySelector("hui-root");
            
            if (cachedHomeAssistant && cachedMain && cachedDrawer && cachedHuiRoot) {
                isCached = true;
            } else {
                cachedHomeAssistant = null; cachedMain = null; cachedDrawer = null; cachedHuiRoot = null;
                isCached = false;
            }
        }

        if (cachedHuiRoot && !cachedHuiRoot.isConnected) {
            isCached = false; 
            cachedHomeAssistant = null; cachedMain = null; cachedDrawer = null; cachedHuiRoot = null;
        }
        
        let defaultViewLayout = "normal";
        if (cachedHuiRoot?.shadowRoot) {
            const masonryView = cachedHuiRoot.shadowRoot.querySelector("#view > hui-view > hui-masonry-view");
            window.isSectionView = !masonryView;
            defaultViewLayout = window.isSectionView ? "large" : "normal";
        }
        determinedLayoutClass = context.config.card_layout ?? defaultViewLayout;

        // Auto-upgrade layout to 'large' when bottom sub-buttons are present
        // and we're not in Section view, only if user layout is unset or 'normal'
        try {
            const rawSubButton = context?.config?.sub_button;
            const hasBottomSubButtons = (() => {
                if (!rawSubButton) return false;
                if (Array.isArray(rawSubButton)) return false; // legacy schema had no bottom section
                const bottom = Array.isArray(rawSubButton.bottom) ? rawSubButton.bottom : [];
                return bottom.some(item => !!item);
            })();

            if (hasBottomSubButtons) {
                const isSection = Boolean(window.isSectionView);
                const currentLayout = context?.config?.card_layout;
                const isNormalLayout = currentLayout == null || currentLayout === 'normal';
                if (!isSection && isNormalLayout) {
                    determinedLayoutClass = 'large';
                    context.config.card_layout = 'large';
                }
            }
        } catch (_) {}
    }

    if (context.previousLayout === determinedLayoutClass) {
        return;
    }
    context.previousLayout = determinedLayoutClass;

    const needsLarge = determinedLayoutClass === 'large' || determinedLayoutClass === 'large-2-rows' || determinedLayoutClass === 'large-sub-buttons-grid';
    const needsRows2 = determinedLayoutClass === 'large-2-rows';
    const needsSubButtonsGrid = determinedLayoutClass === 'large-sub-buttons-grid';

    targetElement.classList.toggle('large', needsLarge);
    targetElement.classList.toggle('rows-2', needsRows2);
    targetElement.classList.toggle('sub-buttons-grid', needsSubButtonsGrid);

    applyMainButtonsLayout();
    updateContentContainerFixedClass(context);

    if (targetElement === context.content &&
        context.elements?.mainContainer && 
        (context.config.rows || context.config.grid_options?.rows)) {
        
        if (context.config.rows === 'auto' || context.config.grid_options?.rows === 'auto') {
            // context.elements.mainContainer.style.removeProperty('--row-size');
        } else {
            context.elements.mainContainer.style.setProperty('--row-size', context.config.rows || context.config.grid_options?.rows);
        }
    } else if (context.config.card_type === 'separator') {
        context.elements.mainContainer.style.setProperty('--row-size', 0.8);
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

let previousScrollY = 0;
const scrollLockHtmlClass = 'bubble-html-scroll-locked';

function injectNoScrollStyles() {
    const styleId = 'bubble-card-no-scroll-styles';
    if (document.getElementById(styleId)) return;

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = `
        html.${scrollLockHtmlClass} {
            overflow: hidden !important;
        }
    `;
    document.head.appendChild(styleElement);
}

export function toggleBodyScroll(disable) {
    injectNoScrollStyles();

    if (disable) {
        if (document.documentElement.classList.contains(scrollLockHtmlClass)) {
            return;
        }

        previousScrollY = window.scrollY !== undefined 
            ? window.scrollY 
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
        document.documentElement.classList.add(scrollLockHtmlClass);        
    } else {
        if (!document.documentElement.classList.contains(scrollLockHtmlClass)) {
            return;
        }

        document.documentElement.classList.remove(scrollLockHtmlClass);
        window.scrollTo({ top: previousScrollY, behavior: 'instant' });
    }
}

export function cleanupScrollingEffects(root) {
    try {
        const elements = root.querySelectorAll('*');
        elements.forEach((el) => {
            if (el._bubbleResizeListener) {
                window.removeEventListener('resize', el._bubbleResizeListener);
                el._bubbleResizeListener = null;
                el.eventAdded = false;
            }
            if (window.bubbleScrollObserver) {
                try { window.bubbleScrollObserver.unobserve(el); } catch (e) {}
            }
        });
    } catch (e) {
        // no-op
    }
}