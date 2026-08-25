// Client-side machine translation for Module Store content (descriptions are
// published in English on GitHub). Runs entirely on the user's side: the
// browser's built-in on-device Translator API when available, with a public
// translation endpoint as fallback. Results are cached per language in memory.
//
// Code blocks, HTML tags and URLs are protected with placeholders before
// translation and restored afterwards: they must never be sent to (or altered
// by) a translation engine. If restoration fails, the original text is kept.

import setupTranslation, { isEditorEnglishForced } from '../tools/localize.js';

const memCache = new Map(); // `${lang} ${hash}` -> translated string

const CHUNK_MAX = 1200;   // per-request payload cap (keeps GET URLs well under limits)
const TOTAL_MAX = 8000;   // beyond this, the remainder stays untranslated
const REQUEST_SPACING_MS = 350;      // serial queue spacing between endpoint calls
const RATE_LIMIT_COOLDOWN_MS = 5 * 60 * 1000; // back off after a 429
const STORAGE_KEY = 'bubble-card-translations-cache';
const STORAGE_MAX_ENTRIES = 1000; // store descriptions + module labels

// Persistent cache: module descriptions are stable, so a translation is only
// ever requested once per (language, text) even across sessions.
let storageCache = null;
function loadStorageCache() {
  if (storageCache) return storageCache;
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    storageCache = new Map(Array.isArray(parsed) ? parsed : []);
  } catch (_) {
    storageCache = new Map();
  }
  return storageCache;
}
function saveStorageCache() {
  try {
    const entries = [...storageCache.entries()].slice(-STORAGE_MAX_ENTRIES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (_) {}
}
function textHash(value) {
  let hash = 5381;
  for (let i = 0; i < value.length; i++) hash = ((hash << 5) + hash + value.charCodeAt(i)) >>> 0;
  return hash.toString(36) + ':' + value.length;
}

// Serial queue with spacing + cooldown so the endpoint is never hammered
// (one request per module at store-open would otherwise burst-trigger 429s).
let endpointQueue = Promise.resolve();
let rateLimitedUntil = 0;
function enqueueEndpointCall(task) {
  const run = endpointQueue.then(async () => {
    const result = await task();
    await new Promise((resolve) => setTimeout(resolve, REQUEST_SPACING_MS));
    return result;
  });
  endpointQueue = run.catch(() => {});
  return run;
}

// Language codes that differ between hass.locale and translation services.
const SERVICE_LANG = {
  'zh-Hans': 'zh-CN',
  'zh-Hant': 'zh-TW',
  'es-419': 'es',
  'sr-Latn': 'sr-Latn',
  'gsw': 'de',
  'nb': 'no',
  'nn': 'no'
};

// Machine translation is off until the user asks for it. Module text is sent
// to a translation service outside the user's network, and a Home Assistant
// install must never reach out on its own. The on-device engine sits behind the
// same switch, so the user answers the question once and it covers every engine.
//
// A key of its own, and not the beta's bubble-card-store-translate: that one
// switched a display preference on a feature that was already running, so an
// account holding it cannot be read as anyone having agreed to anything. Every
// install starts from off and is asked the question once.
const ENABLED_STORAGE_KEY = 'bubble-card-module-translation';
let translationEnabled;

export function isModuleTranslationEnabled() {
  if (translationEnabled === undefined) {
    try {
      translationEnabled = localStorage.getItem(ENABLED_STORAGE_KEY) === '1';
    } catch (_) {
      translationEnabled = false;
    }
  }
  return translationEnabled;
}

export function setModuleTranslationEnabled(enabled) {
  translationEnabled = !!enabled;
  try {
    localStorage.setItem(ENABLED_STORAGE_KEY, translationEnabled ? '1' : '0');
  } catch (_) {}
}

export function getTranslationTargetLang(hass) {
  if (isEditorEnglishForced()) return null;
  const lang = hass?.locale?.language ?? 'en';
  if (lang === 'en' || lang === 'en-GB') return null;
  return lang;
}

// Segments that must never be translated: fenced/inline code, code-ish
// elements, any HTML tag, URLs, brand/product names, and Bubble Card's own
// vocabulary, so descriptions keep the wording used by the editor itself
// (e.g. "pop-up", never a translation engine's synonym).
const PROTECT_RE = /(```[\s\S]*?```|<code-block>[\s\S]*?<\/code-block>|<pre>[\s\S]*?<\/pre>|<code>[\s\S]*?<\/code>|`[^`\n]*`|<[^>\n]+>|https?:\/\/\S+|Bubble Card Tools|Bubble Card|Module Store|Home Assistant|GitHub|Patreon|YAML)/g;

// Engines render "pop-up" with their own synonyms ("fenêtre contextuelle",
// "ventana emergente", ...). Descriptions must use the same word as the
// editor itself, so those renderings are rewritten afterwards with the
// canonical term from our own dictionary. Tokens can't do this: an opaque
// placeholder prevents the engine from inflecting the surrounding grammar.
const POPUP_RENDERINGS = {
  fr: /fen[êe]tres?\s+contextuelles?|fen[êe]tres?\s+surgissantes?/gi,
  es: /ventanas?\s+emergentes?/gi,
  'es-419': /ventanas?\s+emergentes?/gi,
  pt: /janelas?\s+(?:emergentes?|de\s+contexto)/gi,
  'pt-BR': /janelas?\s+(?:emergentes?|de\s+contexto)/gi,
  ca: /finestres?\s+emergents?/gi,
  gl: /xanelas?\s+emerxentes?/gi,
  it: /finestre?\s+(?:a\s+comparsa|di\s+dialogo)|finestrell[ae]/gi,
  ro: /ferestre?\s+pop-?up|ferestre?\s+contextuale?/gi,
  de: /Pop-?up-Fenstern?|Kontextfenstern?/gi,
  nl: /pop-?upvensters?|contextvensters?/gi,
  da: /pop-?op-?vinduer?/gi,
  sv: /pop-?up-?f[öo]nster/gi,
  nb: /pop-?up-?vinduer?/gi,
  nn: /pop-?up-?vindaug[ae]?/gi,
  fi: /ponnahdusikkunoita|ponnahdusikkunat?|ponnahdusikkunan?/gi,
  pl: /wyskakuj[ąa]ce?\s+okna?|okna?\s+wyskakuj[ąa]ce?/gi,
  cs: /vyskakovac[íi]\s+okna?|vyskakovac[íi]ch\s+oken/gi,
  sk: /vyskakovacie\s+okn[áa]|vyskakovacieho\s+okna/gi,
  ru: /всплывающи[ех]\s+окн[ао]\w*|всплывающее\s+окно/gi,
  uk: /спливн[іе]\s+вікн[ао]\w*/gi,
  tr: /a[çc][ıi]l[ıi]r\s+pencerelere?|a[çc][ıi]l[ıi]r\s+pencere\w*/gi
};

function applyGlossary(text, lang, canonical) {
  const pattern = POPUP_RENDERINGS[lang] ?? POPUP_RENDERINGS[lang?.split('-')[0]];
  if (!pattern || !canonical) return text;
  const isAscii = /^[\x20-\x7E]+$/.test(canonical);
  return text.replace(pattern, (match) => {
    // Keep a plural marker when the engine used one (Latin-script languages).
    const plural = isAscii && /s$/i.test(match.trim());
    const base = plural ? `${canonical}s` : canonical;
    // Follow the replaced text's own capitalization: the canonical term comes
    // from a picker label, so it is capitalized even mid-sentence.
    const first = match.charAt(0);
    return first !== first.toLowerCase()
      ? base.charAt(0).toUpperCase() + base.slice(1)
      : base.charAt(0).toLowerCase() + base.slice(1);
  });
}

function protectText(text) {
  const tokens = [];
  const protectedText = text.replace(PROTECT_RE, (match) => {
    tokens.push(match);
    return `⟦${tokens.length - 1}⟧`;
  });
  return { protectedText, tokens };
}

// Code blocks carry meaning that must survive intact; brand names and inline
// tags are cosmetic. Engines occasionally drop a token, so only a missing
// structural one invalidates the translation.
function isStructuralToken(token) {
  return /^(```|<pre>|<code-block>|<code>|`)/.test(token);
}

function restoreText(text, tokens) {
  let unknownIndex = false;
  const seen = new Set();
  const restored = text.replace(/⟦\s*(\d+)\s*⟧/g, (_, index) => {
    const token = tokens[Number(index)];
    if (token === undefined) { unknownIndex = true; return ''; }
    seen.add(Number(index));
    return token;
  });
  if (unknownIndex) return null;
  const lostStructural = tokens.some((token, index) => !seen.has(index) && isStructuralToken(token));
  if (lostStructural) return null;
  return restored;
}

function splitChunks(text) {
  const chunks = [];
  let rest = text;
  while (rest.length > CHUNK_MAX) {
    let cut = rest.lastIndexOf('\n', CHUNK_MAX);
    if (cut < CHUNK_MAX / 2) cut = rest.lastIndexOf(' ', CHUNK_MAX);
    if (cut < CHUNK_MAX / 2) cut = CHUNK_MAX;
    chunks.push(rest.slice(0, cut));
    rest = rest.slice(cut);
  }
  if (rest) chunks.push(rest);
  return chunks;
}

// Chrome's built-in Translator API (on-device, private). The user explicitly
// enabled translation, so a one-time language pack download is acceptable:
// 'downloadable' availability is allowed and the instance is cached per
// language. After that first download everything runs fully offline.
const browserTranslators = new Map(); // targetLang -> Promise<Translator|null>

function getBrowserTranslator(targetLang) {
  if (typeof Translator === 'undefined' || typeof Translator.create !== 'function') {
    return Promise.resolve(null);
  }
  if (!browserTranslators.has(targetLang)) {
    const promise = (async () => {
      try {
        const availability = await Translator.availability({ sourceLanguage: 'en', targetLanguage: targetLang });
        if (availability !== 'available' && availability !== 'downloadable') return null;
        return await Translator.create({ sourceLanguage: 'en', targetLanguage: targetLang });
      } catch (_) {
        return null;
      }
    })().catch(() => null).then((translator) => {
      // A failed creation (gesture requirement, transient state) must not be
      // remembered for the whole session: retry on the next request.
      if (!translator) browserTranslators.delete(targetLang);
      return translator;
    });
    browserTranslators.set(targetLang, promise);
  }
  return browserTranslators.get(targetLang);
}

// Chrome only starts a language pack download from within a user gesture.
// This arms a one-shot listener so the first click anywhere warms the
// translator up transparently; afterwards everything runs on-device.
let warmupInstalled = false;
export function warmupBrowserTranslator(hass) {
  if (!isModuleTranslationEnabled()) return;
  if (warmupInstalled) return;
  const lang = getTranslationTargetLang(hass);
  if (!lang || typeof Translator === 'undefined' || typeof Translator.create !== 'function') return;
  warmupInstalled = true;
  const serviceLang = SERVICE_LANG[lang] ?? lang.split('-')[0];
  const handler = () => {
    window.removeEventListener('pointerdown', handler, true);
    getBrowserTranslator(serviceLang);
  };
  window.addEventListener('pointerdown', handler, true);
}

async function translateChunkWithBrowserApi(chunk, targetLang) {
  try {
    const translator = await getBrowserTranslator(targetLang);
    if (!translator) return null;
    const result = await translator.translate(chunk);
    return typeof result === 'string' && result ? result : null;
  } catch (_) {
    return null;
  }
}

// Bubble Card Tools relays the request over the local WebSocket and performs
// the outbound call server-side: no CORS, no secure-context requirement, and
// a disk cache shared by every browser. Older BCT versions without the
// command fail fast with unknown_command and the next engine takes over.
let bctTranslateUnavailable = false;
let bctTranslateSeen = false;

async function translateChunkWithBCT(chunk, targetLang, hass) {
  if (bctTranslateUnavailable || !hass?.connection?.sendMessagePromise) return null;
  try {
    const response = await hass.connection.sendMessagePromise({
      type: 'bubble_card_tools/translate',
      text: chunk,
      target: targetLang
    });
    // The command exists: the server is now the only egress point, with its
    // own engines, backoff and shared cache. The browser must not keep
    // poking rate-limited endpoints directly on top of it.
    bctTranslateSeen = true;
    return typeof response?.translated === 'string' && response.translated ? response.translated : null;
  } catch (error) {
    if (error?.code === 'unknown_command') bctTranslateUnavailable = true;
    return null;
  }
}

async function translateChunkWithEndpoint(chunk, targetLang) {
  if (Date.now() < rateLimitedUntil) return null;
  return enqueueEndpointCall(async () => {
    if (Date.now() < rateLimitedUntil) return null;
    try {
      // GET only: POST requests get a redirect without CORS headers on this
      // endpoint. Chunking keeps the URL far below length limits.
      const params = new URLSearchParams({ client: 'gtx', sl: 'en', tl: targetLang, dt: 't', ie: 'UTF-8', oe: 'UTF-8', q: chunk });
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`);
      if (response.status === 429) {
        rateLimitedUntil = Date.now() + RATE_LIMIT_COOLDOWN_MS;
        return null;
      }
      if (!response.ok) return null;
      const data = await response.json();
      const joined = (data?.[0] || []).map((segment) => segment?.[0] ?? '').join('');
      return joined || null;
    } catch (_) {
      // Opaque network/CORS failures (e.g. rate-limit redirect pages) also back off.
      rateLimitedUntil = Date.now() + RATE_LIMIT_COOLDOWN_MS;
      return null;
    }
  });
}

