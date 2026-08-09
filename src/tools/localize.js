import { version } from '../var/version.js';
import en from '../translations/editor/en.json';
import runtime from '../translations/runtime.js';

// Editor translations for languages other than English are not bundled: they
// are loaded from the bubble-card-<lang>.json files shipped next to
// bubble-card.js (never from a CDN), so the bundle stays small while every
// language supported by Home Assistant is covered, entirely offline. English
// is bundled as the fallback dictionary. Fetched dictionaries persist in a
// per-version localStorage cache hydrated synchronously before the first
// render, prefetched as soon as any card sees hass, and revalidated silently
// once per session so they are available instantly everywhere.
//
// Resolution order for editor.* keys:
//   1. Local dictionary for the active language (Bubble-specific wording)
//   2. Home Assistant's own translation catalog, for values declared as
//      "@<ha-key>|<english fallback>" in en.json (official wording, all languages)
//   3. Bundled English value
// cards.* keys resolve from the bundled per-language runtime dictionary since
// they render on dashboards where no hass.localize context is guaranteed.

const DEFAULT_LANG = 'en';
const FETCH_TIMEOUT_MS = 10000;
const ENGLISH_STORAGE_KEY = 'bubble-card-editor-english';

// Global opt-out: keeps the whole editor in English (bundled values and the
// English fallback of natively resolved keys), and disables the machine
// translation of module-authored text. Persisted per browser.
let englishForced;
export function isEditorEnglishForced() {
  if (englishForced === undefined) {
    try {
      englishForced = localStorage.getItem(ENGLISH_STORAGE_KEY) === '1';
    } catch (_) {
      englishForced = false;
    }
  }
  return englishForced;
}

export function setEditorEnglishForced(forced) {
  englishForced = !!forced;
  try {
    localStorage.setItem(ENGLISH_STORAGE_KEY, forced ? '1' : '0');
  } catch (_) {}
  notifyLanguageChanged();
}

// Central signal for every consumer of translated text: fired when the user
// flips the language switch AND when a fetched dictionary becomes available.
// Cards and editors listen to it and re-render whatever they built earlier.
function notifyLanguageChanged() {
  try {
    window.dispatchEvent(new CustomEvent('bubble-card-language-changed'));
  } catch (_) {}
}

// In-memory dictionaries: lang -> object (null = fetch failed, promise = loading)
const editorDicts = Object.create(null);
const pendingFetches = Object.create(null);

// Per-version localStorage cache of the fetched dictionaries: hydrated
// synchronously before the first render so translations are available
// instantly everywhere, then revalidated silently once per session.
const CACHE_PREFIX = 'bubble-card-i18n:';
const cacheKey = (lang) => `${CACHE_PREFIX}${version}:${lang}`;
const hydratedLangs = new Set();
const revalidatedLangs = new Set();

let cachePurged = false;
function purgeStaleCache() {
  if (cachePurged) return;
  cachePurged = true;
  try {
    const currentPrefix = `${CACHE_PREFIX}${version}:`;
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith(CACHE_PREFIX) && !key.startsWith(currentPrefix)) {
        localStorage.removeItem(key);
      }
    }
  } catch (_) {}
}

function hydrateFromCache(lang) {
  if (hydratedLangs.has(lang)) return;
  hydratedLangs.add(lang);
  purgeStaleCache();
  if (editorDicts[lang] !== undefined) return;
  try {
    const raw = localStorage.getItem(cacheKey(lang));
    if (!raw) return;
    const dict = JSON.parse(raw);
    if (dict && typeof dict === 'object') editorDicts[lang] = dict;
  } catch (_) {}
}

function storeInCache(lang, dict) {
  try {
    localStorage.setItem(cacheKey(lang), JSON.stringify(dict));
  } catch (_) {}
}

// Base URL of the script serving this bundle, captured at evaluation time when
// possible (classic script). Module scripts fall back to a DOM scan.
const scriptUrlAtLoad = typeof document !== 'undefined' ? document.currentScript?.src : undefined;

function getScriptBaseUrl() {
    if (scriptUrlAtLoad) return scriptUrlAtLoad.replace(/[^/]*$/, '');
    try {
        const tag = document.querySelector('script[src*="bubble-card.js"]');
        if (tag?.src) return tag.src.replace(/[^/]*$/, '');
    } catch (_) {}
    return null;
}

// Some strings are produced where no hass reference is at hand (setConfig
// errors, the card picker entry, DOM placeholders): read the live one.
export function getGlobalHass() {
  try {
    return document.querySelector('home-assistant')?.hass;
  } catch (_) {
    return undefined;
  }
}

/** setupTranslation bound to the live hass, for those contexts. */
export function tGlobal(key) {
  const hass = getGlobalHass();
  ensureEditorTranslations(hass);
  return setupTranslation(hass)(key);
}

export function getCurrentLocale(hass) {
  if (isEditorEnglishForced()) return DEFAULT_LANG;
  return hass?.locale?.language ?? DEFAULT_LANG;
}

