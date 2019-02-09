import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

class Content extends React.Component {
  render() {
    return (
      <Layout.Content>
        {this.props.children}
      </Layout.Content>
    );
  }
}

Content.propTypes = {
  children: PropTypes.element
};

export default Content;
