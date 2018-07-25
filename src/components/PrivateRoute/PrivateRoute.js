import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthorized } from 'ducks/auth';
import { connect } from 'react-redux';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: Component, ...rest } = this.props;

    return isAuthorized ? (
      <Route {...rest} render={props => <Component {...props} />} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(PrivateRoute);
