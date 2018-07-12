import React, { Component } from 'react';
import './AppRouter.css';
import Search from '../Search/Search';
import { Switch, Route } from 'react-router-dom';
import ShowPage from '../ShowPage/ShowPage';

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

export default AppRouter;
