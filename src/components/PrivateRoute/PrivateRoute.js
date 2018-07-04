import React, { PureComponent } from 'react';
import { AuthHOC } from '../AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;
    const Component = this.props.component;

    return (
      <Route
        render={() =>
          isAuthorized ? (
            <Component {...this.props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default AuthHOC(PrivateRoute);
