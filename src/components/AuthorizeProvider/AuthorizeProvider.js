import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });

// к сожалению тест раннер еще не готов к тестам с новым контекстом
// по этому тут так много кода, изучайте как следует!
// немного кода я все таки вырезал ^^
class AuthorizeProvider extends Component {
  state = {
    isAuthorized: false
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
