import React from 'react';
import { Menu, Dropdown, Avatar, message } from 'antd';

import { getUserDataStorage } from 'util/storege';
import { userLogout } from 'service/user-service.js';

class DropdownPresentation extends React.PureComponent {
  /**
   * 退出登录，删除本地存储的用户信息
   * @param {object} e event
   */
  handleLogout = async e => {
    e.preventDefault();
    try {
      const result = await userLogout();
      message.success(result);
    } catch (error) {
      message.error(error);
    }
  }

  render () {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" onClick={this.handleLogout}>退出登录</a>
        </Menu.Item>
      </Menu>
    );

    const userData = getUserDataStorage();

    return (
      <Dropdown overlay={menu}>
        <div>
          <span style={{ marginRight: 10 }}>
            <Avatar 
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
            />
          </span>
          { userData.username ? userData.username : '请登录' }
        </div>
      </Dropdown>
    );
  }
}

export default DropdownPresentation;
