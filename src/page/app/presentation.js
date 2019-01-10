import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from 'page/login/index.js';
import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';

import { getUserDataStorage } from 'util/storege';

class LayoutWrapper extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    );
  }
}

class App extends Component {
  componentDidMount() {
    this.checkUserData();
  }

  handleRender() {
    const loggedIn = getUserDataStorage();
    return !loggedIn ? <Login /> : <LayoutWrapper />;
  }

  checkUserData() {
    const userData = getUserDataStorage();
    if (userData) {
      this.props.doLogin(userData);
    }
  }

  render() {

    return (
      <div>
        <Router>
          <Route path="/" exact render={this.handleRender} />
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  doLogin: PropTypes.func.isRequired,
};

export default App;
