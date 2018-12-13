import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { User } from 'service/user-service.js';

const FormItem = Form.Item;
const user = new User();

class ComponentName extends React.PureComponent {
  state = {

  }

  userNameChange = () => {
    
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { userName, password } = values;
        /* eslint-disable */
        user.login({ userName, password })
          .then((data, message) => console.log('data', data))
          .catch(message => console.log('message', message))
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              placeholder="Username" 
              onChange={this.userNameChange}
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="password" 
              placeholder="Password" 
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}

          <a style={{ float: 'right' }} href="">Forgot password</a>

          <Button 
            type="primary" 
            htmlType="submit" 
            style={{ width: '100%' }}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

ComponentName.propTypes = {
  form: PropTypes.object.isRequired
};

export default Form.create()(ComponentName);
