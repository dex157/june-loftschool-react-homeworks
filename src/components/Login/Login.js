import React, {Component, Fragment} from 'react';
import {AuthHOC} from 'components/AuthorizeProvider';
import {Redirect} from 'react-router-dom';

class Login extends Component {
   state = {
      email: '',
      password: '',
      error: false
   };

   handleChange = e => {
      this.setState({[e.target.name]: e.target.value}, () => {
         console.log(this.state)
      });
   };

   handleClick = () => {
      const {authorizeUser} = this.props;
      const {email, password} = this.state;

      this.setState({
         error: !authorizeUser(email, password)
      })
   };

   render() {
      const {isAuthorized} = this.props;
      const {error} = this.state;

      return isAuthorized
         ? <Redirect to='/'/>
         : (
            <Fragment>
               <input name='email' placeholder='email' onChange={this.handleChange} value={this.state.email} />
               <input name='password' placeholder='password' onChange={this.handleChange} value={this.state.password} />

               <button onClick={this.handleClick}>Submit</button>

               {
                  error
                  ? <p className='error'>Неверный пароль и/или почта.</p>
                  : null
               }
            </Fragment>
         )
   }
}

export default AuthHOC(Login);
