import React, { Component } from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './AppRouter.css';

import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';
import {
  getIsAuthorized,
  logout,
  getIsNetworkErrorPresent,
  getMessage
} from '../../ducks';

export class AppRouter extends Component {
  handleLogout = () => {
    const { logout } = this.props;

    logout();
  };

  render() {
    const { isAuthorized, isErrorExist, errorMessage } = this.props;

    return (
      <div className="main">
        {isAuthorized && (
          <div className="sc-VigVT jPDcUB">
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        )}
        {isErrorExist && errorMessage}
        
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute
              exact
              path="/users/me"
              component={UserPage}
              isAuthorized={isAuthorized}
            />
            <PrivateRoute
              path="/users/:name"
              component={UserPage}
              isAuthorized={isAuthorized}
            />
            <Redirect to="/users/me" />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthorized: getIsAuthorized(state),
    isErrorExist: getIsNetworkErrorPresent(state),
    errorMessage: getMessage(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
