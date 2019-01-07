// 登录页面
import React from 'react';
import PropTypes from 'prop-types';
import Form from './form.js';

class LoginPage extends React.PureComponent {
  componentDidMount() {
    document.title = '登录页面';
  }

  render () {
    const containerStyle = {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <div style={containerStyle}>
        <Form history={this.props.history} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object,
};

export default LoginPage;
