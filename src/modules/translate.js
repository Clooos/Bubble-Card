// Client-side machine translation for Module Store content (descriptions are
// published in English on GitHub). Runs entirely on the user's side: the
// browser's built-in on-device Translator API when available, with a public
// translation endpoint as fallback. Results are cached per language in memory.
//
// Code blocks, HTML tags and URLs are protected with placeholders before
// translation and restored afterwards: they must never be sent to (or altered
// by) a translation engine. If restoration fails, the original text is kept.

const memCache = new Map(); // `${lang} ${hash}` -> translated string

const CHUNK_MAX = 1200;   // per-request payload cap (keeps GET URLs well under limits)
const TOTAL_MAX = 8000;   // beyond this, the remainder stays untranslated
const REQUEST_SPACING_MS = 350;      // serial queue spacing between endpoint calls
const RATE_LIMIT_COOLDOWN_MS = 5 * 60 * 1000; // back off after a 429
const STORAGE_KEY = 'bubble-card-translations-cache';
const STORAGE_MAX_ENTRIES = 300;

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

export function getTranslationTargetLang(hass) {
  const lang = hass?.locale?.language ?? 'en';
  if (lang === 'en' || lang === 'en-GB') return null;
  return lang;
}

// Segments that must never be translated: fenced/inline code, code-ish
// elements, any HTML tag, URLs, and brand/product names.
const PROTECT_RE = /(```[\s\S]*?```|<code-block>[\s\S]*?<\/code-block>|<pre>[\s\S]*?<\/pre>|<code>[\s\S]*?<\/code>|`[^`\n]*`|<[^>\n]+>|https?:\/\/\S+|Bubble Card Tools|Bubble Card|Module Store|Home Assistant|GitHub|Patreon|YAML)/g;

function protectText(text) {
  const tokens = [];
  const protectedText = text.replace(PROTECT_RE, (match) => {
    tokens.push(match);
    return `⟦${tokens.length - 1}⟧`;
  });
  return { protectedText, tokens };
}

function restoreText(text, tokens) {
  let missing = false;
  const seen = new Set();
  const restored = text.replace(/⟦\s*(\d+)\s*⟧/g, (_, index) => {
    const token = tokens[Number(index)];
    if (token === undefined) { missing = true; return ''; }
    seen.add(Number(index));
    return token;
  });
  if (missing || seen.size !== tokens.length) return null;
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
    })();
    browserTranslators.set(targetLang, promise.catch(() => null));
  }
  return browserTranslators.get(targetLang);
}

// Chrome only starts a language pack download from within a user gesture.
// This arms a one-shot listener so the first click anywhere warms the
// translator up transparently; afterwards everything runs on-device.
let warmupInstalled = false;
export function warmupBrowserTranslator(hass) {
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
 * Translates English text to the user's language. Returns null when
 * translation is unavailable (offline, unsupported language, altered
 * placeholders, ...): callers fall back to the original text.
 */
export async function translateText(text, hass) {
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
      translated = await translateChunkWithEndpoint(chunk, serviceLang);
    }
    if (!translated || !looksComplete(chunk, translated)) return null;
    translatedChunks.push(translated);
  }

  const restored = restoreText(translatedChunks.join('') + untranslatedTail, tokens);
  if (!restored) return null;

  memCache.set(cacheKey, restored);
  loadStorageCache().set(cacheKey, restored);
  saveStorageCache();
  return restored;
}
