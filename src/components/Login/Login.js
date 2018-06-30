import React, { Component } from 'react';
import { AuthHOC } from '../AuthorizeProvider/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    authFailed: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(authorizeUserFn) {
    if (!authorizeUserFn(this.state.email, this.state.password)) {
      this.setState({ authFailed: true });
    }
  }

  render() {
    return this.props.isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
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
          {this.state.authFailed && (
            <p className="error">Неверный пароль и/или почта.</p>
          )}
        </div>
        <button onClick={() => this.handleSubmit(this.props.authorizeUser)}>
          Submit
        </button>
      </div>
    );
  }
}

export default AuthHOC(Login);
