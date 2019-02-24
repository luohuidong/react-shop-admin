import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import PageLoading from 'component/page-loading/index';
import { categoryRoute } from 'util/route';
import ErrorPage from 'page/404/index';

const LoadableCategoryList = Loadable({
  loader: () => import('./list/'),
  loading: PageLoading,
});

class ProductRoute extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${categoryRoute.list}/:categoryId?`} component={LoadableCategoryList} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default ProductRoute;
