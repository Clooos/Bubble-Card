import { ensureBCTProviderAvailable, readAllModules as bctReadAllModules, getCachedAggregatedModules } from './bct-provider.js';
import { migrateIfNeeded } from './bct-migration.js';
import { parseYamlWithIncludes } from './yaml-schema.js';

// In-memory state for modules loaded from files and legacy sources
let allModules = null;
let modulesInitialized = false;
let initPromise = null;

// Public maps used across the app
export let moduleSourceMap = new Map(); // Tracks source: 'file' | 'yaml' | 'entity' | 'editor'
export let yamlKeysMap = new Map();     // Module id -> module object

// Local caches
let yamlCache = new Map();

// Invalidate and broadcast when YAML-backed modules change
document.addEventListener('yaml-modules-updated', () => {
  modulesInitialized = false;
  allModules = null;
  initPromise = null;
  try { window.dispatchEvent(new CustomEvent('bubble-card-modules-changed')); } catch (_) {}
});

// Update a single module from editor and notify listeners
window.addEventListener('bubble-card-module-updated', (event) => {
  if (event?.detail?.moduleId && event?.detail?.moduleData) {
    yamlKeysMap.set(event.detail.moduleId, event.detail.moduleData);
    if (!moduleSourceMap.has(event.detail.moduleId)) {
      moduleSourceMap.set(event.detail.moduleId, 'editor');
    }
    try { window.dispatchEvent(new CustomEvent('bubble-card-modules-changed')); } catch (_) {}
  }
});

export const parseYAML = (yamlString) => parseYamlWithIncludes(yamlString);

export const loadYAML = async (urls) => {
  for (const url of urls) {
    const fullUrl = `${url}?v=${Date.now()}`;
    try {
      const response = await fetch(fullUrl, { cache: 'no-store' });
      if (!response.ok) {
        try { window.bubbleYamlWarning = true; } catch (_) {}
        continue;
      }
      const yamlText = await response.text();
      const parsedYAML = parseYAML(yamlText);
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
      try { window.bubbleYamlWarning = true; } catch (_) {}
    }
  }
  return null;
};

export function preloadYAMLStyles(context) {
  if (context.config?.card_type && !context.stylesYAML) {
    if (modulesInitialized && allModules) {
      context.stylesYAML = Promise.resolve(allModules);
    } else {
      context.stylesYAML = initializeModules(context);
    }
  }
}

