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
        let { productName } = values;
        if (!productName) productName = undefined;
        const { pageSize, pageNum } = this.props;
        this.props.getProductList('search', pageSize, pageNum, productName);
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
            <Form.Item {...formItemLayout} label='关键词' >
              {getFieldDecorator('productName')(
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
  getProductList: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNum: PropTypes.number.isRequired
};

export default Form.create()(ProductSearchForm);
