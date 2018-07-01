import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthSuccess: false
  };

  handleSubmit = () => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;

    const autorized = authorizeUser({ email, password });
    this.setState({ isAuthSuccess: autorized });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password, isAuthSuccess } = this.state;

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
          {!isAuthSuccess && (
            <p className="error"> Неверный пароль и/или почта </p>
          )}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
