import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import styles from './style.scss';

class ErrorPage extends React.PureComponent {
  componentDidMount() {
    document.title = '404';
  }
  render () {
    return (
      <div className={styles.container}>
        <div>
          <img 
            src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" 
            alt="errImage"
          />
        </div>
        <div>
          <h1>404</h1>
          <p>抱歉，你访问的页面不存在</p>
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
