import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store.js';

import 'antd/dist/antd.css';
import './index.css';
import App from 'page/app/index.js';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
