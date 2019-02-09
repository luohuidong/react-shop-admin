import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

import { categoryRoute } from 'util/route';
import EditorModal from './edit-modal';
import CreateModal from './create-modal';
import PageWrapper from 'component/page-wrapper';

class CategoryList extends React.Component {
  componentDidMount() {
    document.title = '分类列表';

    const { getCategoryListData, match } = this.props;
    const { categoryId } = match.params;

    getCategoryListData(categoryId);
  }

  componentDidUpdate(prevProps) {
    const { categoryId } = this.props.match.params;
    const { categoryId: prevCategoryId } = prevProps.match.params;

    if (categoryId !== prevCategoryId) {
      this.props.getCategoryListData(categoryId);
    }
  }

  getColumn = () => {

  }

  getRouteData = (categoryId) => {
    let routeData = [{
      key: categoryRoute.list,
      text: '一级品类管理'
    }];

    if (categoryId && categoryId !== 0) {
      routeData = [{
        key: categoryRoute.list,
        link: categoryRoute.list,
        text: '一级品类管理'
      }, {
        key: `${categoryRoute.list}/${categoryId}`,
        text: '二级品类管理'
      }];
    }

    return routeData;
  }

  render() {
    const {
      categoryListData, editorModalVisible, currentEditCategoryData, createModalVisible
    } = this.props.categoryList;

    const { categoryId } = this.props.match.params;

    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '操作',
      key: 'action',
      width: 150,
      render: (text, record) => (
        <span>
          <a onClick={() => this.props.handleOpenEditModal(record)}>修改</a>

          {
            !categoryId
              ? [
                <span key='span'> | </span>,
                <Link key='link' to={`${categoryRoute.list}/${record.id}`}>查看子分类</Link>
              ]
              : null
          }

        </span>
      )
    }];

    const tableProps = {
      columns,
      dataSource: categoryListData,
      rowKey: 'id',
    };

    const routeData = this.getRouteData(categoryId, categoryListData);
    
    return (
      <PageWrapper routeData={routeData}>
        <div style={{ marginBottom: 30 }}>
          <Button type='primary' onClick={this.props.handleOpenCreateModal}>新增</Button>
        </div>
        <Table {...tableProps} />
        <EditorModal
          editorModalVisible={editorModalVisible}
          currentEditCategoryData={currentEditCategoryData}
          handleCancelEdit={this.props.handleCancelEdit}
          handleEditCategoryName={this.props.handleEditCategoryName}
        />
        <CreateModal
          parentId={categoryId}
          visible={createModalVisible}
          handleCancelCreate={this.props.handleCancelCreate}
          handleCreateCategory={this.props.handleCreateCategory}
        />
      </PageWrapper>
    );
  }
}

CategoryList.propTypes = {
  match: PropTypes.object.isRequired,
  categoryList: PropTypes.object.isRequired,
  getCategoryListData: PropTypes.func.isRequired,
  handleOpenEditModal: PropTypes.func.isRequired,
  handleEditCategoryName: PropTypes.func.isRequired,
  handleCancelEdit: PropTypes.func.isRequired,
  handleOpenCreateModal: PropTypes.func.isRequired,
  handleCancelCreate: PropTypes.func.isRequired,
  handleCreateCategory: PropTypes.func.isRequired,
};

export default CategoryList; 
