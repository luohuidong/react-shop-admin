import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal, message } from 'antd';

class ImageUpload extends React.PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleFileListData = fileList => {
    const imageUri = fileList.map(element => {
      const { response } = element;
      if (response && response.data) {
        return response.data.uri;
      }
    });
    return imageUri;
  }

  handleChange = info => {
    const { status, name } = info.file;
    if (status === 'done') {
      const { fileList } = info;
      this.setState({ fileList });

      const { onChange } = this.props;
      if (onChange) {
        onChange(this.handleFileListData(fileList));
      }

      message.success(`${name} 上传成功`);
    } else if (status === 'error') {
      message.error(`${name} 上传失败.`);
    } else if (status === 'removed') {
      message.info(`${name} 删除成功`);
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const uploadProps = {
      accept: 'image/*',
      action: '/api/manage/product/upload.do',
      listType: 'picture-card',
      onPreview: this.handlePreview,
      onChange: this.handleChange,
      name: 'upload_file',
    };

    return (
      <div className="clearfix">
        <Upload {...uploadProps}>
          {fileList.length >= 3 ? null : uploadButton}
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
};

export default ImageUpload;
