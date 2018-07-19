import React, { PureComponent } from 'react';
import './PrivateRoute.css';
import { Redirect, Route } from 'react-router-dom';

export default class PrivateRoute extends PureComponent {
  render() {
    // const { isAuthorized, match: { params } } = this.props;
    const { isAuthorized, component: Component, ...rest } = this.props;

    console.log("PrivateRoute",rest);

    return (
      <Route
        {...rest}
        render={() => (isAuthorized ? <Component params={rest.computedMatch.params} /> : <Redirect to="/login" />)}
      />
    );
  }
}
