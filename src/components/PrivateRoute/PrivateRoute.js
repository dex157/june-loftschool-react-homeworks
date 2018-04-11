import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: RouteComponent, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (isAuthorized ? <RouteComponent {...props} /> : <Redirect to="/login" />)}
      />
    );
  }
}

export default AuthHOC(PrivateRoute);
