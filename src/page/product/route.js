import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { productRoute } from 'util/route';
import ErrorPage from 'page/404/index';
import ProductList from './list/index.js';
import ProductEditor from './editor/index.js';
import ProductDetail from './detail/index';

class ProductRoute extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: 50, backgroundColor: 'white' }}>
          <Switch>
            <Route exact path={productRoute.list} component={ProductList} />
            <Route path={`${productRoute.editor}/:productId?`} component={ProductEditor} />
            <Route path={`${productRoute.detail}/:productId`} component={ProductDetail} />
            <Route component={ErrorPage} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default ProductRoute;
