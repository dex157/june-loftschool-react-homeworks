import React, { PureComponent } from 'react';
import Search from '../Search';
import ShowPage from '../ShowPage';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './AppRouter.css';

class AppRouter extends PureComponent {
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
