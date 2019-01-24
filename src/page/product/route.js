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
        <Route path={productRoute.list} component={ProductList} />
        <Route path={productRoute.editor} component={ProductEditor} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default ProductRoute;
