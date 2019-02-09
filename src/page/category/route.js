import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { categoryRoute } from 'util/route';
import ErrorPage from 'page/404/index';
import CategoryList from './list/';

class ProductRoute extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${categoryRoute.list}/:categoryId?`} component={CategoryList} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default ProductRoute;
