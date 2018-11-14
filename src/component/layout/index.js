import React from 'react'
import { Layout } from 'antd';

import Sider from './sider/index.js'
import Header from './header/index.js'
import Content from './content/index.js'
import Footer from './footer/index.js'

class PageLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />

        <Layout>
          <Header />
          <Content>{this.props.children}</Content>
          <Footer />
        </Layout>

      </Layout>
    );
  }
}

export default PageLayout