function dotStringReducer(currentObject, key) {
  return currentObject?.[key];
}

function getFromDict(dict, key) {
  if (!dict) return undefined;
  const value = key.split('.').reduce(dotStringReducer, dict);
  return typeof value === 'string' ? value : undefined;
}

// Values in en.json may be "@<hass.localize key>|<english fallback>":
// resolved through Home Assistant's own catalog so every language HA supports
// is covered without shipping or fetching those strings ourselves.
function resolveValue(value, hass) {
  if (value === undefined || value[0] !== '@') return value;
  const sep = value.indexOf('|');
  const haKey = sep === -1 ? value.slice(1) : value.slice(1, sep);
  const fallback = sep === -1 ? undefined : value.slice(sep + 1);
  // Forced English keeps the bundled fallback instead of Home Assistant's
  // localized value.
  const native = isEditorEnglishForced() ? undefined : hass?.localize?.(haKey);
  return native || fallback || haKey;
}

function resolveRuntime(key, lang) {
  // cards.calendar.busy -> runtime[lang]['calendar.busy'] (flat keys, see runtime.js)
  const shortKey = key.slice('cards.'.length);
  const langDict = runtime[lang] || runtime[lang?.split('-')[0]];
  return (langDict && langDict[shortKey]) ?? runtime.en[shortKey];
}

export default function setupTranslation(hass) {
  const lang = getCurrentLocale(hass);
  if (lang !== DEFAULT_LANG) {
    hydrateFromCache(lang);
    // Fire-and-forget prefetch: any card seeing hass warms the dictionary up
    // before the first editor or dialog needs it. O(1) once warmed.
    if (editorDicts[lang] === undefined || !revalidatedLangs.has(lang)) {
      ensureEditorTranslations(hass);
    }
  }
  const fetched = lang === DEFAULT_LANG ? undefined : editorDicts[lang];

  return function t(key) {
    if (key.startsWith('cards.')) {
      const value = resolveRuntime(key, lang);
      if (value !== undefined) return value;
    }

    const fetchedValue = getFromDict(fetched, key);
    if (fetchedValue !== undefined) return resolveValue(fetchedValue, hass) ?? key;

    const enValue = resolveValue(getFromDict(en, key), hass);
    if (enValue !== undefined) return enValue;

    return key;
  };
}

// Candidate local folders holding the dictionaries shipped next to the bundle.
// No network host is ever contacted: these all resolve to the Home Assistant
// instance serving bubble-card.js itself.
function localBases() {
  const bases = [];
  // Optional override for development/testing.
  const custom = typeof window !== 'undefined' ? window.bubbleCardTranslationsBase : undefined;
  if (typeof custom === 'string') bases.push(custom);
  else if (Array.isArray(custom)) bases.push(...custom);
  const scriptBase = getScriptBaseUrl();
  if (scriptBase) bases.push(scriptBase);
  // Canonical HACS install path as a last resort.
  bases.push('/hacsfiles/Bubble-Card/');
  return bases;
}

async function fetchDict(lang) {
  for (const base of localBases()) {
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS) : null;
      // The version query defeats stale browser caches after an update (HACS
      // only cache-busts the JS resource itself, not sibling files).
      const response = await fetch(`${base}bubble-card-${lang}.json?v=${encodeURIComponent(version)}`, controller ? { signal: controller.signal } : {});
      if (timer) clearTimeout(timer);
      if (!response.ok) continue;
      const dict = await response.json();
      if (dict && typeof dict === 'object') return dict;
    } catch (_) {}
  }
  return null;
}

/**
 * Makes sure the editor dictionary for the active language is available.
 * Resolves to true when the visible strings changed (callers should
 * re-render), false when nothing changed (English, already loaded from the
 * cache with no difference, or failed).
 */
export function ensureEditorTranslations(hass) {
  const lang = getCurrentLocale(hass);
  if (lang === DEFAULT_LANG) return Promise.resolve(false);
  hydrateFromCache(lang);
  const hasDict = editorDicts[lang] !== undefined;
  if (hasDict && revalidatedLangs.has(lang)) return Promise.resolve(false);
  if (pendingFetches[lang]) return hasDict ? Promise.resolve(false) : pendingFetches[lang];

  revalidatedLangs.add(lang);
  const previous = editorDicts[lang];
  pendingFetches[lang] = fetchDict(lang).then((dict) => {
    delete pendingFetches[lang];
    if (!dict) {
      // null on failure: remembered to avoid refetch loops, but a cached
      // dictionary hydrated earlier is kept as is
      if (previous === undefined) editorDicts[lang] = null;
      return false;
    }
    const changed = JSON.stringify(dict) !== JSON.stringify(previous ?? null);
    editorDicts[lang] = dict;
    if (changed) {
      storeInCache(lang, dict);
      notifyLanguageChanged();
    }
    return changed;
  });
  // With a cached dictionary already in place the refresh is silent: callers
  // have nothing to wait for.
  return hasDict ? Promise.resolve(false) : pendingFetches[lang];
}
