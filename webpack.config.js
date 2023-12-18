const webpack = require ('webpack');
const path = require('path');

module.exports = [
  {
    mode: 'production',
    entry: {
      'bubble-card': './src/bubble-card.ts',
      'bubble-pop-up': './src/bubble-pop-up.ts',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
  },    
  {
    mode: 'production',
    entry: {
      'bubble-card': './src/bubble-card.ts',
      'bubble-pop-up': './src/bubble-pop-up.ts',
    },
    output: {
      path: path.resolve('/Volumes/config/www'),
      filename: '[name].js',
    },
  }
];

