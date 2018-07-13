/*
import React from 'react';

const {
  Provider: AuthProvider,
  Consumer: AuthConsumer,
} = React.createContext({ isAuthorized: false });

export { AuthProvider, AuthConsumer };
*/

import React, { Component } from 'react';
import { authorize } from '../ducks/auth-actions';
import { connect } from 'react-redux';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });

class AuthProvider extends Component {
  state = {
    isAuthorized: false
  };

  authorizeUser = (authToken) => {
    this.props.authorize(authToken);
  };

  render() {
    const { children, isAuthorized } = this.props;

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

const mapDispatchToProps = { authorize };

const mapStateToProps = state => {
  console.log(state.auth);
  return ({
    isAuthorized: state.auth.IsAuthorized
  });
};


const AuthProviderHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthProvider);

export {AuthProviderHOC, AuthConsumerHOC};
