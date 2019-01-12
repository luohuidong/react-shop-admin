import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from 'page/login/index.js';
import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';

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
  handleRender = () => {
    const userData = this.props.userData;
    const keys = Object.keys(userData);
    return keys.length === 0 ? <Login /> : <LayoutWrapper />;
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
  userData: PropTypes.object.isRequired,
};

export default App;
