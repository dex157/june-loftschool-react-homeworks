import React, { PureComponent } from 'react';
import './Login.css';
import { Redirect } from "react-router-dom";

export default class Login extends PureComponent {
  state = {
    token: ''
  };

  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? <Redirect to="/user/me" /> : (
      <div className="login">
        <div className="auth">
          <p>
            Получить токен нужно на своей странице github, перейдите по {` `}
            <a href="https://github.com/settings/tokens">адресу</a>
            {` `}
            и создать себе токен. Запишите куда нибудь токен, так как после
            создания доступ к нему будет только один раз.
          </p>
          <input
            className="auth-token"
            placeholder="auth_token"
            value={this.state.token}
            onChange={this.handleAuthTokenChange}
            onKeyPress={this.handleKeyPressEnter}
          />
          <p>После ввода нажать Enter</p>
        </div>
      </div>
    );
  }

  handleAuthTokenChange = event => {
    this.setState({ token: event.target.value });
  };

  handleKeyPressEnter = event => {
    if (event.key === 'Enter' && this.state.token) {
      this.props.authorize(this.state.token);
    }
  };
}
