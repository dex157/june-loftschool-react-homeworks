import React, { Component, Fragment } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  
  state = {
    email: '',
    password: '',
    isAuthSuccess: true
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerClick = () => {
    const { authorizeUser } = this.props, 
    			{ email, password } = this.state;

    this.setState({ 
    	isAuthSuccess: authorizeUser(email, password) 
    });
  };

  render() {
    const { isAuthorized } = this.props, 
          { email, password, isAuthSuccess } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <Fragment>
          <input name="email" value={email} onChange={this.handleChange} />
          <input name="password" value={password} onChange={this.handleChange} />
          {!isAuthSuccess && (<p className="error" style={{color: 'red'}}>Неверный пароль и/или почта.</p>)}
        	<button onClick={this.handlerClick}>Войти</button>
      </Fragment>
    );
  }
}


export default AuthHOC(Login);
