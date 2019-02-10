import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { getUserDataStorage } from 'util/storege';
import store from './store.js';
import Login from 'page/login/index.js';
import PageRoute from 'page/index';

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

  handleRender = ({ location }) => {
    const { userData } = this.state;
    // const userData = getUserDataStorage();
    const keys = Object.keys(userData);
    return keys.length === 0 ? <Login /> : <PageRoute location={location} />;
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
