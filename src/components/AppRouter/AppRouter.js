import React, { Component } from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';

import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';

class AppRouter extends Component {
  render() {
    const isAuthorized = false;

    return (
      <div className="main">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/users/me"
            component={UserPage}
            isAuthorized={isAuthorized}
          />
          {!isAuthorized && <Redirect exact from="/" to="/login"/>}
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
