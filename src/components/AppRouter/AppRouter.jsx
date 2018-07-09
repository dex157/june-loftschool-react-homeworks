import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import {
  getIsAuthorized
} from '../../ducks/auth';


class AppRouter extends Component {
  render() {
    const {isAuthorized} = this.props;
    return (
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/users/me" component={UserPage} isAuthorized={isAuthorized} />
          <PrivateRoute path="/users/:name" component={UserPage} isAuthorized={isAuthorized} />
          <Redirect to="/login" />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});


const App = connect(
  mapStateToProps
)(AppRouter);

export default withRouter(App);
