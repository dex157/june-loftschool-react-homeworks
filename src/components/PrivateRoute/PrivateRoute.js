import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
//import { getIsAuthorized } from '../../ducks/auth';

class PrivateRoute extends React.PureComponent {
  render() {
    const { isAuthorized, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

// const mapStateToProps = state => ({
//   isAuthorized: getIsAuthorized(state)
// });

//export default connect(mapStateToProps)(PrivateRoute);
export default PrivateRoute;
