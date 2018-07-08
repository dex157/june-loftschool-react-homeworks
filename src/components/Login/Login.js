import React, { Component } from 'react';
import { AuthHOC } from '../AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { authorizeUser } = this.props;

    this.setState({ error: !authorizeUser(email, password) });
  };

  render() {
    const { isAuthorized } = this.props;
    const { error } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input name="email" onChange={this.handleChange} />
          <input name="password" onChange={this.handleChange} />
          {error ? <p className="error">Неверный пароль и/или почта.</p> : null}
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
