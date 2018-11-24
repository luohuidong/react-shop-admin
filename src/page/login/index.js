import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'

class LoginPage extends React.PureComponent {
  render () {
    const containerStyle = {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <div style={containerStyle}>
        <Form />
      </div>
    )
  }
}

LoginPage.propTypes = {
  
}

export default LoginPage
