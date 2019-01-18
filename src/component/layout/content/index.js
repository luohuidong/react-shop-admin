import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

class Content extends React.Component {
  render () {
    return (
      <Layout.Content style={{ margin: '16px' }}>
        <div style={{ padding: 24, minHeight: 360 }}>
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
