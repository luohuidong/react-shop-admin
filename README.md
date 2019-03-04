# 电商后台项目

React、Redux、React-Redux、React Router、Ant Design 简易电商后台项目

## 运行项目

- 项目根目录执行 `npm i` 安装依赖。依赖安装完毕之后，执行 `npm start` 运行项目。

- 在线 [demo](http://reactshopadmin.luohuidong.cn/)

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
- [x] 订单
  - [x] 订单详情
  - [x] 订单列表

## 目录结构

```
.
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── LICENCE.MD
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public // 该文件夹定了 webpack HtmlWebpackPlugin 的模板
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── app.js
│   ├── component // 该文件夹存放着所有的复用组件
│   ├── index.js
│   ├── index.scss
│   ├── page // 该文件夹存放着所有的页面组件
│   ├── service // 该文件夹定义了各类别接口调取函数
│   ├── store.js // redux store 定义在这里
│   └── util // 该文件夹存放着工具类函数和全局配置
├── tsconfig.json
└── webpack 
    ├── loader
    ├── webpack.common.js
    ├── webpack.dev.js
    └── webpack.prod.js
```

### page 文件夹

```
.
├── 404 // 404 页面
│   ├── index.js
│   └── style.scss
├── category // 商品品类模块
│   ├── index.js // 模块对外接口
│   ├── list // 列表页面
│   ├── reducer.js // 模块中所有页面的 reducer
│   └── route.js // 模块中所有页面的 route
├── home // 首页
│   ├── actionTypes.js
│   ├── actions.js
│   ├── index.js // 首页对外接口
│   ├── reducer.js
│   └── view // 视图相关组件
├── index.js // page 文件夹对外接口
├── login // 登录页面
│   ├── actionTypes.js
│   ├── actions.js
│   ├── index.js
│   ├── reducer.js
│   └── view
├── order // 订单模块
│   ├── detail
│   ├── index.js
│   ├── list // 列表页面
│   ├── reducer.js
│   └── route.js
├── product // 商品模块
│   ├── detail // 详情页面
│   ├── editor // 新增、修改页面
│   ├── index.js
│   ├── list // 列表页面
│   ├── reducer.js
│   └── route.js
├── reducer.js // 所有页面的 reducer
├── route.js // 所有页面的 route
└── user // 用户列表模块
    ├── index.js
    ├── list // 列表页面
    ├── reducer.js
    └── route.js
```

## 项目依赖

- React 全家桶
  - [React](https://reactjs.org/)
  - [React Dom](https://www.npmjs.com/package/react-dom)
  - [Redux](https://redux.js.org/)：React 应用数据管理。
  - [React Redux](https://react-redux.js.org/)：让 Redux 在 React 上使用更方便。
  - [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
  - [React Thunk](https://github.com/reduxjs/redux-thunk)：异步 Actions 解决方案。

- [Ant Design](https://ant.design/docs/react/introduce-cn)：蚂蚁金服开源 React UI 框架

- [Axios](https://github.com/axios/axios)

- ESlint：JavsScript 代码检测
  - [ESlint](https://eslint.org/docs/user-guide/getting-started)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)：让 ESlint 识别 React 语法。
  - [babel-eslint](https://github.com/babel/babel-eslint)：让 ESlint 识别最新的 ES 语法。

- [classnames](https://github.com/JedWatson/classnames)：简单易用的 className 组合工具，实现了类似于 vue 中 class 绑定的对象语法与数组语法的功能。

- webpack
  - [webpack](https://webpack.js.org/)
  - webpack-cli
  - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md)：自动帮我们生成 index.html 文件，并且在代码中自动帮我们加入所有的资源。
  - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)：每次打包之前，都会清空一下老的打包文件。
  - webpack-dev-server：提供一个简单的服务器，而且代码有修改之后，还会自动刷新。
  - webpack-merge：提取生产环境和开发环境相同的 webpack 配置，减少 webpack 配置代码的重复。
  - 样式处理
    - css-loader
    - style-loader
    - sass-loader
    - node-sass
  - babel
    - [babel-loader](https://webpack.js.org/loaders/babel-loader/)
    - [@babel/core](https://babeljs.io/docs/en/babel-core)
    - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
    - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
    - [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
    - [@babel/plugin-transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)
    - [@babel/plugin-transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator)
    - [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader)：用于 React 项目的热加载
  - mini-css-extract-plugin：打包时可将 css 提取到单独的文件。

## 所遇到的问题

- [x] 除了根路径，其他路径的页面不能通过输入 URL 进入。
- [x] 无法监听 sessionStorage 的变化
- [x] 页面卸载时取消异步请求

## 页面加载优化

当前项目主要存在的问题是第一次打开登陆页面的时候太慢了，严重影响了体验。主要的原因就是打包的文件太大了，在打包没有优化的时候，就相当于用户无论使用哪个页面，都必须等待整个网站的所有代码都下载下来之后页面才展示。其实这个是没有必要的，只需要用户使用哪个页面，就加载哪个页面就好。

### 按需加载

应对上面所说的情况，其实很容易就能想到就是让打包文件变得更小，或者让打包文件拆分成一个个小的文件。因此可以参考 [Code Splitting][Code Splitting] 以及 [Lazy Loading][Lazy Loading]。

按照 [Lazy Loading][Lazy Loading] 中的提示，如果项目中使用的是 React，则可以参照  React Router 官网 [Code Splitting](https://reacttraining.com/react-router/web/guides/code-splitting) 将页面更改为按需加载。

处理完页面的按需加载之后，在处理一下项目所依赖的 packages，[Code Splitting][Code Splitting] Bundle Analysis 这一小节提供了好几种打包分析工具。这里使用比较直观的 [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

以下是使用 Webpack Bundle Analyzer 分析的结果：

![image](https://user-images.githubusercontent.com/26449894/53296189-3aafa800-3845-11e9-9c60-d139c738d415.png)

其中我们看到了 Ant Design 占的体积比较大，也就是说，项目把整个 Ant Design 都引入进去了，即便你没使用 Ant Design 中的某些组件。到 Ant Design 官网，其中 [Ant Design of React](https://ant.design/docs/react/introduce-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD) 这篇文章中提供了按需加载的方式。根据这个方式我们优化一下项目中的 Ant Design。

接下来我们利用 [UglifyjsWebpackPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) 对 JS 代码进行压缩。

另外我们将 CSS 抽离出来，可以使用 [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production)，需要注意的是，抽离出来的 CSS 是没有经过压缩的，因此需要 [Optimize CSS Assets Webpack Plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) 对 CSS 文件进行压缩。

### GZip 压缩

Nginx 上配置对 JavaScript 和 CSS 文件进行 GZip 压缩即可。进行 GZip 压缩能大幅度压缩加载文件的大小，从而加快网页加载速度。首页原本 20 多秒的加载速度，用了 GZip 压缩之后，加载速度变成 4 秒钟，就是这么丧心病狂.
