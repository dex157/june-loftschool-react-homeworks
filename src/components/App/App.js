import React, { PureComponent } from 'react';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from '../AuthorizeProvider';
import Public from '../Public';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';

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
            <Route path="/" component={Public} exact />
            <Route path="/private" component={PrivateRoute} />
            <Route path="/login" component={Login} />
            <Redirect from="/public" to="/" />
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
