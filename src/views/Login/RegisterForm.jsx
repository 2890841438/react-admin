import React, { Component, Fragment } from 'react';
// antd
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// validate
import { validate_password } from '../../utils/validate'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  toggleForm = () => {
    this.props.switchForm("login")
  };

  render() {
    return (
      <Fragment>
        <div className="form-header">
          <h4 className="column">账号注册</h4>
          <span onClick={this.toggleForm}>登录</span>
        </div>
        <div className="form-content">
          <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish} >

            <Form.Item name="username" rules={
              [
                { required: true, message: '用户名不能为空!' }
              ]
            } >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>

            <Form.Item name="password" rules={
              [
                { required: true, message: '请输入密码!' },
                { pattern: validate_password, message: '密码不符合要求！' }
              ]
            }>
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
            </Form.Item>

            <Form.Item name="passwords" rules={
              [
                { required: true, message: '再次输入密码!' },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次密码不一致!');
                  },
                }),
              ]
            }>
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="再次输入密码" />
            </Form.Item>

            <Form.Item name="code" rules={[{ required: true, message: '请输入验证码!' }]} >
              <Row gutter={13}>
                <Col span={16}>
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="验证码" />
                </Col>
                <Col span={8}>
                  <Button type='danger' block>获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default RegisterForm;