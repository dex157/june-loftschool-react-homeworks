import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    btnClicked: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { email, password } = this.state;

    this.setState({ btnClicked: true });
    this.props.authorizeUser(email, password);
  };

  render() {
    const { isAuthorized } = this.props;
    const { btnClicked } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input name="email" onChange={this.handleChange} />
          <input name="password" onChange={this.handleChange} />
        </div>
        {btnClicked && <p className="error">Неверный пароль и/или почта</p>}
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
