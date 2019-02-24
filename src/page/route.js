import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import PageLoading from 'component/page-loading/index';
import { LocationContext } from 'util/context.js';
import Layout from 'component/layout/index.js';
import ErrorPage from 'page/404/index.js';
import { Route as UserRoute } from 'page/user/index';
import { Route as ProductRoute } from 'page/product/index';
import { Route as CategoryRoute } from 'page/category/index';
import { Route as OrderRoute } from 'page/order';

const LoadableHome = Loadable({
  loader: () => import('page/home/index.js'),
  loading: PageLoading
});

class PageRoute extends React.Component {
  render() {
    return (
      <LocationContext.Provider value={this.props.location}>
        <Layout>
          <Switch>
            <Route exact path="/" component={LoadableHome} />
            <Route path='/user' component={UserRoute} />
            <Route path='/product' component={ProductRoute} />
            <Route path='/category' component={CategoryRoute} />
            <Route path='/order' component={OrderRoute} />
            <Route component={ErrorPage} />
          </Switch>
        </Layout>
      </LocationContext.Provider>
    );
  }
}

PageRoute.propTypes = {
  location: PropTypes.object
};

export default PageRoute;
