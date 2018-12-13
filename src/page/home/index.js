import React from 'react';

class Home extends React.Component {
  componentDidMount () {
    document.title = '首页';
  }
  render () {
    return (
      <div>
        <div>Home</div>
      </div>
    );
  }
}

export default Home;
