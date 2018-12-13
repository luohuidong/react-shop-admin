import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';

class Content extends React.PureComponent {
  render () {
    return (
      <Layout.Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {this.props.children}
        </div>
      </Layout.Content>
    );
  }
}

Content.propTypes = {
  children: PropTypes.element
};

export default Content;
