import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { userDataEventListener } from 'util/custom-event';
import { getUserDataStorage } from 'util/storege';
import Login from 'page/login/index';
import PageRoute from 'page/index';

class App extends React.Component {
  state = {
    userData: getUserDataStorage()
  }
  componentDidMount() {
    userDataEventListener(this.handleUserDataChange);
  }

  /**
   * @param {string} action login or logout
   */
  handleUserDataChange = (action) => {
    this.setState({
      userData: getUserDataStorage()
    });
  }

  handleRender = ({ location }) => {
    return this.state.userData ? <PageRoute location={location} /> : <Login />;
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
