import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';

class PrivateRoute extends PureComponent {
  render() {
    return null;
  }
}

export default AuthHOC(PrivateRoute);
