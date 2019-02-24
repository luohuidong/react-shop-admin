const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 依赖的库数组
    vendor: [
      'prop-types',
      'react',
      'react-dom',
      'react-router-dom',
      'antd'
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, '../dist', '[name]-manifest.json'),
      context: __dirname
    }),
  ],
};
