import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';
import { withRouter } from 'react-router-dom';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
