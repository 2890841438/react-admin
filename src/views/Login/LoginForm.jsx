import React, { Component, Fragment } from 'react';
// antd
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// api
import { login } from '../../api/account';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  onFinish = values => {
    console.log('Received values of form: ', values);
    login(values).then(res => {
      console.log(res)
    })
  };

  toggleForm = () => {
    this.props.switchForm("register")
  };

  render() {
    return (
      <Fragment>
        <div className="form-header">
          <h4 className="column">登录</h4>
          <span onClick={this.toggleForm}>账号注册</span>
        </div>
        <div className="form-content">
          <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish} >

            <Form.Item name="username" rules={
              [
                { required: true, message: '请输入用户名!' },
                { type: "email", message: '邮箱格式不正确!' },
              ]
            } >
              <Input type="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]} >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
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
                登录
                </Button>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default LoginForm;