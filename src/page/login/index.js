import React from 'react';
import Form from './form.js';

class LoginPage extends React.PureComponent {
  render () {
    const containerStyle = {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <div style={containerStyle}>
        <Form />
      </div>
    );
  }
}

LoginPage.propTypes = {
  
};

export default LoginPage;
