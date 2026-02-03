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
let cachedBodyStyles = null;
let stylesCacheFrameId = 0;
let rafScheduled = false;

function invalidateStyleCache() {
    cachedDocumentElementStyles = null;
    cachedBodyStyles = null;
    stylesCacheFrameId++;
    rafScheduled = false;
}

function ensureStyleCacheValid() {
    if (!rafScheduled) {
        requestAnimationFrame(invalidateStyleCache);
        rafScheduled = true;
    }
}

export function getCachedDocumentElementStyles() {
    if (!cachedDocumentElementStyles) {
        cachedDocumentElementStyles = getComputedStyle(document.documentElement);
        ensureStyleCacheValid();
    }
    return cachedDocumentElementStyles;
}

function getCachedBodyStyles() {
    if (!cachedBodyStyles) {
        cachedBodyStyles = getComputedStyle(document.body);
        ensureStyleCacheValid();
    }
    return cachedBodyStyles;
}

// Cache for resolved CSS variables - cleared each frame
const cssVariableCache = new Map();
let cssVariableCacheFrameId = -1;

export function resolveCssVariable(cssVariable) {
    if (!cssVariable) return '';
    
    // Clear cache if frame changed
    if (cssVariableCacheFrameId !== stylesCacheFrameId) {
        cssVariableCache.clear();
        cssVariableCacheFrameId = stylesCacheFrameId;
    }
    
    // Check cache first
    if (cssVariableCache.has(cssVariable)) {
        return cssVariableCache.get(cssVariable);
    }
    
    let value = cssVariable;
    
    // Fast path: if not a CSS variable, return as-is
    if (!value.startsWith('var(')) {
        cssVariableCache.set(cssVariable, value);
        return value;
    }
    
    const bodyStyles = getCachedBodyStyles();
    let iterations = 0;
    const maxIterations = 10; // Prevent infinite loops

    while (value && value.startsWith('var(') && iterations < maxIterations) {
        const match = value.match(/var\((--[^,]+),?\s*(.*)?\)/);
        if (!match) break;
        const [, varName, fallback] = match;
        const resolvedValue = bodyStyles.getPropertyValue(varName).trim();
        value = resolvedValue || (fallback && fallback.trim()) || '';
        iterations++;
    }

    cssVariableCache.set(cssVariable, value);
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
        const computed = getCachedDocumentElementStyles().getPropertyValue(varName).trim();
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
    
    if (subButtonColor) {
      let subButtonResolved = resolveCssVariable(subButtonColor);
      if (subButtonResolved && subButtonResolved.startsWith('var(')) {
        const match = subButtonResolved.match(/var\((--[^,]+),?\s*(.*)?\)/);
        if (match) {
          const [, varName] = match;
          const computed = getCachedDocumentElementStyles().getPropertyValue(varName).trim();
          if (computed) subButtonResolved = computed;
        }
      }
      const subButtonRgb = hexToRgb(subButtonResolved) || rgbStringToRgb(subButtonResolved);
      
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
          const computed = getCachedDocumentElementStyles().getPropertyValue(varName).trim();
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
const SCROLL_SPEED = 16; // Pixels per second for scrolling animation

// Force browser reflow to ensure accurate layout measurements after DOM changes
function forceReflow(element) {
    void element.offsetWidth;
}

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

function calculateAnimationDuration(scrollWidth) {
    const scrollDistance = Math.max(1, scrollWidth / 2);
    return Math.max(1, scrollDistance / SCROLL_SPEED);
}

function measureAndApplyScrolling(element, state) {
    const text = state.text;
    if (!text || !element.isConnected) return;

    const availableWidth = element.clientWidth;
    const isAnimated = element.getAttribute('data-animated') === 'true';

    // Tolerance threshold to handle sub-pixel rounding errors (especially on Safari with zoom)
    const SCROLL_TOLERANCE = 2;

    if (isAnimated) {
        const span = element.querySelector('.scrolling-container span');
        if (!span) return;

        forceReflow(span);
        const baseWidth = Math.max(1, span.scrollWidth / 2);
        
        if (baseWidth <= availableWidth + SCROLL_TOLERANCE) {
            element.removeAttribute('data-animated');
            element.innerHTML = text;
            if (state.observed && window.bubbleScrollObserver) {
                try { window.bubbleScrollObserver.unobserve(element); } catch (e) {}
                state.observed = false;
            }
            return;
        }

        const duration = calculateAnimationDuration(span.scrollWidth);
        span.style.animationDuration = `${duration.toFixed(2)}s`;
    } else {
        const baseWidth = element.scrollWidth;
        if (baseWidth > availableWidth + SCROLL_TOLERANCE) {
            const separator = `<span class="bubble-scroll-separator"> | </span>`;
            const wrappedText = `<span>${text + separator + text + separator}</span>`;
            element.innerHTML = `<div class="scrolling-container">${wrappedText}</div>`;
            element.setAttribute('data-animated', 'true');
            
            const span = element.querySelector('.scrolling-container span');
            if (span) {
                forceReflow(span);
                if (span.scrollWidth > 0) {
                    const duration = calculateAnimationDuration(span.scrollWidth);
                    span.style.animationDuration = `${duration.toFixed(2)}s`;
                }
            }

            const io = getBubbleIntersectionObserver();
            try { io.observe(element); } catch (e) {}
            state.observed = true;
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
        if (window.bubbleScrollResizeObserver) {
            try { window.bubbleScrollResizeObserver.unobserve(element); } catch (e) {}
        }
        if (window.bubbleScrollObserver) {
            try { window.bubbleScrollObserver.unobserve(element); } catch (e) {}
        }
        bubbleScrollState.delete(element);
        return;
    }

    const textChanged = element.previousText !== text;
    const hasState = bubbleScrollState.has(element);
    
    // Skip if text hasn't changed and state exists (element was never disconnected)
    if (!textChanged && hasState) return;

    element.previousText = text;
    
    // Detect if element was disconnected and reconnected (state was cleaned up)
    const wasReconnected = !hasState && element.getAttribute('data-animated') === 'true';
    
    // Get or create state
    let state = bubbleScrollState.get(element);
    if (state) {
        state.text = text;
    } else {
        state = { text, observed: false };
        bubbleScrollState.set(element, state);
    }

    const isAnimated = element.getAttribute('data-animated') === 'true';
    const existingSpan = element.querySelector('.scrolling-container span');
    
    // Tolerance threshold to handle sub-pixel rounding errors (especially on Safari with zoom)
    const SCROLL_TOLERANCE = 2;

    if (isAnimated && existingSpan) {
        // Update content while animation runs
        const separator = `<span class="bubble-scroll-separator"> | </span>`;
        existingSpan.innerHTML = `${text + separator + text + separator}`;
        
        // Force reflow to get accurate measurements after DOM change
        forceReflow(existingSpan);
        
        const availableWidth = element.clientWidth;
        const baseWidth = Math.max(1, existingSpan.scrollWidth / 2);
        
        if (baseWidth <= availableWidth + SCROLL_TOLERANCE) {
            // Text now fits, disable animation
            element.removeAttribute('data-animated');
            element.innerHTML = text;
            if (state.observed && window.bubbleScrollObserver) {
                try { window.bubbleScrollObserver.unobserve(element); } catch (e) {}
                state.observed = false;
            }
            return;
        }
        
        // Recalculate animation duration with new text length
        const duration = calculateAnimationDuration(existingSpan.scrollWidth);
        existingSpan.style.animationDuration = `${duration.toFixed(2)}s`;
        
        // If element was reconnected, restart animation and reconnect observers
        if (wasReconnected) {
            // Force animation restart by toggling animation property
            existingSpan.style.animation = 'none';
            forceReflow(existingSpan);
            existingSpan.style.animation = '';
            existingSpan.style.animationDuration = `${duration.toFixed(2)}s`;
            existingSpan.style.animationPlayState = 'running';
            
            // Reconnect IntersectionObserver to manage play state on visibility
            const io = getBubbleIntersectionObserver();
            try { io.observe(element); } catch (e) {}
            state.observed = true;
        }
        
        // Ensure resize observer remains active
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
        overflow: 'hidden',
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
        // In Section view, remove 'normal' layout to use default 'large'
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
                const hasCardLayoutExplicitlyDefined = Object.prototype.hasOwnProperty.call(context?.config, 'card_layout');
                const isNormalLayout = currentLayout == null || currentLayout === 'normal';
                
                if (isSection && hasCardLayoutExplicitlyDefined && currentLayout === 'normal') {
                    // In section view, remove 'normal' to use default 'large'
                    try {
                        delete context.config.card_layout;
                    } catch (_) {
                        const configCopy = { ...context.config };
                        delete configCopy.card_layout;
                        context.config = configCopy;
                    }
                } else if (!isSection && isNormalLayout) {
                    // In non-section view, set to 'large' if layout is unset or 'normal'
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
let previousScrollX = 0;
const legacyScrollLockClass = 'bubble-html-scroll-locked';
const scrollLockBodyClass = 'bubble-body-scroll-locked';
const scrollLockInlineDatasetKey = 'bubbleScrollLockInline';
const scrollLockStyleProps = ['position', 'width', 'top', 'left', 'right'];

function injectNoScrollStyles() {
    const styleId = 'bubble-card-no-scroll-styles';
    const cssContent = `
        body.${scrollLockBodyClass} {
            overflow: hidden !important;
            overscroll-behavior: none;
        }
    `;
    let styleElement = document.getElementById(styleId);
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
    }
    if (styleElement.textContent !== cssContent) {
        styleElement.textContent = cssContent;
    }
}

function saveBodyInlineStyles(body) {
    const saved = {};
    scrollLockStyleProps.forEach((prop) => {
        const value = body.style[prop];
        if (value) {
            saved[prop] = value;
        }
    });
    body.dataset[scrollLockInlineDatasetKey] = JSON.stringify(saved);
}

function restoreBodyInlineStyles(body) {
    const raw = body.dataset[scrollLockInlineDatasetKey];
    delete body.dataset[scrollLockInlineDatasetKey];

    if (!raw) {
        scrollLockStyleProps.forEach((prop) => body.style.removeProperty(prop));
        return;
    }

    try {
        const saved = JSON.parse(raw);
        scrollLockStyleProps.forEach((prop) => {
            if (saved[prop]) {
                body.style[prop] = saved[prop];
            } else {
                body.style.removeProperty(prop);
            }
        });
    } catch (_) {
        scrollLockStyleProps.forEach((prop) => body.style.removeProperty(prop));
    }
}

export function toggleBodyScroll(disable) {
    injectNoScrollStyles();

    const html = document.documentElement;
    const body = document.body;
    if (!body) return;

    if (disable) {
        if (body.classList.contains(scrollLockBodyClass)) {
            return;
        }

        previousScrollY = window.scrollY !== undefined 
            ? window.scrollY 
            : (html || document.body.parentNode || document.body).scrollTop;

        previousScrollX = window.scrollX !== undefined
            ? window.scrollX
            : (html || document.body.parentNode || document.body).scrollLeft;

        saveBodyInlineStyles(body);

        body.classList.add(scrollLockBodyClass);
        body.style.position = 'fixed';
        body.style.width = '100%';
        body.style.top = `-${previousScrollY}px`;
        body.style.left = '0';
        body.style.right = '0';
        return;
    }

    if (html) {
        html.classList.remove(legacyScrollLockClass);
    }

    if (!body.classList.contains(scrollLockBodyClass)) {
        return;
    }

    body.classList.remove(scrollLockBodyClass);
    restoreBodyInlineStyles(body);

    window.scrollTo({ top: previousScrollY, left: previousScrollX, behavior: 'auto' });
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

export function formatNumericValue(value, decimals = 0, unit = '', locale = 'en-US') {
    const num = Number(value);
    if (Number.isNaN(num)) return '';
    
    // Use toLocaleString for proper locale-based formatting
    const formatted = num.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: false // Don't add thousands separators
    });
    
    // Add unit with space if provided
    return unit ? `${formatted} ${unit}` : formatted;
}

export function getTemperatureUnit(hass) {
    return hass?.config?.unit_system?.temperature === '°C' ? '°C' : '°F';
}