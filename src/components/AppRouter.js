import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UserPage from "./UserPage";

export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/user/me" component={UserPage}/>
        <PrivateRoute path="/user/:name" component={UserPage}/>
        <Redirect from="*" to="/login"/>
      </Switch>
    );
  }
}

export default AppRouter;
