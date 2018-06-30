import React, { Component } from 'react';
import { AuthHOC } from '../AuthorizeProvider/AuthorizeProvider';
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

  render() {
    return (
      <AuthHOC>
        {({ authorize, isAuthorized }) =>
          isAuthorized ? (
            <Redirect to="/private" />
          ) : (
            <div>
              <div>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button onClick={authorize}>Submit</button>
            </div>
          )
        }
      </AuthHOC>
    );
  }
}

export default AuthHOC(Login);
