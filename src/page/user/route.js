import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import PageLoading from 'component/page-loading/index';
import { userRoute } from 'util/route';
import ErrorPage from 'page/404/index';

const UserListUserList = Loadable({
  loader: () => import('./list/index.js'),
  loading: PageLoading,
});

class ProductRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={userRoute.list} component={UserListUserList} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default ProductRoute;
