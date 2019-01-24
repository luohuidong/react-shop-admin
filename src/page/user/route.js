import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { userRoute } from 'util/route';
import ErrorPage from 'page/404/index';
import UserList from './list/index.js';

class ProductRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={userRoute.list} component={UserList} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default ProductRoute;
