import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { orderRoute } from 'util/route';
import PageLoading from 'component/page-loading/index';
import ErrorPage from 'page/404/index';

const LoadableOrderList = Loadable({
  loader: () => import('./list/index.js'),
  loading: PageLoading,
});

const LoadableOrderDetail = Loadable({
  loader: () => import('./detail/index.js'),
  loading: PageLoading,
});

class ProductRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={orderRoute.list} component={LoadableOrderList} />
        <Route path={`${orderRoute.detail}/:orderId`} component={LoadableOrderDetail} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default ProductRoute;
