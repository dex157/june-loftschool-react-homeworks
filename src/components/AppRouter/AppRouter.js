import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';
import { logout, getIsAuthorized } from '../../ducks/auth';
import { getIsFetching } from '../../ducks/users';
import { getNetworkErrorMessage } from '../../ducks/network';

export class AppRouter extends PureComponent {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { isAuthorized, isFetching, networkErrorMessage } = this.props;

    return (
      <AppDivWrapper className="app">
        {networkErrorMessage && (
          <NetworkErrorDiv>{networkErrorMessage}!</NetworkErrorDiv>
        )}
        {isAuthorized &&
          !isFetching && (
            <LogoutBtn onClick={this.handleLogout}>Logout</LogoutBtn>
          )}
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Redirect to="/user/me" />
        </Switch>
      </AppDivWrapper>
    );
  }
}

const AppDivWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NetworkErrorDiv = styled.div`
  color: red;
  text-align: center;
`;

const LogoutBtn = styled.button`
  cursor: pointer;
  width: 5rem;
  height: 2rem;
  border-radius: 0.6rem;
  border: none;
  background-color: #ff8663;
  color: #fff;
  transition: 0.5s;

  &:hover {
    filter: brightness(80%);
  }
`;

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isFetching: getIsFetching(state),
  networkErrorMessage: getNetworkErrorMessage(state)
});

const mapDispatchToProps = { logout };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
