import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { authorizeUser } = this.props;
    const { email, password } = this.state;
    const res = authorizeUser(email, password);
    if (!res) {
      this.setState({ error: 'неправильный пароль или почта' });
      return true;
    }
    this.setState({ error: '' });
  };
  render() {
    const { isAuthorized } = this.props;
    const { name, password, error } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="name">Name</label>
        <input
          name="email"
          type="text"
          onChange={this.handleChange}
          value={name}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={this.handleChange}
          value={password}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AuthHOC(Login);
