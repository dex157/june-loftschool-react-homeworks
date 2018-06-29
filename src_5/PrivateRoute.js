import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

export default ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuthorized }) => (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    )}
  </AuthConsumer>
);
