import React, { PureComponent } from 'react';
import { AuthHOC } from '../AuthorizeProvider/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const {component: Component, ...rest} = this.props;
    return <AuthHOC>
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
    </AuthHOC>
  }
}

export default AuthHOC(PrivateRoute);
