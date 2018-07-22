import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
import {userRequest, getData, getIsFetching} from '../../ducks';

import './UserPage.css';

export class UserPage extends Component {
   componentDidMount() {
      const {userRequest, match} = this.props;

      userRequest(match.params.name);
   }

   componentDidUpdate(prevProps) {
      const {userRequest, match} = this.props;

      if (prevProps.location.pathname !== this.props.location.pathname) {
         userRequest(match.params.name);
      }
   }

   render() {
      const {isFetching, data} = this.props;

      if (isFetching) {
         return (
            <div className="notifications">
               <div className="spinner-wrap">
                  <Spinner className="Spinner" size="64px" gap={5}/>
               </div>
            </div>
         );
      }

      if (!data || data == null) {
         return (
            <div className="notifications">
               <div className="sc-notification notification">Данные отсутствуют.</div>
            </div>
         );
      }

      const {login, avatar_url, followers, public_repos} = data;

      return (
         <div className="user-block">
            <div className="user">
               <div className="user-img-wrap">
                  <img className="user-img" src={avatar_url} alt={login}/>
               </div>
               <div className="user-info">
                  <h3>{login}</h3>
                  <p>Followers: {followers}</p>
                  <p>Public repos: {public_repos}</p>
               </div>
            </div>
            <Followers className="Followers" login={login}/>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      isFetching: getIsFetching(state),
      data: getData(state)
   };
};

const mapDispatchToProps = {
   userRequest
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(UserPage);
