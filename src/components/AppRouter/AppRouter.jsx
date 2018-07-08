import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';

class AppRouter extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/users/me" component={UserPage} />
          <Redirect to="/login" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(AppRouter);
