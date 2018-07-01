import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });

// к сожалению тест раннер еще не готов к тестам с новым контекстом
// по этому тут так много кода, изучайте как следует!
// немного кода я все таки вырезал ^^
class AuthorizeProvider extends Component {
  state = {
    isAuthorized: false
  };

  validCredentials = {
    login: 'student',
    password: '123'
  };

  authorizeUser = (userLogin, userPassword) => {
    const { login, password } = this.validCredentials;
    const isValid = userLogin === login && userPassword === password;

    if (!isValid) {
      return false;
    }

    this.setState({ isAuthorized: true });
    return true;
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

const AuthHOC = WrappedComponent =>
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

export { AuthorizeProvider, AuthHOC };
