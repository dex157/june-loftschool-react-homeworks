import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    checkCredentials: true
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeSubmit = () => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;
    if (authorizeUser(email, password)) {
      this.setState(state => ({
        authorizedCorrect: true
      }));
    } else {
      this.setState(state => ({
        checkCredentials: false
      }));
    }
  };

  render() {
    const { isAuthorized } = this.props;
    return !isAuthorized ? (
      <div>
        <div>
          <input name="email" onChange={this.handleChangeInput} />
          <input name="password" onChange={this.handleChangeInput} />
          {!this.state.checkCredentials ? (
            <p class="error">Неверный пароль и/или почта.</p>
          ) : (
            ''
          )}
        </div>
        <button onClick={this.handleChangeSubmit}>Submit</button>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default AuthHOC(Login);
