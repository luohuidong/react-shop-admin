const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loader = require('./loader/index.js');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: loader
  },
  resolve: {
    alias: {
      'component': path.resolve(__dirname, '../src/component/'),
      'page': path.resolve(__dirname, '../src/page/'),
      'util': path.resolve(__dirname, '../src/util/'),
      'service': path.resolve(__dirname, '../src/service/'),
    }
  },
};
