import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route } from 'react-router-dom';
import { AuthorizeProvider } from '../AuthorizeProvider';
import Login from '../Login';
import Private from '../Private';
import Public from '../Public';
import PrivateRoute from '../PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <nav>
          <Link to="/login">Войти</Link>
          <Link to="/private">Секретная страница</Link>
          <Link to="/">Главная</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
            <Route exact path="/" component={Public} />
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
