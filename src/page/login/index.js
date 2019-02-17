// 登录页面
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, message } from 'antd';

import style from './style.scss';
import { requestUserLogin } from 'service/user-service.js';
import { getUserDataStorage } from 'util/storege';

const FormItem = Form.Item;
const userData = getUserDataStorage();

class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }

  componentDidMount() {
    document.title = '登录页面';
    this.focusInput();
  }

  focusInput = () => {
    if (userData) {
      const passwordInputNode = this.passwordInputRef.current;
      passwordInputNode.focus();
    } else {
      const userNameInputNode = this.usernameInputRef.current;
      userNameInputNode.focus();
    }
  }

  /**
   * 处理用户登录，登录成功后，将用户信息保存在本地
   * @param {string} userName 用户账号
   * @param {string} password 用户密码
   */
  handleUserLogin = async (userName, password) => {
    try {
      await requestUserLogin(userName, password);
      message.success('登录成功');
    } catch (error) {
      message.error(`登录失败：${error}`);
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { userName, password } = values;
        this.handleUserLogin(userName, password);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={style.container}>

        <Form onSubmit={this.handleSubmit} className='form-container'>

          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入账号!' }],
              initialValue: userData ? userData.username : ''
            })(
              <Input
                className='form-input' 
                prefix={<Icon type="user" />}
                placeholder="admin"
                onChange={this.userNameChange}
                ref={this.usernameInputRef}
              />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                className='form-input'
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="admin"
                ref={this.passwordInputRef}
              />
            )}
          </FormItem>

          <Button
            type="primary"
            htmlType="submit"
            className='form-button'
          >
            登录
          </Button>
        </Form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create()(LoginPage);
