import React from 'react';

import styles from './error-message.scss';

class ErrorMessage extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <img 
          src='https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png' 
        />
      </div>
    );
  }
}

export default ErrorMessage;
