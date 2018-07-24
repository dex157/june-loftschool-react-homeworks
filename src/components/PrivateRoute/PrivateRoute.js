import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthorized } from '../../ducks/auth';
import { connect } from 'react-redux';

class PrivateRoute extends PureComponent {
  render() {
    const { component: PureComponent, isAuthorized, ...rest } = this.props;

    return (
      <Route
        isAuthorized={isAuthorized}
        {...rest}
        render={props =>
          isAuthorized ? <PureComponent {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: isAuthorized(state)
});

export default connect(mapStateToProps)(PrivateRoute);
