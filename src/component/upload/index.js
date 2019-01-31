import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal, message } from 'antd';

class ImageUpload extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: undefined,
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = info => {
    const { fileList, file } = info;
    const { status, name } = file;

    switch (status) {
      case 'done':
        message.success(`${name} 上传成功`);
        break;
      case 'error':
        message.error(`${name} 上传失败`);
        break;
      case 'removed':
        message.info(`${name} 删除成功`);
        break;
      default:
        break;
    }

    this.setState({ fileList });
    this.saveComponentValue(fileList);
  }

  saveComponentValue = (fileList) => {
    const newFileList = fileList.map(element => {
      if (element.response) {
        const { url, uri } = element.response.data;
        return {
          uid: element.uid,
          name: element.name,
          status: element.status,
          url,
          uri,
        };
      } else {
        return element;
      }
    });

    if (this.props.onChange) {
      this.props.onChange(newFileList);
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;

    const uploadProps = {
      accept: 'image/*',
      action: '/api/manage/product/upload.do',
      listType: 'picture-card',
      onPreview: this.handlePreview,
      onChange: this.handleChange,
      name: 'upload_file',
      fileList: fileList ? fileList : this.props.value,
    };

    return (
      <div className="clearfix">
        <Upload {...uploadProps}>
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        </Upload>

        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
};

export default ImageUpload;
