import React from 'react';
import Search from '../Search/';
import ShowPage from '../ShowPage/';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './AppRouter.css';

class AppRouter extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/shows/:id" component={ShowPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
