const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 判断是否为生产模式
const prodMode = process.argv.includes('production');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const scssRegex = /\.scss$/;

const useStyleLoader = prodMode ? MiniCssExtractPlugin.loader : 'style-loader';

const cssLoader = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    useStyleLoader,
    'css-loader'
  ]
};

const cssModuleLoader = {
  test: cssModuleRegex,
  use: [
    useStyleLoader,
    {
      loader: 'css-loader',
      options: {
        modules: true
      }
    }
  ]
};

const sassLoader = {
  test: scssRegex,
  use: [
    useStyleLoader,
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    }, // translates CSS into CommonJS
    'sass-loader' // compiles Sass to CSS, using Node Sass by default
  ]
};

module.exports = [cssLoader, cssModuleLoader, sassLoader];
