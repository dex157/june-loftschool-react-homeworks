import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';

class PrivateRoute extends PureComponent {
  render() {
    return <p>Private</p>;
  }
}

export default AuthHOC(PrivateRoute);
