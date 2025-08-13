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
      "/local/bubble/bubble-modules.yaml"
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
let yamlCache = new Map();
const compiledTemplateCache = new Map();

function getOrCreateStyleElement(context, element) {
  if (element.tagName === 'STYLE') {
    return element;
  }

  if (!context.styleElement || context.styleElement.parentElement !== element) {
    const styleElementToCache = document.createElement("style");
    styleElementToCache.id = "bubble-styles"; 
    element.appendChild(styleElementToCache);
    context.styleElement = styleElementToCache;
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
  const isDirectStyleElement = element.tagName === 'STYLE';
  const targetElementForDisplayLogic = isDirectStyleElement ? null : element; 

  const customStyles = context.config.styles;

  if (typeof context.cardLoaded === "undefined" && !isDirectStyleElement) {
    context.lastEvaluatedStyles = "";
    context.initialLoad = true;
    
    // Optimization of the event listener
    if (!context._moduleChangeListenerAdded) {
      const refreshHandler = () => {
        context.lastEvaluatedStyles = "";
        context.stylesYAML = null;
        yamlKeysMap.forEach((value, key) => {
          if (context._processedSchemas?.[key]) {
            delete context._processedSchemas[key];
          }
        });
        handleCustomStyles(context, context.card); 
      };
      
      window.addEventListener('bubble-card-modules-changed', refreshHandler);
      window.addEventListener('bubble-card-module-updated', refreshHandler);
      document.addEventListener('yaml-modules-updated', refreshHandler);
      context._moduleChangeListenerAdded = true;
      context._moduleChangeHandler = refreshHandler;
    }
  }
  
  // Hide the card during the initial loading only
  if (context.initialLoad && targetElementForDisplayLogic?.style) {
    targetElementForDisplayLogic.style.display = "none";
  }

  const styleElementToInjectInto = getOrCreateStyleElement(context, element); 

  try {
    let parsedYamlModules = {}; 
    if (yamlKeysMap.size > 0) {
      yamlKeysMap.forEach((value, key) => {
        parsedYamlModules[key] = value;
      });
    } else {
      parsedYamlModules = (await context.stylesYAML) || {};
    }

    let modulesToApply = [];
    const activeModules = new Set();
    const configDefinedModules = [];
    const configExcludedModules = new Set();

    if (Array.isArray(context.config.modules)) {
        context.config.modules.forEach(mod => {
            if (typeof mod === 'string' && mod.startsWith('!')) {
                configExcludedModules.add(mod.substring(1));
            } else if (typeof mod === 'string') {
                configDefinedModules.push(mod);
            }
        });
    } else if (context.config.modules && typeof context.config.modules === 'string') {
        if (context.config.modules.startsWith('!')) {
            configExcludedModules.add(context.config.modules.substring(1));
        } else {
            configDefinedModules.push(context.config.modules);
        }
    }

    if (yamlKeysMap.has('default') && !configExcludedModules.has('default')) {
        activeModules.add('default');
    }

    const getGlobalModules = (hass) => {
        if (!hass || !hass.states || !hass.states['sensor.bubble_card_modules']) return;
        const globalModulesData = hass.states['sensor.bubble_card_modules'].attributes.modules;
        if (!globalModulesData) return;
        for (const moduleId in globalModulesData) {
            if (globalModulesData[moduleId].is_global === true &&
                yamlKeysMap.has(moduleId) &&
                !configExcludedModules.has(moduleId)) {
                activeModules.add(moduleId);
            }
        }
    };

    if (context._hass) getGlobalModules(context._hass);

    configDefinedModules.forEach(moduleId => {
        if (yamlKeysMap.has(moduleId) && !configExcludedModules.has(moduleId)) {
            activeModules.add(moduleId);
        }
    });

    modulesToApply = Array.from(activeModules);
    
    let combinedModuleStylesContent = "";
    if (modulesToApply.length > 0) {
      const moduleStyles = modulesToApply.map((moduleId) => {
        try {
          let tmpl = parsedYamlModules[moduleId] ?? "";
          if ((typeof tmpl === "object" && tmpl.code === "") || tmpl === "") return "{}";
          const moduleCode = typeof tmpl === "object" && tmpl.code ? tmpl.code : tmpl;
          return evalStyles(context, moduleCode, { type: 'module', id: moduleId });
        } catch (moduleError) {
          console.error(`Bubble Card - Error processing module "${moduleId}" before evaluation:`, moduleError);
          return "{}";
        }
      });
      combinedModuleStylesContent = moduleStyles.join("\n");
    }

    let evaluatedCustomStylesContent = "";
    try {
      evaluatedCustomStylesContent = evalStyles(context, customStyles, { type: 'custom_styles' });
    } catch (customStyleError) {
      console.error("Bubble Card - Error processing custom styles before evaluation:", customStyleError);
    }
    
    const finalStylesToInject = `${combinedModuleStylesContent}\n${evaluatedCustomStylesContent}`.trim();
    
    let stylesHaveChanged = true;

    if (isDirectStyleElement) {
      if (finalStylesToInject === styleElementToInjectInto.textContent) {
        stylesHaveChanged = false;
      }
    } else {
      if (finalStylesToInject === context.lastEvaluatedStyles) {
        stylesHaveChanged = false;
      } else {
        context.lastEvaluatedStyles = finalStylesToInject;
      }
    }

    if (stylesHaveChanged) {
      styleElementToInjectInto.textContent = finalStylesToInject;
    }

    if (context.initialLoad && targetElementForDisplayLogic?.style) {
      targetElementForDisplayLogic.style.display = "";
      if (!isDirectStyleElement) { 
        context.initialLoad = false;
        context.cardLoaded = true;
      }
    }
  } catch (error) {
    console.error("Error applying styles:", error);
    if (context.initialLoad && targetElementForDisplayLogic?.style) {
        targetElementForDisplayLogic.style.display = "";
    }
  }
};

export function evalStyles(context, styles = "", sourceInfo = { type: 'unknown' }) {
  if (!styles) return "";

  // If this card is in editor mode and its template was previously marked as temporarily failed
  if (context.editor && context.templateEvaluationBlocked) {
    // To avoid flickering, we don't re-evaluate immediately.
    // The original error should remain displayed in the editor.
    return ""; // Prevents re-evaluation and flickering
  }

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
      // Prevent unbounded growth of the compiled template cache
      // Keep the most recent ~500 entries as a simple safeguard
      if (compiledTemplateCache.size > 500) {
        const oldestKey = compiledTemplateCache.keys().next().value;
        compiledTemplateCache.delete(oldestKey);
      }
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

    // If we get here, evaluation was successful.
    if (context.editor) {
      // If there was a blocking or displayed error for this card, clear it.
      if (context.templateEvaluationBlocked || context.lastEmittedEditorError) {
        // Signal to the editor that everything is OK for THIS context.
        const errorContext = {
          cardType: context.config?.card_type,
          entityId: context.config?.entity,
          sourceType: sourceInfo.type,
          moduleId: sourceInfo.id
        };
        requestAnimationFrame(() => emitEditorError('', errorContext));
      }
      context.templateEvaluationBlocked = false;
      context.lastEmittedEditorError = null;
      if (context.templateErrorClearTimeout) {
        clearTimeout(context.templateErrorClearTimeout);
        context.templateErrorClearTimeout = null;
      }
    }
    return result;

  } catch (error) {
    let sourceDescription = 'Unknown source';
    if (sourceInfo.type === 'module' && sourceInfo.id) {
      sourceDescription = `Module ('${sourceInfo.id}')`;
    } else if (sourceInfo.type === 'custom_styles') {
      sourceDescription = 'Card Configuration (styles section)';
    } else if (sourceInfo.type === 'unknown') {
      sourceDescription = 'Direct call or unspecified source';
    }

    const cardType = context.config?.card_type || 'N/A';
    const entityId = context.config?.entity || 'N/A';
    const errorMessageToLog = 
`Bubble Card - Template Error:
  Card Type: ${cardType}
  Entity: ${entityId}
  Source: ${sourceDescription}
  Error: ${error.message}`;

    if (context.editor) {
      const editorErrorMessage = error.message;
      context.lastEmittedEditorError = editorErrorMessage;
      
      // Create error context object for filtering
      const errorContext = {
        cardType: cardType,
        entityId: entityId,
        sourceType: sourceInfo.type,
        moduleId: sourceInfo.id
      };
      
      requestAnimationFrame(() => emitEditorError(editorErrorMessage, errorContext));

      context.templateEvaluationBlocked = true;
      
      if (context.templateErrorClearTimeout) {
        clearTimeout(context.templateErrorClearTimeout);
      }
      
      context.templateErrorClearTimeout = setTimeout(() => {
        context.templateEvaluationBlocked = false;
      }, 2000); 
    }
    console.error(errorMessageToLog);
    return ""; // Important: return an empty string to avoid breaking styles.
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

function emitEditorError(message, errorContext) {
  window.dispatchEvent(new CustomEvent("bubble-card-error", { 
    detail: {
      message: message,
      context: errorContext
    }
  }));
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