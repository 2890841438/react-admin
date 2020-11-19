import React, { Component } from 'react';
import './index.scss';

// 组件
import LoginFrom from './LoginForm';
import RegisterForm from './RegisterForm'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login"
    }
  }
  switchForm = (value) => {
    this.setState({ formType: value });
  }


  render() {
    return (
      <div className="form-wrap">
        <div>
          {
            this.state.formType === 'login'
              ? <LoginFrom switchForm={this.switchForm}></LoginFrom>
              : <RegisterForm switchForm={this.switchForm}></RegisterForm>
          }
        </div>
      </div>
    );
  }
}

export default Login;