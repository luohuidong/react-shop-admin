import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { orderRoute } from 'util/route';
import ErrorPage from 'page/404/index';
import OrderList from './list/index.js';
import OrderDetail from './detail/index.js';

class ProductRoute extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: 50, backgroundColor: 'white' }}>
          <Switch>
            <Route exact path={orderRoute.list} component={OrderList} />
            <Route path={`${orderRoute.detail}/:orderId`} component={OrderDetail} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ProductRoute;
