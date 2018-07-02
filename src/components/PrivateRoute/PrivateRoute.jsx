import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthHOC } from 'components/AuthorizeProvider';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: Component, ...rest } = this.props;

    return(
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
    )
  }
}

export default AuthHOC(PrivateRoute);
