import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthSuccess: true
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerClick = () => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;

    this.setState({ isAuthSuccess: authorizeUser(email, password) });
  };

  render() {
    const { email, password, isAuthSuccess } = this.state;
    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input
            name="email"
            placeholder="login"
            value={email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          {!isAuthSuccess && (
            <p className="error">Неверный пароль и/или почта.</p>
          )}
        </div>
        <button onClick={this.handlerClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
