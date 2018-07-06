import React, { Component, Fragment } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
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
  }
}

export default AuthHOC(Login);
