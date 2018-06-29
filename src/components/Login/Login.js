import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
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

  login = () => {
    const { email, password } = this.state;
    this.setState({ authFailed: !this.props.authorizeUser(email, password) });
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password, authFailed } = this.state;

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
          {authFailed && <p className="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.login}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
/*
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


}

export default AuthHOC(Login);
*/
