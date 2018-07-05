import React, { Component } from 'react';
import Search from '../Search';
import ShowPreview from '../ShowPreview';
import ShowPage from '../ShowPage';
import './AppRouter.css';
import { Switch, Route } from 'react-router-dom';

const SearchAndShow = () => (
  <div className="App__content">
    <Search />
    <ShowPreview />
  </div>
);

export default class extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchAndShow} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}
