import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Login from 'components/Login';
import Public from 'components/Public';
import Private from 'components/Private';
import PrivateRoute from 'components/PrivateRoute';
import './app.css';

export class App extends PureComponent {
  state = {
    isAuthorized: false
  };

  authorize = () => {
    this.setState({ isAuthorized: true });
  };

  render() {
    return (
      <AuthorizeProvider>
        <div className="page__container">
          <nav>
            <ul className="page__list">
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

          <div className="page__content">
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
              <Route path="/" component={Public} exact />
            </Switch>
          </div>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
