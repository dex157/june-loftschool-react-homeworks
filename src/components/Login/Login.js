import React, { Component } from 'react';
import { AuthHOC } from '../AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    isCorrect: true
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;
    this.setState({
      isCorrect: authorizeUser(email, password)
    });
  };

  render() {
    const { isAuthorized } = this.props;
    const { isCorrect } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input name="email" onChange={this.handleChange} />
          <input name="password" onChange={this.handleChange} />
          {!isCorrect && <p className="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
