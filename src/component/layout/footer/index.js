import React from 'react';
import { Layout } from 'antd';

class Footer extends React.PureComponent {
  render () {
    return (
      <Layout.Footer style={{ textAlign: 'center' }}>
        Copyright © {new Date().getFullYear()} 罗惠东
      </Layout.Footer>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
