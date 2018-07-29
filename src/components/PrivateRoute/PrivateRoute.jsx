import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { getIsAuthorized } from '../../ducks/auth';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class PrivateRouter extends PureComponent {
  render() {
    const { isAuthorized, path } = this.props;
    const Component = this.props.component;
    console.log(Component);

    return (
      <Route
        exact
        path={path}
        render={() => (isAuthorized ? <Component /> : <Redirect to="/login" />)}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(PrivateRouter);
