import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom/";
import {authorize} from "../ducks/auth-actions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    authToken: "",
    isAuthorized: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      let authToken = this.state.authToken;
      this.props.authorize(authToken);
    }
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
            onKeyPress={(e) => this.handleKeyPress(e)}
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

const mapStateToProps = state => {
  return ({
    isAuthorized: state.auth.IsAuthorized
  });
};

const mapDispatchToProps = { authorize };

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(Login);
