import React from 'react';
import PropTypes from 'prop-types';
import { message, Select, Form } from 'antd';

import { requestCategory } from 'service/category';

class CategorySelect extends React.PureComponent {
  state = {
    levelOneCategoryDatas: [],
    levelTwoCategoryDatas: [],
  }

  componentDidMount() {
    this.getLevelOneCategory();
  }

  componentDidUpdate(prevProps) {
    const { productData } = this.props;
    const { productData: prevProductData } = prevProps;

    if (productData.id !== prevProductData.id && productData.parentCategoryId !== 0) {
      // 如果父级商品分类不为根分类，则查询二级商品分类。
      this.getLevelTwoCategory(productData.parentCategoryId);
    }
  }

  getLevelOneCategory = async () => {
    try {
      const data = await requestCategory(0);
      this.setState({ levelOneCategoryDatas: data });
    } catch (error) {
      message.error(error || '获取商品一级分类失败');
    }
  }

  /**
   * 获取二级分类
   * @param {number} parentId 当前父节点 id
   */
  getLevelTwoCategory = async (parentId) => {
    try {
      const data = await requestCategory(parentId);
      this.setState({ levelTwoCategoryDatas: data });
    } catch (error) {
      message.error(error || '获取商品二级分类失败');
    }
  }

  /**
   * 生成选择器选项
   * @param {array} datas 选项数据
   */
  getSelectOptions = datas => {
    if (datas) {
      return datas.map(element => (
        <Select.Option value={element.id} key={element.id}>
          {element.name}
        </Select.Option>
      ));
    }
  }

  /**
   * 清空二级分类原来的数据，并通过一级分类重新获取二级分类数据
   * @param {number} value 
   */
  handleLevelOneCategorySelect = (value) => {
    const { setFieldsValue } = this.props.form;
    setFieldsValue({
      levelTwoCategoryId: undefined
    });
    this.setState({
      levelTwoCategoryDatas: []
    }, () => this.getLevelTwoCategory(value));
  }

  render() {
    const { formItemLayout, form, productData } = this.props;
    const { getFieldDecorator } = form;
    const { parentCategoryId, categoryId } = productData;

    const { levelOneCategoryDatas, levelTwoCategoryDatas } = this.state;

    return (
      <div>
        <Form.Item {...formItemLayout} label="商品一级分类" >
          {getFieldDecorator('levelOneCategoryId', {
            initialValue: parentCategoryId === 0 ? categoryId : parentCategoryId,
            rules: [{
              required: true, message: '此项为必填项',
            }],
          })(<Select
            onSelect={this.handleLevelOneCategorySelect}
            placeholder='请选择商品一级分类'
          >
            {this.getSelectOptions(levelOneCategoryDatas)}
          </Select>)}
        </Form.Item>

        <Form.Item 
          {...formItemLayout} 
          label="商品二级分类" 
          style={{ display: levelTwoCategoryDatas.length === 0 ? 'none' : 'block' }}
        >
          {getFieldDecorator('levelTwoCategoryId', {
            initialValue: parentCategoryId === 0 ? undefined : categoryId,
            rules: [{
              required: true, message: '此项为必填项',
            }],
          })(<Select placeholder='请选择商品二级分类'>
            {this.getSelectOptions(levelTwoCategoryDatas)}
          </Select>)}
        </Form.Item>
      </div>
    );
  }
}

CategorySelect.propTypes = {
  form: PropTypes.object,
  formItemLayout: PropTypes.object.isRequired,
  productData: PropTypes.object.isRequired,
};

export default CategorySelect;
