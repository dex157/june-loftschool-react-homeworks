import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authorize, getIsAuthorized } from '../../ducks';

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
          const { authorize } = this.props,
            { authToken } = this.state;

          authorize(authToken);
        }
        break;
      default:
        break;
    }
  };

  render() {
    const { authToken } = this.state,
      { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/users/me" />;
    }

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
  return {
    isAuthorized: getIsAuthorized(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authorize: payload => {
      dispatch(authorize(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
