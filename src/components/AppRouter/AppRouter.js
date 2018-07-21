import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';

export class AppRoute extends PureComponent {
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

export default withRouter(AppRoute);