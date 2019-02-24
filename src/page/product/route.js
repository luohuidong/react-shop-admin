import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { productRoute } from 'util/route';
import PageLoading from 'component/page-loading/index';
import ErrorPage from 'page/404/index';

const LoadableProductList = Loadable({
  loader: () => import('./list/index'),
  loading: PageLoading,
});

const LoadableProductEditor = Loadable({
  loader: () => import('./editor/index'),
  loading: PageLoading,
});

const LoadableProductDetail = Loadable({
  loader: () => import('./detail/index'),
  loading: PageLoading,
});

class ProductRoute extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={productRoute.list} component={LoadableProductList} />
          <Route path={`${productRoute.editor}/:productId?`} component={LoadableProductEditor} />
          <Route path={`${productRoute.detail}/:productId`} component={LoadableProductDetail} />
          <Route component={ErrorPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ProductRoute;
