import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  onEnterPress(evt) {
    const { checkAuth } = this.props;
    const enterCode = 13;
    const fieldValue = evt.target.value;
    if (evt.target.keyCode === enterCode) {
      checkAuth(fieldValue);
    }
  }
  render() {
    return (
      <div className="login">
        <div className="login__wrapper">
          <p>
            Получить токен нужно на своей странице github, перейдите по{' '}
            <a href="https://github.com/settings/tokens">адресу</a> и создайте
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </p>
          <input
            className="login__input"
            placeholder="auth_token"
            onKeyDown={this.onEnterPress}
          />
          <p />
        </div>
      </div>
    );
  }
}
