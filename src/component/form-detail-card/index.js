import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class FormDetailCard extends React.PureComponent {
  createItems(data) {
    return data.map(element => (
      <div key={element.title}>
        <span>{element.title}</span>：<span>{element.text}</span>
      </div>  
    ));
  }
  render() {
    const { title, data, showBottom, style } = this.props;
    
    return (
      <div style={style}>
        <div className={styles['title']}>{title}</div>
        { this.props.children }
        {
          data.length !== 0 &&
          <div className={styles['grid-container']}>
            {this.createItems(data)}
          </div>
        }
        {
          showBottom && <div className={styles.divider} />
        }
      </div>
    );
  }
}

FormDetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  showBottom: PropTypes.bool.isRequired,
  children: PropTypes.element,
  style: PropTypes.object,
};

FormDetailCard.defaultProps = {
  data: [],
  showBottom: true
};
export default FormDetailCard;
