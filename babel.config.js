module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
    ['import', { // antd 按需加载
      'libraryName': 'antd',
      'libraryDirectory': 'es',
      'style': 'css' // `style: true` 会加载 less 文件
    }]
  ];

  return {
    presets,
    plugins
  };
};
