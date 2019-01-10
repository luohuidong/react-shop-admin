import React from 'react';
import { Layout } from 'antd';

import Dropdown from './dropdown';

class Header extends React.PureComponent {
  render () {
    const divStyle = { 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'flex-end', 
      paddingRight: 30 
    };

    return (
      <Layout.Header style={{ background: '#fff', padding: 0 }}>
        <div style={divStyle}>
          <Dropdown />
        </div>
      </Layout.Header>
    );
  }
}

Header.propTypes = {

};

export default Header;
