import { yamlKeysMap } from './registry.js';
import { getCachedAggregatedModules } from './bct-provider.js';
import { getEntitySuggestion as getNativeEntitySuggestion } from '../tools/entity-suggestion.js';
import setupTranslation, { ensureEditorTranslations } from '../tools/localize.js';

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
// Whatever a rule can express is declarative, so anything COMPUTED (a room
// pop-up built from every entity of the area the picked entity belongs to,
// for instance) goes through the `suggestions_code:` hook instead: a function
// body compiled once, called with (hass, entity, stateObj, helpers, module)
// and returning entries the module authored entirely. Both keys may coexist,
// declarative rules first. See editor-schema-docs.md for the public contract.
//
// `getEntitySuggestion` must answer synchronously, so modules are read from
// the live registry map when it is populated, from the Bubble Card Tools
// localStorage cache otherwise. On a cold cache only native suggestions are
// returned, which resolves itself as soon as a dashboard rendered once.

// Home Assistant caps nothing: generateCardSuggestions concatenates every
// provider's answer as is. The global cap we used to apply was ours, and its
// real defect was starvation — it truncated the tail, so whichever modules
// the registry happened to iterate last were silently dropped. The budget is
// per module instead: no single module can drown the Community section, and
// every installed module stays represented however long the total list gets.
// Native suggestions are bounded by construction and never counted against it.
const MAX_SUGGESTIONS_PER_MODULE = 24;

// A backstop, not a product rule, and the reason it still exists: the picker
// renders every suggestion it is given as a LIVE card, all at once, with no
// virtualization, and then hands each of them a fresh hass on every state
// change in the installation. Ten modules offering their full quota would build
// well over two hundred live cards the moment a user picks an entity. This
// number is far above any real installation and only bounds the pathological
// case. Unlike the old cap it applies to the module entries alone, after the
// per-module budget, so it can never starve a module of its first entries.
const MAX_MODULE_SUGGESTIONS = 60;

const compiledConditions = new Map();
const compiledCodeHooks = new Map();
const warnedModules = new Set();
const warnedQuotas = new Set();

function warnOnce(moduleId, error) {
  if (warnedModules.has(moduleId)) return;
  warnedModules.add(moduleId);
  console.warn(`Bubble Card - Ignoring the entity suggestions of the module "${moduleId}":`, error);
}

