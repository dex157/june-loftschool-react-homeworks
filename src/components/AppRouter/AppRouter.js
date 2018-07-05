import React, { Component } from 'react';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';
import { Switch, Route } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}
