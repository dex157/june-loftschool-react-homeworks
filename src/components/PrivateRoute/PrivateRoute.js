import React, { PureComponent } from 'react';
import { AuthHOC } from '../AuthorizeProvider/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          rest.isAuthorized ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default AuthHOC(PrivateRoute);
