import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom/";
import { AuthConsumerHOC } from './AuthContext';

class Login extends Component {
  state = {
    authToken: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = (e, authorizeUserFn) => {
    if (e.key === "Enter") {
      this.authorizeUser(authorizeUserFn);
    }
  };

  authorizeUser = (authorizeUserFn) => {
    authorizeUserFn(this.state.authToken);
  };

  render() {
    return this.props.isAuthorized ? (
      <Redirect to="/user/me"/>
    ) : (
      <div className="login-container">
        <div className="login-form">
          <p>
            Получить токен нужно на своей странице github, перейдите по{" "}
            <a href="https://github.com/settings/tokens">адресу</a> и создать себе
            токен. Запишите куда нибудь токен, так как после создания доступ к
            нему будет только один раз.
          </p>
          <input
            onChange={this.handleChange}
            onKeyPress={(e) => this.handleKeyPress(e, this.props.authorizeUser)}
            className="sc-gzVnrw lfdfns"
            placeholder="auth_token"
            name="authToken"
            value={this.state.authToken}
          />
          <p>После ввода нажать Enter</p>
        </div>
      </div>
    );
  }
}

export default AuthConsumerHOC(Login);
