import { version } from '../var/version.js';
import en from '../translations/editor/en.json';
import runtime from '../translations/runtime.js';

// Editor translations for languages other than English are not bundled: they
// are loaded on demand (editor only) from the local `translations/` folder
// shipped next to bubble-card.js, so the bundle stays small while every
// language supported by Home Assistant is covered, entirely offline. English
// is bundled as the fallback dictionary.
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

// In-memory dictionaries: lang -> object (null = fetch failed, promise = loading)
const editorDicts = Object.create(null);
const pendingFetches = Object.create(null);

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

export function getCurrentLocale(hass) {
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
  const native = hass?.localize?.(haKey);
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

// Candidate local bases for the translations/ folder shipped next to the
// bundle. No network host is ever contacted: these all resolve to the Home
// Assistant instance serving bubble-card.js itself.
function localBases() {
  const bases = [];
  // Optional override for development/testing.
  const custom = typeof window !== 'undefined' ? window.bubbleCardTranslationsBase : undefined;
  if (typeof custom === 'string') bases.push(custom);
  else if (Array.isArray(custom)) bases.push(...custom);
  const scriptBase = getScriptBaseUrl();
  if (scriptBase) bases.push(`${scriptBase}translations/`);
  // Canonical HACS install path as a last resort.
  bases.push('/hacsfiles/Bubble-Card/translations/');
  return bases;
}

async function fetchDict(lang) {
  for (const base of localBases()) {
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS) : null;
      // The version query defeats stale browser caches after an update (HACS
      // only cache-busts the JS resource itself, not sibling files).
      const response = await fetch(`${base}${lang}.json?v=${encodeURIComponent(version)}`, controller ? { signal: controller.signal } : {});
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
 * Resolves to true when a dictionary was newly loaded (callers should
 * re-render), false when nothing changed (English, already loaded, or failed).
 */
export function ensureEditorTranslations(hass) {
  const lang = getCurrentLocale(hass);
  if (lang === DEFAULT_LANG) return Promise.resolve(false);
  if (editorDicts[lang] !== undefined) return Promise.resolve(false);
  if (pendingFetches[lang]) return pendingFetches[lang];

  pendingFetches[lang] = fetchDict(lang).then((dict) => {
    delete pendingFetches[lang];
    editorDicts[lang] = dict; // null on failure: remembered to avoid refetch loops
    return !!dict;
  });
  return pendingFetches[lang];
}
