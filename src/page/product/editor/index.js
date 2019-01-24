import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, InputNumber, Switch, message } from 'antd';

import CategoryCascader from './category-cascader';
import UploadImage from './upload-image';
import RichTextEditor from './rich-text-editor';
import { requestSaveProduct } from 'service/product';
import { productRoute } from 'util/route';

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 10 },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 16,
    offset: 7,
  },
};

class ProductList extends React.Component {
  state = {
  };

  componentDidMount() {
    document.title = '新增商品';
  }

  handleSaveProduct = async (values) => {
    const { history } = this.props;
    try {
      await requestSaveProduct(values);
      message.success('新增商品成功');
      history.push(productRoute.list);
    } catch (error) {
      message.error('新增商品失败');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const newValues = {
          ...values,
          subImages: values.subImages.join(','),
          categoryId: values.categoryId[1],
          status: values.status === true ? 1 : 2
        };
        this.handleSaveProduct(newValues);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{ padding: 50, backgroundColor: 'white' }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="商品名称">
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<Input />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="商品描述" >
            {getFieldDecorator('subtitle', {
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<Input />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="商品分类" >
            {getFieldDecorator('categoryId', {
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<CategoryCascader />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="价格" >
            {getFieldDecorator('price', {
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<InputNumber />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="库存" >
            {getFieldDecorator('stock', {
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<InputNumber />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="上架状态" >
            {getFieldDecorator('status', {
              valuePropName: 'checked',
              initialValue: true,
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<Switch checkedChildren="上架" unCheckedChildren="下架" />)}
          </Form.Item>

          <Form.Item{...formItemLayout} label="图片上传" >
            {getFieldDecorator('subImages', {
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<UploadImage />)}
          </Form.Item>

          <Form.Item{...formItemLayout} label="详情" >
            {getFieldDecorator('detail', {
              rules: [{
                required: true, message: '此项未必填项',
              }],
            })(<RichTextEditor />)}
          </Form.Item>


          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

ProductList.propTypes = {
  form: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default Form.create()(ProductList); 
