import React, { Component } from 'react';
import Search from '../Search';
import SearchPage from '../ShowPage';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/shows/:id" component={SearchPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
