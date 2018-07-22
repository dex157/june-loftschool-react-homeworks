import React, {Component, Fragment} from 'react';
import {Switch, withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from '../Login';
import UserPage from '../UserPage';
import PrivateRoute from '../PrivateRoute';
import {logout, getIsAuthorized, getIsNetworkErrorPresent, getMessage} from '../../ducks';

import './AppRouter.css';

export class AppRouter extends Component {
   handleLogout = () => {
      const {logout} = this.props;

      logout();
   };

   render() {
      const {isAuthorized, isErrorExist, errorMessage} = this.props;

      return (
         <Fragment>
            {isAuthorized && (
               <div className='login-notes'>
                  <button onClick={this.handleLogout}>Logout</button>
               </div>
            )}

            {isErrorExist && (
               <div className='login-notes'>
                  <p className='error'>{errorMessage}</p>
               </div>
            )}

            <Switch>
               <Route path='/login' component={Login}/>
               <PrivateRoute path='/users/me' component={UserPage} isAuthorized={isAuthorized} exact/>
               <PrivateRoute path='/users/:name' component={UserPage} isAuthorized={isAuthorized}/>
               <Redirect to='/users/me'/>
            </Switch>
         </Fragment>
      );
   }
}

const mapStateToProps = state => {
   return {
      isAuthorized: getIsAuthorized(state),
      isErrorExist: getIsNetworkErrorPresent(state),
      errorMessage: getMessage(state)
   };
};

const mapDispatchToProps = {
   logout
};

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(AppRouter)
);
