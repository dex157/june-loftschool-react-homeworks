import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthSuccess: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;
    const authorized = !authorizeUser(email, password);
    
    this.setState({ isAuthSuccess: authorized });
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password, isAuthSuccess } = this.state;
    

    return isAuthorized ? (
      <Redirect to="/private" />
    ) : (
      <div>
        <div>
          <input name="email" value={email} onChange={this.handleChange} />
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {isAuthSuccess && (
            <p className="error">Неверный пароль и/или почта.</p>
          )}
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
