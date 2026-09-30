import { getState } from "./utils.js";
import { getWeatherIcon } from "./icon.js";
import { getSubButtonsStates } from "../components/sub-button/changes.js";
import { refreshSurfaceTones } from "../components/sub-button/utils.js";
import { checkConditionsMet } from './validate-condition.js';
import { getTemplateResult, setStyleRefresher, TEMPLATE_STYLE } from './render-template.js';
import { splitStyleTemplate, isTemplate, templateResultToText } from './jinja.js';
import { yamlKeysMap } from '../modules/registry.js';
import { isBCTAvailableSync } from '../modules/bct-provider.js';
import { cleanCSS } from './clean-css.js';
import { trackedHass } from './render-gate.js';
import { registerModuleTeardown, teardownKey } from './module-teardown.js';
import { hasChanged } from './module-gate.js';
import { interceptTemplateWrites } from './text-scrolling.js';

const compiledTemplateCache = new Map();

// A style template is only safe to memoize by input-fingerprint when its output
// depends solely on (hass, resolved state, sub-button states). A template is
// considered NON-memoizable when it either:
//   - runs side effects that must re-execute every cycle (DOM mutations,
//     ResizeObserver/RAF scheduling, WS calls, timers), or
//   - reads volatile/non-deterministic sources not captured by the fingerprint
//     (current time, randomness, live DOM/layout/env reads).
// In those cases the compiled template is always executed, exactly like before.
const _sideEffectCache = new Map();
const _NON_MEMOIZABLE_RE = /=>|\bfunction\b|document|window\.|navigator|matchMedia|requestAnimationFrame|cancelAnimationFrame|appendChild|insertBefore|removeChild|\.remove\s*\(|setAttribute|removeAttribute|getAttribute|addEventListener|ResizeObserver|MutationObserver|IntersectionObserver|classList|\.style\b|innerHTML|innerText|textContent\s*=|getComputedStyle|getBoundingClientRect|callWS|callService|localStorage|setTimeout|setInterval|\bDate\b|Math\.random|performance\./;

// Everything below keyed by the template string shares one shape: computed once
// per distinct template, the most recent ~1000 kept, 100 evicted at a time to
// amortize the cost.
function _rememberByTemplate(cache, styles, value) {
  cache.set(styles, value);
  if (cache.size > 1000) {
    const iterator = cache.keys();
    for (let i = 0; i < 100; i++) {
      const key = iterator.next().value;
      if (key !== undefined) cache.delete(key);
    }
  }
  return value;
}

function _memoByTemplate(cache, styles, compute) {
  const cached = cache.get(styles);
  return cached !== undefined ? cached : _rememberByTemplate(cache, styles, compute(styles));
}

function _hasSideEffects(styles) {
  return _memoByTemplate(_sideEffectCache, styles, (s) => _NON_MEMOIZABLE_RE.test(s));
}

// Which of the .bubble-state / .bubble-name elements a template writes into.
// The answer depends on the template string alone, yet the scan is six substring
// searches over a template that can be tens of kilobytes, and evalStyles runs it
// on every evaluation of every card, before its memo can short-circuit anything.
// Measured at 315 ms of a throttled page load on a 88-card dashboard, for a
// verdict that never changes.
const _TEMPLATE_TARGET_TYPES = ["state", "name"];
const _TEMPLATE_TARGET_SELECTORS = _TEMPLATE_TARGET_TYPES.map((type) =>
  ["innerText", "textContent", "innerHTML"].map((prop) => `card.querySelector('.bubble-${type}').${prop} =`)
);
const _detectedTypesCache = new Map();
function _detectedTemplateTypes(styles) {
  return _memoByTemplate(_detectedTypesCache, styles, (s) =>
    _TEMPLATE_TARGET_TYPES.filter((type, index) =>
      _TEMPLATE_TARGET_SELECTORS[index].some((selector) => s.includes(selector))
    )
  );
}

// A template with no ${} placeholder and no Home Assistant template has nothing
// to interpolate, so it resolves to the same CSS for every card, every hass and
// every state. Its cleaned output is therefore a constant of the template
// string, and worth caching globally rather than per card: the fingerprint memo
// further down keys on the identity of hass, which Home Assistant replaces on
// every state change of the whole installation, so it misses for every card at
// once several times per page load.
const _staticTemplateCache = new Map();
function _isStaticTemplate(styles) {
  return _memoByTemplate(_staticTemplateCache, styles, (s) => !s.includes("${") && !isTemplate(s));
}
const _staticResultCache = new Map();

// The Home Assistant templates of a styles block, taken out once per string
// (see splitStyleTemplate), null for the common block that has none. A block
// tag pair split by a `${ }` reaches the server in two halves, each of them a
// syntax error, which is worth one line in the console rather than a silent
// blank.
const _segmentsCache = new Map();
function _styleSegments(styles) {
  return _memoByTemplate(_segmentsCache, styles, (s) => {
    const split = splitStyleTemplate(s);
    if (split && split.unbalanced.length > 0) {
      console.warn('Bubble Card - A Jinja block ({% if %}, {% for %}...) cannot enclose a ${ } JavaScript template, move the ${ } out of the block:', split.segments[split.unbalanced[0]].substring(0, 80));
    }
    return split;
  });
}

// The rendered value of every segment, read on every evaluation, memo hit or
// not: reading is what tells the store this card still holds the template.
// A value the server has not answered yet is empty for now, and the card is
// told its styles are still on their way.
function _resolveStyleSegments(context, split) {
  const hass = context._hass;
  const entity = context.config?.entity;
  const segments = split.segments;
  const values = new Array(segments.length);
  for (let i = 0; i < segments.length; i++) {
    const result = getTemplateResult(hass, segments[i], entity, context, TEMPLATE_STYLE);
    if (result === undefined) {
      context._stylesPending = true;
      values[i] = '';
    } else {
      values[i] = templateResultToText(result);
    }
  }
  return values;
}

// The templates a style template rendered through renderTemplate() on its
// last execution, read again on a memo hit for the same reason as above.
function _retainTemplateCalls(context, calls) {
  const hass = context._hass;
  for (let i = 0; i < calls.length; i++) {
    getTemplateResult(hass, calls[i][0], calls[i][1], context, TEMPLATE_STYLE);
  }
}

// Null-safe stub for DOM element references passed to user style templates.
// Used when context.elements.icon is not yet initialized (e.g. a popup whose
// header button hasn't been rendered yet).  The Proxy absorbs any property
// access, method call, or property assignment so that templates like
// `${icon.setAttribute("icon", ...)}` or `${icon.style.background = "red"}`
// do not throw, and subsequent template expressions continue to execute.
function _makeNullElementStub() {
  return new Proxy(function _noop() {}, {
    get: () => _makeNullElementStub(),
    set: () => true,
    apply: () => undefined,
  });
}
const _nullElementStub = _makeNullElementStub();

// Wrap a single DOM element reference: returns the element when present,
// or a null-safe stub when undefined/null (absorbs any method call or property access).
function _safeRef(value) {
  return value ?? _makeNullElementStub();
}

// Wrap an array of DOM element references: each slot that is undefined/null
// returns a null-safe stub instead of throwing on method calls.
function _safeArray(arr) {
  if (!arr) return _makeNullElementStub();
  return new Proxy(arr, { get: (t, k) => _safeRef(t[k]) });
}

// A pop-up's stylesheet lives in the same shadow root as the cards it carries,
// so a broad selector in a module matches those cards directly. `*` is the one
// that hurts: it restyles the internals of every native Home Assistant card
// inside, which is how a weather card ended up bolder and with its unit clipped
// (#2529). A module on a pop-up is meant for the pop-up and its header, so every
// rule it produces is confined to what sits outside the cards container.
//
// The rewrite goes through the CSSOM rather than the CSS text on purpose: the
// browser has already parsed the sheet, so there is no hand-written parser to
// get wrong on comments, strings, nesting or grouping rules.
// The container itself is excluded along with its contents: font-family, weight
// and colour are inherited, so a rule that only reaches the container still
// hands its values to every card below it.
//
// `bubble-cards-grid-container` rather than `bubble-cards-container`, because
// the editor swaps in `bubble-cards-editor-container` and only the grid class
// is on every one of them. Naming the wrong one leaves the whole leak in place
// while editing, which is exactly what happened first.
const POPUP_CONTENT_GUARD = ':not(.bubble-cards-grid-container, .bubble-cards-grid-container *)';

export function confineSelectorToPopupChrome(selectorText) {
    return String(selectorText)
        .split(',')
        .map(part => part.trim())
        .filter(Boolean)
        .map(part => {
            // The guard is a pseudo-class and may not follow a pseudo-element,
            // so it goes in front of a trailing ::before, ::after and friends.
            const pseudoElement = part.match(/(?:::[\w-]+(?:\([^()]*\))?)+$/);
            if (!pseudoElement) {
                return part + POPUP_CONTENT_GUARD;
            }
            return part.slice(0, pseudoElement.index) + POPUP_CONTENT_GUARD + pseudoElement[0];
        })
        .join(', ');
}

// The parse goes through a constructable stylesheet rather than the injected
// element: a pop-up's shell is built before it is connected, and a <style> that
// is not in a document has no `sheet` at all, so reading rules off the element
// finds nothing exactly when the styles are first written.
const _popupConfineCache = new Map();
const _POPUP_CONFINE_CACHE_MAX = 32;

function confineCssToPopupChrome(cssText) {
    if (!cssText || typeof CSSStyleSheet !== 'function') {
        return cssText;
    }

    // replaceSync drops an @import without a word, so a sheet carrying one is
    // left exactly as it is: leaking is better than losing a font.
    if (cssText.includes('@import')) {
        return cssText;
    }

    const cached = _popupConfineCache.get(cssText);
    if (cached !== undefined) {
        return cached;
    }

    let confined = cssText;
    try {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(cssText);

        let changed = false;
        const walk = (rules) => {
            for (const rule of rules) {
                if (rule.selectorText && !/^\s*:(host|root)\b/.test(rule.selectorText)) {
                    const guarded = confineSelectorToPopupChrome(rule.selectorText);
                    if (guarded !== rule.selectorText) {
                        // A selector the engine refuses to take back is left as
                        // it was: a rule that still leaks beats one that stopped
                        // applying at all.
                        try {
                            rule.selectorText = guarded;
                            changed = true;
                        } catch (e) {}
                    }
                }
                if (rule.cssRules) {
                    walk(rule.cssRules);
                }
            }
        };
        walk(sheet.cssRules);

        if (changed) {
            confined = Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n');
        }
    } catch (e) {
        confined = cssText;
    }

    if (_popupConfineCache.size >= _POPUP_CONFINE_CACHE_MAX) {
        _popupConfineCache.clear();
    }
    _popupConfineCache.set(cssText, confined);
    return confined;
}

function getOrCreateStyleElement(context, element) {
  if (element.tagName === 'STYLE') {
    return element;
  }

  if (!context.styleElement || context.styleElement.parentElement !== element) {
    const styleElementToCache = document.createElement("style");
    styleElementToCache.id = "bubble-styles";
    // A legacy pop-up puts it straight into the #root of the card holding it,
    // and a square grid card shows every child of its #root that is not
    // hidden, the text of a style element included. Hidden, it still styles.
    styleElementToCache.hidden = true;
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
  }

  // (Re-)register the refresh listeners whenever they are missing: disconnect
  // removes them and resets the flag, and HA re-attaches cached view elements,
  // so a card can come back long after its initial load with cardLoaded set.
  if (!isDirectStyleElement && !context._moduleChangeListenerAdded) {
    // A reconnect re-enters here with caches from before the detached window:
    // module/YAML changes dispatched meanwhile were never heard, so resync
    // once instead of trusting a stale fingerprint.
    if (typeof context.cardLoaded !== "undefined") {
      context.lastEvaluatedStyles = "";
      context.stylesYAML = null;
      context._moduleListVersion = (context._moduleListVersion || 0) + 1;
      context._cachedModulesToApply = null;
    }

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

    // A template result change is not handled here: the store renders the
    // cards that hold the template, through onTemplateResults on the element.
    window.addEventListener('bubble-card-modules-changed', refreshHandler);
    window.addEventListener('bubble-card-module-updated', refreshHandler);
    document.addEventListener('yaml-modules-updated', refreshHandler);
    context._moduleChangeListenerAdded = true;
    context._moduleChangeHandler = refreshHandler;
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

    // Set again by any style whose Home Assistant template is still pending.
    context._stylesPending = false;

    const stylesParts = [];
    if (modulesToApply.length > 0) {
      for (const moduleId of modulesToApply) {
        try {
          const tmpl = (parsedYamlModules instanceof Map ? parsedYamlModules.get(moduleId) : parsedYamlModules[moduleId]) ?? "";
          const moduleCode = tmpl && typeof tmpl === "object" ? tmpl.code : tmpl;
          // A module is not required to style anything: one that only declares
          // `suggestions:` or `suggestions_code:` has no `code` key at all, and
          // the previous shape passed the whole module OBJECT down to
          // evalStyles, which reads it as a string and threw
          // "s.includes is not a function" on every render of every card
          // listing it. Anything that is not a non-empty string contributes
          // nothing, which is also the right answer for a code that is empty.
          if (typeof moduleCode !== "string" || moduleCode === "") { stylesParts.push("{}"); continue; }
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

    const assembledStyles = stylesParts.join("\n").trim();
    const finalStylesToInject = context.config?.card_type === 'pop-up'
      ? confineCssToPopupChrome(assembledStyles)
      : assembledStyles;
    
    let stylesHaveChanged = true;

    if (isDirectStyleElement) {
      if (finalStylesToInject === styleElementToInjectInto.textContent) {
        stylesHaveChanged = false;
      }
    } else {
      if (finalStylesToInject === context.lastEvaluatedStyles) {
        stylesHaveChanged = false;
      } else {
        // A module refresh clears lastEvaluatedStyles to force this
        // re-evaluation, but the produced CSS is usually IDENTICAL:
        // re-setting textContent with the same string still invalidates
        // the whole subtree's styles (full recalc, filter re-raster — a
        // visible background/poster blink on mobile). Check the live DOM
        // before writing.
        if (finalStylesToInject === styleElementToInjectInto.textContent) {
          stylesHaveChanged = false;
        }
        context.lastEvaluatedStyles = finalStylesToInject;
      }
    }

    if (stylesHaveChanged) {
      styleElementToInjectInto.textContent = finalStylesToInject;
      // The sub-buttons were drawn before these styles, which may scope the
      // accent they paint.
      refreshSurfaceTones(context);
    }

    // Keyed on the marker the hide itself set, not on initialLoad: that flag
    // lives on the context while the hide target follows the element passed in,
    // so a pass on the card takes the flag down and a pop-up pass still in
    // flight would skip its own un-hide, leaving the container hidden for good.
    if (loadHideTarget?.dataset?.bubbleStyleHideMode) {
      if (!_holdForPendingTemplates(context, loadHideTarget, isDirectStyleElement, loadHideMode)) {
        _revealLoadHideTarget(context, loadHideTarget, isDirectStyleElement);
      }
    }
  } catch (error) {
    console.error("Error applying styles:", error);
    if (context.initialLoad && targetElementForDisplayLogic?.style) {
        targetElementForDisplayLogic.style.display = "";
    }
  }
}

// A card whose styles wait on the server would paint unstyled for a round
// trip, then jump. Its first reveal waits a little longer, with the box kept so
// the layout around it does not move, and never past a short cap: a template
// that never answers must not hide a card for good. A pop-up shell is left out,
// its open sequence measures the geometry it keeps still, and so is an editor
// preview, rebuilt on every keystroke.
const templateHoldMs = 500;
function _holdForPendingTemplates(context, target, isDirectStyleElement, loadHideMode) {
  if (!context._stylesPending || isDirectStyleElement || loadHideMode === 'visibility'
    || context._templateHoldExpired || context.inEditorPreview) {
    return false;
  }
  if (target.dataset.bubbleStyleHideMode === 'display') {
    target.style.display = '';
    target.style.visibility = 'hidden';
    target.dataset.bubbleStyleHideMode = 'visibility';
  }
  if (!context._templateHoldTimer) {
    context._templateHoldTimer = setTimeout(() => {
      context._templateHoldTimer = null;
      context._templateHoldExpired = true;
      if (target.dataset?.bubbleStyleHideMode) {
        _revealLoadHideTarget(context, target, isDirectStyleElement);
      }
    }, templateHoldMs);
  }
  return true;
}

function _revealLoadHideTarget(context, target, isDirectStyleElement) {
  if (context._templateHoldTimer) {
    clearTimeout(context._templateHoldTimer);
    context._templateHoldTimer = null;
  }
  if (target.dataset.bubbleStyleHideMode === 'visibility') {
    target.style.visibility = '';
  } else {
    target.style.display = '';
  }
  delete target.dataset.bubbleStyleHideMode;
  if (!isDirectStyleElement) {
    context.initialLoad = false;
    context.cardLoaded = true;
  }
}

export function evalStyles(context, styles = "", sourceInfo = { type: 'unknown' }, cachedSubButtonStates = null, cachedState = null) {
  if (!styles) return "";

  // If this card is in editor mode and its template was previously marked as temporarily failed
  if (context.editor && context.templateEvaluationBlocked) {
    return ""; // Prevents re-evaluation and flickering
  }

  // A calendar, a separator and a sub-buttons card are built without the base
  // elements, so a global module writing into .bubble-state reached here with
  // nothing to mark and threw its whole module's styles away on those cards.
  for (const type of _detectedTemplateTypes(styles)) {
    const target = context.elements?.[type];
    if (target && !target.templateDetected) {
      target.templateDetected = true;
      // What the template writes there goes through the scrolling pipeline from
      // now on, so it scrolls like the card's own text when the card asks for it.
      interceptTemplateWrites(context, target);
      // A line the card had nothing to show in is hidden. The template is
      // about to write into it, so it comes on screen now rather than on the
      // next render.
      if (type === 'state' && target.classList) {
        target.classList.remove('hidden');
        target.classList.add('display-state');
      }
    }
  }

  // A template that interpolates nothing was resolved once, for every card at
  // once: serve it before the fingerprint below is even built. The first call
  // still goes the long way, because the template literal processes escape
  // sequences (\n, \\, → in CSS content) and the source string is therefore
  // not the output.
  const _isStatic = _isStaticTemplate(styles);
  if (_isStatic) {
    const _staticCached = _staticResultCache.get(styles);
    if (_staticCached !== undefined) return _staticCached;
  }

  // The Home Assistant templates of the block, read before the memo below so
  // the store knows this card still holds them, whether or not it executes.
  const _split = _styleSegments(styles);
  const _jinja = _split ? _resolveStyleSegments(context, _split) : null;

  // Input-fingerprint memoization: skip executing the compiled template entirely
  // when the inputs that templates can depend on are unchanged.
  // In Home Assistant the whole `hass` object is replaced on any state change, so an
  // identical `hass` reference guarantees every entity state is identical. Combined
  // with the resolved `state` and sub-button states, this uniquely determines the
  // template output, allowing us to return the previously cleaned result directly.
  // Side-effecting templates are excluded: their imperative work must run every cycle.
  const _cachedState = cachedState ?? getState(context);
  const _cachedSubButtonStates = cachedSubButtonStates ?? getSubButtonsStates(context);
  const _subButtonKey = Array.isArray(_cachedSubButtonStates)
    ? _cachedSubButtonStates.join("\u0001")
    : "";
  if (!context._localStyleCache) {
    context._localStyleCache = new Map();
  }
  const _canMemoizeExecution = !_hasSideEffects(styles);
  const _fpCached = context._localStyleCache.get(styles);
  if (_canMemoizeExecution
    && _fpCached
    && _fpCached.hass === context._hass
    && _fpCached.stateKey === _cachedState
    && _fpCached.subKey === _subButtonKey
    && _fpCached.templateVersion === (context._templateResultVersion || 0)) {
    if (_fpCached.templateCalls) _retainTemplateCalls(context, _fpCached.templateCalls);
    return _fpCached.cleaned;
  }

  try {
    const compiledFunction = _memoByTemplate(compiledTemplateCache, styles, (s) =>
      Function(
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
        "onTeardown",
        "hasChanged",
        "__jinja",
        "renderTemplate",
        `return \`${_split ? _split.source : s}\`;`
      )
    );

    // Nothing to interpolate: the arguments are never read, so none of them are
    // built, and the result is kept for every other card using this template.
    if (_isStatic) {
      return _rememberByTemplate(_staticResultCache, styles, cleanCSS(compiledFunction()));
    }

    const card = _safeRef(context.config.card_type === 'pop-up' ? context.popUp : context.card);

    // Renders a Home Assistant template from inside a style template, the way
    // a text field would, for the text a template writes into the card. What
    // it rendered is kept so a memo hit can read the templates again.
    context._templateCalls = null;
    const renderTemplate = (template, entity = context.config?.entity) => {
      if (!isTemplate(template)) return template ?? '';
      const result = getTemplateResult(context._hass, template, entity, context, TEMPLATE_STYLE);
      (context._templateCalls || (context._templateCalls = [])).push([template, entity]);
      if (result === undefined) {
        context._stylesPending = true;
        return '';
      }
      return templateResultToText(result);
    };

    // Execute the compiled function to get the raw string result
    const rawResult = compiledFunction.apply(context, [
      // Handed a proxy rather than hass itself: reading an entity through it is
      // what tells the render gate that this card depends on that entity.
      trackedHass(context),
      context.config.entity,
      _cachedState,
      _safeRef(context.elements?.icon),
      _cachedSubButtonStates,
      _safeArray(context.subButtonIcon),
      getWeatherIcon,
      card,
      card.name,
      // Bound to the card, so a template condition it evaluates renders the
      // card again when the server answers.
      context._checkConditionsMet || (context._checkConditionsMet = (conditions, hass) => checkConditionsMet(conditions, hass, context)),
      // Keyed by the source being evaluated, so a module that registers on each
      // of its passes replaces its own entry rather than stacking one per pass.
      (fn) => registerModuleTeardown(context, teardownKey(sourceInfo), fn),
      // Same keying as the teardown: per module and per card, plus the module's
      // own label, so one module can gate several independent pieces of work.
      (label, ...values) => hasChanged(context, `${teardownKey(sourceInfo)}::${label}`, values),
      _jinja,
      renderTemplate,
    ]);

    // Optimization: Local cache to avoid re-cleaning CSS if the raw output hasn't changed.
    // This significantly reduces CPU usage on dashboards with many cards/modules.
    if (!context._localStyleCache) {
      context._localStyleCache = new Map();
    }

    const cachedStyle = context._localStyleCache.get(styles);
    let cleanedResult;
    if (cachedStyle && cachedStyle.raw === rawResult) {
      cleanedResult = cachedStyle.cleaned;
    } else {
      cleanedResult = cleanCSS(rawResult);
    }

    // Store the new result in the local cache, including the input fingerprint so
    // a subsequent unchanged cycle can skip template execution entirely.
    context._localStyleCache.set(styles, {
      raw: rawResult,
      cleaned: cleanedResult,
      hass: context._hass,
      stateKey: _cachedState,
      subKey: _subButtonKey,
      templateVersion: context._templateResultVersion || 0,
      templateCalls: context._templateCalls,
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
        entityId: context.config?.entity,
        hash: context.config?.hash,
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

// A template result that only concerns styles refreshes them without a render.
setStyleRefresher((context) => handleCustomStyles(context, context.card));
