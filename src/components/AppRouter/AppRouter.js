import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";

class AppRouter extends PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/user/me" component={PrivateRoute} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(AppRouter);
