import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';
import UserPage from 'components/UserPage/UserPage';
import { logout } from 'ducks/auth';
import { isAuthorized } from 'ducks/auth/index';
import './AppRouter.css';

export class AppRouter extends PureComponent {
  handleLogoutClick = () => {
    this.props.logout();
  };

  render() {
    const { isAuthorized } = this.props;

    return (
      <div className="app">
        {isAuthorized && (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <button
                className="btn btn-primary"
                onClick={this.handleLogoutClick}
              >
                Выйти
              </button>
            </li>
          </ul>
        )}

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users/me" />} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:login" component={UserPage} />
          <Redirect to="/users/me" />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = {
  logout
};

const mapStateToProps = state => ({
  isAuthorized: isAuthorized(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
