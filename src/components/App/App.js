import React, { PureComponent } from 'react';
import { Switch, Link, Route, withRouter, Redirect } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Public from 'components/Public';
import Private from 'components/Private';
import Login from 'components/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
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
          <Switch>
            <Route path="/" exact component={Public} />
            <PrivateRoute path="/private" component={Private} />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

export default withRouter(App);

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
