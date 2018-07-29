import React, { PureComponent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import { withRouter } from 'react-router-dom';
import { getIsNetworkErrorPresent, getNetworkError } from '../../ducks/network';
import { getIsAuthorized, logout } from '../../ducks/auth';
import { connect } from 'react-redux';

export class AppRouter extends PureComponent {
  handleLogoutClick = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { isAuthorized, isNetworkErrorPresent, networkError } = this.props;
    console.log('isNetworkErrorPresent:', isNetworkErrorPresent);
    console.log('networkError:', networkError);

    return (
      <div className="app">
        {isNetworkErrorPresent && (
          <div className="alert alert-danger" role="alert">
            {networkError}
          </div>
        )}

        {isAuthorized && (
          <button
            className="btn btn-primary fixed-top"
            style={{ top: 60 + 'px', left: 40 + 'px' }}
            onClick={this.handleLogoutClick}
          >
            Выйти
          </button>
        )}

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users/me" />} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect to="/users/me" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isNetworkErrorPresent: getIsNetworkErrorPresent(state),
  networkError: getNetworkError(state)
});

const mapDispatchToProps = {
  logout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
