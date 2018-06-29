import React, { PureComponent } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from '../AuthorizeProvider';
import Public from '../Public';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/private">Секретная страница</Link>
              </li>
              <li>
                <Link to="/login">Войти</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" component={Public} exact />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={() => Login} />
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
