import React, { PureComponent } from 'react';
import { Switch, withRouter, Route, Link } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Public from 'components/Public';
import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';

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
            <Route path="/login" component={Login} />
            <Route path="/private" component={PrivateRoute} />
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
