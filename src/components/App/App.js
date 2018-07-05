import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import  Public from 'components/Public';
import  Login from 'components/Login';
import  Private from 'components/Private';
import  PrivateRoute from 'components/PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
        	<nav>
        		<Link to="/">Главная</Link>{' '}
        		<Link to="/private">Секретная страница</Link>{' '}
        		<Link to="/login">Войти</Link>{' '}
        	</nav>
          
          <Switch>
          	<Route path="/" exact component={Public} />
          	<PrivateRoute path="/private" component={Private} />
          	<Route path="/login" exact component={Login} />
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
