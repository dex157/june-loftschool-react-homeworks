import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { authorize, isAuthorized } from '../../ducks/auth';
import { getIsFetching } from '../../ducks/users';
import { getNetworkErrorText, isNetworkError } from '../../ducks/network';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  isAuthorized: isAuthorized(state),
  networkError: getNetworkErrorText(state),
  isNetworkError: isNetworkError(state)
});

const mapDispatchToProps = { authorize };

class Login extends Component {
  onEnterPress = evt => {
    const { authorize } = this.props;
    const fieldValue = evt.target.value;
    const targetCode = evt.keyCode;
    if (targetCode === 13) {
      authorize(fieldValue);
    }
  };

  renderSpinner = () => {
    return (
      <div className="spinner">
        <Spinner size="64px" color="fuchsia" gap={5} />
      </div>
    );
  };

  render() {
    const {
      networkError,
      isNetworkError,
      isFetching,
      isAuthorized
    } = this.props;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    if (isFetching) {
      this.renderSpinner();
    }

    return (
      <div className="login">
        {isNetworkError && (
          <div className="error">
            <p className="error_text">{networkError}</p>
          </div>
        )}
        <div className="login_wrapper">
          <p>
            Получить токен нужно на своей странице github, перейдите по
            <a href="https://github.com/settings/tokens">адресу</a> и создайте
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </p>
          <input
            placeholder="token"
            className="login_input"
            onKeyDown={this.onEnterPress}
          />
          <p>После ввода нажать Enter</p>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
