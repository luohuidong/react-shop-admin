import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

class Content extends React.Component {
  render () {
    return (
      <Layout.Content style={styles.layoutContent}>
        <div style={styles.childrenContainer}>
          {this.props.children}
        </div>
      </Layout.Content>
    );
  }
}

const styles = {
  layoutContent: {
    margin: 16
  },
  childrenContainer: { 
    padding: 24, 
    minHeight: 360 
  }
};

Content.propTypes = {
  children: PropTypes.element
};

export default Content;
