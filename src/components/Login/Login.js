import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthFailed: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { authorizeUser } = this.props;
    const isAuthorized = authorizeUser(email, password);
    this.setState({ isAuthFailed: !isAuthorized });
  };

  render() {
    const { isAuthFailed } = this.state;
    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input name="email" onChange={this.handleChange} />
          <input name="password" onChange={this.handleChange} />
          {isAuthFailed && <p className="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
