import { getState } from "./utils.js";
import { getWeatherIcon } from "./icon.js";
import { getSubButtonsStates } from "../components/sub-button/changes.js";
import { checkConditionsMet } from './validate-condition.js';
import * as YAML from 'js-yaml';

export function preloadYAMLStyles(context) {
  if (context.config?.card_type && !context.stylesYAML) {
    if (!stylesYAML) {
      stylesYAML = loadYAML([
        "/local/bubble/bubble-modules.yaml",
        "/hacsfiles/Bubble-Card/bubble-modules.yaml",
        "/local/community/Bubble-Card/bubble-modules.yaml",
      ]);
    }
    context.stylesYAML = stylesYAML;
  }
}

// Custom YAML type definition for !include
const INCLUDE_TYPE = new YAML.Type('!include', {
  kind: 'scalar',
  resolve: function(data) {
    return typeof data === 'string';
  },
  construct: function(data) {
    const request = new XMLHttpRequest();
    request.open('GET', `/local/bubble/${data}`, false);
    request.send(null);
    if (request.status === 200) {
      try {
        return YAML.load(request.responseText, { schema: INCLUDE_SCHEMA });
      } catch (e) {
        console.error(`Error parsing the included YAML file (/local/bubble/${data}):`, e);
        return null;
      }
    } else {
      console.error(`Error including the file /local/bubble/${data}: HTTP status ${request.status}`);
      return null;
    }
  }
});

// Create a YAML schema that supports !include by extending the default schema
const INCLUDE_SCHEMA = YAML.DEFAULT_SCHEMA.extend([INCLUDE_TYPE]);

export let yamlKeysMap = new Map();
let stylesYAML;
let yamlCache = new Map();
const compiledTemplateCache = new Map();

function getOrCreateStyleElement(context, element) {
  if (!context.styleElement) {
    const styleElement = document.createElement("style");
    styleElement.id = "bubble-styles";
    element.appendChild(styleElement);
    context.styleElement = styleElement;
  }
  return context.styleElement;
}

export const loadYAML = async (urls) => {
  for (const url of urls) {
    const cacheBuster = `?v=${Date.now()}`; // Prevent caching
    const fullUrl = url + cacheBuster;

    try {
      const response = await fetch(fullUrl, { cache: "no-store" });

      if (!response.ok) {
        console.warn(`'bubble-modules.yaml' not found at ${fullUrl} (status: ${response.status}). Trying next...`);
        window.bubbleYamlWarning = true;
        continue;
      }

      const yamlText = await response.text();
      const parsedYAML = parseYAML(yamlText);

      if (!yamlKeysMap.size) {
        Object.entries(parsedYAML).forEach(([key, value]) =>
          yamlKeysMap.set(key, value)
        );
      }

      yamlCache.set(url, parsedYAML);
      return parsedYAML;
    } catch (error) {
      console.warn(`Error fetching 'bubble-modules.yaml' from ${fullUrl}:`, error);
      window.bubbleYamlWarning = true;
    }
  }
  return null;
};

export const parseYAML = (yamlString) => {
  try {
    // Use the custom schema that supports !include
    const parsedYAML = YAML.load(yamlString, { schema: INCLUDE_SCHEMA });
    return parsedYAML;
  } catch (error) {
    console.error("YAML parsing error:", error);
    return null;
  }
};

export const handleCustomStyles = async (context, element = context.card) => {
  const card = element;
  const styleTemplates = context.config.modules ?? context.config.style_templates ?? "default";
  const customStyles = context.config.styles;

  if (typeof context.cardLoaded === "undefined") {
    context.lastEvaluatedStyles = "";
    context.initialLoad = true;
  }

  if (context.initialLoad) {
    card.style.display = "none";
  }

  const styleElement = getOrCreateStyleElement(context, element);
  const parsedStyles = (await context.stylesYAML) || {};

  let combinedStyles = "";
  if (Array.isArray(styleTemplates)) {
    combinedStyles = styleTemplates.map((t) => {
      let tmpl = parsedStyles[t] ?? "";
      if (typeof tmpl === "object" && tmpl.code) {
        tmpl = tmpl.code;
      }
      return tmpl;
    }).join("\n");
  } else {
    let tmpl = parsedStyles[styleTemplates] || "";
    if (typeof tmpl === "object" && tmpl.code) {
      tmpl = tmpl.code;
    }
    combinedStyles = tmpl;
  }

  const evaluatedCombinedStyles = evalStyles(context, combinedStyles);
  const evaluatedCustomStyles = evalStyles(context, customStyles);
  const finalStyles = `${evaluatedCombinedStyles}\n${evaluatedCustomStyles}`.trim();

  if (finalStyles !== context.lastEvaluatedStyles) {
    styleElement.textContent = finalStyles;
    context.lastEvaluatedStyles = finalStyles;
  }

  if (context.initialLoad) {
    card.style.display = "";
    context.initialLoad = false;
    context.cardLoaded = true;
  }
};

export function evalStyles(context, styles = "") {
  if (!styles) return "";

  const elementTypes = ["state", "name"];
  const propertyNames = ["innerText", "textContent", "innerHTML"];
  elementTypes.forEach(type => {
    const selectors = propertyNames.map(prop => `card.querySelector('.bubble-${type}').${prop} =`);
    if (selectors.some(selector => styles.includes(selector)) && !context.elements[type].templateDetected) {
      context.elements[type].templateDetected = true;
    }
  });

  try {
    let compiledFunction = compiledTemplateCache.get(styles);
    if (!compiledFunction) {
      compiledFunction = Function(
        "hass",
        "entity",
        "state",
        "icon",
        "subButtonState",
        "subButtonIcon",
        "getWeatherIcon",
        "card",
        "name",
        "checkConditionsMet",
        `return \`${styles}\`;`
      );
      compiledTemplateCache.set(styles, compiledFunction);
    }
    const card = context.config.card_type === 'pop-up' ? context.popUp : context.card;
    const result = cleanCSS(compiledFunction.call(
      context,
      context._hass,
      context.config.entity,
      getState(context),
      context.elements.icon,
      getSubButtonsStates(context),
      context.subButtonIcon,
      getWeatherIcon,
      card,
      card.name,
      checkConditionsMet
    ));
    if (context.editor) {
      emitEditorError('');
    }
    return result;
  } catch (error) {
    if (context.editor) {
      requestAnimationFrame(() => emitEditorError(error.message));
    }
    console.error(`Bubble Card - Template error from a ${context.config.card_type} card: ${error.message}`);
    return "";
  }
}

function cleanCSS(css) {
  const cleaned = css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,])\s*/g, "$1")
    .replace(/([a-zA-Z0-9_-]+)\s*:\s*;/g, "")
    .replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g, "")
    .replace(/[^{};]+\s*{\s*}/g, "")
    .replace(/,(?=\s*[}\n])/g, "")
    .split("\n")
    .filter(line =>
      line.includes("{") ||
      line.includes("}") ||
      line.includes(":") ||
      line.trim().match(/['"]{2}/g) ||
      line.includes("${") ||
      line.match(/^@supports|^@media|^@keyframes|^@layer/)
    )
    .join("\n")
    .match(/(@[^{]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g)?.join("\n") || "";
  return cleaned;
}

function emitEditorError(message) {
  window.dispatchEvent(new CustomEvent("bubble-card-error", { detail: message }));
}