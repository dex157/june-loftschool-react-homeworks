import React, { PureComponent } from 'react';
import { AuthHOC } from '../AuthorizeProvider';
import Private from '../Private';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;

    console.log(isAuthorized);

    return isAuthorized ? Private() : <Redirect to="/login" />;
  }
}

export default AuthHOC(PrivateRoute);
