import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';

export default class extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Redirect to="/user/me" />
        </Switch>
      </div>
    );
  }
}
