import React, { PureComponent } from 'react';
import './AppRouter.css';
import Search from '../Search/Search';
import ShowPage from '../ShowPage/ShowPage';
import { Route } from 'react-router-dom';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Search} />
        <Route path={`/show/:id`} component={ShowPage} />
      </div>
    );
  }
}

export default AppRouter;