/**
 * Synchronous accessor for module-authored text (names, descriptions, editor
 * schema labels): returns the cached translation when there is one, otherwise
 * the original text, and schedules the translation. `onReady` is invoked once
 * a new translation lands so the caller can re-render.
 *
 * Requests are queued globally and processed in registration order, so
 * whatever is rendered first is translated first.
 */
const pendingUiTranslations = new Map(); // cacheKey -> true (in flight)
let uiQueue = Promise.resolve();

export function translateUiText(text, hass, onReady) {
  if (!isModuleTranslationEnabled()) return text;
  const lang = getTranslationTargetLang(hass);
  if (!lang || !text || typeof text !== 'string' || !/[a-zA-Z]{3}/.test(text)) return text;

  const cacheKey = `${lang} ${textHash(text)}`;
  if (memCache.has(cacheKey)) return memCache.get(cacheKey);
  const stored = loadStorageCache().get(cacheKey);
  if (stored) {
    memCache.set(cacheKey, stored);
    return stored;
  }

  if (!pendingUiTranslations.has(cacheKey)) {
    pendingUiTranslations.set(cacheKey, true);
    uiQueue = uiQueue.then(async () => {
      const translated = await translateText(text, hass).catch(() => null);
      pendingUiTranslations.delete(cacheKey);
      if (translated && typeof onReady === 'function') onReady();
    });
  }
  return text;
}

