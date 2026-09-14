// Replaces the bundled English editor dictionary with the runtime slice.
//
// The full dictionary still ships, as dist/bubble-card-en.json, and is fetched
// when the editor opens like every other language (see EmitTranslationsPlugin in
// webpack.config.cjs and ensureEditorTranslations in src/tools/localize.js).
// Only the keys the initial bundle can actually reach stay in bubble-card.js.
//
// Jest does not run loaders, so the test environment keeps the full dictionary.
// src/translations/runtime-slice.test.js is what guards the split instead: it
// checks the slice covers every key the initial bundle can ask for.

const path = require('path');
const { buildRuntimeSlice, collectInitialModules } = require('./runtime-slice.cjs');

module.exports = function enSliceLoader(source) {
  this.cacheable && this.cacheable();

  const files = collectInitialModules();
  // A change to any initial-chunk module can change the set of keys in the
  // slice, so the build has to be redone when one of them moves.
  for (const file of files) this.addDependency(file);
  this.addDependency(path.resolve(__dirname, 'runtime-slice.cjs'));

  return JSON.stringify(buildRuntimeSlice(JSON.parse(source), files));
};
