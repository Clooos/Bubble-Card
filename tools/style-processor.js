import { getState } from "./utils.js";
import { getWeatherIcon } from "./icon.js";
import { getSubButtonsStates } from "../components/sub-button/changes.js";
import { checkConditionsMet } from './validate-condition.js';
import * as YAML from 'js-yaml';

// Global variable to store all modules, including those from text
let allModules = null;
let modulesInitialized = false;
let initPromise = null;
// Map to track module origins
export let moduleSourceMap = new Map(); // To track if a module comes from YAML or from a text entity

// Listen for module updates to invalidate cache
document.addEventListener('yaml-modules-updated', () => {
  // Reset module state to force reload
  modulesInitialized = false;
  allModules = null;
  initPromise = null;
  
  // Force a refresh on all bubble cards that might be using modules
  window.dispatchEvent(new CustomEvent('bubble-card-modules-changed'));
});

// Listen for specific module updates (used by editor)
window.addEventListener('bubble-card-module-updated', (event) => {
  if (event.detail && event.detail.moduleId && event.detail.moduleData) {
    // Update the specific module in yamlKeysMap
    yamlKeysMap.set(event.detail.moduleId, event.detail.moduleData);
    
    // Update the module source map if needed
    if (!moduleSourceMap.has(event.detail.moduleId)) {
      moduleSourceMap.set(event.detail.moduleId, 'editor');
    }
    
    // Force a refresh on relevant cards
    window.dispatchEvent(new CustomEvent('bubble-card-modules-changed'));
  }
});

// Function to initialize and load all modules from all sources
export async function initializeModules(context) {
  // If already initialized, return existing modules
  if (modulesInitialized && allModules) {
    return allModules;
  }
  
  // If initialization is already in progress, wait for it
  if (initPromise) {
    return initPromise;
  }
  
  // Create a promise for initialization
  initPromise = (async () => {    
    // Load from YAML files first
    const yamlModules = await loadYAML([
      "/local/bubble/bubble-modules.yaml",
      "/hacsfiles/Bubble-Card/bubble-modules.yaml",
      "/local/community/Bubble-Card/bubble-modules.yaml",
    ]);
    
    // Load modules from text
    const entityModules = context?._hass 
      ? await loadModulesFromEntity(context._hass)
      : {};

    // Reset moduleSourceMap
    moduleSourceMap.clear();
    
    // Track the source of each module
    if (yamlModules) {
      Object.keys(yamlModules).forEach(key => {
        if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
          moduleSourceMap.set(key, 'yaml');
        }
      });
    }
    
    if (entityModules) {
      Object.keys(entityModules).forEach(key => {
        if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
          moduleSourceMap.set(key, 'entity');
        }
      });
    }

    // Merge sources (entity overwrites YAML duplicates)
    allModules = { 
      ...yamlModules,
      ...entityModules 
    };
    
    // Update yamlKeysMap with all modules
    yamlKeysMap.clear();
    Object.entries(allModules).forEach(([key, value]) => {
      if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
        yamlKeysMap.set(key, value);
      }
    });
    
    // Mark as initialized
    modulesInitialized = true;
    
    return allModules;
  })();
  
  return initPromise;
}

export function preloadYAMLStyles(context) {
  if (context.config?.card_type && !context.stylesYAML) {
    // Utilize the same promise for all components
    if (modulesInitialized && allModules) {
      context.stylesYAML = Promise.resolve(allModules);
    } else {
      context.stylesYAML = initializeModules(context);
    }
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
        window.bubbleYamlWarning = true;
        continue;
      }

      const yamlText = await response.text();
      let parsedYAML;
      
      // Try to parse as YAML
      parsedYAML = parseYAML(yamlText);
      
      if (!yamlKeysMap.size && parsedYAML) {
        Object.entries(parsedYAML).forEach(([key, value]) => {
          if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
            yamlKeysMap.set(key, value);
          }
        });
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
  if (!yamlString || typeof yamlString !== 'string') {
    return null;
  }
  
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

  // Initialization of the cache if necessary
  if (typeof context.cardLoaded === "undefined") {
    context.lastEvaluatedStyles = "";
    context.initialLoad = true;
    
    // Optimization of the event listener
    if (!context._moduleChangeListenerAdded) {
      const refreshHandler = () => {
        // Immediate reset of the caches
        context.lastEvaluatedStyles = "";
        context.stylesYAML = null;
        yamlKeysMap.forEach((value, key) => {
          if (context._processedSchemas?.[key]) {
            delete context._processedSchemas[key];
          }
        });
        // Immediate application of the styles
        handleCustomStyles(context, element);
      };
      
      window.addEventListener('bubble-card-modules-changed', refreshHandler);
      window.addEventListener('bubble-card-module-updated', refreshHandler);
      context._moduleChangeListenerAdded = true;
      context._moduleChangeHandler = refreshHandler;
    }
  }

  // Hide the card during the initial loading only
  if (context.initialLoad) {
    card.style.display = "none";
  }

  const styleElement = getOrCreateStyleElement(context, element);

  try {
    let parsedStyles = {};
    if (yamlKeysMap.size > 0) {
      yamlKeysMap.forEach((value, key) => {
        parsedStyles[key] = value;
      });
    } else {
      parsedStyles = (await context.stylesYAML) || {};
    }

    let combinedStyles = "";
    if (Array.isArray(styleTemplates)) {
      combinedStyles = styleTemplates.map((t) => {      
        let tmpl = parsedStyles[t] ?? "";
        return typeof tmpl === "object" && tmpl.code ? tmpl.code : tmpl;
      }).join("\n");
    }

    const evaluatedCombinedStyles = evalStyles(context, combinedStyles);
    const evaluatedCustomStyles = evalStyles(context, customStyles);
    const finalStyles = `${evaluatedCombinedStyles}\n${evaluatedCustomStyles}`.trim();

    // Apply styles only if they have changed
    if (finalStyles !== context.lastEvaluatedStyles) {
      styleElement.textContent = finalStyles;
      context.lastEvaluatedStyles = finalStyles;
    }

    // Display the card after the initial loading
    if (context.initialLoad) {
      card.style.display = "";
      context.initialLoad = false;
      context.cardLoaded = true;
    }
  } catch (error) {
    console.error("Error applying styles:", error);
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

// Improved function to load modules from text
async function loadModulesFromEntity(hass) {
  const entityId = 'sensor.bubble_card_modules';
  const entity = hass.states[entityId];
  
  if (!entity) {
    return {};
  }
  
  if (!entity.attributes?.modules) {
    return {};
  }

  const modules = {};
  let totalModules = 0;
  let parsedModules = 0;
  
  try {
    // Transform object.values into array for easier traversal
    totalModules = Object.keys(entity.attributes.modules).length;
    
    Object.values(entity.attributes.modules).forEach(module => {
      try {
        // Check if the module has already a complete structure (with code, description, etc.)
        if (!module.yaml && (module.code || module.description)) {
          // Use the existing structure directly
          modules[module.id] = module;
          parsedModules++;
          return;
        }
        
        if (!module.yaml) {
          return;
        }
      } catch (e) {
        console.error(`❌ YAML parsing error for module ${module.id}:`, e);
        // Display problematic content safely (if it's a string)
        if (typeof module.yaml === 'string') {
          console.error("Problematic YAML content:", module.yaml.substring(0, 100) + "...");
        } else {
          console.error("Problematic YAML content type:", typeof module.yaml);
        }
      }
    });
  } catch (error) {
    console.error("Error while processing modules from text entity:", error);
  }

  return modules;
}