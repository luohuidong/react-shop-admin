import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import 'antd/dist/antd.css'

import Layout from 'component/layout/'
import Home from 'page/home/'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect from="*" to="/" />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
