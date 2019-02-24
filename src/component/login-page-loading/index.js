import React from 'react';

import logo from './logo.svg';
import styles from './style.scss';

class PageLoading extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={logo} className="App-logo" alt="logo" />
        <span>Loading...</span>
      </div>
    );
  }
}

export default PageLoading;
