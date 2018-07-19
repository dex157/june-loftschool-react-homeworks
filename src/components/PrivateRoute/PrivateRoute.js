import React, { PureComponent } from 'react';
import './PrivateRoute.css';
import { Redirect } from 'react-router-dom';
import UserPage from "../UserPage";


export default class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? <UserPage /> : <Redirect to="/login" />;
  }
}
