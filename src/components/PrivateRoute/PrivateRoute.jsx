import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, isAuthorized, ...rest } = this.props;
    return (
      <Route
        isAuthorized={isAuthorized}
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}
