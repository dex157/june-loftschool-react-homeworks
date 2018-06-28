import React, { PureComponent } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import { Public } from 'components/Public';
import { Login } from 'components/Login';
import { PrivateRoute } from 'components/PrivateRoute';
import { Private } from 'components/Private';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <Link to="/public">Public</Link>
          <Link to="/private">Private</Link>
          <Link to="/login">Login</Link>
          <Switch>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={() => Private} />
            <Redirect to="/public" />
          </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
