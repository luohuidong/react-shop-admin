const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 依赖的库数组
    library: [
      '@babel/polyfill',
      'antd',
      'axios',
      'braft-editor',
      'classnames',
      'prop-types',
      'react',
      'react-dom',
      'react-loadable',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dll'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname, '../dll/manifest.json'),
      name: '[name]',
    }),
  ],
};
