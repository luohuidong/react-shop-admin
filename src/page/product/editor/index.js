import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, InputNumber, Switch, message } from 'antd';

import UploadImage from './upload-image';
import RichTextEditor from 'component/rich-text-editor/index';
import { requestSaveProduct, requestProductDetail } from 'service/product';
import { productRoute } from 'util/route';
import CategorySelect from './category-select';
import PageWrapper from 'component/page-wrapper';

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

class ProductList extends React.PureComponent {
  state = {
    productData: {},
    parentCategoryId: 0,
    categoryId: 0
  };

  componentDidMount() {
    let title = '';
    const { params } = this.props.match;
    if (params && params.productId) {
      title = '修改商品';
    } else {
      title = '新增商品';
    }

    document.title = title;

    this.initialFormDataByProductId();
  }

  initialFormDataByProductId = async () => {
    const { params } = this.props.match;

    if (params && params.productId) {
      try {
        const data = await requestProductDetail(params.productId);
        this.setState({
          productData: data
        });
      } catch (error) {
        message.error(error || '获取商品详情失败');
      }
    }
  }

  handleSaveProduct = async (values) => {
    const { history } = this.props;
    try {
      await requestSaveProduct(values);
      message.success(values.id ? '修改商品成功' : '新增商品成功');
      history.push(productRoute.list);
    } catch (error) {
      message.error(values.id ? '修改商品失败' : '新增商品失败');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { levelOneCategoryId, levelTwoCategoryId } = values;

        const newValues = {
          ...values,
          subImages: values.subImages.map(element => element.uri).join(','),
          categoryId: levelTwoCategoryId ? levelTwoCategoryId : levelOneCategoryId,
          status: values.status === true ? 1 : 2,
          id: this.state.productData.id,
        };
        this.handleSaveProduct(newValues);
      }
    });
  }

  getRouteData = () => {
    const { productId } = this.props.match.params;

    let routeData = [{
      key: 'product',
      text: '商品'
    }, {
      key: productRoute.list,
      link: productRoute.list,
      text: '商品列表',
    }, {
      key: productRoute.editor,
      text: productId ? '修改商品' : '新增商品'
    }];

    return routeData;
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { productData } = this.state;

    return (
      <PageWrapper routeData={this.getRouteData()}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="商品名称">
            {getFieldDecorator('name', {
              initialValue: productData.name,
              rules: [{
                required: true, message: '此项为必填项',
              }],
            })(<Input />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="商品描述" >
            {getFieldDecorator('subtitle', {
              initialValue: productData.subtitle,
              rules: [{
                required: true, message: '此项为必填项',
              }],
            })(<Input />)}
          </Form.Item>

          <CategorySelect
            formItemLayout={formItemLayout}
            form={form}
            productData={productData}
          />

          <Form.Item {...formItemLayout} label="价格" >
            {getFieldDecorator('price', {
              initialValue: productData.price,
              rules: [{
                required: true, message: '此项为必填项',
              }],
            })(<InputNumber />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="库存" >
            {getFieldDecorator('stock', {
              initialValue: productData.stock,
              rules: [{
                required: true, message: '此项为必填项',
              }],
            })(<InputNumber />)}
          </Form.Item>

          <Form.Item {...formItemLayout} label="上架状态" >
            {getFieldDecorator('status', {
              valuePropName: 'checked',
              initialValue: productData.status === 1 ? true : false,
              rules: [{
                required: true, message: '此项为必填项',
              }],
            })(<Switch checkedChildren="上架" unCheckedChildren="下架" />)}
          </Form.Item>

          <UploadImage
            productData={productData}
            formItemLayout={formItemLayout}
            form={form}
          />

          <Form.Item{...formItemLayout} label="详情" >
            {getFieldDecorator('detail', {
              rules: [{
                required: true, message: '此项为必填项',
              }],
            })(<RichTextEditor initialValue={productData.detail} />)}
          </Form.Item>


          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              {!productData.id ? '提交' : '修改'}
            </Button>
          </Form.Item>
        </Form>
      </PageWrapper>
    );
  }
}

ProductList.propTypes = {
  form: PropTypes.object.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default Form.create()(ProductList); 
