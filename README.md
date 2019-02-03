# 电商后台项目

这是一个 React、Redux、React Router、Ant Design 电商后台项目。

## 电商后台模块

- [x] 登录
- [x] 用户列表
- [x] 商品
  - [x] 商品列表
  - [x] 商品页面
  - [x] 添加商品
  - [x] 编辑商品
  - [x] 商品详情
- [x] 品类
  - [x] 品类列表
  - [x] 新增品类
  - [x] 品类修改
- [ ] 订单
  - [ ] 订单详情模块
  - [ ] 订单列表

## 项目初始化

出于学习的目的，项目并没有使用 `create-react-app` 命令初始化，因此所有东西都是从零开始配置的。以下记录项目所使用的 packages。

- 使用 React 开发的，packages 中肯定少不了 React 全家桶：

  - [React](https://reactjs.org/)
  - [React Dom](https://www.npmjs.com/package/react-dom)
  - [Redux](https://redux.js.org/)：React 应用数据管理。
  - [React Redux](https://react-redux.js.org/)：让 Redux 在 React 上使用更方便。
  - [React Thunk](https://github.com/reduxjs/redux-thunk)：异步 Actions 解决方案。
  - [React Router](https://reacttraining.com/react-router/web/guides/quick-start)：实现 React 应用路由。

- UI 使用的是由蚂蚁金服开源的 [Ant Design](https://ant.design/docs/react/introduce-cn)

- HTTP 请求使用的是 [Axios](https://github.com/axios/axios)

- 为了确保项目的 coding styles 统一，因此使用了 [editorconfig](https://editorconfig.org/)

- 项目使用 ESlint 作为代码检测工具

  - [ESlint](https://eslint.org/docs/user-guide/getting-started)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)：让 ESlint 识别 React 语法。
  - [babel-eslint](https://github.com/babel/babel-eslint)：让 ESlint 识别最新的 ES 语法。

- 项目使用 webpack 打包：

  使用 webpack 最基础的两个 packages：

  - [webpack](https://webpack.js.org/)
  - webpack-cli

  另外三个 packages 也是少不了的了：

  - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md)：自动帮我们生成 index.html 文件，并且在代码中自动帮我们加入所有的资源。
  - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)：每次打包之前，都会清空一下老的打包文件。
  - webpack-dev-server：提供一个简单的服务器，而且代码有修改之后，还会自动刷新。

  使用下面的 package 能提取生产环境和开发环境相同的 webpack 配置，减少 webpack 配置代码的重复。

  - webpack-merge
  
  webpack 处理样式使用的 packages：

  - css-loader
  - style-loader
  - sass-loader
  - node-sass

  由于项目中会用到一些新的 ESMAScript 特性以及 JSX ，需要用到 babel 来处理，因此会用到下面的 packages。
  
  - [babel-loader](https://webpack.js.org/loaders/babel-loader/)
  - [@babel/core](https://babeljs.io/docs/en/babel-core)
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
  - [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
  - [@babel/plugin-transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)
  - [@babel/plugin-transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator)
  - [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)

  项目中使用了 [React Hot Loader](https://github.com/gaearon/react-hot-loader) 来配置热加载
