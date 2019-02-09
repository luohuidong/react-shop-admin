import React from 'react';
import { Layout } from 'antd';

import Dropdown from './dropdown';

class Header extends React.PureComponent {
  render() {
    return (
      <Layout.Header style={styles.header}>
        <div style={styles.dropContainer}>
          <Dropdown />
        </div>
      </Layout.Header>
    );
  }
}

const styles = {
  header: {
    position: 'relative', 
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 4px rgba(0,21,41,.08)',
  },
  dropContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 30,
  }
};

export default Header;
