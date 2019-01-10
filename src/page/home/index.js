// 首页组件
import React from 'react';

class Home extends React.Component {
  componentDidMount () {
    document.title = '首页';
  }
  render () {
    return (
      <div>
        <div>首页</div>
      </div>
    );
  }
}

export default Home;
