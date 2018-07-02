import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? <Redirect to="/" /> : null;
  }
}

export default AuthHOC(Login);
