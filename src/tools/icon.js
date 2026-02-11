import { getAttribute, isColorLight, isEntityType, adjustColor } from "./utils.js";
import { isColorCloseToWhite } from "./style.js";

// Generate a signature string from light entity attributes that affect color
// Used to detect color changes without state changes (e.g., light stays "on" but color changes)
export function getLightColorSignature(state, entity) {
  if (!state || !entity || !entity.startsWith('light.')) {
    return '';
  }
  const attrs = state.attributes || {};
  const parts = [];
  
  if (attrs.rgb_color) parts.push(`rgb:${attrs.rgb_color.join(',')}`);
  if (attrs.hs_color) parts.push(`hs:${attrs.hs_color.join(',')}`);
  if (attrs.xy_color) parts.push(`xy:${attrs.xy_color.join(',')}`);
  if (attrs.color_temp != null) parts.push(`ct:${attrs.color_temp}`);
  if (attrs.color_temp_kelvin != null) parts.push(`ctk:${attrs.color_temp_kelvin}`);
  if (attrs.brightness != null) parts.push(`br:${attrs.brightness}`);
  if (attrs.color_mode) parts.push(`cm:${attrs.color_mode}`);
  
  return parts.join('|');
}

// HA icon resources loaded via WebSocket and persisted in localStorage
const ICONS_CACHE_KEY = 'bubble-card-icons-cache';
let componentIcons = null;
let componentIconsPromise = null;
let componentIconsFailed = false;
const platformIcons = {};
const platformIconsPromises = {};
const sortedRangeCache = new WeakMap();
const pendingContexts = new Set();

// Restore component icons from previous session for instant first render
try {
  const cached = localStorage.getItem(ICONS_CACHE_KEY);
  if (cached) componentIcons = JSON.parse(cached);
} catch (_) {}

function requestContextUpdate(context) {
  if (typeof context?.requestUpdate === "function") {
    context.requestUpdate();
    return;
  }
  if (typeof context?.card?.requestUpdate === "function") {
    context.card.requestUpdate();
  }
}

// Eagerly start loading component icons as soon as hass is available
function preloadComponentIcons(hass) {
  if (componentIconsPromise || componentIconsFailed || !hass?.callWS) return;
  componentIconsPromise = hass.callWS({
    type: "frontend/get_icons",
    category: "entity_component"
  }).then(res => {
    componentIcons = res?.resources || {};
    try { localStorage.setItem(ICONS_CACHE_KEY, JSON.stringify(componentIcons)); } catch (_) {}
    // Notify all contexts waiting for icons
    for (const ctx of pendingContexts) requestContextUpdate(ctx);
    pendingContexts.clear();
  }).catch(() => {
    componentIconsPromise = null;
    componentIconsFailed = true;
  });
}

// Resolve icon from HA icon translation entries (state match, range match, or default)
function getIconFromTranslations(state, translations) {
  if (!translations) return "";
  if (state != null && translations.state?.[state]) {
    return translations.state[state];
  }
  if (state != null && translations.range && !isNaN(Number(state))) {
    let keys = sortedRangeCache.get(translations.range);
    if (!keys) {
      keys = Object.keys(translations.range).map(Number).filter(k => !isNaN(k)).sort((a, b) => a - b);
      sortedRangeCache.set(translations.range, keys);
    }
    const num = Number(state);
    if (keys.length && num >= keys[0]) {
      let sel = keys[0];
      for (const k of keys) { if (num >= k) sel = k; else break; }
      return translations.range[String(sel)] || translations.default || "";
    }
  }
  return translations.default || "";
}

