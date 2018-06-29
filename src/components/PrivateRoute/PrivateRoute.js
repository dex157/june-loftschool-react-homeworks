import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';
import Private from '../Private';

class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, isAuthorized, ...rest } = this.props;
    return (
      <Route
        isAuthorized={isAuthorized}
        {...rest}
        render={props =>
          isAuthorized ? <Private {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default AuthHOC(PrivateRoute);
