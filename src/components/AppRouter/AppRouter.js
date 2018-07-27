import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';
import UserPage from 'components/UserPage/UserPage';
import { logout } from 'ducks/auth';
import { getIsAuthorized } from 'ducks/auth/index';
import { getIsNetworkErrorPresent, getNetworkError } from 'ducks/network';
import styled from 'styled-components';
import 'index.css';

const StyledNetworkError = styled.div`
  background-color: red;
  padding: 20px;
  border-raius: 10px;
  margin: 20px auto;
`;

const StyledLogoutButton = styled.button`
  margin: 0 auto 20px;
  display: block;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

class AppRouter extends React.PureComponent {
  handleLogoutClick = () => {
    this.props.logout();
  };

  render() {
    const { isAuthorized, isNetworkError, networkErrorText } = this.props;

    return (
      <div className="app">
        {isNetworkError && (
          <StyledNetworkError>{networkErrorText}</StyledNetworkError>
        )}

        {isAuthorized && (
          <StyledLogoutButton onClick={this.handleLogoutClick}>
            Logout
          </StyledLogoutButton>
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
  isNetworkError: getIsNetworkErrorPresent(state),
  networkErrorText: getNetworkError(state)
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
