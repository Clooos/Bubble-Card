import { isColorCloseToWhite } from "./style.js";
import { syncMainButtonsBottomClass, updateContentContainerFixedClass } from "../components/base-card/index.js";
import { getIconColor } from "./icon.js";
import { adjustColor, areColorsSimilar, calculateLuminance, contrastRatio, hexToRgb, relativeLuminance, rgbStringToRgb } from "./color.js";
import { resolveTemplate } from "./render-template.js";
import { isTemplate } from "./jinja.js";
import { resolveLovelaceRoot } from "./ha-boundary.js";

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

// Home Assistant's Vibrate setting (user profile) only silences haptics in a
// browser. Its companion apps get every haptic event whatever the setting, so
// it is checked here for the cards to honour it there too (#712).
export const forwardHaptic = hapticType => {
    if (document.querySelector('home-assistant')?.hass?.vibrate === false) return;
    fireEvent(window, "haptic", hapticType)
}

// Home Assistant marks its first history entry with `{ root: true }` and reads
// it back to decide whether a page shows the sidebar button or a back arrow.
// A replace reuses the entry already on the stack, so it has to carry that mark
// over or the frontend loses it for the rest of the session. A push creates a
// new entry, which by definition is not the root one, so it starts empty. Both
// rules are the ones `common/navigate.ts` follows.
export const keptHistoryState = () => {
    const state = history.state;
    if (!state) {
        return null;
    }

    // `dialog`, `opensDialog` and `dialogData` sit on the entry a Home Assistant
    // dialog pushed, and are how it knows that going back should close that
    // dialog. They are not ours to blank: a pop-up closing on a click strips its
    // hash from whatever entry is current, and when a dialog opened in between
    // that entry is HA's, not ours. Carrying them over leaves its bookkeeping
    // intact, and is what lets the deduper below tell the two apart.
    if (state.dialog || state.opensDialog || state.dialogData) {
        return state;
    }

    return state.root ? { root: true } : null;
}

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

// Home Assistant locks the page scroll by writing inline on <html> as well, Web Awesome's
// lock for its dialogs and bottom sheets, Home Assistant's own for its popovers. None of
// it is a theme, so none of it is counted. Should one of these be renamed, an open and a
// close go back to counting as a theme change, which is what they used to do anyway.
const scrollLockDeclarations = ['--wa-scroll-lock-size', '--wa-scroll-lock-gutter', 'scrollbar-gutter'];

function getCurrentThemeId() {
    // Home Assistant applies a theme by writing every token inline on <html>, so the
    // number of inline declarations plus the two colors Bubble Card reads identifies
    // it. The count matters: themes sharing a background and a text color still
    // differ by it, and the default light theme, which writes no token at all, no
    // longer looks like a page whose theme has simply not been applied yet.
    const rootStyle = document.documentElement.style;
    let count = rootStyle.length;
    for (const declaration of scrollLockDeclarations) {
        if (rootStyle.getPropertyValue(declaration)) count--;
    }
    const bg = rootStyle.getPropertyValue('--primary-background-color').trim();
    const fg = rootStyle.getPropertyValue('--primary-text-color').trim();
    return count + '|' + bg + '|' + fg;
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

// The color an expression paints, as numbers. Variables are looked up on the
// document first, then on the card: a card scopes some of its own, and reading
// those from the root alone answered nothing at all, which is how an entity
// whose state carries a digit (`var(--bubble-icon-color)`, see getIconColor)
// went through this whole function without ever being read.
function resolveSurfaceRgb(expression, context) {
  if (!expression) return null;

  let resolved = resolveCssVariable(expression);
  if (resolved && resolved.startsWith('var(')) {
    const match = resolved.match(/var\((--[^,)]+),?\s*(.*)?\)/);
    if (match) {
      const [, varName] = match;
      let computed = getCachedDocumentElementStyles().getPropertyValue(varName).trim();
      if (!computed && context?.card) {
        try { computed = getComputedStyle(context.card).getPropertyValue(varName).trim(); } catch (_) {}
      }
      if (computed) resolved = computed;
    }
  }

  const rgb = hexToRgb(resolved) || rgbStringToRgb(resolved);
  if (rgb) return rgb;

  // `var(--bubble-icon-color)` carries no fallback of its own and nothing in
  // here ever sets it, so an unset one answers nothing. The surfaces that read
  // it paint the accent color, their stylesheet says so, and that is the color
  // this has to compare and step away from.
  const accent = resolveCssVariable('var(--bubble-accent-color, var(--bubble-default-color))');
  return hexToRgb(accent) || rgbStringToRgb(accent);
}

