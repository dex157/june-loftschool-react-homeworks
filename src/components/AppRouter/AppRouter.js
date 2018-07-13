import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';

// import './AppRouter.css';

const Follower = props => <div>Страничка фоловера</div>;

export default class extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/user/me" component={UserPage} />
          <Route exact path="/user/:name" component={Follower} />
          <Redirect to="/user/me" />
        </Switch>
      </div>
    );
  }
}