export async function initializeModules(context) {
  if (modulesInitialized && allModules) return allModules;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    // Fast path: serve aggregated cache and refresh in background
    try {
      const cachedAggregated = getCachedAggregatedModules();
      if (cachedAggregated && Object.keys(cachedAggregated).length > 0) {
        moduleSourceMap.clear();
        yamlKeysMap.clear();
        allModules = {};
        Object.keys(cachedAggregated).forEach((id) => {
          if (id !== 'modules' && id !== 'friendly_name' && id !== 'last_updated') {
            allModules[id] = cachedAggregated[id];
            yamlKeysMap.set(id, cachedAggregated[id]);
            moduleSourceMap.set(id, 'file');
          }
        });
        modulesInitialized = true;

        // Background refresh
        (async () => {
          try {
            const available = await ensureBCTProviderAvailable(context?._hass);
            if (!available) return;
            try { await migrateIfNeeded(context?._hass); } catch (_) {}
            const freshMap = await bctReadAllModules(context?._hass);
            const fresh = {};
            freshMap.forEach((value, key) => {
              if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
                fresh[key] = value;
              }
            });
            const changed = JSON.stringify(fresh) !== JSON.stringify(allModules);
            if (changed) {
              moduleSourceMap.clear();
              yamlKeysMap.clear();
              allModules = {};
              Object.keys(fresh).forEach((id) => {
                allModules[id] = fresh[id];
                yamlKeysMap.set(id, fresh[id]);
                moduleSourceMap.set(id, 'file');
              });
              try { document.dispatchEvent(new CustomEvent('yaml-modules-updated')); } catch (_) {}
            }
          } catch (_) {}
        })();

        return allModules;
      }
    } catch (_) {}

    // Try provider directly
    const bctAvailable = await ensureBCTProviderAvailable(context?._hass);
    if (bctAvailable) {
      try { await migrateIfNeeded(context?._hass); } catch (e) { console.warn('Bubble Card - Migration check failed:', e); }

      // Stale-while-revalidate using aggregated cache
      const cachedAggregated = getCachedAggregatedModules();
      if (cachedAggregated && Object.keys(cachedAggregated).length > 0) {
        moduleSourceMap.clear();
        yamlKeysMap.clear();
        allModules = {};
        Object.keys(cachedAggregated).forEach((id) => {
          if (id !== 'modules' && id !== 'friendly_name' && id !== 'last_updated') {
            allModules[id] = cachedAggregated[id];
            yamlKeysMap.set(id, cachedAggregated[id]);
            moduleSourceMap.set(id, 'file');
          }
        });
        modulesInitialized = true;

        (async () => {
          try {
            const freshMap = await bctReadAllModules(context?._hass);
            const fresh = {};
            freshMap.forEach((value, key) => {
              if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
                fresh[key] = value;
              }
            });
            const changed = JSON.stringify(fresh) !== JSON.stringify(allModules);
            if (changed) {
              moduleSourceMap.clear();
              yamlKeysMap.clear();
              allModules = {};
              Object.keys(fresh).forEach((id) => {
                allModules[id] = fresh[id];
                yamlKeysMap.set(id, fresh[id]);
                moduleSourceMap.set(id, 'file');
              });
              try { document.dispatchEvent(new CustomEvent('yaml-modules-updated')); } catch (_) {}
            }
          } catch (_) {}
        })();

        return allModules;
      }

      // No cache → read now
      const filesMap = await bctReadAllModules(context?._hass);
      moduleSourceMap.clear();
      yamlKeysMap.clear();
      allModules = {};
      filesMap.forEach((value, key) => {
        if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
          allModules[key] = value;
          yamlKeysMap.set(key, value);
          moduleSourceMap.set(key, 'file');
        }
      });
      modulesInitialized = true;
      return allModules;
    }

    // Legacy fallback: YAML file + entity
    const yamlModules = await loadYAML([
      '/local/bubble/bubble-modules.yaml'
    ]);

    const entityModules = context?._hass ? await loadModulesFromEntity(context._hass) : {};

    moduleSourceMap.clear();
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

    allModules = { ...(yamlModules || {}), ...(entityModules || {}) };

    yamlKeysMap.clear();
    Object.entries(allModules).forEach(([key, value]) => {
      if (key !== 'modules' && key !== 'friendly_name' && key !== 'last_updated') {
        yamlKeysMap.set(key, value);
      }
    });

    modulesInitialized = true;
    return allModules;
  })();

  return initPromise;
}

// Legacy loader for text entity modules
async function loadModulesFromEntity(hass) {
  const entityId = 'sensor.bubble_card_modules';
  const entity = hass?.states?.[entityId];
  if (!entity) return {};
  if (!entity.attributes?.modules) return {};

  const modules = {};
  try {
    Object.values(entity.attributes.modules).forEach(module => {
      try {
        if (!module.yaml && (module.code || module.description)) {
          modules[module.id] = module;
          return;
        }
        if (!module.yaml) return;
      } catch (e) {
        console.error(`❌ YAML parsing error for module ${module.id}:`, e);
        if (typeof module.yaml === 'string') {
          console.error('Problematic YAML content:', module.yaml.substring(0, 100) + '...');
        } else {
          console.error('Problematic YAML content type:', typeof module.yaml);
        }
      }
    });
  } catch (error) {
    console.error('Error while processing modules from text entity:', error);
  }
  return modules;
}


