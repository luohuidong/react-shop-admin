const styleLoader = require('./style.js');
const babelLoader = require('./babel.js');
const imageLoader = require('./image.js');

module.exports = [
  babelLoader,
  imageLoader,
  ...styleLoader,
];
