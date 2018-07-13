import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';

// import './AppRouter.css';

export default class extends Component {
  render() {
	return (
	  <div className="app">
		<Switch>
			<Route path="/login" component={Login} />
			<PrivateRoute path="/users/me" component={UserPage} />
			<Redirect to="/users/me" />
		</Switch>
	  </div>
	);
  }
}
