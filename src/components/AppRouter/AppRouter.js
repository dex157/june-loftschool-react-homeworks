import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import './AppRouter.css';

import Search from '../Search';
import ShowPage from '../ShowPage';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/shows/:id" component={ShowPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(AppRouter);
