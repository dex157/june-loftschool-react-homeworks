import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumerHOC } from './AuthContext';

class PrivateRoute extends React.PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          rest.isAuthorized ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login"/>
          )
        }
      />
    );
  }
}

export default AuthConsumerHOC(PrivateRoute);