// Which of a light or a dark icon reads better on the colour a surface paints,
// by WCAG contrast rather than a threshold. Each tone is the theme's own text
// when that text has it, and otherwise what the sub-button stylesheet paints
// instead, white, or the 65 % black it lays over the surface. A threshold on
// luminance cut right through the whites of a bulb, which go from 0.53 to 0.70
// in a dark theme, and left two lamps a hair apart in white and in dark, while
// the text of a light theme stayed dark on a navy or a violet.
export function getSurfaceIconTone(expression, context) {
  const rgb = resolveSurfaceRgb(expression, context);
  if (!rgb) return null;

  const text = resolveCssVariable('var(--primary-text-color, #ffffff)');
  const textRgb = hexToRgb(text) || rgbStringToRgb(text) || [255, 255, 255];
  const textIsLight = calculateLuminance(...textRgb) > 0.5;

  const surface = relativeLuminance(...rgb);
  const light = relativeLuminance(...(textIsLight ? textRgb : [255, 255, 255]));
  const dark = relativeLuminance(...(textIsLight ? rgb.map((channel) => channel * 0.35) : textRgb));

  return {
    tone: contrastRatio(surface, dark) > contrastRatio(surface, light) ? 'dark' : 'light',
    textIsLight,
  };
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
    const rgb = resolveSurfaceRgb(baseColorExpr, context);
    if (!rgb) {
      return baseColorExpr;
    }

    // Darken if the text on it is light, lighten if it is dark.
    const textColor = resolveCssVariable('var(--primary-text-color, #ffffff)');
    const textRgb = hexToRgb(textColor) || rgbStringToRgb(textColor);
    const isTextLight = textRgb ? calculateLuminance(...textRgb) > 0.5 : true;

    // Two steps, and they answer different questions.
    //
    // The first keeps a light's own color readable under the text written on
    // it. A card does it to itself, so it is not about telling two surfaces
    // apart, and it runs whether or not anything was handed in to compare.
    const isRgbLightColor = useLightBackground && entity?.startsWith('light.') && !context.config.use_accent_color;
    let painted = isRgbLightColor ? adjustColor(rgb, isTextLight ? 0.84 : 1.16) : rgb;

    // The second is the separation. It compares what this surface would paint,
    // after the step above, against what it stands on. A light sub-button used
    // to be excluded from it and took the same first step as its card, so the
    // two moved together and stayed identical.
    const behind = [subButtonColor, cardBackgroundColor]
      .map((expression) => resolveSurfaceRgb(expression, context))
      .filter(Boolean);
    const wouldBlend = behind.some((surface) => areColorsSimilar(painted, surface));
    if (wouldBlend) {
      painted = adjustColor(painted, isTextLight ? 0.92 : 1.08);
    }

    // Nothing moved, so the expression goes back untouched and keeps following
    // its own variables.
    if (!isRgbLightColor && !wouldBlend) {
      return baseColorExpr;
    }

    return `rgb(${painted[0]}, ${painted[1]}, ${painted[2]})`;
  } catch (_) {
    return baseColorExpr;
  }
}

