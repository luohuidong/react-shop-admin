import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

const formItemLayout = {
  labelCol: {
    sm: { span: 4 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

class EditorModal extends React.Component {
  handleOk = () => {
    const { currentEditCategoryData, handleEditCategoryName } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { parentId, id } = currentEditCategoryData;
        handleEditCategoryName(parentId, id, values.categoryName);
      }
    });
  }

  handleCancel = () => {
    this.props.handleCancelEdit();
  }

  render() {
    const { editorModalVisible, currentEditCategoryData, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <span>
        <Modal
          title={`修改品类 [${currentEditCategoryData.name || ''}] 名称`}
          visible={editorModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item {...formItemLayout} label="名称">
              {getFieldDecorator('categoryName', {
                initialValue: currentEditCategoryData.name,
                rules: [{ required: true, message: '此项为必填项' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </span>
    );
  }
}

EditorModal.propTypes = {
  form: PropTypes.object.isRequired,
  editorModalVisible: PropTypes.bool.isRequired,
  currentEditCategoryData: PropTypes.object.isRequired,
  handleCancelEdit: PropTypes.func.isRequired,
  handleEditCategoryName: PropTypes.func.isRequired,
};

export default Form.create()(EditorModal);
