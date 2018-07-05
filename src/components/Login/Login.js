import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
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
    const { authorizeUser } = this.props;
    const { email, password } = this.state;

    if (!authorizeUser(email, password)) {
      this.setState({ error: true });
    }
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password, error } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input name="email" onChange={this.handleChange} value={email} />
          <input
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          {error && <p class="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