// Fallback domain icons matching HA's FALLBACK_DOMAIN_ICONS (for domains without icons.json)
const DOMAIN_FALLBACK_ICONS = {
  ai_task: "mdi:star-four-points",
  air_quality: "mdi:air-filter",
  alert: "mdi:alert",
  automation: "mdi:robot",
  calendar: "mdi:calendar",
  climate: "mdi:thermostat",
  configurator: "mdi:cog",
  conversation: "mdi:forum-outline",
  counter: "mdi:counter",
  date: "mdi:calendar",
  datetime: "mdi:calendar-clock",
  demo: "mdi:home-assistant",
  device_tracker: "mdi:account",
  google_assistant: "mdi:google-assistant",
  group: "mdi:google-circles-communities",
  homeassistant: "mdi:home-assistant",
  homekit: "mdi:home-automation",
  image_processing: "mdi:image-filter-frames",
  image: "mdi:image",
  input_boolean: "mdi:toggle-switch",
  input_button: "mdi:button-pointer",
  input_datetime: "mdi:calendar-clock",
  input_number: "mdi:ray-vertex",
  input_select: "mdi:format-list-bulleted",
  input_text: "mdi:form-textbox",
  lawn_mower: "mdi:robot-mower",
  light: "mdi:lightbulb",
  notify: "mdi:comment-alert",
  number: "mdi:ray-vertex",
  persistent_notification: "mdi:bell",
  person: "mdi:account",
  plant: "mdi:flower",
  proximity: "mdi:apple-safari",
  remote: "mdi:remote",
  scene: "mdi:palette",
  schedule: "mdi:calendar-clock",
  script: "mdi:script-text",
  select: "mdi:format-list-bulleted",
  sensor: "mdi:eye",
  simple_alarm: "mdi:bell",
  siren: "mdi:bullhorn",
  stt: "mdi:microphone-message",
  sun: "mdi:white-balance-sunny",
  text: "mdi:form-textbox",
  time: "mdi:clock",
  timer: "mdi:timer-outline",
  template: "mdi:code-braces",
  todo: "mdi:clipboard-list",
  tts: "mdi:speaker-message",
  vacuum: "mdi:robot-vacuum",
  wake_word: "mdi:chat-sleep",
  weather: "mdi:weather-partly-cloudy",
  zone: "mdi:map-marker-radius",
};

// Synchronous icon lookup from cached WS resources
function resolveEntityIconSync(hass, entity, stateObj) {
  const domain = entity.split('.')[0];
  const entry = hass.entities?.[entity];
  const deviceClass = stateObj.attributes?.device_class;
  const state = stateObj.state;

  // Platform icons (custom integrations with translation_key)
  if (entry?.platform && entry?.translation_key) {
    const pIcons = platformIcons[entry.platform];
    if (pIcons) {
      const icon = getIconFromTranslations(state, pIcons[domain]?.[entry.translation_key]);
      if (icon) return icon;
    }
  }

  // Component icons (domain + device_class + state)
  if (componentIcons) {
    const domainIcons = componentIcons[domain];
    if (domainIcons) {
      const translations = (deviceClass && domainIcons[deviceClass]) || domainIcons._;
      const icon = getIconFromTranslations(state, translations);
      if (icon) return icon;
    }
  }

  // Fallback for domains without icons.json (mirrors HA's FALLBACK_DOMAIN_ICONS)
  return DOMAIN_FALLBACK_ICONS[domain] || "";
}

// Load platform icons for custom integrations with translation_key
function ensurePlatformIcons(hass, entity, context) {
  const entry = hass.entities?.[entity];
  const platform = entry?.platform;
  if (!platform || !entry?.translation_key || platformIcons[platform] || !hass?.callWS) return;
  if (!platformIconsPromises[platform]) {
    platformIconsPromises[platform] = hass.callWS({
      type: "frontend/get_icons",
      category: "entity",
      integration: platform
    }).then(res => {
      platformIcons[platform] = res?.resources?.[platform] || {};
      requestContextUpdate(context);
    }).catch(() => {
      platformIcons[platform] = {};
      delete platformIconsPromises[platform];
    });
  }
}

