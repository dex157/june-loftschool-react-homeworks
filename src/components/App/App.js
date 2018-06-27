import React, { PureComponent } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <Switch />
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
