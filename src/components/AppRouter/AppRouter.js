import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';

export default class AppRouter extends PureComponent {
  render() {
    const { error, isAuthorized } = this.props;

    return (
      <main>
        {!isAuthorized ? null : (
          <div className="buttons">
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        )}
        {!error ? null : <p className="error">{error}</p>}
        <Switch>
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
      </main>
    );
  }

  handleLogout = () => {
    this.props.logout();
  };
}
