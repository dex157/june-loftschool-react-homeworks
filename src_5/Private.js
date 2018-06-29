import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthConsumer, AuthProvider } from './AuthContext';

export class PrivateExample extends Component {
  state = {
    isAuthorized: false,
  };

  authorize = () => {
    this.setState({ isAuthorized: true });
  };

  render() {
    const { isAuthorized } = this.state;
    return (
      <AuthProvider
        value={{ isAuthorized, authorize: this.authorize }}
      >
        <Link to="/">Public</Link>{' '}
        <Link to="/private">Private</Link>{' '}
        <Link to="/login">Login</Link>
        <hr />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <p>Public</p>}
          />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute
            path="/private"
            component={() => <p>Private</p>}
          />
          <Redirect to="/" />
        </Switch>
      </AuthProvider>
    );
  }
}

const LoginPage = () => (
  <AuthConsumer>
    {({ authorize, isAuthorized }) =>
      isAuthorized ? (
        <Redirect to="/private" />
      ) : (
        <button onClick={authorize}>Authorize</button>
      )
    }
  </AuthConsumer>
);

export default PrivateExample;
