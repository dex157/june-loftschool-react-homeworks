import React, {PureComponent} from 'react';
import {Switch, withRouter, Link, Route} from 'react-router-dom';
import {AuthorizeProvider} from 'components/AuthorizeProvider';

import Public from 'components/Public';
import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';

export class App extends PureComponent {
   render() {
      return (
         <AuthorizeProvider>
            <nav>
               <ul>
                  <li><Link to="/">Главная</Link></li>
                  <li><Link to="/login">Войти</Link></li>
                  <li><Link to="/private">Секретная страница</Link></li>
               </ul>
            </nav>

            <Switch>
               <Route exact path="/" component={Public}/>
               <Route path="/login" component={Login}/>
               <Route path="/private" component={PrivateRoute}/>
            </Switch>
         </AuthorizeProvider>
      );
   }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
