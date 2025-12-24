import { getState } from "./utils.js";
import { getWeatherIcon } from "./icon.js";
import { getSubButtonsStates } from "../components/sub-button/changes.js";
import { checkConditionsMet } from './validate-condition.js';
import { yamlKeysMap } from '../modules/registry.js';
import { isBCTAvailableSync } from '../modules/bct-provider.js';

const compiledTemplateCache = new Map();

const CLEAN_CSS_CACHE_LIMIT = 300; // conservative limit to bound memory
const cleanCSSCache = new Map(); // LRU cache (Map preserves insertion order)

// Precompiled regex patterns
const RE_BLOCK_COMMENTS = /\/\*[\s\S]*?\*\//g;
const RE_MULTI_WHITESPACE = /\s+/g;
const RE_SPACE_AROUND_SEPARATORS = /\s*([{};,])\s*/g;
const RE_EMPTY_DECLARATION = /([a-zA-Z0-9_-]+)\s*:\s*;/g;
const RE_UNDEFINED_OUTSIDE_QUOTES = /undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g;
const RE_EMPTY_BLOCK = /[^{};]+\s*{\s*}/g;
const RE_TRAILING_COMMA = /,(?=\s*[}\n])/g;
const RE_BLOCKS_OR_AT_RULES = /(@[^{}]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g;

// Optimized regex patterns for line checks
const RE_LINE_TRAILING_COMMA = /,\s*(\/\*.*\*\/)?$/;
const RE_START_SELECTOR = /^[.:#&\[*]/;
const RE_COMBINATOR = /^[>+~]/;
const RE_TAG_SELECTOR = /^[a-zA-Z][a-zA-Z0-9-_]*$/;
const RE_PSEUDO = /::?[a-zA-Z_-][a-zA-Z0-9_-]*/;
const RE_GROUPING = /^[()\[\]]+,?$/;

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

export const handleCustomStyles = async (context, element = context.card) => {
  const isDirectStyleElement = element.tagName === 'STYLE';
  const targetElementForDisplayLogic = isDirectStyleElement ? null : element; 
  const isPopupRoot = context.cardType === 'pop-up' && element === context.popUp;
  const loadHideTarget = isPopupRoot
    ? (context.elements?.popUpContainer 
        || (typeof element.querySelector === 'function' 
          ? element.querySelector('.bubble-pop-up-container')
          : null)
        || targetElementForDisplayLogic)
    : targetElementForDisplayLogic;
  const loadHideMode = isPopupRoot ? 'visibility' : 'display';

  const customStyles = context.config.styles;

  if (typeof context.cardLoaded === "undefined" && !isDirectStyleElement) {
    context.lastEvaluatedStyles = "";
    context.initialLoad = true;
    
    if (!context._moduleChangeListenerAdded) {
      const refreshHandler = () => {
        context.lastEvaluatedStyles = "";
        context.stylesYAML = null;
        yamlKeysMap.forEach((value, key) => {
          if (context._processedSchemas?.[key]) {
            delete context._processedSchemas[key];
          }
        });
        // Use popUp element for pop-up cards, otherwise use card element
        const targetElement = context.cardType === 'pop-up' && context.popUp ? context.popUp : context.card;
        handleCustomStyles(context, targetElement); 
      };
      
      window.addEventListener('bubble-card-modules-changed', refreshHandler);
      window.addEventListener('bubble-card-module-updated', refreshHandler);
      document.addEventListener('yaml-modules-updated', refreshHandler);
      context._moduleChangeListenerAdded = true;
      context._moduleChangeHandler = refreshHandler;
    }
  }
  
  // Hide the card during the initial loading only
  if (context.initialLoad && loadHideTarget?.style && !loadHideTarget.dataset.bubbleStyleHideMode) {
    if (loadHideMode === 'visibility') {
      loadHideTarget.style.visibility = 'hidden';
    } else {
      loadHideTarget.style.display = 'none';
    }
    loadHideTarget.dataset.bubbleStyleHideMode = loadHideMode;
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

    const addGlobalModulesFromEntity = (hass) => {
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

    const addGlobalModulesFromFiles = () => {
        try {
            yamlKeysMap.forEach((value, key) => {
                if (value && typeof value === 'object' && value.is_global === true && !configExcludedModules.has(key)) {
                    activeModules.add(key);
                }
            });
        } catch (_) {}
    };

    // Read global flags from files only when BCT/migration is available
    // Legacy entity is used strictly as a fallback when BCT is not available
    addGlobalModulesFromFiles();
    if ((!isBCTAvailableSync || !isBCTAvailableSync()) && context._hass) {
      addGlobalModulesFromEntity(context._hass);
    }

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

    if (context.initialLoad && loadHideTarget?.style) {
      if (loadHideTarget.dataset.bubbleStyleHideMode === 'visibility') {
        loadHideTarget.style.visibility = '';
      } else {
        loadHideTarget.style.display = '';
      }
      delete loadHideTarget.dataset.bubbleStyleHideMode;
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
    
    // Execute the compiled function to get the raw string result
    const rawResult = compiledFunction.call(
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
    );

    // Optimization: Local cache to avoid re-cleaning CSS if the raw output hasn't changed.
    // This significantly reduces CPU usage on dashboards with many cards/modules.
    if (!context._localStyleCache) {
      context._localStyleCache = new Map();
    }

    const cachedStyle = context._localStyleCache.get(styles);
    if (cachedStyle && cachedStyle.raw === rawResult) {
      return cachedStyle.cleaned;
    }

    const cleanedResult = cleanCSS(rawResult);

    // Store the new result in the local cache
    context._localStyleCache.set(styles, {
      raw: rawResult,
      cleaned: cleanedResult
    });

    return cleanedResult;

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
        try {
          // Trigger a refresh to re-evaluate templates quickly
          if (typeof context.handleCustomStyles === 'function') {
            context.lastEvaluatedStyles = "";
            context.stylesYAML = null;
            requestAnimationFrame(() => context.handleCustomStyles(context, context.card));
          }
        } catch (_) {}
      }, 900);
    }
    console.error(errorMessageToLog);
    return ""; // Important: return an empty string to avoid breaking styles.
  }
}

function cleanCSS(css) {
  // Fast-path for non-strings or empty strings
  if (!css || typeof css !== "string") return "";

  // LRU cache lookup
  if (cleanCSSCache.has(css)) {
    const cached = cleanCSSCache.get(css);
    // refresh recency
    cleanCSSCache.delete(css);
    cleanCSSCache.set(css, cached);
    return cached;
  }

  let result = css;

  // Apply inexpensive guards before heavier regex passes
  if (result.includes("/*")) result = result.replace(RE_BLOCK_COMMENTS, "");

  if (result.includes("\n")) {
    let nestingLevel = 0;
    const filteredLines = [];
    const lines = result.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Skip empty lines immediately
        if (!trimmed) continue;

        // Efficient brace counting
        let openBraces = 0;
        let closeBraces = 0;
        
        // Count braces using a simple loop to avoid regex overhead on every line
        for (let j = 0; j < line.length; j++) {
            if (line[j] === '{') openBraces++;
            else if (line[j] === '}') closeBraces++;
        }

        let shouldKeep = nestingLevel > 0;

        // If we are not in a block, we need to check if the line looks like valid CSS
        if (!shouldKeep) {
            shouldKeep = 
                openBraces > 0 ||
                closeBraces > 0 ||
                trimmed.startsWith("@") ||
                trimmed.startsWith("--") ||
                RE_LINE_TRAILING_COMMA.test(trimmed) ||
                RE_START_SELECTOR.test(trimmed) || 
                RE_COMBINATOR.test(trimmed) ||
                RE_TAG_SELECTOR.test(trimmed) ||
                RE_PSEUDO.test(trimmed) ||
                RE_GROUPING.test(trimmed);
        }

        if (shouldKeep) {
            filteredLines.push(line);
        }

        nestingLevel += openBraces - closeBraces;
        if (nestingLevel < 0) {
            nestingLevel = 0;
        }
    }

    result = filteredLines.join("\n");
  }

  // Whitespace normalization is cheap; do it unconditionally
  result = result.replace(RE_MULTI_WHITESPACE, " ");
  result = result.replace(RE_SPACE_AROUND_SEPARATORS, "$1");
  if (result.includes(":;") || result.includes(": ")) result = result.replace(RE_EMPTY_DECLARATION, "");
  if (result.includes("undefined")) result = result.replace(RE_UNDEFINED_OUTSIDE_QUOTES, "");
  if (result.includes("{")) result = result.replace(RE_EMPTY_BLOCK, "");
  if (result.includes(",")) result = result.replace(RE_TRAILING_COMMA, "");

  // Keep only well-formed blocks and at-rules
  const matched = result.match(RE_BLOCKS_OR_AT_RULES);
  result = matched ? matched.join("\n") : "";

  // Store in LRU cache and evict oldest if needed
  cleanCSSCache.set(css, result);
  if (cleanCSSCache.size > CLEAN_CSS_CACHE_LIMIT) {
    const oldestKey = cleanCSSCache.keys().next().value;
    cleanCSSCache.delete(oldestKey);
  }

  return result;
}

function emitEditorError(message, errorContext) {
  window.dispatchEvent(new CustomEvent("bubble-card-error", { 
    detail: {
      message: message,
      context: errorContext
    }
  }));
}
