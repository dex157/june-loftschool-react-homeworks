import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    error: false,
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;
    const authorized = authorizeUser(email, password);

    this.setState({ error: !authorized });
  };

  render() {
    const { isAuthorized } = this.props;
    const { error, email, password } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <input
          name="email"
          type="text"
          placeholder="login"
          value={email}
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="text"
          placeholder="password"
          value={password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {error && <p className="error">Неверный логин и/или пароль</p>}
      </div>
    );
  }
}

export default AuthHOC(Login);
