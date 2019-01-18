import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import styles from './style.module.css';

class ErrorPage extends React.PureComponent {
  componentDidMount() {
    document.title = '404';
  }
  render () {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.errorImage} />
        </div>
        <div>
          <h1>404</h1>
          <div>抱歉，你访问的页面不存在</div>
          <div>
            <Link to='/'>
              <Button type="primary">返回首页</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
