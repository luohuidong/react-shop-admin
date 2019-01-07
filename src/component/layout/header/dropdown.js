import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';

class ComponentName extends React.PureComponent {
  handleLogout = () => {
    //TODO: 删除本地存储的用户信息
  }

  render () {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出登录</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <div>
          <span style={{ marginRight: 10 }}>
            <Avatar>USER</Avatar>
          </span>
          Hover me
        </div>
      </Dropdown>
    );
  }
}

ComponentName.propTypes = {

};

export default ComponentName;
