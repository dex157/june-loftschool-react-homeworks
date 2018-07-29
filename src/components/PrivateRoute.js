import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from 'styled-components';
import { logout } from '../ducks/auth-actions'

class PrivateRoute extends React.PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          rest.isAuthorized ? (
            <div>
              <LogoutButtonContainer>
                <button onClick={this.performLogout}>Logout</button>
              </LogoutButtonContainer>
              <Component {...props} />
            </div>
          ) : (
            <Redirect to="/login"/>
          )
        }
      />
    );
  }

  performLogout = () => {
    this.props.logout();
  }
}

const LogoutButtonContainer = styled.div`
    width: 400px;
    text-align: center;
    margin: 50px auto 20px;
`;

const mapStateToProps = state => {
  return ({
    isAuthorized: state.auth.IsAuthorized
  });
};

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);