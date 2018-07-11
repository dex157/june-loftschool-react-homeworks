import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';

class AppRouter extends PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" render={() => <Redirect to="/users/me" />} />
          <PrivateRoute path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect to="/login" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(AppRouter);
