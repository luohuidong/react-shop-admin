import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { userRoute } from 'util/route.js';
import PageWrapper from 'component/page-wrapper';

class UserList extends React.Component {
  componentDidMount() {
    document.title = '用户列表';
    this.props.getUserList(10, 1);
  }

  render() {
    const { userListData, pageSize, pageNumber, total } = this.props.userListData;

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

    const routeData = [{
      key: userRoute.list,
      text: '用户列表'
    }];

    return (
      <PageWrapper routeData={routeData}>
        <Table {...tableProps} />
      </PageWrapper>
    );
  }
}

UserList.propTypes = {
  userListData: PropTypes.object.isRequired,
  getUserList: PropTypes.func.isRequired,
};

export default UserList; 
