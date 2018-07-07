import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthFailed: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    return !this.props.authorizeUser(this.state.email, this.state.password)
      ? this.setState({ isAuthFailed: true })
      : null;
  };

  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <div>
          <button onClick={this.handleClick}>Submit</button>
        </div>
        {this.state.isAuthFailed ? (
          <p className="error">Неверный пароль и/или почта</p>
        ) : null}
      </div>
    );
  }
}

export default AuthHOC(Login);
