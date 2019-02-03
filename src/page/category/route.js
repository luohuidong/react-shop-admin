import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { categoryRoute } from 'util/route';
import ErrorPage from 'page/404/index';
import CategoryList from './list/';

class ProductRoute extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: 50, backgroundColor: 'white' }}>
          <Switch>
            <Route path={`${categoryRoute.list}/:categoryId?`} component={CategoryList} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ProductRoute;
