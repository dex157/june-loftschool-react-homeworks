/*
import React from 'react';

const {
  Provider: AuthProvider,
  Consumer: AuthConsumer,
} = React.createContext({ isAuthorized: false });

export { AuthProvider, AuthConsumer };
*/

import React, { Component } from 'react';
import { authRequest } from '../ducks/auth-actions';
import { connect } from 'react-redux';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });

class AuthProvider extends Component {
  state = {
    isAuthorized: false
  };

  authorizeUser = (authToken) => {
    /*let credentialsMatched =
      authToken === "60bc2786052210834b4336b974eae81ad01ca225";*/
    this.props.authRequest(authToken);
  };

  render() {
    const { children } = this.props;
    const { isAuthorized } = this.state;

    return (
      <Provider value={{ isAuthorized, authorizeUser: this.authorizeUser }}>
        {children}
      </Provider>
    );
  }
}

const AuthConsumerHOC = WrappedComponent =>
  class extends Component {
    static displayName = 'AuthHOCWrapper';
    render() {
      return (
        <Consumer>
          {({ isAuthorized, authorizeUser }) => (
            <WrappedComponent
              {...this.props}
              {...{ isAuthorized, authorizeUser }}
            />
          )}
        </Consumer>
      );
    }
  };

const mapDispatchToProps = { authRequest };

const mapStateToProps = state => ({
  isAuthorized: state.auth.authStatus
});


const AuthProviderHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthProvider);

export {AuthProviderHOC, AuthConsumerHOC};
