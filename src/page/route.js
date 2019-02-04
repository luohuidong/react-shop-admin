import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';
import ErrorPage from 'page/404/index.js';
import { Route as UserRoute } from 'page/user/index';
import { Route as ProductRoute } from 'page/product/index';
import { Route as CategoryRoute } from 'page/category/index';
import { Route as OrderRoute } from 'page/order';

class PageRoute extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/user' component={UserRoute} />
          <Route path='/product' component={ProductRoute} />
          <Route path='/category' component={CategoryRoute} />
          <Route path='/order' component={OrderRoute} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
  }
}

export default PageRoute;
