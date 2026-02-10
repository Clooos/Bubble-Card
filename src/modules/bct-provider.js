// Provider for Bubble Card Tools backend (file-based modules)

import jsyaml from 'js-yaml';

const ERROR_RETRY_DELAY_MS = 5000;
const UNAVAILABLE_RETRY_DELAY_MS = 30000;
const CACHE_VALIDITY_MS = 60000; // Cache remains valid for 1 minute even if hass becomes null
const MODULE_FILE_BASENAME_FALLBACK = 'module';

// Simple in-memory cache for availability and module listings
const availabilityCache = {
  checked: false,
  available: false,
  lastChecked: 0,
  retryAt: 0,
  pendingPromise: null,
};

// Global hint to UI parts that persistence is available
function setGlobalAvailabilityFlag(isAvailable) {
  try {
    window.__bubble_bct_available = !!isAvailable;
  } catch (e) {
    // noop
  }
}

export async function ensureBCTProviderAvailable(hass) {
  const now = Date.now();

  // If hass is null, check if we have a recent valid cache
  if (!hass) {
    // Only invalidate cache if it's old (more than CACHE_VALIDITY_MS)
    if (availabilityCache.checked && availabilityCache.available && 
        (now - availabilityCache.lastChecked) < CACHE_VALIDITY_MS) {
      // Keep the previous positive result if cache is still fresh
      return true;
    }
    // If cache is stale or was negative, reset it
    if (availabilityCache.checked && !availabilityCache.available) {
      // Keep negative cache but allow retry after delay
      if (availabilityCache.retryAt && now < availabilityCache.retryAt) {
        return false;
      }
    } else {
      // Reset only if cache is stale
      availabilityCache.checked = false;
      availabilityCache.available = false;
      availabilityCache.retryAt = 0;
      setGlobalAvailabilityFlag(false);
    }
    return false;
  }

  if (availabilityCache.pendingPromise) {
    return availabilityCache.pendingPromise;
  }

  // If we have a valid positive cache, return it immediately
  if (availabilityCache.checked && availabilityCache.available) {
    // Consider cache valid for 5 minutes
    if ((now - availabilityCache.lastChecked) < 300000) {
      return true;
    }
  }

  // If we have a negative cache, check retry delay
  if (availabilityCache.checked && !availabilityCache.available) {
    if (availabilityCache.retryAt && now < availabilityCache.retryAt) {
      return false;
    }
    // Retry delay expired, allow new check
    availabilityCache.checked = false;
  } else if (availabilityCache.retryAt && now < availabilityCache.retryAt) {
    return false;
  }

  availabilityCache.pendingPromise = (async () => {
    try {
      const res = await hass.callWS({ type: 'bubble_card_tools/list_modules' });
      const ok = !!res && Array.isArray(res.files);
      availabilityCache.checked = true;
      availabilityCache.available = ok;
      availabilityCache.lastChecked = Date.now();
      availabilityCache.retryAt = ok ? 0 : Date.now() + UNAVAILABLE_RETRY_DELAY_MS;
      setGlobalAvailabilityFlag(ok);

      const isAdmin = hass?.user?.is_admin || hass?.user?.is_owner;
      if (ok && typeof hass?.connection?.subscribeEvents === 'function' && !eventsSubscribed && isAdmin) {
        try {
          hass.connection.subscribeEvents(() => {
            clearBCTCache();
            try { document.dispatchEvent(new CustomEvent('yaml-modules-updated')); } catch (_) {}
          }, 'bubble_card_tools.updated');
          eventsSubscribed = true;
        } catch (_) {}
      }

      return ok;
    } catch (e) {
      // On error, only invalidate cache if it was previously positive
      // If it was already negative, keep the negative state to avoid flip-flopping
      const wasPositive = availabilityCache.checked && availabilityCache.available;
      
      if (wasPositive) {
        // Previous check was positive, but now failed - might be temporary error
        // Don't immediately mark as unavailable, allow retry soon
        availabilityCache.checked = false;
        availabilityCache.available = false;
        availabilityCache.lastChecked = Date.now();
        availabilityCache.retryAt = Date.now() + ERROR_RETRY_DELAY_MS;
        setGlobalAvailabilityFlag(false);
      } else {
        // Was already negative, just update retry time
        availabilityCache.lastChecked = Date.now();
        availabilityCache.retryAt = Date.now() + ERROR_RETRY_DELAY_MS;
      }
      
      return false;
    } finally {
      availabilityCache.pendingPromise = null;
    }
  })();

  return availabilityCache.pendingPromise;
}

