import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import Followers from '../Followers'
import { getIsFetching, getUserData } from '../../ducks/users';
import { getFollowers } from '../../ducks/followers';
import Spinner from 'react-svg-spinner';

class UserPage extends Component {
  render() {
    const { userData, followers, isFetching } = this.props;
    const {name, url, followersCount, reposCount} = userData;

    return (
      <div className="user">
        <div className="user__logout">
          <button>Logout</button>
        </div>
        {isFetching &&
          <Spinner size="64px" color="fuchsia" gap={5} />
        }
        <div className="user__info">
          <div className="user__page">
            <div className="user__avatar">
              <img className="user__image" src={url} alt={name} />
            </div>
            <div className="user__stats">
              <h3>{name}</h3>
              <p>Followers: {followersCount}</p>
              <p>Public repos: {reposCount}</p>
            </div>
          </div>
          <Followers followers={followers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: getUserData(state),
  isFetching: getIsFetching(state),
  followers: getFollowers(state),
});

export default connect(
  mapStateToProps
)(UserPage);
