import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Private from '../Private';
import Public from '../Public';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <nav>
          <ul>
            <li>
              <Link to="/login">Войти</Link>
            </li>
            <li>
              <Link to="/private">Секретная страница</Link>
            </li>
            <li>
              <Link to="/">Главная</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Route path="/" component={Public} />
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
