const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const scssRegex = /\.scss$/;


const cssLoader = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    'style-loader',
    'css-loader'
  ]
};

const cssModuleLoader = {
  test: cssModuleRegex,
  use: [
    'style-loader',
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
    'style-loader', // creates style nodes from JS strings
    'css-loader', // translates CSS into CommonJS
    'sass-loader' // compiles Sass to CSS, using Node Sass by default
  ]
};

module.exports = [cssLoader, cssModuleLoader, sassLoader];
