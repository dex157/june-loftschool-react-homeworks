import React, { Component } from 'react';
import './AppRouter.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Search from 'components/Search';
import ShowPage from 'components/ShowPage';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
