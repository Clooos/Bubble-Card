import { describe, expect, test } from '@jest/globals';
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const {
  collectInitialModules,
  collectEditorKeys,
  collectNativeKeys,
  buildRuntimeSlice,
} = require('../../build/runtime-slice.cjs');

const HERE = path.dirname(fileURLToPath(import.meta.url));
const fullDict = JSON.parse(fs.readFileSync(path.join(HERE, 'editor/en.json'), 'utf8'));

const initialModules = collectInitialModules();
const slice = buildRuntimeSlice(fullDict, initialModules);

const getAtPath = (dict, key) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict);

// Only a slice of the English dictionary is bundled; the rest is fetched as
// bubble-card-en.json when the editor opens. These guard the two ways that
// split could silently start showing raw keys to users.
describe('bundled English runtime slice', () => {
  test('covers every editor key the initial bundle can ask for', () => {
    const missing = [...collectEditorKeys(initialModules)]
      .filter((key) => typeof getAtPath(fullDict, key) === 'string')
      .filter((key) => getAtPath(slice, key) === undefined);

    expect(missing).toEqual([]);
  });

  // The slice is derived by scanning for key literals, which only works while
  // no key is assembled from fragments. A composed key would be invisible to
  // the scan and would render as a raw key until the fetch lands.
  test('no initial-bundle module composes a dictionary key dynamically', () => {
    const composed = [];
    for (const file of initialModules) {
      const source = fs.readFileSync(file, 'utf8');
      // `editor.…${…}` in a template literal, or a concatenation onto a key.
      if (/`[^`]*editor\.[A-Za-z0-9_.]*\$\{/.test(source) ||
          /['"]editor\.[A-Za-z0-9_.]*['"]\s*\+/.test(source)) {
        composed.push(path.relative(process.cwd(), file));
      }
    }

    expect(composed).toEqual([]);
  });

  // A key whose value is "@<hass key>|<fallback>" is absent from every
  // per-language file on purpose, so the bundled English value is the only
  // thing standing between 60+ languages and a raw key on screen.
  test('keeps every natively-resolved key, which all languages fall back to', () => {
    const missing = [...collectNativeKeys(fullDict)]
      .filter((key) => getAtPath(slice, key) === undefined);

    expect(missing).toEqual([]);
  });

  test('is a strict subset of the full dictionary, and much smaller', () => {
    const sliceKeys = [...collectNativeKeys(slice), ...collectEditorKeys(initialModules)];
    for (const key of sliceKeys) {
      const value = getAtPath(slice, key);
      if (value !== undefined) expect(getAtPath(fullDict, key)).toEqual(value);
    }

    expect(JSON.stringify(slice).length).toBeLessThan(JSON.stringify(fullDict).length / 3);
  });

  // The scan walks static imports from the entry point; if that ever drifts
  // from what webpack actually bundles, the slice is derived from the wrong set
  // of files. The entry and a few things only it pulls in stand in for that.
  test('resolves the initial-bundle module set from the entry point', () => {
    const relative = initialModules.map((f) => path.relative(process.cwd(), f));

    expect(relative).toContain('src/bubble-card.js');
    expect(relative).toContain('src/cards/pop-up/onboarding.js');
    expect(relative).toContain('src/tools/localize.js');
    // Lazily imported, so it must NOT be treated as part of the initial bundle.
    expect(relative).not.toContain('src/editor/bubble-card-editor.js');
    expect(relative).not.toContain('src/modules/store.js');
  });
});
