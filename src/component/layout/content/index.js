import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import ErrorBoundary from 'component/error-boundary';

class Content extends React.Component {
  render() {
    return (
      <Layout.Content>
        <ErrorBoundary>
          {this.props.children}
        </ErrorBoundary>
      </Layout.Content>
    );
  }
}

Content.propTypes = {
  children: PropTypes.element
};

export default Content;
