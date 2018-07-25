import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';
import { getIsAuthorized, logout } from '../../ducks/auth';
import { getNetworkError, getIsNetworkErrorPresent } from '../../ducks/network';

export class AppRouter extends Component {
  handleClick = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { isAuthorized, isNetworkError, networkErrorMessage } = this.props;

    return (
      <div>
        {isNetworkError ? (
          <div className="sc-VigVT jPDcUB">
            <p className="sc-jTzLTM eYHJpm">{networkErrorMessage}</p>
          </div>
        ) : null}

        {isAuthorized ? (
          <div className="sc-VigVT jPDcUB">
            <button onClick={this.handleClick}>Logout</button>
          </div>
        ) : null}

        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect to="/users/me" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isNetworkError: getIsNetworkErrorPresent(state),
  networkErrorMessage: getNetworkError(state)
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
