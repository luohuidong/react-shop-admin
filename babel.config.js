module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel'
  ];

  return {
    presets,
    plugins
  };
};