// Schema keys whose values are user-visible text. Everything else (name,
// value, variant, icons, units, JS expressions) is structural and must never
// be altered. Plain-string select options double as stored values, so only
// object options with an explicit `label` are covered (through that key).
const SCHEMA_TEXT_KEYS = new Set(['label', 'title', 'helper', 'description', 'warn_text', 'group']);

/**
 * Translates every visible label of a module editor schema in place, through
 * the same per-string cache as the rest of the module text. Call it on a
 * per-render clone: strings resolve from cache when known, stay English
 * otherwise, and `onReady` fires once new translations land so the caller
 * re-renders. `group` doubles as the grouping key, but identical sources
 * translate identically so fields stay grouped.
 */
export function translateModuleSchema(schema, hass, onReady) {
  if (!isModuleTranslationEnabled()) return schema;
  if (!getTranslationTargetLang(hass)) return schema;

  const walk = (node) => {
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (!node || typeof node !== 'object') return;
    // `constant` entries are pure display text: their `value` is shown, never
    // stored. Both shapes exist: {type: 'constant', value} and
    // selector: {constant: {value}}.
    if (node.type === 'constant' && typeof node.value === 'string') {
      node.value = translateUiText(node.value, hass, onReady);
    }
    if (node.constant && typeof node.constant === 'object' && typeof node.constant.value === 'string') {
      node.constant.value = translateUiText(node.constant.value, hass, onReady);
    }
    for (const [key, value] of Object.entries(node)) {
      if (typeof value === 'string' && SCHEMA_TEXT_KEYS.has(key)) {
        node[key] = translateUiText(value, hass, onReady);
      } else if (key === 'options' && Array.isArray(value)) {
        // Plain-string options double as stored values: displayed through a
        // {value, label} pair so the translation never touches the config.
        // [value, label] pairs translate their label half.
        value.forEach((option, index) => {
          if (typeof option === 'string') {
            value[index] = { value: option, label: translateUiText(option, hass, onReady) };
          } else if (Array.isArray(option) && typeof option[1] === 'string') {
            option[1] = translateUiText(option[1], hass, onReady);
          } else {
            walk(option);
          }
        });
      } else if (value && typeof value === 'object') {
        walk(value);
      }
    }
  };
  walk(schema);
  return schema;
}

