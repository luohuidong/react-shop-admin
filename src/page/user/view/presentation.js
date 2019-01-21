import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

class UserList extends React.Component {
  componentDidMount() {
    document.title = '用户列表';
    this.props.getUserList(10, 1);
  }

  render() {
    const { userListData, pageSize, pageNumber, total } = this.props.user;

    const columns = [{
      title: '账号',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '注册时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: text => new Date(text).toLocaleDateString()
    }, {
      title: 'Action',
      key: 'action',
    }];

    const tableProps = {
      columns,
      dataSource: userListData,
      rowKey: 'id',
      pagination: {
        pageSize,
        current: pageNumber,
        total,
        onChange: (page, pageSize) => this.props.getUserList(pageSize, page)
      }
    };

    return (
      <div style={{ padding: 50, backgroundColor: 'white' }}>
        <Table {...tableProps} />
      </div>
    );
  }
}

UserList.propTypes = {
  user: PropTypes.object.isRequired,
  getUserList: PropTypes.func.isRequired,
};

export default UserList; 
