import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';
import Private from 'components/Private';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;
    return isAuthorized ? <Private /> : <Redirect to="/login" />;
  }
}

export default AuthHOC(PrivateRoute);
