import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {authorize, getIsAuthorized} from '../../ducks';

import './Login.css';

class Login extends Component {
   state = {
      authToken: ''
   };

   handleOnChange = e => {
      this.setState({
         authToken: e.target.value
      });
   };

   handlePressEnter = e => {
      const {authorize} = this.props;

      e.key === 'Enter' && e.target.value && authorize(this.state.authToken);
   };

   render() {
      const {isAuthorized} = this.props;

      if (isAuthorized) {
         return <Redirect to='/users/me'/>;
      }

      return (
         <div className='login-wrap'>
            <div className='login-form'>
               <p>
                  Получить токен нужно на своей странице github.
                  Перейдите по <a href='https://github.com/settings/tokens' target='_blank' rel="noopener noreferrer">адресу</a> и создайте себе токен.
                  Запишите куда нибудь токен, так как после создания доступ к нему будет только один раз.
               </p>
               <input className='login-input'
                      placeholder='auth_token'
                      value={this.state.authToken}
                      onKeyPress={this.handlePressEnter}
                      onChange={this.handleOnChange}
                      autoFocus={true}
               />
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      isAuthorized: getIsAuthorized(state)
   };
};

const mapDispatchToProps = {
   authorize
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Login);
