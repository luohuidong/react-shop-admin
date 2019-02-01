import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import styles from './style.scss';
import { productRoute } from 'util/route';

class StrengtheningBreadcrumb extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Breadcrumb>
          <Breadcrumb.Item><Link to='/'>首页</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to={productRoute.list}>商品</Link></Breadcrumb.Item>
          <Breadcrumb.Item>商品详情</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

StrengtheningBreadcrumb.propTypes = {
  data: PropTypes.string
};

export default StrengtheningBreadcrumb;
