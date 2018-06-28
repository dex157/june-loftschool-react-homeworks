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
    const { authorizeUser } = this.props;
    const { email, password } = this.state;

    const auth = authorizeUser(email, password);

    if (!auth) {
      this.setState({
        email: '',
        password: '',
        isAuthFailed: true
      });
    }
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password, isAuthFailed } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input name="email" value={email} onChange={this.handleChange} />
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {isAuthFailed && (
            <p className="error">Неверный пароль и/или почта.</p>
          )}
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
