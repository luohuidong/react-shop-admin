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

    return (
      <div style={styles.container}>
        <BraftEditor
          value={editorState}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px solid gray',
  }
};

MyEditor.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
};

export default MyEditor;
