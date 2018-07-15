import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends React.PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          rest.isAuthorized ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login"/>
          )
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return ({
    isAuthorized: state.auth.IsAuthorized
  });
};

export default connect(
  mapStateToProps, {})
(PrivateRoute);
