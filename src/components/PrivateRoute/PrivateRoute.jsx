import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  getIsAuthorized
} from '../../ducks/auth';
import { connect } from 'react-redux';


class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, isAuthorized, ...rest } = this.props;

    return (
      <Route
        isAuthorized={isAuthorized}
        {...rest}
        render={props =>
          isAuthorized ? <Component 
          {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});


export default connect(
  mapStateToProps
)(PrivateRoute);
