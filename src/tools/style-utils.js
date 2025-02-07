import { getState, getWeatherIcon } from "../tools/utils.js";

export let yamlKeysMap = new Map();
let stylesYAML;
let yamlCache = new Map();

export const loadYAML = async (urls) => {
  for (const url of urls) {
    if (yamlCache.has(url)) return yamlCache.get(url);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      
      const yamlText = await response.text();
      const parsedYAML = parseYAML(yamlText);
      
      if (!yamlKeysMap.size) {
        Object.entries(parsedYAML).forEach(([key, value]) => yamlKeysMap.set(key, value));
      }
      
      yamlCache.set(url, parsedYAML);
      return parsedYAML;
    } catch (error) {
      console.warn(`Error fetching YAML from ${url}:`, error);
      window.bubbleYamlWarning = true;
    }
  }
  return null;
};

export const parseYAML = (yaml) => {
  const result = {};
  let currentKey = null, currentValue = "";
  let inFoldedBlock = false;

  yaml.split("\n").forEach((line) => {
    line = line.trim();
    if (!line) return;

    if (line.includes(": >")) {
      if (currentKey) result[currentKey] = currentValue.trim();
      [currentKey] = line.split(": >");
      currentValue = "";
      inFoldedBlock = true;
    } else if (line.endsWith(":") && !inFoldedBlock) {
      if (currentKey) result[currentKey] = currentValue.trim();
      currentKey = line.slice(0, -1);
      currentValue = "";
    } else {
      currentValue += line + "\n";
    }
  });
  if (currentKey) result[currentKey] = currentValue.trim();
  return result;
};

export const handleCustomStyles = async (context, element = context.card) => {
  const card = context.config.card_type !== "pop-up" ? element : context.popUp;
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

    const parsedStyles = await context.stylesYAML;
    let combinedStyles = Array.isArray(styleTemplates)
      ? styleTemplates.map((t) => parsedStyles[t] ?? "").join("\n")
      : parsedStyles[styleTemplates] || "";

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

export function evalStyles(context, styles = "") {
  if (!styles) return "";

  try {
    const result = cleanCSS(Function(
      "hass", "entity", "state", "icon", "subButtonIcon", "getWeatherIcon", "card", "name", 
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

    if (context.editor && context.templateError) {
        emitEditorError('');
        context.templateError = '';
    }

    return result;
  } catch (error) {
    const errorMessage = `Bubble Card - Template error from a ${context.config.card_type} card: ${error.message}`;
    
    if (context.editor) {
        requestAnimationFrame(() => emitEditorError(error.message));
        context.templateError = error.message;
    }

    console.error(errorMessage);
    return "";
  }
}



function cleanCSS(css) {
  return css
    .replace(/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g, "")
    .replace(/[^{}]\s*{\s*}/g, "")
    .replace(/([a-z-]+)\s*:\s*;/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .match(/(@[^{]*?{(?:[^{}]*?{[^{}]*?}?)*?[^{}]*?}|[^{}]*?{[^{}]*?})/g)?.join("\n") || "";
}

function emitEditorError(message) {
  window.dispatchEvent(new CustomEvent("bubble-card-error", { detail: message }));
}

export function preloadYAMLStyles(context) {
  if (context.config?.card_type && !context.stylesYAML) {
    if (!stylesYAML) {
      stylesYAML = loadYAML([
        "/local/bubble/bubble-custom.yaml",
        "/hacsfiles/Bubble-Card/bubble-custom.yaml",
        "/local/community/Bubble-Card/bubble-custom.yaml",
      ]);
    }
    context.stylesYAML = stylesYAML;
  }
}