/**
 * Translates English text to the user's language. Returns null when
 * translation is unavailable (offline, unsupported language, altered
 * placeholders, ...): callers fall back to the original text.
 */
export async function translateText(text, hass) {
  if (!isModuleTranslationEnabled()) return null;
  const lang = getTranslationTargetLang(hass);
  if (!lang || !text || typeof text !== 'string') return null;

  const cacheKey = `${lang} ${textHash(text)}`;
  if (memCache.has(cacheKey)) return memCache.get(cacheKey);
  const stored = loadStorageCache().get(cacheKey);
  if (stored) {
    memCache.set(cacheKey, stored);
    return stored;
  }

  const serviceLang = SERVICE_LANG[lang] ?? lang.split('-')[0];
  const { protectedText, tokens } = protectText(text);

  const translatable = protectedText.slice(0, TOTAL_MAX);
  const untranslatedTail = protectedText.slice(TOTAL_MAX);

  // A sane translation keeps a comparable amount of visible text: on-device
  // models occasionally return a truncated result, which must be rejected so
  // the next engine (or the original text) takes over.
  const visibleLength = (value) => value.replace(/⟦\s*\d+\s*⟧/g, '').trim().length;
  const looksComplete = (source, translated) => {
    const sourceLength = visibleLength(source);
    return sourceLength <= 20 || visibleLength(translated) >= sourceLength * 0.4;
  };

  const translatedChunks = [];
  for (const chunk of splitChunks(translatable)) {
    // Placeholder-only or whitespace chunks skip the engines entirely.
    if (!/[a-zA-Z]/.test(chunk.replace(/⟦\s*\d+\s*⟧/g, ''))) {
      translatedChunks.push(chunk);
      continue;
    }
    let translated = await translateChunkWithBrowserApi(chunk, serviceLang);
    if (!translated || !looksComplete(chunk, translated)) {
      translated = await translateChunkWithBCT(chunk, serviceLang, hass);
    }
    if ((!translated || !looksComplete(chunk, translated)) && !bctTranslateSeen) {
      translated = await translateChunkWithEndpoint(chunk, serviceLang);
    }
    if (!translated || !looksComplete(chunk, translated)) return null;
    translatedChunks.push(translated);
  }

  const glossed = applyGlossary(translatedChunks.join(''), lang, setupTranslation(hass)('editor.card_names.popup'));
  const restored = restoreText(glossed + untranslatedTail, tokens);
  if (!restored) return null;

  memCache.set(cacheKey, restored);
  loadStorageCache().set(cacheKey, restored);
  saveStorageCache();
  return restored;
}
