import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import store from './store.js';
import Login from 'page/login/index.js';
import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';
import ErrorPage from 'page/404/index.js';
import UserList from 'page/user/index';
import { ProductRouter as Product } from 'page/product/index';

class LayoutWrapper extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/user' component={UserList} />
          <Route path='/product' component={Product} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
  }
}

class App extends React.Component {
  state = {
    userData: {}
  }

  componentWillMount() {
    const userData = store.getState().login.data;
    this.setState({ userData });
  }

  componentDidMount() {
    store.subscribe(() => {
      const userData = store.getState().login.data;
      this.setState({ userData });
    });
  }

  handleRender = () => {
    const { userData } = this.state;
    const keys = Object.keys(userData);
    return keys.length === 0 ? <Login /> : <LayoutWrapper />;
  }
  render() {
    return (
      <Switch>
        <Route path="/" render={this.handleRender} />
      </Switch>
    );
  }
}

export default hot(App);
