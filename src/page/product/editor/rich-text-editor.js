import React from 'react';
import PropTypes from 'prop-types';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

class MyEditor extends React.PureComponent {
  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    });

    const { onChange } = this.props;
    if (onChange) {
      onChange(editorState.toHTML());
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <BraftEditor
          value={this.state.editorStste}
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
};

export default MyEditor;
