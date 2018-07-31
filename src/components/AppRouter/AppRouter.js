import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import UserPage from '../UserPage';
import { logout, getIsAuthorized } from '../../ducks/auth';
import {
  getIsNetworkErrorPresent,
  getNetworkErrorMessage
} from '../../ducks/network';
import './AppRouter.css';

export class AppRouter extends React.PureComponent {
  logout = () => {
    this.props.logout();
  };
  render() {
    const { isAuthorized, isNetworkError, networkErrorMessage } = this.props;

    if (isNetworkError)
      return (
        <div className="network__error">
          Возникла сетевая ошибка: {networkErrorMessage}
        </div>
      );

    return (
      <main>
        {isAuthorized ? this.showLogoutButton() : null}

        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect from="/" to="/users/me" />
        </Switch>
      </main>
    );
  }
  showLogoutButton = () => (
    <button className="logout" onClick={this.logout}>
      logout
    </button>
  );
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isNetworkError: getIsNetworkErrorPresent(state),
  networkErrorMessage: getNetworkErrorMessage(state)
});

const mapDispatchToProps = { logout };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
