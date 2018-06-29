import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Public from 'components/Public';
import Private from 'components/Private';
import Login from 'components/Login';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/login'>Войти</Link>
              </li>
              <li>
                <Link to='/private'>Секретная страница</Link>
              </li>
              <li>
                <Link to='/'>Главная</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path='/private' component={Private}></PrivateRoute>
            <Route path='/' component={Public} exact></Route>
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
