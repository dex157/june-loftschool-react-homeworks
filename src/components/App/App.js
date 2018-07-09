import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route, Redirect } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Login from 'components/Login';
import Public from 'components/Public';
import Private from 'components/Public';
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
            <PrivateRoute path="/private" component={Private} />
            <Redirect from="*" to="/" />
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
