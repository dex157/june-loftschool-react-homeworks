import React, { Component } from 'react';
import { AuthHOC } from '../AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    err: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitClick = () => {
    const { email, password } = this.state;

    this.setState({ err: !this.props.authorizeUser(email, password) });
  };
  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input type="text" name="email" onChange={this.handleChange} />
          <input type="text" name="password" onChange={this.handleChange} />
          <br />
          <button type="submit" onClick={this.handleSubmitClick}>
            Submit
          </button>
          {this.state.err ? (
            <p className="error">Неверный пароль и/или почта.</p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AuthHOC(Login);
