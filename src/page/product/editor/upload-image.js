import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

import Upload from 'component/upload/index';

class ImageUpload extends React.PureComponent {
  state = {
    fileListData: [],
  }

  componentDidUpdate(prevProps) {
    const { imageHost, subImages } = this.props.productData;
    const { imageHost: prevImageHost } = prevProps.productData;

    if (imageHost !== prevImageHost) {
      this.createFileListDate(imageHost, subImages);
    }
  }

  createFileListDate = (imageHost, subImages) => {
    if (typeof subImages === 'string') {
      subImages = subImages.split(',');
      const fileList = subImages.map((element, index) => ({
        uid: `-${index}`,
        name: element,
        status: 'done',
        url: `${imageHost}${element}`,
        uri: element,
      }));

      this.setState({
        fileListData: fileList
      });
    }
  }

  render() {
    const { form, formItemLayout } = this.props;
    const { getFieldDecorator } = form;

    const { fileListData } = this.state;

    return (
      <div>
        <Form.Item{...formItemLayout} label="图片上传" >
          {getFieldDecorator('subImages', {
            initialValue: fileListData,
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
