const styleLoader = require('./style.js');
const babelLoader = require('./babel.js');

module.exports = [
  babelLoader,
  ...styleLoader,
];
