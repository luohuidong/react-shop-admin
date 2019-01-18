import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Login from 'page/login/index.js';
import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';
import ErrorPage from 'page/404/index.js';

class LayoutWrapper extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
  }
}

class App extends React.Component {
  handleRender = () => {
    const userData = this.props.userData;
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

App.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default App;
