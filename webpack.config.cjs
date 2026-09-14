const webpack = require ('webpack');
const path = require('path');

// Load local environment variables from .env (not committed to git)
try { require('fs').readFileSync('.env', 'utf8').split('\n').forEach(line => { const [k, v] = line.split('='); if (k && v) process.env[k.trim()] = v.trim(); }); } catch {}  

const rules = [
  {
     test: /\.css/,
     type: 'asset/source',
  },
  {
    // Keeps only the keys the initial bundle can reach; the full dictionary is
    // emitted as bubble-card-en.json below and fetched when the editor opens.
    test: /translations[\\/]editor[\\/]en\.json$/,
    type: 'json',
    use: [require.resolve('./build/en-slice-loader.cjs')],
  }
];

const performance = {
  hints: false,
}

// Ships the per-language editor dictionaries (src/translations/editor/*.json)
// as bubble-card-<lang>.json next to the bundle. They are fetched locally by
// src/tools/localize.js when the editor opens; _-prefixed files are tooling
// artifacts. English is emitted with the rest: only a small runtime slice of it
// is bundled (see the en-slice-loader rule above), so the editor fetches the
// full dictionary the same way every other language does.
//
// Flat, and not a translations/ subfolder, because that is the only layout
// HACS ships for a plugin: it only downloads files sitting directly in dist/
// (base.py gathers `treefile.path in ["", "dist"]`), so anything nested is
// silently left behind. The name is prefixed because the dev build writes
// into HA_PATH, which is a folder shared with every other custom card.
class EmitTranslationsPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('EmitTranslations', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'EmitTranslations', stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL },
        () => {
          const fs = require('fs');
          const dir = path.resolve(__dirname, 'src/translations/editor');
          for (const file of fs.readdirSync(dir)) {
            if (!file.endsWith('.json') || file.startsWith('_')) continue;
            const minified = JSON.stringify(JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')));
            compilation.emitAsset(
              `bubble-card-${file}`,
              new compiler.webpack.sources.RawSource(minified)
            );
          }
        }
      );
    });
  }
}

const plugins = [new EmitTranslationsPlugin()];

// Chunk filenames carry the release version so an updated bubble-card.js can
// never pair with a stale chunk left in the browser cache: Home Assistant's
// resource URL (`?v=N`) only busts the entry point, and the chunks are fetched
// by their own bare URLs.
const chunkVersion = require('fs')
  .readFileSync(path.resolve(__dirname, 'src/var/version.js'), 'utf8')
  .match(/'v?([^']+)'/)[1]
  .replace(/[^\w.-]/g, '');

// Async chunks are emitted flat into the output folder (the only layout HACS
// ships, see EmitTranslationsPlugin above) and prefixed, because the dev build
// writes into a www folder shared with every other custom card.
//
// ESM output with `chunkLoading: 'import'` is what makes this work without a
// publicPath: the runtime emits a plain `import('./bubble-card-chunk-*.js')`,
// which the browser resolves against the URL bubble-card.js was loaded from,
// so the same build works from /local/ and from /hacsfiles/<dir>/ alike.
// Bubble Card is registered as a `JavaScript Module` resource, so webpack's
// script-tag based `publicPath: 'auto'` could not be used here: it inspects
// `document.currentScript`, which is null inside a module.
const chunkOutput = {
  chunkFilename: `bubble-card-chunk-[name].${chunkVersion}.js`,
  module: true,
  chunkLoading: 'import',
  chunkFormat: 'module',
  library: { type: 'module' },
};

const experiments = { outputModule: true };

module.exports = [
  {
    mode: 'production',
    entry: {
      'bubble-card': './src/bubble-card.js'
    },
    module: {
      rules,
    },
    performance,
    plugins,
    experiments,
    output: {
      ...chunkOutput,
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    }
  },

  // My Home Assistant test server

  {
    mode: 'development',
    entry: {
      'bubble-card': './src/bubble-card.js'
    },
    module: {
      rules,
    },
    performance,
    plugins,
    experiments,
    output: {
      ...chunkOutput,
      path: process.env.HA_PATH || path.resolve(__dirname, 'www'),
      filename: '[name].js'
    }
  }
];
