import { getState } from "./utils.js";
import { getWeatherIcon } from "./icon.js";
import { getSubButtonsStates } from "../components/sub-button/changes.js";
import { checkConditionsMet } from './validate-condition.js';
import { onTemplateChange } from './render-template.js';
import { yamlKeysMap } from '../modules/registry.js';
import { isBCTAvailableSync } from '../modules/bct-provider.js';
import { cleanCSS } from './clean-css.js';

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

export const handleCustomStyles = (context, element = context.card) => {
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
        context._moduleListVersion = (context._moduleListVersion || 0) + 1;
        context._cachedModulesToApply = null;
        yamlKeysMap.forEach((value, key) => {
          if (context._processedSchemas?.[key]) {
            delete context._processedSchemas[key];
          }
        });
        // Use popUp element for pop-up cards, otherwise use card element
        const targetElement = context.cardType === 'pop-up' && context.popUp ? context.popUp : context.card;
        handleCustomStyles(context, targetElement); 
      };

      // Light refresh for template result changes (no need to clear module caches)
      const templateRefreshHandler = () => {
        context.lastEvaluatedStyles = "";
        // Increment template version counter for modules that track template changes
        context._templateResultVersion = (context._templateResultVersion || 0) + 1;
        // Invalidate bubble_badges module cache to force re-evaluation
        if (context._bb_cache) {
          context._bb_cache.lastStateSignature = '';
        }
        const targetElement = context.cardType === 'pop-up' && context.popUp ? context.popUp : context.card;
        handleCustomStyles(context, targetElement);
      };
      
      window.addEventListener('bubble-card-modules-changed', refreshHandler);
      window.addEventListener('bubble-card-module-updated', refreshHandler);
      // Subscribe to template changes
      onTemplateChange(templateRefreshHandler);
      document.addEventListener('yaml-modules-updated', refreshHandler);
      context._moduleChangeListenerAdded = true;
      context._moduleChangeHandler = refreshHandler;
      context._templateChangeHandler = templateRefreshHandler;
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

  if (yamlKeysMap.size > 0) {
    // Fast synchronous path: modules already loaded, no Promise allocation needed
    // Pass yamlKeysMap directly to avoid copying all entries into a new object every cycle
    _handleCustomStylesCore(context, yamlKeysMap, styleElementToInjectInto, isDirectStyleElement, targetElementForDisplayLogic, loadHideTarget, loadHideMode, customStyles);
    return;
  }

  // Async fallback: modules not yet initialised (first load with legacy entity path)
  Promise.resolve(context.stylesYAML)
    .then(modules => _handleCustomStylesCore(context, modules || {}, styleElementToInjectInto, isDirectStyleElement, targetElementForDisplayLogic, loadHideTarget, loadHideMode, customStyles))
    .catch(error => {
      console.error("Error applying styles:", error);
      if (context.initialLoad && targetElementForDisplayLogic?.style) {
        targetElementForDisplayLogic.style.display = "";
      }
    });
};

function _handleCustomStylesCore(context, parsedYamlModules, styleElementToInjectInto, isDirectStyleElement, targetElementForDisplayLogic, loadHideTarget, loadHideMode, customStyles) {
  try {
    // Build a cheap fingerprint to avoid recomputing the active modules list every cycle.
    // The list only needs to be recomputed when:
    //   - a module is added/removed/toggled global → refreshHandler increments _moduleListVersion
    //   - the card's modules config changes → configModulesKey changes
    //   - yamlKeysMap grows/shrinks → yamlKeysMap.size changes
    //   - legacy entity sensor updates (fallback path) → sensor last_updated changes
    const _useLegacyEntity = !isBCTAvailableSync || !isBCTAvailableSync();
    const _configModulesKey = context.config.modules
      ? (Array.isArray(context.config.modules) ? context.config.modules.join(',') : String(context.config.modules))
      : '';
    const _sensorKey = _useLegacyEntity
      ? (context._hass?.states?.['sensor.bubble_card_modules']?.last_updated || '')
      : '';
    const _moduleListFingerprint = `${context._moduleListVersion || 0}-${yamlKeysMap.size}-${_configModulesKey}-${_sensorKey}`;

    let modulesToApply;
    if (context._cachedModulesToApply && context._moduleListFingerprint === _moduleListFingerprint) {
      modulesToApply = context._cachedModulesToApply;
    } else {
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
      if (_useLegacyEntity && context._hass) {
        addGlobalModulesFromEntity(context._hass);
      }

      configDefinedModules.forEach(moduleId => {
          if (yamlKeysMap.has(moduleId) && !configExcludedModules.has(moduleId)) {
              activeModules.add(moduleId);
          }
      });

      modulesToApply = Array.from(activeModules);
      context._cachedModulesToApply = modulesToApply;
      context._moduleListFingerprint = _moduleListFingerprint;
    }
    
    const cycleSubButtonStates = getSubButtonsStates(context);
    const cycleState = getState(context);

    const stylesParts = [];
    if (modulesToApply.length > 0) {
      for (const moduleId of modulesToApply) {
        try {
          let tmpl = (parsedYamlModules instanceof Map ? parsedYamlModules.get(moduleId) : parsedYamlModules[moduleId]) ?? "";
          if ((typeof tmpl === "object" && tmpl.code === "") || tmpl === "") { stylesParts.push("{}"); continue; }
          const moduleCode = typeof tmpl === "object" && tmpl.code ? tmpl.code : tmpl;
          stylesParts.push(evalStyles(context, moduleCode, { type: 'module', id: moduleId }, cycleSubButtonStates, cycleState));
        } catch (moduleError) {
          console.error(`Bubble Card - Error processing module "${moduleId}" before evaluation:`, moduleError);
          stylesParts.push("{}");
        }
      }
    }

    try {
      stylesParts.push(evalStyles(context, customStyles, { type: 'custom_styles' }, cycleSubButtonStates, cycleState));
    } catch (customStyleError) {
      console.error("Bubble Card - Error processing custom styles before evaluation:", customStyleError);
    }

    const finalStylesToInject = stylesParts.join("\n").trim();
    
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
}

export function evalStyles(context, styles = "", sourceInfo = { type: 'unknown' }, cachedSubButtonStates = null, cachedState = null) {
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
      // Keep the most recent ~1000 entries; evict 100 at once to amortize cost
      if (compiledTemplateCache.size > 1000) {
        const iterator = compiledTemplateCache.keys();
        for (let i = 0; i < 100; i++) {
          const key = iterator.next().value;
          if (key !== undefined) compiledTemplateCache.delete(key);
        }
      }
    }
    const card = context.config.card_type === 'pop-up' ? context.popUp : context.card;
    
    // Execute the compiled function to get the raw string result
    const rawResult = compiledFunction.call(
      context,
      context._hass,
      context.config.entity,
      cachedState ?? getState(context),
      context.elements.icon,
      cachedSubButtonStates ?? getSubButtonsStates(context),
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

function emitEditorError(message, errorContext) {
  window.dispatchEvent(new CustomEvent("bubble-card-error", { 
    detail: {
      message: message,
      context: errorContext
    }
  }));
}
