import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';
import { getIsAuthorized } from '../../ducks/auth';
import styled from 'styled-components';
import { logout } from '../../ducks/auth';
import { getNetworkError, getIsNetworkErrorPresent } from '../../ducks/network';

class AppRouter extends Component {
  handleClick = () => {
    this.props.logout();
  };
  render() {
    const { isAuthorized, isNetworkError, networkErrorMessage } = this.props;

    return (
      <App>
        {isNetworkError ? (
          <p style={{ color: 'red' }}>{networkErrorMessage}</p>
        ) : null}
        {isAuthorized ? (
          <button onClick={this.handleClick}>Выйти</button>
        ) : null}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users/me" />} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect to="/users/me" />
        </Switch>
      </App>
    );
  }
}

const App = styled.div`
  text-align: center;
  padding: 50px;
`;

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