export function getIcon(context, entity = context.config.entity, icon = context.config.icon) {
  const hass = context?._hass;

  // Eagerly start loading icon resources (even if this card has a config icon)
  preloadComponentIcons(hass);

  if (icon) return icon;

  // Entity registry icon (set via HA UI)
  const registryIcon = hass?.entities?.[entity]?.icon;
  if (registryIcon) return registryIcon;

  // State attributes icon
  const attrIcon = getAttribute(context, "icon", entity);
  if (attrIcon) return attrIcon;

  const stateObj = hass?.states?.[entity];
  if (!entity || !stateObj || !hass) return "";

  // Synchronous resolution from cached resources (memory or localStorage)
  const resolved = resolveEntityIconSync(hass, entity, stateObj);
  if (resolved) return resolved;

  // Register for re-render when resources arrive
  pendingContexts.add(context);
  ensurePlatformIcons(hass, entity, context);
  return "";
}

// Weather icon lookup exposed to the user template system
const WEATHER_ICONS = {
  "clear-night": "mdi:weather-night",
  "cloudy": "mdi:weather-cloudy",
  "exceptional": "mdi:alert-circle-outline",
  "fog": "mdi:weather-fog",
  "hail": "mdi:weather-hail",
  "lightning": "mdi:weather-lightning",
  "lightning-rainy": "mdi:weather-lightning-rainy",
  "partlycloudy": "mdi:weather-partly-cloudy",
  "pouring": "mdi:weather-pouring",
  "rainy": "mdi:weather-rainy",
  "snowy": "mdi:weather-snowy",
  "snowy-rainy": "mdi:weather-snowy-rainy",
  "sunny": "mdi:weather-sunny",
  "windy": "mdi:weather-windy",
  "windy-variant": "mdi:weather-windy-variant",
};
export function getWeatherIcon(weatherType) {
  return WEATHER_ICONS[weatherType] || "mdi:weather-cloudy";
}

export function getIconColor(context, entity = context.config.entity, brightness = 1) {
    const { card_type: cardType, use_accent_color: useAccentColor } = context.config;
    const defaultColor = `var(--bubble-icon-color)`;
    const accentColor = `var(--bubble-accent-color, var(--bubble-default-color))`;
    const entityRgbColor = getAttribute(context, "rgb_color", entity);
    const isThemeLight = isColorLight('var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))');

    const adjustedBrightness = isThemeLight ? brightness - 0.2 : brightness;
    const isTemperature = entity === context.config.entity && getAttribute(context, "unit_of_measurement", entity)?.includes('°');
    const containsNumber = entity === context.config.entity && context._hass.states[entity]?.state?.match(/\d+/);

    if (!entity || isTemperature || containsNumber) return defaultColor;

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

    if (!entity.startsWith("light.") || useAccentColor) return accentColor;

    const defaultLightColor = [225, 225, 210];
    const adjustedDefaultLightColor = adjustColor(defaultLightColor, adjustedBrightness);

    if (!entityRgbColor) {
      return `var(--bubble-light-color, var(--bubble-light-white-color, rgba(${adjustedDefaultLightColor.join(', ')})))`;
    }

    const adjustedColor = adjustColor(entityRgbColor, adjustedBrightness);
    return isColorCloseToWhite(entityRgbColor) ?
        `var(--bubble-light-color, var(--bubble-light-white-color, rgba(${adjustedDefaultLightColor.join(', ')})))` :
        `var(--bubble-light-color, rgba(${adjustedColor.join(', ')}))`;
}

export function getImage(context, entity = context.config.entity, ignoreConfigIcon = false) {
    // Don't show entity picture if force_icon is set or if an icon is explicitly configured
    // Unless ignoreConfigIcon is true (e.g., for sub-buttons that should only check their own icon)
    if (!ignoreConfigIcon && (context.config.force_icon || context.config.icon)) return '';

    const entityPicture =
      getAttribute(context, "entity_picture_local", entity) ||
      getAttribute(context, "entity_picture", entity);

    if (!entityPicture) return '';

    let imageUrl = context._hass.hassUrl(entityPicture);

    return imageUrl;
}

