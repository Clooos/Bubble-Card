const webpack = require ('webpack');
const path = require('path');

// Load local environment variables from .env (not committed to git)
try { require('fs').readFileSync('.env', 'utf8').split('\n').forEach(line => { const [k, v] = line.split('='); if (k && v) process.env[k.trim()] = v.trim(); }); } catch {}  

const rules = [
  {
     test: /\.css/,
     type: 'asset/source',
  }
];

const performance = {
  hints: false,
}

// Ships the per-language editor dictionaries (src/translations/editor/*.json)
// as bubble-card-<lang>.json next to the bundle. They are fetched locally by
// src/tools/localize.js when the editor opens; en.json is bundled so it is
// not emitted, and _-prefixed files are tooling artifacts.
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
            if (!file.endsWith('.json') || file.startsWith('_') || file === 'en.json') continue;
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
    output: {
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
    output: {
      path: process.env.HA_PATH || path.resolve(__dirname, 'www'),
      filename: '[name].js'
    }
  }
];
