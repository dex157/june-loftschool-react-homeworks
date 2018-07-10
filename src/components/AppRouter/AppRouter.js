import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ShowPage from '../ShowPage';
import Search from '../Search';
import './AppRouter.css';

class AppRouter extends PureComponent {
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
