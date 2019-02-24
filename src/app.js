import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Loadable from 'react-loadable';

import PageLoading from 'component/login-page-loading';
import { userDataEventListener } from 'util/custom-event';
import { getUserDataStorage } from 'util/storege';
import PageRoute from 'page/index';

const LoadableLoginPage = Loadable({
  loader: () => import('page/login/index'),
  loading: PageLoading
});

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
    return this.state.userData ? <PageRoute location={location} /> : <LoadableLoginPage />;
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
