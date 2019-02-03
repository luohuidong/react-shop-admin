import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Select, message } from 'antd';

import { requestCategory,  } from 'service/category';

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

class CreateModal extends React.Component {
  state = {
    parentCategory: []
  }

  componentDidMount() {
    this.getParentCategory();
  }

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { parentCategoryId, categoryName } = values;
        this.props.handleCreateCategory(parentCategoryId, categoryName);
      }
    });
  }

  handleCancel = () => {
    this.props.handleCancelCreate();
  }

  getParentCategory = async () => {
    try {
      let data = await requestCategory(0);
      data.unshift({
        id: 0,
        name: '根品类'
      });
      this.setState({ parentCategory: data });
    } catch (error) {
      message.error(error || '获取父级品类失败');
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

  render() {
    const { visible, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <span>
        <Modal
          title='新增品类'
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item {...formItemLayout} label="父级品类" >
              {getFieldDecorator('parentCategoryId', {
                rules: [{
                  required: true, message: '此项为必填项',
                }],
              })(<Select
                onSelect={this.handleLevelOneCategorySelect}
                placeholder='请选择父级品类'
              >
                {this.getSelectOptions(this.state.parentCategory)}
              </Select>)}
            </Form.Item>

            <Form.Item {...formItemLayout} label="名称">
              {getFieldDecorator('categoryName', {
                rules: [{ required: true, message: '此项为必填项' }],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </span>
    );
  }
}

CreateModal.propTypes = {
  form: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  handleCancelCreate: PropTypes.func.isRequired,
  handleCreateCategory: PropTypes.func.isRequired,
};

export default Form.create()(CreateModal);
