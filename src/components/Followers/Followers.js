import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Follower from '../Follower';
import Spinner from 'react-svg-spinner';
import {
  fetchFollowersRequest,
  getIsFetched,
  getIsFetching,
  getFollowers
} from '../../ducks/followers';
import './Followers.css';

export class Followers extends PureComponent {
  componentDidMount() {
    const { fetchFollowersRequest, login } = this.props;
    fetchFollowersRequest(login);
  }

  componentDidUpdate(prevProps) {
    const { login } = this.props;
    fetchFollowersRequest(login);
  }
  render() {
    const { isFetching, isFetched, followers } = this.props;

    if (isFetching) {
      return (
        <div className="wrap_spinner">
          <Spinner size="64px" color="#ccc" gap={5} />
        </div>
      );
    }

    if (isFetched && followers) {
      return (
        <div className="sc-ifAKCX iFlUUQ followers">
          {followers.map(follower => (
            <Follower
              key={follower.id}
              login={follower.login}
              avatar={follower.avatar_url}
            />
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isFetched: getIsFetched(state),
  isFetching: getIsFetching(state),
  followers: getFollowers(state)
});

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
