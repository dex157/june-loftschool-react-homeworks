import React, { Component } from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';
import { getIsAuthorized } from '../../ducks';

export class AppRouter extends Component {
  render() {
    const { isAuthorized } = this.props;

    return (
      <div className="main">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/users/me"
            component={UserPage}
            isAuthorized={isAuthorized}
          />
          <PrivateRoute
            path="/users/:name"
            // component={UserPage}
            // isAuthorized={isAuthorized}
          />
          {!isAuthorized && <Redirect exact from="/" to="/login" />}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthorized: getIsAuthorized(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
