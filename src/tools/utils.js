import { isColorCloseToWhite } from "./style.js";
import { updateContentContainerFixedClass } from "../components/base-card/index.js";
import { getIconColor } from "./icon.js";
import { adjustColor, areColorsSimilar, calculateLuminance, hexToRgb, rgbStringToRgb } from "./color.js";

// Kept re-exported: the color primitives moved to their own leaf module, every
// existing import of them still points here
export { adjustColor, areColorsSimilar, calculateLuminance, hexToRgb, rgbStringToRgb };

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

// Home Assistant marks its first history entry with `{ root: true }` and reads
// it back to decide whether a page shows the sidebar button or a back arrow.
// A replace reuses the entry already on the stack, so it has to carry that mark
// over or the frontend loses it for the rest of the session. A push creates a
// new entry, which by definition is not the root one, so it starts empty. Both
// rules are the ones `common/navigate.ts` follows.
export const keptHistoryState = () => (history.state?.root ? { root: true } : null)

export const navigate = (_node, path, replace = false) => {
    if (replace) {
        history.replaceState(keptHistoryState(), "", path)
    } else {
        history.pushState(null, "", path)
    }
    fireEvent(window, "location-changed", {
        replace
    })
}

function normalizeComparableVersion(version) {
    if (version === null || version === undefined) return '';
    const rawVersion = typeof version === 'string' || typeof version === 'number'
        ? String(version).trim()
        : '';
    if (!rawVersion) return '';

    // Keep only numeric chunks so tags like "2026.3.0b2" or "2026.3-dev" are comparable.
    const parts = rawVersion.match(/\d+/g);
    return parts ? parts.join('.') : '';
}

// Home Assistant stamps dir="rtl" on the document for RTL languages;
// logical CSS follows it automatically, JS math has to ask explicitly.
export function isDocumentRTL() {
    return (document.documentElement.dir || document.dir) === 'rtl';
}

export function compareVersions(v1, v2) {
    const normalizedV1 = normalizeComparableVersion(v1);
    const normalizedV2 = normalizeComparableVersion(v2);
    if (!normalizedV1 || !normalizedV2) return 0;

    const v1Parts = normalizedV1.split('.').map(Number);
    const v2Parts = normalizedV2.split('.').map(Number);
    const maxLength = Math.max(v1Parts.length, v2Parts.length);

    for (let i = 0; i < maxLength; i++) {
        const part1 = v1Parts[i] || 0;
        const part2 = v2Parts[i] || 0;
        if (part1 > part2) return 1;
        if (part1 < part2) return -1;
    }

    return 0;
}

export function isHomeAssistantVersionAtLeast(hass, minVersion) {
    const currentVersion = hass?.config?.version;
    if (!currentVersion || !minVersion) {
        return false;
    }
    return compareVersions(currentVersion, minVersion) >= 0;
}

const colorCache = new Map();

// Cache for getComputedStyle to avoid expensive recalculations.
// Instead of invalidating every frame, we keep the cache alive and only
// invalidate when a theme change is detected. This dramatically reduces
// forced reflows during popup open/close transitions.
let cachedDocumentElementStyles = null;
let cachedBodyStyles = null;
let cachedThemeId = null;
let styleCacheNeedsThemeCheck = true;

function getCurrentThemeId() {
    // Home Assistant applies a theme by writing every token inline on <html>, so the
    // number of inline declarations plus the two colors Bubble Card reads identifies
    // it. The count matters: themes sharing a background and a text color still
    // differ by it, and the default light theme, which writes no token at all, no
    // longer looks like a page whose theme has simply not been applied yet.
    const rootStyle = document.documentElement.style;
    const bg = rootStyle.getPropertyValue('--primary-background-color').trim();
    const fg = rootStyle.getPropertyValue('--primary-text-color').trim();
    return rootStyle.length + '|' + bg + '|' + fg;
}

