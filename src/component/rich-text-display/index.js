import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class RichTextDetail extends React.PureComponent {
  render() {
    const { data } = this.props;
    
    return (
      <div className={styles.container} dangerouslySetInnerHTML={{ __html: data }} />
    );
  }
}

RichTextDetail.propTypes = {
  data: PropTypes.string
};

export default RichTextDetail;
