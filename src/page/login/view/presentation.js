// 登录页面
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

import style from './style.module.css';
import { requestUserLogin } from 'service/user-service.js';
import { saveUserDataStorage, getUserDataStorage } from 'util/storege';

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
      const result = await requestUserLogin(userName, password);
      message.success('登录成功');
      saveUserDataStorage(result);
      this.props.doLogin(result);
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

        <Form onSubmit={this.handleSubmit} className={style.form}>

          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入账号!' }],
              initialValue: userData ? userData.username : ''
            })(
              <Input
                prefix={<Icon type="user" className={style.input} />}
                placeholder="Username"
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
                prefix={<Icon type="lock" className={style.input} />}
                type="password"
                placeholder="Password"
                ref={this.passwordInputRef}
              />
            )}
          </FormItem>

          <Button
            type="primary"
            htmlType="submit"
            className={style.button}
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
  doLogin: PropTypes.func.isRequired,
};

export default Form.create()(LoginPage);
