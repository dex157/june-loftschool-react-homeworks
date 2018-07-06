<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
=======
import React, { Component } from 'react';
>>>>>>> 4679c637cdeca45dadaff1d41e614a99ac5934c1
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
<<<<<<< HEAD
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkPass = () => {
    this.props.authorizeUser(this.state.email, this.state.password);
  }

  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <Fragment>
        <div>
          <input onKeyUp={this.handleChange} name="email" />
          <input onKeyUp={this.handleChange} name="password" />
        </div>
        <button onClick={this.checkPass}>Submit</button>
      </Fragment>
    );
=======
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? <Redirect to="/" /> : null;
>>>>>>> 4679c637cdeca45dadaff1d41e614a99ac5934c1
  }
}

export default AuthHOC(Login);
