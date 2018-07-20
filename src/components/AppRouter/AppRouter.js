import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";
import UserPage from "../UserPage";

export class AppRouter extends PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(AppRouter);
