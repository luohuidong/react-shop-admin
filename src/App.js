import React, { Component } from 'react';
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
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
