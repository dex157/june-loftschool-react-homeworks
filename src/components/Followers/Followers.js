import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';
import {Link} from 'react-router-dom';
import {followersRequest, getIds, getIsFetchingFollowers} from '../../ducks';

import './Followers.css';

export class Followers extends Component {
   componentDidMount() {
      const {followersRequest, login} = this.props;

      followersRequest(login);
   }

   render() {
      const {isFetching, ids} = this.props;

      if (isFetching) {
         return (
            <div className="spinner-wrap">
               <Spinner className='Spinner' size="64px" gap={5}/>
            </div>
         );
      }

      return (
         <div className="followers">
            {ids.map(item => {
               return (
                  <div key={item.id} className="sc-follower follower">
                     <div className="follower-img-wrap">
                        <img className="follower-img"
                             src={item.avatar_url}
                             alt={item.login}
                        />
                     </div>
                     <div className="follower-info">
                        <Link to={`/users/${item.login}`}>
                           <h3>{item.login}</h3>
                        </Link>
                     </div>
                  </div>
               );
            })}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      isFetching: getIsFetchingFollowers(state),
      ids: getIds(state)
   };
};

const mapDispatchToProps = {
   followersRequest
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Followers);