export function isBCTAvailableSync() {
  // Best-effort sync hint for UI rendering
  const now = Date.now();
  
  // If cache is checked and available, return true (even if slightly stale)
  if (availabilityCache.checked && availabilityCache.available) {
    // Consider positive cache valid for 5 minutes
    if ((now - availabilityCache.lastChecked) < 300000) {
      return true;
    }
  }
  
  // If cache is checked but negative, check retry delay
  if (availabilityCache.checked && !availabilityCache.available) {
    // If retry delay hasn't expired, return false
    if (availabilityCache.retryAt && now < availabilityCache.retryAt) {
      return false;
    }
    // Retry delay expired, but we don't know current state - check global flag
  }
  
  // Fallback to global flag (set by async checks)
  return !!(typeof window !== 'undefined' && window.__bubble_bct_available);
}

export async function listFiles(hass) {
  const available = await ensureBCTProviderAvailable(hass);
  if (!available) return [];
  try {
    const res = await hass.callWS({ type: 'bubble_card_tools/list_modules' });
    return Array.isArray(res?.files) ? res.files : [];
  } catch (e) {
    return [];
  }
}

export async function readFile(hass, name) {
  const available = await ensureBCTProviderAvailable(hass);
  if (!available) return null;
  try {
    return await hass.callWS({ type: 'bubble_card_tools/read_module', name });
  } catch (e) {
    return null;
  }
}

export async function writeFile(hass, name, content) {
  const available = await ensureBCTProviderAvailable(hass);
  if (!available) return { status: 'unavailable' };
  try {
    return await hass.callWS({ type: 'bubble_card_tools/write_module', name, content });
  } catch (e) {
    return { status: 'error', error: String(e?.message || e) };
  }
}

export async function deleteFile(hass, name) {
  const available = await ensureBCTProviderAvailable(hass);
  if (!available) return { status: 'unavailable' };
  try {
    return await hass.callWS({ type: 'bubble_card_tools/delete_module', name });
  } catch (e) {
    return { status: 'error', error: String(e?.message || e) };
  }
}

// Config helpers (flag file)
const CONFIG_FILE = 'config.yaml';

export async function readConfig(hass) {
  const data = await readFile(hass, CONFIG_FILE);
  if (!data || typeof data.content !== 'string') return {};
  try {
    const parsed = jsyaml.load(data.content) || {};
    return typeof parsed === 'object' && parsed ? parsed : {};
  } catch (e) {
    return {};
  }
}

export async function writeConfig(hass, obj) {
  try {
    const content = jsyaml.dump(obj ?? {}, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      noCompatMode: true,
    });
    return await writeFile(hass, CONFIG_FILE, content);
  } catch (e) {
    return { status: 'error', error: String(e?.message || e) };
  }
}

export async function setMigrationDone(hass, sources = {}) {
  const current = await readConfig(hass);
  const updated = {
    ...(current || {}),
    migration: {
      done: true,
      sources,
      migrated_at: new Date().toISOString(),
      version: 1,
    },
  };
  return await writeConfig(hass, updated);
}

export async function isMigrationDone(hass) {
  const cfg = await readConfig(hass);
  return !!(cfg && cfg.migration && cfg.migration.done === true);
}

function hashModuleId(value) {
  const str = String(value ?? '');
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36);
}

function normalizeModuleFileBase(moduleId) {
  const raw = String(moduleId ?? '');
  const strippedAccents = raw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const safe = strippedAccents
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^[-_]+|[-_]+$/g, '');
  return safe || MODULE_FILE_BASENAME_FALLBACK;
}

