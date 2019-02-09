import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { orderRoute } from 'util/route';
import ErrorPage from 'page/404/index';
import OrderList from './list/index.js';
import OrderDetail from './detail/index.js';

class ProductRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={orderRoute.list} component={OrderList} />
        <Route path={`${orderRoute.detail}/:orderId`} component={OrderDetail} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default ProductRoute;
