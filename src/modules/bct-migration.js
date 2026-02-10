// Automatic migration from legacy sources (entity + single YAML) to Bubble Card Tools files

import { 
  ensureBCTProviderAvailable,
  isMigrationDone,
  setMigrationDone,
  listFiles,
  getModuleFileName,
  writeModuleYaml,
  readFile as bctReadFile,
} from './bct-provider.js';
import { parseYamlWithIncludes } from './yaml-schema.js';

const RESERVED_YAML_KEYS = ['modules', 'friendly_name', 'last_updated'];
const MODULE_FIELD_HINTS = ['name', 'code', 'description', 'editor', 'version', 'creator', 'link', 'supported', 'unsupported', 'is_global'];

async function readLegacyEntityModules(hass) {
  try {
    const entityId = 'sensor.bubble_card_modules';
    const entity = hass?.states?.[entityId];
    if (!entity) return new Map();
    const attrModules = entity.attributes?.modules;
    if (!attrModules || typeof attrModules !== 'object') return new Map();

    const out = new Map();
    Object.values(attrModules).forEach((entry) => {
      if (!entry) return;
      const id = entry.id || null;
      let parsed = null;
      try {
        if (typeof entry.yaml === 'string' && entry.yaml.trim()) {
          const obj = parseYamlWithIncludes(entry.yaml);
          if (obj && typeof obj === 'object') {
            const keys = Object.keys(obj);
            if (keys.length === 1) {
              const k = keys[0];
              parsed = { id: k, ...(obj[k] || {}) };
            } else if (id && obj[id] && typeof obj[id] === 'object') {
              // Multi-root, try best-effort using provided id
              parsed = { id, ...obj[id] };
            }
          }
        }
      } catch (e) {
        // noop
      }

      if (!parsed) {
        // Build from direct fields
        const minimal = {};
        ['name','version','creator','description','supported','unsupported','code','editor','link','is_global'].forEach((k) => {
          if (k in entry) minimal[k] = entry[k];
        });
        if (id) minimal.id = id;
        if (Object.keys(minimal).length > 0) parsed = minimal;
      }

      if (parsed && (parsed.id || id)) {
        const finalId = parsed.id || id;
        out.set(finalId, { ...parsed, id: finalId });
      }
    });
    return out;
  } catch (e) {
    return new Map();
  }
}

function hasModuleShape(obj) {
  if (!obj || typeof obj !== 'object') return false;
  return MODULE_FIELD_HINTS.some((field) => field in obj);
}

function registerModule(target, moduleId, moduleData) {
  if (!moduleId || typeof moduleId !== 'string') return;
  if (!moduleData || typeof moduleData !== 'object') return;
  if (!hasModuleShape(moduleData)) return;
  target.set(moduleId, { id: moduleId, ...moduleData });
}

function extractModulesFromYamlRoot(data) {
  const modules = new Map();
  if (!data || typeof data !== 'object') return modules;

  Object.keys(data).forEach((key) => {
    if (RESERVED_YAML_KEYS.includes(key)) return;
    registerModule(modules, key, data[key]);
  });

  if (data.modules && typeof data.modules === 'object') {
    Object.keys(data.modules).forEach((key) => {
      registerModule(modules, key, data.modules[key]);
    });
  }

  return modules;
}

async function readLegacyYamlFromLocal() {
  try {
    const cacheBuster = `?v=${Date.now()}`;
    const url = `/local/bubble/bubble-modules.yaml${cacheBuster}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return new Map();
    const txt = await res.text();
    if (!txt || !txt.trim()) return new Map();
    const data = parseYamlWithIncludes(txt);
    if (!data || typeof data !== 'object') return new Map();
    return extractModulesFromYamlRoot(data);
  } catch (e) {
    return new Map();
  }
}

export async function migrateIfNeeded(hass) {
  try {
    const available = await ensureBCTProviderAvailable(hass);
    if (!available) return false;

    // If migration already done, skip
    const alreadyDone = await isMigrationDone(hass);
    if (alreadyDone) return false;

    // If files already exist and contain modules, treat as migrated
    try {
      const files = await listFiles(hass);
      const existingModuleFiles = files.filter(f => f?.name && f.name.startsWith('modules/') && /\.ya?ml$/i.test(f.name));
      if (existingModuleFiles.length > 0) {
        await setMigrationDone(hass, { detected: 'files_exist' });
        document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
        return true;
      }
    } catch (e) {
      // continue
    }

    const fromEntity = await readLegacyEntityModules(hass);
    const fromYaml = await readLegacyYamlFromLocal();

    // Merge with precedence: entity overwrites YAML duplicates
    const merged = new Map(fromYaml);
    fromEntity.forEach((val, key) => {
      merged.set(key, val);
    });

    let written = 0;
    for (const [id, obj] of merged.entries()) {
      if (!id || typeof id !== 'string') continue;
      try {
        // If a module file already exists, skip writing to avoid overriding user changes
        const existing = await bctReadFile(hass, getModuleFileName(id));
        if (existing && typeof existing.content === 'string') continue;
      } catch (e) {
        // proceed to write
      }
      const toWrite = { ...obj };
      delete toWrite.id;
      await writeModuleYaml(hass, id, toWrite);
      written++;
    }

    await setMigrationDone(hass, {
      entity_count: fromEntity.size,
      yaml_count: fromYaml.size,
      written_count: written,
    });

    document.dispatchEvent(new CustomEvent('yaml-modules-updated'));
    return true;
  } catch (e) {
    return false;
  }
}


