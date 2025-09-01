const webpack = require ('webpack');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

const rules = [
  {
     test: /\.css/,
     type: 'asset/source',
  }
];

const performance = {
  hints: false,
}

module.exports = [
  {
    plugins: [
      new CompressionPlugin({
                  algorithm: 'gzip'
              }),      
    ],
    mode: 'production',
    entry: {
      'bubble-card': './src/bubble-card.js',
      'bubble-pop-up-fix': './src/bubble-pop-up-fix.js'
    },
    module: {
      rules,
    },
    performance,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    }
  },

  // My Home Assistant test server

  {
    mode: 'development',
    entry: {
      'bubble-card': './src/bubble-card.js',
      'bubble-pop-up-fix': './src/bubble-pop-up-fix.js'
    },
    module: {
      rules,
    },
    performance,
    output: {
      path: path.resolve(__dirname, 'www'),
      filename: '[name].js'
    }
  }
];
