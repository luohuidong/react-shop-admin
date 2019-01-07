const cssLoader = {
  test: /\.css$/,
  exclude: /\.module.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};

const cssModuleLoader = {
  test: /\.module.css$/,
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
  test: /\.scss$/,
  use: [
    'style-loader', // creates style nodes from JS strings
    'css-loader', // translates CSS into CommonJS
    'sass-loader' // compiles Sass to CSS, using Node Sass by default
  ]
};

module.exports = [cssLoader, cssModuleLoader, sassLoader];
