import React, { PureComponent } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { AuthorizeProvider } from '../AuthorizeProvider';
import Public from '../Public/Public';
import Private from '../Private/Private';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Войти</Link>{' '}
              </li>
              <li>
                <Link to="/private">Секретная страница</Link>{' '}
              </li>
              <li>
                <Link to="/">Главная</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact render={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Redirect to="/" />
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