function isModuleIdFileSafe(moduleId) {
  return /^[A-Za-z0-9_-]+$/.test(String(moduleId ?? ''));
}

export function getModuleFileName(moduleId) {
  const raw = String(moduleId ?? '');
  const base = normalizeModuleFileBase(raw);
  if (isModuleIdFileSafe(raw) && raw === base) {
    return `modules/${raw}.yaml`;
  }
  const suffix = hashModuleId(raw);
  return `modules/${base}--${suffix}.yaml`;
}

// Modules IO using files
function normalizeModuleFromParsed(id, obj) {
  if (!obj || typeof obj !== 'object') return null;
  // Remove transient/embedded fields that should not be part of runtime module
  const { yaml, editor_raw, id: _ignored, ...rest } = obj;
  const normalized = { ...rest, id };
  return normalized;
}

export async function readAllModules(hass) {
  const files = await listFiles(hass);
  if (!files || files.length === 0) return new Map();

  // Load existing cache and build a fast lookup for file timestamps
  const cache = loadBCTCache() || { version: CACHE_VERSION, files: {} };
  const cachedFiles = cache.files || {};
  const byName = new Map();
  for (const f of files) {
    if (!f?.name || !/\.ya?ml$/i.test(f.name)) continue;
    if (f.name === CONFIG_FILE) continue; // skip config
    byName.set(f.name, f.updated_at || null);
  }

  // Determine which files changed since last cache
  const toRead = [];
  const unchanged = [];
  byName.forEach((updatedAt, name) => {
    const cached = cachedFiles[name];
    if (!cached || cached.updated_at !== updatedAt) {
      toRead.push({ name, updated_at: updatedAt });
    } else {
      unchanged.push({ name, updated_at: updatedAt, modules: cached.modules || {} });
    }
  });

  // Read changed files in parallel
  const readPromises = toRead.map(async (entry) => {
    const data = await readFile(hass, entry.name);
    if (!data || !data.content) {
      return { name: entry.name, updated_at: entry.updated_at, modules: {} };
    }
    let parsed = null;
    try {
      parsed = jsyaml.load(data.content);
    } catch (_) {
      parsed = null;
    }
    const modules = {};
    if (parsed && typeof parsed === 'object') {
      const keys = Object.keys(parsed);
      if (keys.length === 1) {
        const id = keys[0];
        const obj = parsed[id];
        if (obj && (obj.name || obj.code)) {
          const normalized = normalizeModuleFromParsed(id, obj);
          modules[id] = normalized;
        }
      } else {
        for (const id of keys) {
          const obj = parsed[id];
          if (obj && typeof obj === 'object' && (obj.name || obj.code)) {
            const normalized = normalizeModuleFromParsed(id, obj);
            modules[id] = normalized;
          }
        }
      }
    }
    return { name: entry.name, updated_at: entry.updated_at, modules };
  });

  const readResults = await Promise.all(readPromises);

  // Build updated cache: only keep files that still exist
  const updatedFilesCache = {};
  for (const u of unchanged) {
    updatedFilesCache[u.name] = { updated_at: u.updated_at, modules: u.modules };
  }
  for (const r of readResults) {
    updatedFilesCache[r.name] = { updated_at: r.updated_at, modules: r.modules };
  }

  // Aggregate modules across all files
  const modulesMap = new Map();
  Object.values(updatedFilesCache).forEach((entry) => {
    const mods = entry?.modules || {};
    Object.keys(mods).forEach((id) => {
      modulesMap.set(id, mods[id]);
    });
  });

  // Persist cache for next fast load
  const aggregatedModules = {};
  modulesMap.forEach((val, key) => { aggregatedModules[key] = val; });
  saveBCTCache({ version: CACHE_VERSION, files: updatedFilesCache, aggregatedModules, updatedAt: new Date().toISOString() });

  return modulesMap;
}

async function refreshCacheAfterMutation(hass) {
  try {
    await readAllModules(hass);
  } catch (_) {}
}

