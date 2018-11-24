import React from 'react'

class Home extends React.Component {
  componentWillMount () {
    document.title = '首页'
  }
  render () {
    console.log('this.props', this.props);
    return (
      <div>
        <div>Home</div>
      </div>
    )
  }
}

export default Home
