import React from 'react'
import { Layout } from 'antd'

import SiderMenu from './sider_menu.js'

class Sider extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render () {
    return (
      <Layout.Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div style={{
          height: '32px',
          background: 'rgba(255,255,255,.2)',
          margin: '16px',
        }}/>

        <SiderMenu />
      </Layout.Sider>
    )
  }
}

export default Sider
