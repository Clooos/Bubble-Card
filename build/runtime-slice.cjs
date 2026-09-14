// Shared tooling for the split of the bundled English editor dictionary.
//
// src/translations/editor/en.json is the full editor dictionary (~42 KB). Only a
// small part of it is reachable from the initial bundle; the rest belongs to the
// lazily loaded editor chunk and is fetched as bubble-card-en.json, exactly like
// every other language. This module decides which keys stay bundled.
//
// Used by build/en-slice-loader.cjs (the build) and by
// src/translations/runtime-slice.test.js (the guard that keeps it honest).

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'src');
const ENTRY = path.join(SRC, 'bubble-card.js');

function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:\\])\/\/[^\n]*/g, '$1');
}

// Static `import ... from '...'` / `export ... from '...'` / `import '...'`.
// The [^'"] guard before `from` is what keeps a dynamic
// `import(/* webpackChunkName */ 'js-yaml')` from being picked up: everything
// the initial chunk does NOT contain hangs off one of those.
const STATIC_FROM = /(?:^|[\s;}])(?:import|export)(?![\w$])(?:(?!['"])[\s\S])*?from\s*(['"])([^'"]+)\1/g;
const BARE_IMPORT = /(?:^|[\s;}])import\s*(['"])([^'"]+)\1/g;

function resolveSpecifier(fromFile, specifier) {
  if (!specifier.startsWith('.')) return null; // bare package, not our source
  const base = path.resolve(path.dirname(fromFile), specifier);
  for (const candidate of [base, `${base}.js`, path.join(base, 'index.js')]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
}

/**
 * Every source file the initial chunk is built from: the static import closure
 * of the entry point. Mirrors what webpack puts in bubble-card.js, and is
 * cross-checked against the real build in the guard test.
 */
function collectInitialModules(entry = ENTRY) {
  const seen = new Set();
  const queue = [entry];

  while (queue.length) {
    const file = queue.pop();
    if (seen.has(file)) continue;
    seen.add(file);

    const source = stripComments(fs.readFileSync(file, 'utf8'));
    for (const re of [STATIC_FROM, BARE_IMPORT]) {
      re.lastIndex = 0;
      let match;
      while ((match = re.exec(source)) !== null) {
        const resolved = resolveSpecifier(file, match[2]);
        if (resolved && /\.js$/.test(resolved)) queue.push(resolved);
      }
    }
  }

  return [...seen].sort();
}

const KEY_LITERAL = /['"`](editor\.[A-Za-z0-9_.]+)['"`]/g;

/** Every `editor.*` dictionary key written as a string literal in these files. */
function collectEditorKeys(files) {
  const keys = new Set();
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    let match;
    KEY_LITERAL.lastIndex = 0;
    while ((match = KEY_LITERAL.exec(source)) !== null) keys.add(match[1]);
  }
  return keys;
}

/**
 * A key whose English value is "@<hass.localize key>|<fallback>" is deliberately
 * absent from every per-language file: it resolves through Home Assistant's own
 * catalog, and the bundled English value carries the `@` indirection plus the
 * fallback text. Those keys are the last resort for all 60+ languages, so they
 * stay bundled whether the initial chunk mentions them or not.
 */
function collectNativeKeys(dict, prefix = '', out = new Set()) {
  for (const [key, value] of Object.entries(dict)) {
    const full = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object') collectNativeKeys(value, full, out);
    else if (typeof value === 'string' && value[0] === '@') out.add(full);
  }
  return out;
}

function getAtPath(dict, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict);
}

function setAtPath(target, key, value) {
  const parts = key.split('.');
  const last = parts.pop();
  let node = target;
  for (const part of parts) {
    if (typeof node[part] !== 'object' || node[part] === null) node[part] = {};
    node = node[part];
  }
  node[last] = value;
}

/** The dictionary that stays in bubble-card.js. */
function buildRuntimeSlice(fullDict, files = collectInitialModules()) {
  const keys = new Set([...collectNativeKeys(fullDict), ...collectEditorKeys(files)]);
  const slice = {};
  for (const key of [...keys].sort()) {
    const value = getAtPath(fullDict, key);
    if (typeof value === 'string') setAtPath(slice, key, value);
  }
  return slice;
}

module.exports = {
  ENTRY,
  collectInitialModules,
  collectEditorKeys,
  collectNativeKeys,
  buildRuntimeSlice,
};
