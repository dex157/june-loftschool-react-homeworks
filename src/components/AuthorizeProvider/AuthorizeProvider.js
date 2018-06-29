import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({ isAuthorized: false });

// к сожалению тест раннер еще не готов к тестам с новым контекстом
// по этому тут так много кода, изучайте как следует!
// немного кода я все таки вырезал ^^

const ADMIN = {
  LOGIN: 'student',
  PASS: '123'
};

class AuthorizeProvider extends Component {
  state = {
    isAuthorized: false
  };

  authorizeUser = (login, pass) => {
    if (login !== ADMIN.LOGIN || pass !== ADMIN.PASS) {
      return false;
    }
    this.doAuthorize();
    return true;
  };

  doAuthorize() {
    this.setState({ isAuthorized: true });
  }

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