// That same inline write is also the signal that a theme changed at all. Watching
// the attribute keeps the check below down to a boolean on a path walked for every
// color of every card, and it stays silent while the dashboard merely updates.
if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined' && document.documentElement) {
    new MutationObserver(() => {
        styleCacheNeedsThemeCheck = true;
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
}

// Bumped every time the resolved theme colors change. Anything caching a color
// it read from the document can watch this instead of resolving it again
let styleGeneration = 0;

export function getStyleGeneration() {
    ensureStyleCacheValid();
    return styleGeneration;
}

export function invalidateStyleCache() {
    cachedDocumentElementStyles = null;
    cachedBodyStyles = null;
    cachedThemeId = null;
    styleCacheNeedsThemeCheck = true;
    styleGeneration++;
    cssVariableCache.clear();
}

function ensureStyleCacheValid() {
    if (!styleCacheNeedsThemeCheck) return;
    styleCacheNeedsThemeCheck = false;

    const currentTheme = getCurrentThemeId();
    if (cachedThemeId !== currentTheme) {
        cachedDocumentElementStyles = null;
        cachedBodyStyles = null;
        cssVariableCache.clear();
        cachedThemeId = currentTheme;
        styleGeneration++;
    }
}

export function getCachedDocumentElementStyles() {
    ensureStyleCacheValid();
    if (!cachedDocumentElementStyles) {
        cachedDocumentElementStyles = getComputedStyle(document.documentElement);
    }
    return cachedDocumentElementStyles;
}

export function getCachedBodyStyles() {
    ensureStyleCacheValid();
    if (!cachedBodyStyles) {
        cachedBodyStyles = getComputedStyle(document.body);
    }
    return cachedBodyStyles;
}

// Cache for resolved CSS variables - persists across frames, invalidated on theme change
const cssVariableCache = new Map();

export function resolveCssVariable(cssVariable) {
    if (!cssVariable) return '';

    // Before the cache, never after: the theme check used to sit behind the lookup
    // below, in getCachedBodyStyles, so a hit returned the previous theme's color
    // forever and only a miss on another variable could ever clear it.
    ensureStyleCacheValid();

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

// A relative time reads "2 minutes ago" and has to be rewritten as time passes.
// Nothing announces that: the entity is not changing, which is precisely why the
// text is going stale. So it needs a beat of its own.
//
// Home Assistant runs one interval per `ha-relative-time` element. One beat for
// the whole page does the same job: every subscriber wants the same 60 second
// tick, so a dashboard with fifty relative times costs one wake-up a minute
// instead of fifty. The beat also stops entirely while the page is hidden, and
// catches up on the way back, which is both cheaper and more correct than
// letting a throttled background timer decide when the text is right again.
const RELATIVE_TIME_BEAT_MS = 60000;
const relativeTimeSubscribers = new Map();
let relativeTimeBeatId = null;
let relativeTimeVisibilityBound = false;

const relativeTimeHidden = () => typeof document !== 'undefined' && document.hidden === true;

function runRelativeTimeBeat() {
    for (const [context, updateCallback] of relativeTimeSubscribers) {
        // A removed card keeps its last hass snapshot, so no state check inside
        // the callback could ever notice the element went away. Dropping it here
        // is what keeps the map from growing with every card the page discards.
        if (context.isConnected === false) {
            relativeTimeSubscribers.delete(context);
            continue;
        }
        try {
            updateCallback();
        } catch (e) {
            // One card throwing must not take the whole page's beat down with it
            relativeTimeSubscribers.delete(context);
        }
    }

    if (relativeTimeSubscribers.size === 0) {
        releaseRelativeTimeBeatIfIdle();
    }
}

function stopRelativeTimeBeat() {
    if (relativeTimeBeatId !== null) {
        clearInterval(relativeTimeBeatId);
        relativeTimeBeatId = null;
    }
}

function startRelativeTimeBeat() {
    if (relativeTimeBeatId !== null || relativeTimeSubscribers.size === 0 || relativeTimeHidden()) {
        return;
    }
    relativeTimeBeatId = setInterval(runRelativeTimeBeat, RELATIVE_TIME_BEAT_MS);
}

function onRelativeTimeVisibilityChange() {
    if (relativeTimeHidden()) {
        stopRelativeTimeBeat();
        return;
    }
    // Coming back: every text on screen is as stale as the time spent away, so
    // it is rewritten now rather than up to a minute later.
    runRelativeTimeBeat();
    startRelativeTimeBeat();
}

// Bound with the first subscriber and dropped with the last, so an empty page
// leaves nothing attached to the document.
function bindRelativeTimeVisibility() {
    if (relativeTimeVisibilityBound || typeof document === 'undefined' || !document.addEventListener) {
        return;
    }
    relativeTimeVisibilityBound = true;
    document.addEventListener('visibilitychange', onRelativeTimeVisibilityChange);
}

function unbindRelativeTimeVisibility() {
    if (!relativeTimeVisibilityBound || typeof document === 'undefined' || !document.removeEventListener) {
        relativeTimeVisibilityBound = false;
        return;
    }
    document.removeEventListener('visibilitychange', onRelativeTimeVisibilityChange);
    relativeTimeVisibilityBound = false;
}

function releaseRelativeTimeBeatIfIdle() {
    if (relativeTimeSubscribers.size > 0) {
        return;
    }
    stopRelativeTimeBeat();
    unbindRelativeTimeVisibility();
}

export function startRelativeTimeInterval(context, updateCallback) {
    // Idempotent: changeState runs on every card update, so re-subscribing must
    // stay free and must not disturb the beat already running.
    if (relativeTimeSubscribers.has(context)) {
        return;
    }
    relativeTimeSubscribers.set(context, updateCallback);
    bindRelativeTimeVisibility();
    startRelativeTimeBeat();
}

export function stopRelativeTimeInterval(context) {
    relativeTimeSubscribers.delete(context);
    releaseRelativeTimeBeatIfIdle();
}

export function hasRelativeTimeInterval(context) {
    return relativeTimeSubscribers.has(context);
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
        // Check if the card is still in the DOM: a removed card keeps its
        // last hass snapshot, in which an active timer stays 'active'
        // forever, so the state checks below could never stop the interval.
        if (context.isConnected === false) {
            stopTimerInterval(context);
            return;
        }

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

export function hasTimerInterval(context) {
    return timerIntervals.has(context);
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
        
        // Only add with-main-buttons-bottom if main buttons are actually visible.
        // Skip the forced-layout getComputedStyle call while a popup is opening
        // (data-bubblePopupOpening marker is set) to avoid blocking the interaction frame.
        const popupOpening = context?.popUp?.dataset?.bubblePopupOpening === 'true';

        if (!popupOpening) {
            const isMainButtonsVisible = !buttonsContainer.classList.contains('hidden') && 
                                         buttonsContainer.style.display !== 'none' &&
                                         getComputedStyle(buttonsContainer).display !== 'none';
            
            if (isMainButtonsVisible) {
                bottomSubButtonContainer?.classList.add('with-main-buttons-bottom');
            }
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
            // Masonry is the only layout that takes the "normal" default;
            // sections, panel, sidebar and custom views all take "large".
            // So the question is really "is this a masonry view?", and the
            // answer must only be asserted when a view is actually rendered:
            // deciding from the mere absence of a masonry element meant a
            // single HA restructuring of hui-root would silently switch every
            // masonry dashboard to the large layout — a visual change users
            // would blame on Bubble Card. Descendant selectors so an extra
            // wrapper element cannot break the chain.
            const root = cachedHuiRoot.shadowRoot;
            const masonryView = root.querySelector("hui-masonry-view");
            const anyViewRendered = masonryView || root.querySelector(
                "#view, hui-view, hui-sections-view, hui-panel-view, hui-sidebar-view"
            );

            if (masonryView) {
                window.isSectionView = false;
            } else if (anyViewRendered) {
                window.isSectionView = true;
            }
            // Nothing recognisable at all: hui-root has been restructured, so
            // keep the last known answer rather than flipping every card.

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

    applyRowSize(context, targetElement);

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
}

// --row-size mirrors the configured row count, it is not a property of the
// layout class. It used to be applied at the end of setLayout, behind the
// early return above: a call that only reconfirmed the current layout left it
// untouched, so a card kept the row count of its previous config and every
// height calc fell back to its one row default (#2523).
export function applyRowSize(context, targetElement) {
    const mainContainer = context.elements?.mainContainer;
    if (!mainContainer) return;

    const configuredRows = context.config.rows || context.config.grid_options?.rows;
    let rowSize;

    if (targetElement === context.content && configuredRows) {
        // 'auto' means "size the card from its content": leave the variable as is.
        if (configuredRows === 'auto') return;
        rowSize = configuredRows;
    } else if (context.config.card_type === 'separator') {
        rowSize = 0.8;
    } else {
        return;
    }

    // Reading an inline custom property back costs nothing (no style flush) and
    // makes the call idempotent, so running it on every update stays free.
    if (mainContainer.style.getPropertyValue('--row-size') === String(rowSize)) return;
    mainContainer.style.setProperty('--row-size', rowSize);
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

const scrollLockBodyClass = 'bubble-body-scroll-locked';
const scrollLockLayerId = 'bubble-card-scroll-lock-layer';
const scrollLockLayerClass = 'bubble-scroll-lock-layer';
const scrollLockLayerActiveClass = 'is-active';
const scrollLockStyleId = 'bubble-card-no-scroll-styles';
const scrollLockCssContent = `
        .${scrollLockLayerClass} {
            position: fixed;
            inset: 0;
            z-index: 4;
            display: none;
            background: transparent;
            pointer-events: none;
            touch-action: none;
            overscroll-behavior: none;
        }

        .${scrollLockLayerClass}.${scrollLockLayerActiveClass} {
            display: block;
            pointer-events: auto;
        }
    `;
let scrollLockStyleElement = null;
let scrollLockLayerElement = null;

const hasPassiveScrollLockEvents = (() => {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
        return false;
    }

    let passiveSupported = false;

    try {
        const passiveTestOptions = {
            get passive() {
                passiveSupported = true;
                return undefined;
            },
        };

        window.addEventListener('testPassive', null, passiveTestOptions);
        window.removeEventListener('testPassive', null, passiveTestOptions);
    } catch (_) {}

    return passiveSupported;
})();

const activeScrollLockEventOptions = hasPassiveScrollLockEvents ? { passive: false } : undefined;

function injectNoScrollStyles() {
    if (!document?.head) {
        return;
    }

    if (scrollLockStyleElement?.parentNode) {
        if (scrollLockStyleElement.textContent !== scrollLockCssContent) {
            scrollLockStyleElement.textContent = scrollLockCssContent;
        }
        return;
    }

    let styleElement = document.getElementById(scrollLockStyleId);
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = scrollLockStyleId;
        document.head.appendChild(styleElement);
    }
    if (styleElement.textContent !== scrollLockCssContent) {
        styleElement.textContent = scrollLockCssContent;
    }
    scrollLockStyleElement = styleElement;
}

function preventScrollLockEvent(event) {
    if (event?.touches?.length > 1 || event?.targetTouches?.length > 1) {
        return;
    }

    if (event?.cancelable !== false) {
        event.preventDefault?.();
    }
}

function handleScrollLockTouchMove(event) {
    preventScrollLockEvent(event);
}

function handleScrollLockWheel(event) {
    preventScrollLockEvent(event);
}

function getScrollLockLayer() {
    if (!document?.body) {
        return null;
    }

    if (scrollLockLayerElement?.parentNode === document.body) {
        return scrollLockLayerElement;
    }

    let layer = document.getElementById(scrollLockLayerId);
    if (!layer) {
        layer = document.createElement('div');
        layer.id = scrollLockLayerId;
        layer.setAttribute('aria-hidden', 'true');
        layer.classList.add(scrollLockLayerClass);
        document.body.appendChild(layer);
    }

    if (!layer.classList.contains(scrollLockLayerClass)) {
        layer.classList.add(scrollLockLayerClass);
    }

    if (!layer._bubbleScrollLockListenersAdded) {
        layer.addEventListener('touchmove', handleScrollLockTouchMove, activeScrollLockEventOptions);
        layer.addEventListener('wheel', handleScrollLockWheel, activeScrollLockEventOptions);
        layer._bubbleScrollLockListenersAdded = true;
    }

    scrollLockLayerElement = layer;
    return layer;
}

function getExistingScrollLockLayer() {
    if (scrollLockLayerElement?.parentNode === document.body) {
        return scrollLockLayerElement;
    }

    scrollLockLayerElement = document.getElementById(scrollLockLayerId);
    return scrollLockLayerElement;
}

export function toggleBodyScroll(disable) {
    const body = document.body;
    if (!body) return;

    const isLocked = body.classList.contains(scrollLockBodyClass);

    if (disable) {
        if (isLocked) {
            return;
        }

        injectNoScrollStyles();
        const scrollLockLayer = getScrollLockLayer();

        body.classList.add(scrollLockBodyClass);
        scrollLockLayer?.classList.add(scrollLockLayerActiveClass);
        return;
    }

    if (!isLocked) {
        return;
    }

    body.classList.remove(scrollLockBodyClass);
    getExistingScrollLockLayer()?.classList.remove(scrollLockLayerActiveClass);
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
