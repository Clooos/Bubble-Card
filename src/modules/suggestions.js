import { yamlKeysMap } from './registry.js';
import { getCachedAggregatedModules } from './bct-provider.js';
import { getEntitySuggestion as getNativeEntitySuggestion } from '../tools/entity-suggestion.js';

// Modules can offer their own entries in the Home Assistant entity card
// picker by declaring a `suggestions:` list in their YAML:
//
//   suggestions:
//     - extends: native            # twin every native tile suggestion
//       domains: [light, switch]   # optional domain whitelist
//       condition: "attributes.brightness !== undefined"   # optional JS expression
//       config:                    # optional patch merged over each twin
//         weather_forecast:
//           card_layout: background_only
//     - extends: base              # twin only the first native tile
//       label: Square card         # shown after the module name in the picker
//     - label: My variant          # standalone suggestion (no extends)
//       domains: [weather]
//       config:
//         card_type: button
//         entity: ${entity}        # replaced by the picked entity id
//
// `getEntitySuggestion` must answer synchronously, so modules are read from
// the live registry map when it is populated, from the Bubble Card Tools
// localStorage cache otherwise. On a cold cache only native suggestions are
// returned, which resolves itself as soon as a dashboard rendered once.

const MAX_SUGGESTIONS = 20;

const compiledConditions = new Map();
const warnedModules = new Set();

function warnOnce(moduleId, error) {
  if (warnedModules.has(moduleId)) return;
  warnedModules.add(moduleId);
  console.warn(`Bubble Card - Ignoring the entity suggestions of the module "${moduleId}":`, error);
}

function readModulesSync() {
  if (yamlKeysMap.size > 0) return yamlKeysMap.entries();
  const aggregated = getCachedAggregatedModules();
  return aggregated ? Object.entries(aggregated) : [];
}

function conditionAllows(expression, hass, entityId, stateObj) {
  if (!expression || typeof expression !== 'string') return true;
  let compiled = compiledConditions.get(expression);
  if (!compiled) {
    // Same sandbox contract as the JS templates of the styles: plain
    // Function scope, no access to the card context.
    compiled = Function(
      'hass',
      'entity',
      'state',
      'attributes',
      'stateObj',
      'domain',
      `return !!(${expression});`,
    );
    compiledConditions.set(expression, compiled);
  }
  return compiled(hass, entityId, stateObj.state, stateObj.attributes, stateObj, entityId.split('.')[0]);
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

// Replaces the ${entity} placeholder anywhere in a standalone config.
function substituteEntity(value, entityId) {
  if (typeof value === 'string') {
    return value.includes('${entity}') ? value.replaceAll('${entity}', entityId) : value;
  }
  if (Array.isArray(value)) return value.map((item) => substituteEntity(item, entityId));
  if (value && typeof value === 'object') {
    const out = {};
    for (const [key, item] of Object.entries(value)) out[key] = substituteEntity(item, entityId);
    return out;
  }
  return value;
}

function ensureModuleListed(modules, moduleId) {
  const list = Array.isArray(modules) ? [...modules] : [];
  if (!list.includes(moduleId)) list.push(moduleId);
  return list;
}

function supportsCardType(module, cardType) {
  if (Array.isArray(module.supported) && module.supported.length > 0) {
    return module.supported.includes(cardType);
  }
  if (Array.isArray(module.unsupported) && module.unsupported.length > 0) {
    return !module.unsupported.includes(cardType);
  }
  return true;
}

// The module name always leads, so every entry of a module reads as one
// family in the picker, whatever the rule adds after it.
function composeLabel(...parts) {
  return parts.filter(Boolean).join(' · ');
}

function buildRuleSuggestions(moduleId, module, rule, hass, entityId, stateObj, nativeSuggestions) {
  if (!rule || typeof rule !== 'object') return [];

  const domain = entityId.split('.')[0];
  if (Array.isArray(rule.domains) && !rule.domains.includes(domain)) return [];
  if (!conditionAllows(rule.condition, hass, entityId, stateObj)) return [];

  const moduleName = typeof module.name === 'string' && module.name ? module.name : moduleId;
  const ruleLabel = typeof rule.label === 'string' && rule.label ? rule.label : undefined;

  if (rule.extends === 'native' || rule.extends === 'base') {
    // The classic suggestions (dedicated card, plain Button and Slider) are
    // legacy shortcuts: only the tile recipes are worth twinning. `base`
    // narrows further to the first tile, for rules offered as a collection
    // (one entry per layout of the module).
    let sources = nativeSuggestions.filter(
      (native) => !native.classic && supportsCardType(module, native.config?.card_type),
    );
    if (rule.extends === 'base') sources = sources.slice(0, 1);
    return sources.map((native) => {
      const patch = rule.config && typeof rule.config === 'object' ? deepClone(rule.config) : {};
      const config = { ...deepClone(native.config), ...patch };
      config.modules = ensureModuleListed(patch.modules ?? config.modules, moduleId);
      return { label: composeLabel(moduleName, ruleLabel, native.label), config };
    });
  }

  if (!rule.config || typeof rule.config !== 'object' || !rule.config.card_type) return [];
  const config = substituteEntity(deepClone(rule.config), entityId);
  config.type = 'custom:bubble-card';
  if (config.entity === undefined && config.card_type !== 'calendar') config.entity = entityId;
  config.modules = ensureModuleListed(config.modules, moduleId);
  if (!supportsCardType(module, config.card_type)) return [];
  return [{ label: composeLabel(moduleName, ruleLabel), config }];
}

function getModuleEntitySuggestions(hass, entityId, stateObj, nativeSuggestions) {
  const suggestions = [];
  for (const [moduleId, module] of readModulesSync()) {
    if (!module || typeof module !== 'object') continue;
    const rules = Array.isArray(module.suggestions)
      ? module.suggestions
      : module.suggestions
        ? [module.suggestions]
        : [];
    for (const rule of rules) {
      try {
        suggestions.push(
          ...buildRuleSuggestions(moduleId, module, rule, hass, entityId, stateObj, nativeSuggestions),
        );
      } catch (error) {
        // A module must never take the picker down with it.
        warnOnce(moduleId, error);
      }
    }
  }
  return suggestions;
}

export function getEntitySuggestion(hass, entityId) {
  const stateObj = hass?.states?.[entityId];
  if (!stateObj) return null;

  const native = getNativeEntitySuggestion(hass, entityId) || [];
  const combined = [...native, ...getModuleEntitySuggestions(hass, entityId, stateObj, native)];

  const seen = new Set();
  const unique = combined.filter((suggestion) => {
    const key = JSON.stringify(suggestion.config);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  if (!unique.length) return null;
  // `classic` is an internal marker (see entity-suggestion.js), Home
  // Assistant only knows about label and config.
  return unique.slice(0, MAX_SUGGESTIONS).map(({ label, config }) =>
    label === undefined ? { config } : { label, config },
  );
}
