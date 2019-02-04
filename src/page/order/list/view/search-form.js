import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Button } from 'antd';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

class ProductSearchForm extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { orderNo } = values;
        if (orderNo) {
          this.props.handleOrderSearch(orderNo);
        } else {
          this.props.getOrderList(10, 1);
        }
      }
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item {...formItemLayout} label='订单号' >
              {getFieldDecorator('orderNo')(
                <Input />
              )}
            </Form.Item>
          </Col>
          
          <Col offset={8} span={8} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

ProductSearchForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleOrderSearch: PropTypes.func.isRequired,
  getOrderList: PropTypes.func.isRequired
};

export default Form.create()(ProductSearchForm);
