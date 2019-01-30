import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

import Upload from 'component/upload/index';

class ImageUpload extends React.PureComponent {
  state = {
    initialValue: [],
  }

  componentDidUpdate(prevProps) {
    const { imageHost, subImages } = this.props.productData;
    const { imageHost: prevImageHost } = prevProps.productData;

    if (imageHost !== prevImageHost) {
      this.createFileListDate(imageHost, subImages);
    }
  }

  createFileListDate = (imageHost, subImages) => {
    if (subImages instanceof Array) {
      const fileList = subImages.split(',').map((element, index) => ({
        uid: `-${index}`,
        name: element,
        status: 'done',
        url: `${imageHost}${subImages}`
      }));

      this.setState({
        initialValue: fileList
      });
    }
  }

  render() {
    const { form, formItemLayout } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div>
        <Form.Item{...formItemLayout} label="图片上传" >
          {getFieldDecorator('subImages', {
            initialValue: this.state.initialValue,
            rules: [{
              required: true, message: '此项为必填项',
            }],
          })(<Upload />)}
        </Form.Item>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  form: PropTypes.object,
  formItemLayout: PropTypes.object.isRequired,
  productData: PropTypes.object.isRequired,
};

export default ImageUpload;
