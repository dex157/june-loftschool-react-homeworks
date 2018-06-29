import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    email: '', 
    password: '', 
    isLoginOk: true
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  authorizeUser = () => {
    const { email, password } = this.state;

    this.setState(() => {
      return {
        isLoginOk: this.props.authorizeUser(email, password)
      }
    });
  }

  render() {
    const { isAuthorized } = this.props;

    return (
      isAuthorized ? <Redirect to="/" /> : 
      <div>
        <div>
          <input type="text" name="email" onChange={this.handleChange} />
          <input type="text" name="password" onChange={this.handleChange} />
        </div>
        {
          !this.state.isLoginOk ? (
            <p className="error">Неверный пароль и/или почта</p>
          ) : null
        }
        <button onClick={this.authorizeUser}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
