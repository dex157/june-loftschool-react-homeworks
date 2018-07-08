import React from 'react';
import ShowList from 'components/ShowList';
import ShowPage from 'components/ShowPage';
import { Switch, Route } from 'react-router-dom';
import './AppRouter.css';

class AppRouter extends React.Component {
  render() {
    return (
      <Switch className="App">
        <Route path="/" component={ShowList} exact />
        <Route path="/shows/:id" component={ShowPage} />
      </Switch>
    );
  }
}

export default AppRouter;
