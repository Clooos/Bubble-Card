const webpack = require ('webpack');
const path = require('path');

module.exports = [
  {
    mode: 'production',
    entry: {
      'bubble-card': './src/bubble-card.ts',
      'bubble-pop-up-fix': './src/bubble-pop-up-fix.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    }
  },    
  
  // My Home Assistant test server

  {
    mode: 'development',
    entry: {
      'bubble-card': './src/bubble-card.ts',
      'bubble-pop-up-fix': './src/bubble-pop-up-fix.ts'
    },
    output: {
      path: path.resolve('/Volumes/config/www'),
      filename: '[name].js'
    }
  }
];
