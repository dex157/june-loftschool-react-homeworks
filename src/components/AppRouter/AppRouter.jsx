import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { logout } from '../../ducks/auth';
import { connect } from 'react-redux';
import Login from '../Login';
import './AppRouter.css';
import { getIsAuthorized } from '../../ducks/auth';
import { getIsNetworkErrorPresent, getNetworkError } from '../../ducks/network';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  errorMessage: getNetworkError(state),
  isError: getIsNetworkErrorPresent(state)
});

const mapDispatchToProps = { logout };

export class AppRouter extends PureComponent {
  logoutHandler = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const {isAuthorized, isError, errorMessage} = this.props;
    return (
      <main>
        {isError && (
          <p className="error">
            {errorMessage}
          </p>
        )}
        {isAuthorized && (
          <div className="logout">
            <button onClick={this.logoutHandler}>Logout</button>
          </div>
        )}
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" render={() => <Redirect to="/user/me" />} />
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Redirect to="/login" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
