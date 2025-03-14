import { 
  getState, 
  getWeatherIcon
} from "../tools/utils.js";
import { checkConditionsMet } from '../tools/validate-condition.js';
import * as YAML from 'js-yaml';

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

export const loadYAML = async (urls) => {
  for (const url of urls) {
    if (yamlCache.has(url)) {
      return yamlCache.get(url);
    }
    const cacheBuster = `?v=${Date.now()}`; // Prevent caching
    const fullUrl = url + cacheBuster;
    try {
      const response = await fetch(fullUrl, { cache: "no-store" });
      if (!response.ok) {
        window.bubbleYamlWarning = true;
        continue;
      }
      const yamlText = await response.text();
      const parsedYAML = parseYAML(yamlText);
      if (!yamlKeysMap.size && parsedYAML) {
        Object.entries(parsedYAML).forEach(([key, value]) =>
          yamlKeysMap.set(key, value)
        );
      }
      yamlCache.set(url, parsedYAML);
      return parsedYAML;
    } catch (error) {
      window.bubbleYamlWarning = true;
    }
  }
  return null;
};

export const parseYAML = (yamlString) => {
  try {
    const parsedYAML = YAML.load(yamlString);
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