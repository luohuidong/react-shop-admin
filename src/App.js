import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

import Login from 'page/login/';
import Layout from 'component/layout/';
import Home from 'page/home/';

class LayoutWrapper extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
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
            <Route path="/login" component={Login} />
            <Route path="/" component={LayoutWrapper} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