// Separate budget from warnOnce: a module that hits the quota is not broken,
// and one warning must never swallow the other.
function warnQuotaOnce(moduleId, count) {
  if (warnedQuotas.has(moduleId)) return;
  warnedQuotas.add(moduleId);
  console.warn(
    `Bubble Card - The module "${moduleId}" offered ${count} entity suggestions, only the first ${MAX_SUGGESTIONS_PER_MODULE} are kept.`,
  );
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

function moduleNameOf(moduleId, module) {
  return typeof module.name === 'string' && module.name ? module.name : moduleId;
}

// Public API of the `suggestions_code:` hook. Everything is synchronous
// because the picker asks synchronously, and every helper answers with an
// empty result rather than throwing: hass.entities, hass.devices and
// hass.areas are all missing for a moment after a hard reload.
function createHelpers(hass) {
  const language = hass?.locale?.language;
  const compare = (a, b) => a.localeCompare(b, language);

  let translate;
  const t = (key, params) => {
    if (typeof key !== 'string') return '';
    if (!translate) {
      // Same warm-up as the native recipes: O(1) once the dictionary is in.
      ensureEditorTranslations(hass);
      translate = setupTranslation(hass);
    }
    let text = translate(key);
    if (params && typeof params === 'object') {
      for (const [name, value] of Object.entries(params)) text = text.replaceAll(`{${name}}`, value);
    }
    return text;
  };

  const domainOf = (entityId) => {
    if (typeof entityId !== 'string') return '';
    const dot = entityId.indexOf('.');
    return dot === -1 ? '' : entityId.slice(0, dot);
  };

  const friendlyName = (entityId) => {
    const name = hass?.states?.[entityId]?.attributes?.friendly_name;
    if (name !== undefined && name !== null && name !== '') return String(name);
    if (typeof entityId !== 'string') return '';
    // Same fallback as Home Assistant's computeStateName.
    const dot = entityId.indexOf('.');
    return (dot === -1 ? entityId : entityId.slice(dot + 1)).replaceAll('_', ' ');
  };

  // Entity registry entry first, then its device's area. Only a VALID area id
  // is returned: an id pointing to a deleted area is treated as "no area"
  // instead of leaking a raw or stale id into a generated title.
  const areaOf = (entityId) => {
    const entry = hass?.entities?.[entityId];
    if (!entry) return null;
    const areaId =
      entry.area_id || (entry.device_id ? hass?.devices?.[entry.device_id]?.area_id : null) || null;
    return areaId && hass?.areas?.[areaId] ? areaId : null;
  };

  const areaName = (areaId) => hass?.areas?.[areaId]?.name || areaId || '';

  const areas = () => {
    const registry = hass?.areas;
    if (!registry || typeof registry !== 'object') return [];
    return Object.values(registry)
      .filter((area) => area && area.area_id)
      .map((area) => ({
        area_id: area.area_id,
        name: area.name || area.area_id,
        icon: area.icon || null,
      }))
      .sort((a, b) => compare(a.name, b.name));
  };

  const areaEntities = (areaId, options = {}) => {
    const registry = hass?.entities;
    if (!areaId || !registry || typeof registry !== 'object') return [];
    const domains =
      Array.isArray(options.domains) && options.domains.length ? new Set(options.domains) : null;
    const includeHidden = options.includeHidden === true;
    const includeDiagnostic = options.includeDiagnostic === true;

    const ids = [];
    for (const [entityId, entry] of Object.entries(registry)) {
      if (!entry || areaOf(entityId) !== areaId) continue;
      // Disabled entities never reach hass.states, and a config that points
      // at a missing entity renders as an error tile.
      if (!hass?.states?.[entityId]) continue;
      if (!includeHidden && entry.hidden === true) continue;
      const category = entry.entity_category;
      if (!includeDiagnostic && (category === 'diagnostic' || category === 'config')) continue;
      if (domains && !domains.has(domainOf(entityId))) continue;
      ids.push(entityId);
    }
    return ids.sort((a, b) => compare(friendlyName(a), friendlyName(b)));
  };

  // A copy every time: the native recipes are shared, a module mutating them
  // would corrupt the picker for everybody else.
  const nativeSuggestions = (entityId) => deepClone(getNativeEntitySuggestion(hass, entityId) || []);

  return { t, domainOf, friendlyName, areaOf, areaName, areas, areaEntities, nativeSuggestions };
}

function compileCodeHook(source) {
  let compiled = compiledCodeHooks.get(source);
  if (!compiled) {
    try {
      // Same sandbox contract as the conditions above: plain Function scope,
      // no access to the card context.
      compiled = { fn: Function('hass', 'entity', 'stateObj', 'helpers', 'module', source) };
    } catch (error) {
      // Cached too, so a body that cannot even be parsed is compiled once.
      compiled = { error };
    }
    compiledCodeHooks.set(source, compiled);
  }
  return compiled;
}

function buildCodeSuggestions(moduleId, module, hass, entityId, stateObj, helpers) {
  const source = module.suggestions_code;
  if (typeof source !== 'string' || !source.trim()) return [];

  const compiled = compileCodeHook(source);
  if (compiled.error) throw compiled.error;

  // `id` is the module's only handle on its own identity, and only one of the
  // registry paths carries one: normalizeModuleFromParsed adds it for modules
  // read from files, yamlKeysMap and the aggregated BCT cache store the raw
  // parsed YAML with the id living outside the value. Filled in here rather
  // than copied so the two paths agree and the object a hook sees is the one
  // the registry holds. Without it a hook writing the documented
  // `modules: [module.id]` emits `[undefined]`, silently, on a normal install.
  if (module.id !== moduleId) module.id = moduleId;
  const returned = compiled.fn(hass, entityId, stateObj, helpers, module);
  const entries = Array.isArray(returned) ? returned : returned ? [returned] : [];
  const moduleName = moduleNameOf(moduleId, module);

  const suggestions = [];
  for (const entry of entries) {
    if (!entry || typeof entry !== 'object') continue;
    const authored = entry.config;
    if (!authored || typeof authored !== 'object' || Array.isArray(authored)) continue;
    if (!authored.card_type || !supportsCardType(module, authored.card_type)) continue;
    // Deliberately unlike a declarative rule: no `entity`, no `${entity}`
    // substitution and above all no `modules` injection. A generated card is
    // standalone and must keep working once the generating module is gone;
    // a module that wants itself applied returns its own `modules:` list.
    // Only this top level is normalized, nested `cards:` stay as authored.
    const label = typeof entry.label === 'string' && entry.label ? entry.label : undefined;
    suggestions.push({
      label: composeLabel(moduleName, label),
      config: { ...authored, type: 'custom:bubble-card' },
    });
  }
  return suggestions;
}

function buildRuleSuggestions(moduleId, module, rule, hass, entityId, stateObj, nativeSuggestions) {
  if (!rule || typeof rule !== 'object') return [];

  const domain = entityId.split('.')[0];
  if (Array.isArray(rule.domains) && !rule.domains.includes(domain)) return [];
  if (!conditionAllows(rule.condition, hass, entityId, stateObj)) return [];

  const moduleName = moduleNameOf(moduleId, module);
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
      // Substituted like a standalone config: a patch that configures a module
      // per entity (a badge condition watching the picked entity, for
      // instance) has no other way to name it.
      const patch = rule.config && typeof rule.config === 'object'
        ? substituteEntity(deepClone(rule.config), entityId)
        : {};
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

function getModuleEntitySuggestions(hass, entityId, stateObj, nativeSuggestions, helpers) {
  const suggestions = [];
  for (const [moduleId, module] of readModulesSync()) {
    if (!module || typeof module !== 'object') continue;
    const rules = Array.isArray(module.suggestions)
      ? module.suggestions
      : module.suggestions
        ? [module.suggestions]
        : [];
    const own = [];
    for (const rule of rules) {
      try {
        own.push(
          ...buildRuleSuggestions(moduleId, module, rule, hass, entityId, stateObj, nativeSuggestions),
        );
      } catch (error) {
        // A module must never take the picker down with it.
        warnOnce(moduleId, error);
      }
    }
    try {
      own.push(...buildCodeSuggestions(moduleId, module, hass, entityId, stateObj, helpers));
    } catch (error) {
      warnOnce(moduleId, error);
    }
    if (own.length > MAX_SUGGESTIONS_PER_MODULE) {
      warnQuotaOnce(moduleId, own.length);
      own.length = MAX_SUGGESTIONS_PER_MODULE;
    }
    suggestions.push(...own);
    if (suggestions.length >= MAX_MODULE_SUGGESTIONS) {
      suggestions.length = MAX_MODULE_SUGGESTIONS;
      break;
    }
  }
  return suggestions;
}

export function getEntitySuggestion(hass, entityId) {
  const stateObj = hass?.states?.[entityId];
  if (!stateObj) return null;

  const native = getNativeEntitySuggestion(hass, entityId) || [];
  const combined = [
    ...native,
    ...getModuleEntitySuggestions(hass, entityId, stateObj, native, createHelpers(hass)),
  ];

  // A code hook returns its config as authored, so this is the one place a
  // module's own object graph is walked outside its try/catch. A circular
  // reference or a BigInt in there would throw out of getEntitySuggestion, and
  // Home Assistant answers that by dropping the whole Community section: every
  // native recipe and every other module would disappear because of one. An
  // unserializable config simply skips deduplication instead.
  const seen = new Set();
  const unique = combined.filter((suggestion) => {
    let key;
    try {
      key = JSON.stringify(suggestion.config);
    } catch (_) {
      return true;
    }
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  if (!unique.length) return null;
  // `classic` is an internal marker (see entity-suggestion.js), Home
  // Assistant only knows about label and config.
  return unique.map(({ label, config }) => (label === undefined ? { config } : { label, config }));
}