// Whether a surface would paint the color of the one it is laid over, and
// which way it then has to step to be told apart, darker under a light text,
// lighter under a dark one, the way getStateSurfaceColor steps. Only the
// direction comes out of here. The colors are compared as the expressions
// resolve from the document, which is enough to say two surfaces of one card
// share a color, and too little to say which one a module or a theme makes it.
export function getSurfaceStep(context, expression, behindExpression) {
  if (!expression || !behindExpression) return null;
  const painted = resolveSurfaceRgb(expression, context);
  const behind = resolveSurfaceRgb(behindExpression, context);
  if (!painted || !behind || !areColorsSimilar(painted, behind)) return null;

  const textColor = resolveCssVariable('var(--primary-text-color, #ffffff)');
  const textRgb = hexToRgb(textColor) || rgbStringToRgb(textColor);
  const isTextLight = textRgb ? calculateLuminance(...textRgb) > 0.5 : true;
  return isTextLight ? 'darker' : 'lighter';
}

// `html` says the name is about to be written as markup (the scrolling text
// path), in which case a rendered template is escaped: it is entity data, not
// something the dashboard author typed.
export function getName(context, html = false) {
    const templateName = context.name;
    if (templateName) return templateName;

    // A templated name shows what the template says, empty included, never
    // the friendly name in its place.
    const configName = context.config.name;
    if (isTemplate(configName)) return resolveTemplate(context, configName, context.config.entity, html);
    if (configName) return configName;

    const entityName = getAttribute(context, "friendly_name");
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

    // A water heater has no "on": its state is the operation it is running, so
    // only "off" is off. Home Assistant reads it the same way, in stateActive.
    if (isEntityType(context, 'water_heater', entity)) {
        return state !== '' && state !== 'off' && state !== 'unknown' && state !== 'unavailable';
    }

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

// An Intl formatter depends on nothing but its locale, and building one is among
// the most expensive things in the language. This runs once per sub-button per
// hass tick, so on a dashboard carrying a few dozen relative times it was the
// single biggest named cost at idle. One formatter per locale, kept for the life
// of the page.
const relativeTimeFormatters = new Map();

function getRelativeTimeFormat(locale) {
    const key = locale || 'en';
    let formatter = relativeTimeFormatters.get(key);
    if (!formatter) {
        formatter = new Intl.RelativeTimeFormat(key, { numeric: 'auto' });
        relativeTimeFormatters.set(key, formatter);
    }
    return formatter;
}

// The rendered string is a pure function of exactly these three, so caching on
// them cannot go stale: `value` and `unit` are still recomputed from the clock
// on every single call, and only the formatting of an already-seen pair is
// skipped. That is what makes this safe where memoizing on the timestamp would
// not be, since a memo keyed on the timestamp would have to guess when the
// answer expires and would freeze the text if it guessed wrong.
//
// Naturally bounded: seconds run 1 to 60, minutes 1 to 60, hours 1 to 24, and
// a page only ever holds as many distinct ages as it has elements.
const relativeTimeStrings = new Map();

function formatRelativeValue(locale, value, unit) {
    const key = `${locale || 'en'}|${unit}|${value}`;
    let text = relativeTimeStrings.get(key);
    if (text === undefined) {
        text = getRelativeTimeFormat(locale).format(-value, unit);
        relativeTimeStrings.set(key, text);
    }
    return text;
}

// A moment in the past reads "2 hours ago", one in the future "in 2 hours",
// with the unit Home Assistant would pick, up to years. The value is signed
// for the future, which Intl turns into the right wording in every language.
export function formatDateTime(datetime, locale) {
    if (!datetime) return '';
    const date = new Date(datetime);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (isNaN(diffInSeconds)) {
        // datetime was not a valid date
        return '';
    }

    const future = diffInSeconds < 0;
    const age = Math.abs(diffInSeconds);
    let unit;
    let value;
    if (age < 60) {
        unit = 'second';
        value = age + 1;
    } else if (age < 3600) {
        unit = 'minute';
        value = Math.round(age / 60);
    } else if (age < 86400) {
        unit = 'hour';
        value = Math.round(age / 3600);
    } else if (age < 7 * 86400) {
        unit = 'day';
        value = Math.round(age / 86400);
    } else if (age < 30 * 86400) {
        unit = 'week';
        value = Math.round(age / (7 * 86400));
    } else if (age < 365 * 86400) {
        unit = 'month';
        value = Math.round(age / (30 * 86400));
    } else {
        unit = 'year';
        value = Math.round(age / (365 * 86400));
    }

    return formatRelativeValue(locale, future ? -value : value, unit);
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
// One page-wide beat rather than one timer per card: a wall tablet showing fifty
// relative times would otherwise wake up fifty times for the same work.
//
// The period follows what is on screen. Under a minute a relative time changes
// every second, so a card that fresh is refreshed every second; past that once
// a minute is enough. Home Assistant's own ha-relative-time settles for a flat
// 60 seconds, which leaves "now" sitting there for a whole minute next to a
// sub-button counting the seconds, and that mismatch is what gets reported.
const RELATIVE_TIME_BEAT_MS = 60000;
const RELATIVE_TIME_FAST_MS = 1000;
const relativeTimeSubscribers = new Map();
let relativeTimeBeatId = null;
let relativeTimeVisibilityBound = false;

const relativeTimeHidden = () => typeof document !== 'undefined' && document.hidden === true;

/** How long a relative time built from `datetime` stays true, in ms. */
export function relativeTimeRefreshDelay(datetime) {
    if (!datetime) return RELATIVE_TIME_BEAT_MS;
    // A moment less than a minute away, past or future, reads in seconds.
    const age = Math.abs(Date.now() - new Date(datetime).getTime());
    if (isNaN(age)) return RELATIVE_TIME_BEAT_MS;
    return age < 60000 ? RELATIVE_TIME_FAST_MS : RELATIVE_TIME_BEAT_MS;
}

function runRelativeTimeBeat() {
    relativeTimeBeatId = null;
    const now = Date.now();

    for (const [context, entry] of relativeTimeSubscribers) {
        // A removed card keeps its last hass snapshot, so no state check inside
        // the callback could ever notice the element went away. Dropping it here
        // is what keeps the map from growing with every card the page discards.
        if (context.isConnected === false) {
            relativeTimeSubscribers.delete(context);
            continue;
        }
        if (entry.nextDue > now) {
            continue;
        }
        try {
            const asked = entry.updateCallback();
            entry.nextDue = now + (Number.isFinite(asked) ? asked : RELATIVE_TIME_BEAT_MS);
        } catch (e) {
            // One card throwing must not take the whole page's beat down with it
            relativeTimeSubscribers.delete(context);
        }
    }

    if (relativeTimeSubscribers.size === 0) {
        releaseRelativeTimeBeatIfIdle();
        return;
    }
    scheduleRelativeTimeBeat();
}

function stopRelativeTimeBeat() {
    if (relativeTimeBeatId !== null) {
        clearTimeout(relativeTimeBeatId);
        relativeTimeBeatId = null;
    }
}

function scheduleRelativeTimeBeat() {
    if (relativeTimeBeatId !== null || relativeTimeSubscribers.size === 0 || relativeTimeHidden()) {
        return;
    }
    // The earliest card decides, so a single fresh card does not make the whole
    // page tick every second for longer than it has to
    const now = Date.now();
    let delay = RELATIVE_TIME_BEAT_MS;
    for (const entry of relativeTimeSubscribers.values()) {
        delay = Math.min(delay, Math.max(0, entry.nextDue - now));
    }
    relativeTimeBeatId = setTimeout(runRelativeTimeBeat, delay);
}

function onRelativeTimeVisibilityChange() {
    if (relativeTimeHidden()) {
        stopRelativeTimeBeat();
        return;
    }
    // Coming back: every text on screen is as stale as the time spent away, so
    // it is rewritten now rather than waiting for the next beat.
    for (const entry of relativeTimeSubscribers.values()) {
        entry.nextDue = 0;
    }
    runRelativeTimeBeat();
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

export function startRelativeTimeInterval(context, updateCallback, initialDelay) {
    // The caller has just rendered the card, so it knows when this one next
    // needs rewriting. Taking it from there spares the beat a pass whose only
    // purpose would be to ask.
    const delay = Number.isFinite(initialDelay) ? initialDelay : RELATIVE_TIME_BEAT_MS;
    const nextDue = Date.now() + delay;

    const existing = relativeTimeSubscribers.get(context);
    if (existing) {
        // Re-arming happens on every card update, so it must stay free and must
        // never push the next tick away. It may pull it closer though: a card
        // whose entity just changed now reads in seconds and needs the fast
        // cadence, while its subscription still holds the slow one.
        if (nextDue < existing.nextDue) {
            existing.nextDue = nextDue;
            stopRelativeTimeBeat();
            scheduleRelativeTimeBeat();
        }
        return;
    }

    relativeTimeSubscribers.set(context, { updateCallback, nextDue });
    bindRelativeTimeVisibility();
    // A card arriving fresh may need a cadence faster than the one running
    stopRelativeTimeBeat();
    scheduleRelativeTimeBeat();
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

export function setLayout(context, targetElementOverride = null, defaultLayoutOverride = null) {
    const targetElement = targetElementOverride || context.content;

    if (!targetElement) return;

    const applyMainButtonsLayout = () => {
        const buttonsContainer = context.elements?.buttonsContainer;
        const cardWrapper = context.elements?.cardWrapper;
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

        if (position !== 'bottom') {
            syncMainButtonsBottomClass(context);
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

        // Only with main buttons that really show, read at the next frame for
        // every card at once (see syncMainButtonsBottomClass).
        syncMainButtonsBottomClass(context);
    };

    let determinedLayoutClass;

    if (defaultLayoutOverride) {
        determinedLayoutClass = context.config.card_layout ?? defaultLayoutOverride;
    } else {
        // The walk down to hui-root, and its cache, live in ha-boundary.js so
        // this file and the footer padding cannot drift apart on what HA's
        // dashboard looks like.
        const huiRoot = resolveLovelaceRoot();

        let defaultViewLayout = "normal";
        if (huiRoot?.shadowRoot) {
            // Masonry is the only layout that takes the "normal" default;
            // sections, panel, sidebar and custom views all take "large".
            // So the question is really "is this a masonry view?", and the
            // answer must only be asserted when a view is actually rendered:
            // deciding from the mere absence of a masonry element meant a
            // single HA restructuring of hui-root would silently switch every
            // masonry dashboard to the large layout — a visual change users
            // would blame on Bubble Card. Descendant selectors so an extra
            // wrapper element cannot break the chain.
            const root = huiRoot.shadowRoot;
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
const scrollLockGutterProperty = '--bubble-scroll-lock-size';
const scrollLockGutterClass = 'bubble-scroll-lock-gutter';
// Engines that reserve the gutter themselves never read the size.
const scrollLockSizeIsRead = typeof CSS === 'undefined' || !CSS.supports?.('scrollbar-gutter', 'stable');
// Web Awesome keeps here the scrollbar width it measured before hiding it, for
// as long as one of Home Assistant's dialogs or sheets holds the page.
const webAwesomeLockSizeProperty = '--wa-scroll-lock-size';
let rootGutterBeforeLock = null;
// The class on the body only ever marked state: nothing in the project styled
// it, so the document stayed scrollable the whole time a pop-up was open. The
// layer below catches what happens outside the pop-up, but a gesture that
// starts inside it never reaches that layer, and overscroll-behavior only holds
// a chain back while the element it sits on is actually scrolling. WebKit then
// hands a short, unscrollable pop-up straight to the document, which is the
// page moving behind it.
//
// So the class is given the rules it never had, the ones Web Awesome uses to
// lock the page behind a Home Assistant dialog (scroll-lock.css.js, imported by
// resources/theme/wa.globals.ts). Overflow on the body and a gutter to keep the
// layout still where a scrollbar was, and nothing else, no listener, no
// touch-action and no preventDefault, which is what lets the cards inside keep
// scrolling in both axes. An earlier attempt at this went the other way and
// took those with it.
const scrollLockCssContent = `
        @supports (scrollbar-gutter: stable) {
            html.${scrollLockBodyClass}.${scrollLockGutterClass} {
                scrollbar-gutter: stable !important;
            }

            html.${scrollLockBodyClass} body {
                overflow: hidden !important;
            }
        }

        @supports not (scrollbar-gutter: stable) {
            html.${scrollLockBodyClass} body {
                padding-right: var(${scrollLockGutterProperty}, 0px) !important;
                overflow: hidden !important;
            }
        }

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

// Web Awesome locks the page behind Home Assistant's dialogs with an !important
// rule inside a cascade layer, and that outranks any !important outside one.
// Opened over a pop-up, a more-info measures no scrollbar (this lock already
// hid it) and clears the gutter, which moved the whole dashboard by half a
// scrollbar until the dialog closed. Only a declaration on the element itself
// outranks that rule. The class rule stays under it, for the moment Home
// Assistant's popover lock removes this one while a pop-up is still open.
function reserveRootGutter(rootStyle) {
    if (typeof rootStyle?.setProperty !== 'function') {
        return;
    }

    rootGutterBeforeLock = {
        value: rootStyle.getPropertyValue?.('scrollbar-gutter') || '',
        priority: rootStyle.getPropertyPriority?.('scrollbar-gutter') || '',
    };
    rootStyle.setProperty('scrollbar-gutter', 'stable', 'important');
}

// Whatever was there before goes back, the way Home Assistant's own lock does
// it. A gutter that another lock rewrote or removed since is theirs to handle.
function releaseRootGutter(rootStyle) {
    const before = rootGutterBeforeLock;
    rootGutterBeforeLock = null;
    if (!before || rootStyle?.getPropertyValue?.('scrollbar-gutter') !== 'stable') {
        return;
    }

    if (before.value) {
        rootStyle.setProperty('scrollbar-gutter', before.value, before.priority);
    } else {
        rootStyle.removeProperty?.('scrollbar-gutter');
    }
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

        // The gutter is measured while the scrollbar is still there, since
        // hiding the overflow is what takes it away. Only read where there is a
        // window to read it from.
        const root = document.documentElement;
        if (root) {
            const rootStyle = root.style;
            const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : undefined;
            let gutter = typeof viewportWidth === 'number' && typeof root.clientWidth === 'number'
                ? Math.max(0, viewportWidth - root.clientWidth)
                : 0;
            // Another lock may already have hidden the scrollbar. The page is
            // still laid out around its gutter, but clientWidth stops counting
            // it, so the measure above reads nothing and the gutter went the
            // moment that lock let go. Web Awesome, behind Home Assistant's
            // dialogs, kept the width it measured first, and Home Assistant's
            // popover lock kept the gutter itself.
            if (gutter < 2) {
                gutter = parseFloat(rootStyle?.getPropertyValue?.(webAwesomeLockSizeProperty)) || 0;
            }
            // A gutter only keeps the place of a scrollbar that was there. On a
            // page too short to scroll, reserving one anyway pushed the whole
            // dashboard aside by the width of a scrollbar that never existed
            // (#2629). Home Assistant's own scroll lock has the same condition,
            // and the 2px margin is Web Awesome's.
            const hasGutter = gutter >= 2 || rootStyle?.getPropertyValue?.('scrollbar-gutter') === 'stable';
            root.classList?.toggle?.(scrollLockGutterClass, hasGutter);
            root.classList?.add(scrollLockBodyClass);

            if (hasGutter && !scrollLockSizeIsRead) {
                reserveRootGutter(rootStyle);
            }

            // Only the fallback for engines without scrollbar-gutter reads the
            // size, and it reads it on the body. Written inline on <html>, it
            // changed the declaration count that identifies the theme, so every
            // open and every close passed for a theme change, and as an
            // inherited property it restyled the whole page each time.
            if (gutter >= 2 && scrollLockSizeIsRead) {
                body.style?.setProperty?.(scrollLockGutterProperty, `${gutter}px`);
            }
        }

        body.classList.add(scrollLockBodyClass);
        scrollLockLayer?.classList.add(scrollLockLayerActiveClass);
        return;
    }

    if (!isLocked) {
        return;
    }

    const root = document.documentElement;
    root?.classList?.remove(scrollLockBodyClass, scrollLockGutterClass);
    releaseRootGutter(root?.style);
    body.style?.removeProperty?.(scrollLockGutterProperty);

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
