import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Followers.css';
import Follower from '../Follower';
import {
  fetchFollowersRequest,
  getFollowers,
  getIsFetching
} from '../../ducks/followers';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  followers: getFollowers(state)
});

const mapDispatchToProps = { fetchFollowersRequest };

class Followers extends PureComponent {
  componentDidMount = () => {
    const { login, fetchFollowersRequest } = this.props;
    fetchFollowersRequest(login);
  };

  renderSpinner = () => {
    return (
      <div className="spinner">
        <Spinner size="64px" color="fuchsia" gap={5} />
      </div>
    );
  };

  renderFollowers = followers => {
    if (followers === null) {
      return;
    } else {
      return (
        <div className="followers">
          {followers.map(({ name, url }) => {
            return <Follower name={name} url={url} key={name} />;
          })}
        </div>
      );
    }
  };

  render() {
    const { followers, isFetching } = this.props;
    return (
      <div>
        {isFetching ? this.renderSpinner() : this.renderFollowers(followers)}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
