import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    error: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ error: false });
  };
  handleClick = e => {
    const { authorizeUser } = this.props;
    !authorizeUser(this.state.email, this.state.password) &&
      this.setState({ error: true });
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
          <input name="password" onChange={this.handleChange} type="password" />
          {error && <p className="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
