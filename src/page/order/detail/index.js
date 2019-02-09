import React from 'react';
import PropTypes from 'prop-types';
import { message, Table } from 'antd';

import { orderRoute } from 'util/route';
import { requestOrderDetail } from 'service/order';

import PageWrapper from 'component/page-wrapper';
import FormDetailCard from 'component/form-detail-card/';

class OrderDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      orderData: {}
    };

    this.columns = [{
      title: '图片',
      dataIndex: 'productImage',
      key: 'productImage',
      render: (text, record) => (
        <img 
          height={100}
          width={100} 
          src={`${this.state.orderData.imageHost}${text}`} 
          alt={record.productName}
        />
      )
    }, {
      title: '名称',
      dataIndex: 'productName',
      key: 'productName'
    }, {
      title: '单价',
      dataIndex: 'currentUnitPrice',
      key: 'currentUnitPrice'
    }, {
      title: '数量',
      dataIndex: 'quantity',
      key: 'quantity'
    }, {
      title: '总价',
      dataIndex: 'totalPrice',
      key: 'totalPrice'
    }];
  }

  componentDidMount() {
    document.title = '订单详情';
    this.getOrderDataById();
  }

  async getOrderDataById() {
    const { params } = this.props.match;

    if (params && params.orderId) {
      try {
        const data = await requestOrderDetail(params.orderId);
        this.setState({ orderData: data });
      } catch (error) {
        message.error(error || '获取订单详情失败');
      }
    }
  }

  /**
   * 获取订单显示信息
   * @param {object} orderData 订单信息
   */
  getOrderDisplayData(orderData) {
    const { orderNo, createTime, payment, statusDesc, paymentTypeDesc } = orderData;

    const productDetail = [
      {
        title: '订单号',
        text: orderNo,
      },
      {
        title: '创建时间',
        text: createTime,
      },
      {
        title: '支付状态',
        text: statusDesc
      },
      {
        title: '支付方式',
        text: paymentTypeDesc
      },
      {
        title: '订单金额',
        text: `￥${payment | 0}`
      },
    ];

    return productDetail;
  }

  getReceiverDetail = (orderData) => {
    let receiverDetailData = [];

    if (orderData.shippingVo) {
      const { 
        receiverName, receiverPhone, receiverMobile, receiverProvince, receiverCity,
        receiverAddress, receiverZip
      } = orderData.shippingVo;

      receiverDetailData = [
        {
          title: '收件人',
          text: receiverName
        },
        {
          title: '联系电话',
          text: receiverPhone || receiverMobile || '无'
        },
        {
          title: '收货地址',
          text: `${receiverProvince}-${receiverCity}-${receiverAddress}`
        },
        {
          title: '邮政编码',
          text: receiverZip
        }
      ];
    }

    return receiverDetailData;
  }

  render() {
    const { orderData } = this.state;

    const orderDetailData = this.getOrderDisplayData(orderData);
    const receiverData = this.getReceiverDetail(orderData);

    const routeData = [{
      key: '/order',
      text: '订单'
    }, {
      key: orderRoute.list,
      link: orderRoute.list,
      text: '订单管理'
    }, {
      key: orderRoute.detail,
      text: '订单详情'
    }];


    return (
      <PageWrapper routeData={routeData}>
        <FormDetailCard 
          title='订单基本信息'
          data={orderDetailData}
        />

        <FormDetailCard 
          title='收件人信息'
          data={receiverData}
          style={{ marginTop: 30 }}
        />

        <FormDetailCard 
          title='商品信息' 
          showBottom={false}
          style={{ marginTop: 30 }}
        >
          <Table 
            rowKey='productId'
            columns={this.columns}
            dataSource={orderData.orderItemVoList}
            pagination={{
              hideOnSinglePage: true
            }}
          />
        </FormDetailCard>
      </PageWrapper>
    );
  }
}

OrderDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default OrderDetail;
