import { 
    getState, 
    getWeatherIcon
} from "../tools/utils.js";
import * as YAML from 'js-yaml';

export let yamlKeysMap = new Map();
let stylesYAML;
let yamlCache = new Map();

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
    const parsedYAML = YAML.load(yamlString);
    return parsedYAML;
  } catch (error) {
    console.error("YAML parsing error:", error);
    return null;
  }
};

export const handleCustomStyles = async (context, element = context.card) => {
  const card = element;
  const styleTemplates = context.config.style_templates ?? "default";
  const customStyles = context.config.styles;

  context.lastEvaluatedStyles ??= "";
  context.initialLoad ??= true;

  try {
    if (context.initialLoad) card.style.display = "none";

    let styleElement = element.querySelector("#bubble-styles");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "bubble-styles";
      element.appendChild(styleElement);
    }

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

    const finalStyles = `${evalStyles(context, customStyles)}\n${evalStyles(context, combinedStyles)}`.trim();

    if (finalStyles !== context.lastEvaluatedStyles) {
      styleElement.textContent = finalStyles;
      context.lastEvaluatedStyles = finalStyles;
    }

    if (context.initialLoad) {
      card.style.display = "";
      context.initialLoad = false;
    }
    context.cardLoaded = true;
  } catch (error) {
    if (!context.editor) console.error("Error loading YAML styles:", error);
    card.style.display = "";
  }
};

function emitEditorError(message) {
  window.dispatchEvent(new CustomEvent("bubble-card-error", { detail: message }));
}

export function evalStyles(context, styles = "") {
  if (!styles) return "";

  // Detect template by element type and add a flag to block the text scrolling effect for compatibility
  const elementTypes = ["state", "name"];
  const propertyNames = ["innerText", "textContent", "innerHTML"];

  elementTypes.forEach(type => {
    const selectors = propertyNames.map(prop => `card.querySelector('.bubble-${type}').${prop} =`);
    if (selectors.some(selector => styles.includes(selector)) && !context.elements[type].templateDetected) {
        context.elements[type].templateDetected = true;
    }
  });

  try {
    const result = cleanCSS(Function(
      "hass",
      "entity",
      "state",
      "icon",
      "subButtonIcon",
      "getWeatherIcon",
      "card",
      "name",
      `return \`${styles}\`;`
    ).call(
      context,
      context._hass,
      context.config.entity,
      getState(context),
      context.elements.icon,
      context.subButtonIcon,
      getWeatherIcon,
      context.card,
      context.card.name
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
  // Remove custom templates from custom styles
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "") // Remove CSS comments
    .split("\n")
    .filter(line => line.includes("{") || line.includes("}") || line.includes(":")) // Keep only CSS lines
    .join("\n")
    .replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g, "") // Remove unwanted "undefined" values
    .replace(/[^{};]\s*{\s*}/g, "") // Remove empty blocks unless they contain valid CSS rules
    .replace(/([a-z-]+)\s*:\s*;/g, "") // Remove empty declarations
    .replace(/\s+/g, " ") // Reduce multiple spaces
    .trim()
    .match(/(@keyframes\s+[^{]+\{(?:[^{}]*\{[^{}]*\})+[^{}]*\}|@[^{]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g)?.join("\n") || "";
}