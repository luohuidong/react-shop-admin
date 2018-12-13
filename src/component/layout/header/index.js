import React from 'react';
import { Layout } from 'antd';

import Dropdown from './dropdown.js';

class Header extends React.PureComponent {
  render () {
    return (
      <Layout.Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: 30 }}>
          <Dropdown />
        </div>
      </Layout.Header>
    );
  }
}

Header.propTypes = {

};

export default Header;
