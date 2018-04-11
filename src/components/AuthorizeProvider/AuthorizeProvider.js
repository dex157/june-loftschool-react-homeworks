import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });

class AuthorizeProvider extends Component {
  state = {
    isAuthorized: false,
  };

  authorizeUser = (name, password) => {
    if (name === 'student' && password === '123') {
      this.setState({ isAuthorized: true });
      return true;
    }
    return false;
  };

  render() {
    const { children } = this.props;
    const { isAuthorized } = this.state;

    return (
      <Provider value={{ isAuthorized, authorizeUser: this.authorizeUser }}>{children}</Provider>
    );
  }
}

const AuthHOC = WrappedComponent =>
  class extends Component {
    static displayName = 'AuthHOCWrapper';
    render() {
      return (
        <Consumer>
          {({ isAuthorized, authorizeUser }) => (
            <WrappedComponent {...this.props} {...{ isAuthorized, authorizeUser }} />
          )}
        </Consumer>
      );
    }
  };

export { AuthorizeProvider, AuthHOC };
