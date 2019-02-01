import React from 'react';
import PropTypes from 'prop-types';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

class MyEditor extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  componentDidUpdate(prevProps) {
    const { initialValue } = this.props;
    const { initialValue: prevInitialValue } = prevProps;

    if (initialValue !== prevInitialValue) {
      this.setState({
        editorState: BraftEditor.createEditorState(initialValue)
      });
    }
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
    });

    const { onChange } = this.props;
    if (onChange) {
      onChange(editorState.toHTML());
    }
  }

  render() {
    const { editorState } = this.state;
    const { readOnly, hideControls } = this.props;

    let controls = [
      'undo', 'redo', 'separator',
      'font-size', 'line-height', 'letter-spacing', 'separator',
      'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
      'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
      'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
      'link', 'separator', 'hr', 'separator',
      'media', 'separator',
      'clear'
    ];

    if (hideControls) {
      controls = [];
    }

    return (
      <div style={styles.container}>
        <BraftEditor
          value={editorState}
          onChange={this.handleChange}
          controls={controls}
          readOnly={readOnly}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px solid #BFBFBF',
  }
};

MyEditor.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
  readOnly: PropTypes.bool, // 富文本是否只读
  hideControls: PropTypes.bool, // 是否隐藏工具栏控件列表
};

export default MyEditor;