// Update icon classes based on displayed state
export function updateIconClasses(iconElement, displayedState) {
  if (!iconElement) return;
  iconElement.classList.remove('hidden');
  iconElement.classList.add('bubble-sub-button-icon', 'show-icon');
  iconElement.classList.toggle('icon-with-state', !!displayedState);
  iconElement.classList.toggle('icon-without-state', !displayedState);
}

// Unified icon/image display handler for sub-buttons
// Returns the active icon element (either icon or image) for further processing
// Options:
//   - beforeIconUpdate: callback(iconElement, options) called before updating icon, return new icon value or null to skip
export function updateSubButtonIconOrImage(element, options, displayedState, callbacks = {}) {
  const { beforeIconUpdate } = callbacks;
  const newImage = options.image;
  let newIcon = options.icon;
  const showIcon = options.showIcon;

  // Determine if the image should fill the entire sub-button
  // This happens when only the icon is displayed (no text, no dropdown arrow)
  const hasText = !!displayedState;
  const isDropdownWithArrow = options.isSelect && options.showArrow;
  const shouldImageFill = !hasText && !isDropdownWithArrow;

  if (showIcon && newImage) {
    // Entity picture available - show image, hide icon
    let imageElement = element.image;
    if (!imageElement) {
      imageElement = document.createElement('div');
      imageElement.classList.add('bubble-sub-button-image');
      imageElement.classList.add('show-icon');
      element.appendChild(imageElement);
      element.image = imageElement;
    }
    
    const newBackgroundImage = `url(${newImage})`;
    const currentImage = imageElement.style.backgroundImage;
    if (currentImage !== newBackgroundImage) {
      imageElement.style.backgroundImage = newBackgroundImage;
    }
    
    imageElement.classList.remove('hidden');
    imageElement.classList.add('show-icon');
    updateIconClasses(imageElement, displayedState);
    
    // Apply or remove full-size image class
    imageElement.classList.toggle('image-full', shouldImageFill);
    element.classList.toggle('has-image-full', shouldImageFill);
    
    // Hide icon if it exists
    if (element.icon) {
      element.icon.classList.remove('show-icon');
      element.icon.classList.add('hidden');
    }
    
    return imageElement;
  } else if (showIcon) {
    // No entity picture - show icon element (or keep it ready for template API)
    let iconElement = element.icon;
    if (!iconElement) {
      iconElement = document.createElement('ha-icon');
      iconElement.classList.add('bubble-sub-button-icon');
      element.appendChild(iconElement);
      element.icon = iconElement;
    }
    
    if (newIcon) {
      // Allow callback to modify icon update behavior (e.g., for dropdown option icons)
      if (beforeIconUpdate) {
        const result = beforeIconUpdate(iconElement, options);
        if (result !== null && result !== undefined) {
          // Callback returned a new icon element or handled the update
          if (result instanceof HTMLElement && result !== iconElement) {
            element.icon = result;
            iconElement = result;
          }
        }
      } else if (iconElement.icon !== newIcon) {
        iconElement.setAttribute('icon', newIcon);
      }
      
      iconElement.classList.remove('hidden');
      iconElement.classList.add('show-icon');
      updateIconClasses(iconElement, displayedState);
    } else {
      // Icon not resolved yet, keep element hidden but available for template API
      iconElement.classList.remove('show-icon');
      iconElement.classList.add('hidden');
    }
    
    // Remove full-size image classes when showing icon
    element.classList.remove('has-image-full');
    
    // Hide image if it exists
    if (element.image) {
      element.image.classList.remove('show-icon', 'image-full');
      element.image.classList.add('hidden');
    }
    
    return iconElement;
  } else {
    // No icon to show - hide both
    element.classList.remove('has-image-full');
    if (element.icon) {
      element.icon.classList.remove('show-icon');
      element.icon.classList.add('hidden');
    }
    if (element.image) {
      element.image.classList.remove('show-icon', 'image-full');
      element.image.classList.add('hidden');
    }
    return null;
  }
}