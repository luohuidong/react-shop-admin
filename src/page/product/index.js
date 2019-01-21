import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ProductList from './list/index.js';

import listReducer from './list/reducer';

const reducer = {
  productList: listReducer,
};

class ProductRouter extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route path={match.path} component={ProductList} />
      </Switch>
    );
  }
}

ProductRouter.propTypes = {
  match: PropTypes.object.isRequired,
};

export {
  reducer,
  ProductRouter,
};
