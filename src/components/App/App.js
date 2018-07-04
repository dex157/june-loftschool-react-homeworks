import React, { PureComponent } from 'react';
import { Switch, withRouter, Route, Link } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Public from '../Public';
import Login from '../Login';
import Private from '../Private';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/private">Private</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" component={Public} />
            <Route path="/login" component={Login} />
            <Route path="/private" comonent={Private} />
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
