const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  output: {
    filename: '[name].[hash].bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../dist/vendor-manifest.json'),
      context: __dirname,
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },  
});
