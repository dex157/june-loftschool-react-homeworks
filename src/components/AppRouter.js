import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UserPage from "./UserPage";
import { connect } from 'react-redux'
import { getIsNetworkErrorPresent, getNetworkError } from '../ducks/network';

export class AppRouter extends Component {
  render() {
    const { isNetworkError, networkErrorText } = this.props;
    return (
      <div>
        {isNetworkError ? (
          <div className="app-error">
            {networkErrorText}
          </div>
        ) :
          <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/user/me" component={UserPage}/>
            <PrivateRoute path="/user/:name" component={UserPage}/>
            <Redirect from="*" to="/login"/>
          </Switch>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isNetworkError: getIsNetworkErrorPresent(state),
  networkErrorText: getNetworkError(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
