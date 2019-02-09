import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

import { productRoute } from 'util/route';
import PageWrapper from 'component/page-wrapper';
import SearchForm from './search-form';

class ProductList extends React.Component {
  componentDidMount() {
    document.title = '商品列表';
    this.props.getProductList('list', 10, 1);
  }

  /**
   * 设置商品上下架
   * @param record 商品信息
   */
  handleSetProductStatus = (record) => {
    const { id, status } = record;
    let newStatus = 0;
    if (status === 1) {
      newStatus = 2;
    } else {
      newStatus = 1;
    }
    this.props.setProductSaleStatus(id, newStatus);
  }

  render() {

    const {
      listType, productListData, pageSize, pageNum, total, productName
    } = this.props.productList;

    const productStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    };

    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '标题',
      dataIndex: 'subtitle',
      key: 'subtitle',
    }, {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      width: 100,
      render: text => `￥${text}`
    }, {
      title: '商品状态',
      dataIndex: 'status',
      key: 'status',
      width: 170,
      render: (text, record) => {
        return (
          <div style={productStyle}>
            <span>{text === 1 ? '在售' : '已下架'}</span>
            <span>
              <Button onClick={() => this.handleSetProductStatus(record)}>
                {text === 1 ? '设置下架' : '设置上架'}
              </Button>
            </span>
          </div>
        );
      }
    }, {
      title: '操作',
      key: 'action',
      width: 150,
      render: (text, record) => (
        <span>
          <Link to={`${productRoute.detail}/${record.id}`}>查看详情</Link>
          <span> | </span>
          <Link to={`${productRoute.editor}/${record.id}`}>编辑</Link>
        </span>
      )
    }];

    const tableProps = {
      columns,
      dataSource: productListData,
      rowKey: 'id',
      pagination: {
        pageSize,
        current: pageNum,
        total,
        onChange: (page, pageSize) => this.props.getProductList(listType, pageSize, page, productName)
      }
    };

    const routeData = [{
      key: '/product',
      text: '商品'
    }, {
      key: productRoute.list,
      text: '商品列表'
    }];

    return (
      <PageWrapper routeData={routeData}>
        <SearchForm
          getProductList={this.props.getProductList}
          pageSize={pageSize}
          pageNum={pageNum}
        />
        <div style={{ marginBottom: 30 }}>
          <Link to={productRoute.editor}>
            <Button type='primary'>新增</Button>
          </Link>
        </div>
        <Table {...tableProps} />
      </PageWrapper>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired,
  setProductSaleStatus: PropTypes.func.isRequired,
};

export default ProductList; 
