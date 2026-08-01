#!/usr/bin/env node
// i18n consistency checker for Bubble Card.
//   node src/translations/check-i18n.mjs          -> checks t() keys vs en.json/runtime.js
//   node src/translations/check-i18n.mjs --langs  -> also checks every editor/<lang>.json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EN_PATH = path.join(ROOT, 'translations/editor/en.json');
const RUNTIME_PATH = path.join(ROOT, 'translations/runtime.js');

const en = JSON.parse(fs.readFileSync(EN_PATH, 'utf8'));
const runtimeSource = fs.readFileSync(RUNTIME_PATH, 'utf8');

function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out[key] = v;
    else if (v && typeof v === 'object') flatten(v, key, out);
  }
  return out;
}

const enFlat = flatten(en);

// 1. Collect every t('...') key used in src
const usedKeys = new Map(); // key -> [file:line]
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(p); continue; }
    if (!/\.js$/.test(entry.name) || /\.test\.js$/.test(entry.name)) continue;
    const src = fs.readFileSync(p, 'utf8');
    // Any quoted editor./cards. path counts as a usage: t('...'), labelKey
    // tables, and indirect setupTranslation(...)('...') calls all match.
    for (const m of src.matchAll(/['"]((?:editor|cards)\.[a-z0-9_][a-z0-9_.]*)['"]/g)) {
      const key = m[1];
      if (key.endsWith('_') || key.endsWith('.')) continue; // dynamic key prefixes

      const line = src.slice(0, m.index).split('\n').length;
      if (!usedKeys.has(key)) usedKeys.set(key, []);
      usedKeys.get(key).push(`${path.relative(ROOT, p)}:${line}`);
    }
  }
}
walk(ROOT);

let errors = 0;
for (const [key, sites] of usedKeys) {
  if (key.startsWith('cards.')) {
    const short = key.slice('cards.'.length);
    if (!runtimeSource.includes(`'${short}'`)) {
      console.log(`MISSING runtime key: ${key}  (${sites[0]})`);
      errors++;
    }
  } else if (!(key in enFlat)) {
    console.log(`MISSING en.json key: ${key}  (${sites[0]})`);
    errors++;
  }
}

for (const key of Object.keys(enFlat)) {
  if (!usedKeys.has(key)) console.log(`ORPHAN en.json key (never used): ${key}`);
}

console.log(`\nUsed keys: ${usedKeys.size} | en.json keys: ${Object.keys(enFlat).length} | errors: ${errors}`);

// 2. Optional: per-language parity checks
if (process.argv.includes('--langs')) {
  const dir = path.join(ROOT, 'translations/editor');
  // Keys translators must provide: every en key whose value is NOT a native '@' pointer
  const translatable = Object.keys(enFlat).filter((k) => enFlat[k][0] !== '@');
  const placeholderSet = (s) => new Set([...s.matchAll(/\{[a-z0-9_]+\}/g)].map((m) => m[0]));
  let langErrors = 0;
  for (const file of fs.readdirSync(dir).sort()) {
    if (!file.endsWith('.json') || file === 'en.json' || file.startsWith('_')) continue;
    const lang = file.replace('.json', '');
    let flat;
    try {
      flat = flatten(JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')));
    } catch (e) {
      console.log(`${lang}: INVALID JSON (${e.message})`); langErrors++; continue;
    }
    const missing = translatable.filter((k) => !(k in flat));
    const extra = Object.keys(flat).filter((k) => !(k in enFlat));
    const native = Object.keys(flat).filter((k) => enFlat[k]?.[0] === '@');
    const empty = Object.keys(flat).filter((k) => !String(flat[k]).trim());
    const emDash = Object.keys(flat).filter((k) => /—/.test(flat[k]));
    const badPh = translatable.filter((k) => k in flat &&
      [...placeholderSet(enFlat[k])].some((p) => !placeholderSet(flat[k]).has(p)));
    const report = [];
    if (missing.length) report.push(`missing ${missing.length}: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '…' : ''}`);
    if (extra.length) report.push(`extra ${extra.length}: ${extra.slice(0, 5).join(', ')}${extra.length > 5 ? '…' : ''}`);
    if (native.length) report.push(`native '@' keys present ${native.length}: ${native.slice(0, 3).join(', ')}`);
    if (empty.length) report.push(`empty ${empty.length}: ${empty.slice(0, 5).join(', ')}`);
    if (emDash.length) report.push(`em-dash ${emDash.length}: ${emDash.slice(0, 5).join(', ')}`);
    if (badPh.length) report.push(`bad placeholders ${badPh.length}: ${badPh.slice(0, 5).join(', ')}`);
    if (report.length) { console.log(`${lang}: ${report.join(' | ')}`); langErrors++; }
    else console.log(`${lang}: OK (${Object.keys(flat).length} keys)`);
  }
  console.log(`\nLanguages with problems: ${langErrors}`);
  if (langErrors) process.exitCode = 1;
}
if (errors) process.exitCode = 1;
