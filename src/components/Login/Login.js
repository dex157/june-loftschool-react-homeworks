import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authRequest } from '../../ducks';

import './Login.css';

class Login extends Component {
  state = {
    authToken: ''
  };

  handleOnChange = e => {
    const authToken = e.target.value;

    this.setState({ authToken: authToken });
  };

  handleKeyPress = e => {
    switch (e.key) {
      case 'Enter':
        if (e.target.value) {
          console.log('HERE');
          console.log('this.props =', this.props);
          const { authRequest } = this.props,
            { authToken } = this.state;

          authRequest(authToken);
        }
        break;
      default:
        break;
    }
  };

  render() {
    const { authToken } = this.state;

    return (
      <div className="sc-EHOje dAZrsR">
        <div className="sc-bZQynM erDCdu">
          <p>
            Получить токен нужно на своей странице github, перейдите по{' '}
            <a href="https://github.com/settings/tokens">адресу</a> и создать
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </p>
          <input
            className="sc-gzVnrw lfdfns"
            placeholder="auth_token"
            value={authToken}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleOnChange}
          />
          <p>После ввода нажать Enter</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    authRequest: payload => {
      console.log('###authRequest###');
      dispatch(authRequest(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