export async function writeModuleYaml(hass, moduleId, moduleObjectOrYaml) {
  // Accept either a raw YAML string or plain object representing the module content
  let content = '';
  if (typeof moduleObjectOrYaml === 'string') {
    content = moduleObjectOrYaml;
  } else if (moduleObjectOrYaml && typeof moduleObjectOrYaml === 'object') {
    const root = {};
    const copy = { ...moduleObjectOrYaml };
    // Remove fields that cause recursion or should not be persisted
    delete copy.id;
    delete copy.yaml;
    delete copy.editor_raw;
    // Prefer 'supported' over legacy 'unsupported' if both exist
    if (Array.isArray(copy.supported) && Array.isArray(copy.unsupported)) {
      delete copy.unsupported;
    }
    root[moduleId] = copy;
    content = jsyaml.dump(root, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      noCompatMode: true,
    });
  }
  const name = getModuleFileName(moduleId);
  const result = await writeFile(hass, name, content);
  if (!result || result.status !== 'error') {
    await refreshCacheAfterMutation(hass);
  }
  return result;
}

export async function deleteModuleFile(hass, moduleId) {
  const name = getModuleFileName(moduleId);
  const result = await deleteFile(hass, name);
  if (!result || result.status !== 'error') {
    await refreshCacheAfterMutation(hass);
  }
  return result;
}



// --- Local cache helpers (localStorage) ---
const CACHE_VERSION = 1;
let eventsSubscribed = false;

function getBCTCacheKey() {
  try {
    const host = typeof location !== 'undefined' ? location.host : 'default';
    return `bubble-card-bct-cache-v${CACHE_VERSION}:${host}`;
  } catch (_) {
    return `bubble-card-bct-cache-v${CACHE_VERSION}:default`;
  }
}

function loadBCTCache() {
  try {
    const raw = localStorage.getItem(getBCTCacheKey());
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (!obj || typeof obj !== 'object') return null;
    return obj;
  } catch (_) {
    return null;
  }
}

function saveBCTCache(data) {
  try {
    localStorage.setItem(getBCTCacheKey(), JSON.stringify(data));
  } catch (_) {}
}

function clearBCTCache() {
  try {
    localStorage.removeItem(getBCTCacheKey());
  } catch (_) {}
}

export function getCachedAggregatedModules() {
  const cache = loadBCTCache();
  const aggregated = cache?.aggregatedModules;
  if (aggregated && typeof aggregated === 'object' && Object.keys(aggregated).length > 0) {
    return aggregated;
  }
  return null;
}

export function getModuleLastModified(moduleId) {
  try {
    const cache = loadBCTCache();
    if (!cache || !cache.files) return null;

    const fileName = getModuleFileName(moduleId);
    const fileData = cache.files[fileName];
    if (fileData && fileData.updated_at) return fileData.updated_at;

    // Fallback for legacy naming scheme cached before normalization.
    const legacyFileData = cache.files[`modules/${moduleId}.yaml`];
    if (legacyFileData && legacyFileData.updated_at) return legacyFileData.updated_at;

    // Last fallback: search by parsed module ids in cache entries.
    for (const key of Object.keys(cache.files)) {
      const entry = cache.files[key];
      if (entry?.updated_at && entry?.modules && entry.modules[moduleId]) {
        return entry.updated_at;
      }
    }
    return null;
  } catch (_) {
    return null;
  }
}

export function getAllModulesLastModified() {
  try {
    const cache = loadBCTCache();
    if (!cache || !cache.files) return new Map();

    const timestamps = new Map();
    Object.keys(cache.files).forEach((fileName) => {
      const fileData = cache.files[fileName];
      if (!fileData || !fileData.updated_at) return;
      const moduleIds = Object.keys(fileData.modules || {});
      if (moduleIds.length > 0) {
        moduleIds.forEach((moduleId) => {
          timestamps.set(moduleId, fileData.updated_at);
        });
      }
    });

    return timestamps;
  } catch (_) {
    return new Map();
  }
}

