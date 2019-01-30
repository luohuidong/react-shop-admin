import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { productRoute } from 'util/route';
import ErrorPage from 'page/404/index';
import ProductList from './list/index.js';
import ProductEditor from './editor/index.js';

class ProductRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={productRoute.list} component={ProductList} />
        <Route exact path={productRoute.editor} component={ProductEditor} />
        <Route path={`${productRoute.editor}/:productId`} component={ProductEditor} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default ProductRoute;
