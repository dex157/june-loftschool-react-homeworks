import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { authorize, getIsAuthorized } from '../../ducks/auth';
import { getIsFetching } from '../../ducks/users';
import { getNetworkError, getIsNetworkErrorPresent } from '../../ducks/network';
import Spinner from 'react-svg-spinner';

class Login extends Component {
  onEnterPress(evt) {
    const { authorize } = this.props;
    const enterCode = 13;
    const fieldValue = evt.target.value;
    if (evt.target.keyCode === enterCode) {
      authorize(fieldValue);
    }
  }
  render() {
    const {networkError, isNetworkError, isFetching} = this.props;

    return (
      <div>
        {isNetworkError && 
        <div className="error">
          <p className="error__message">{networkError}</p>
       </div>}

       {isFetching &&
        <Spinner size="64px" color="fuchsia" gap={5} />
       }


      <div className="login">
        <div className="login__wrapper">
          <p>
            Получить токен нужно на своей странице github, перейдите по{' '}
            <a href="https://github.com/settings/tokens">адресу</a> и создайте
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </p>
          <input
            className="login__input"
            placeholder="auth_token"
            onKeyDown={this.onEnterPress}
          />
          <p>После ввода нажать Enter</p>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  isAuthorized: getIsAuthorized(state),
  networkError: getNetworkError(state),
  isNetworkError: getIsNetworkErrorPresent(state)
});

const mapDispatchToProps = { authorize };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
