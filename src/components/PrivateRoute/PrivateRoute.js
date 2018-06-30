import React, { PureComponent } from 'react';
import { AuthHOC } from '../AuthorizeProvider/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from "../AuthContext";

class PrivateRoute extends PureComponent {
  render() {
    const {component: Component, ...rest} = this.props;
    return <AuthConsumer>
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
  }
}

export default AuthHOC(PrivateRoute);
