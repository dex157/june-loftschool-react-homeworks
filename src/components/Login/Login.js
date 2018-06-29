import React, { Component, Fragment } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';
import './login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    failedAuthorize: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkLogin = () => {
    const { email, password } = this.state;
    const failedAuthorize = !this.props.authorizeUser(email, password);

    if (failedAuthorize) {
      this.setState({
        failedAuthorize: true
      });
    } else {
      this.setState({
        failedAuthorize: false
      });
    }
  };

  render() {
    const { isAuthorized } = this.props;

    return (
      <Fragment>
        {isAuthorized && <Redirect to="/" />}
        <form className="login__form">
          <label htmlFor="email">Login</label>
          <input
            type="text"
            onChange={this.handleChange}
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={this.handleChange}
            id="password"
            name="password"
          />
        </form>

        {this.state.failedAuthorize && (
          <p className="error">Неверный пароль и/или почта.</p>
        )}

        <button onClick={this.checkLogin}>Login</button>
      </Fragment>
    );
  }
}

export default AuthHOC(Login);
