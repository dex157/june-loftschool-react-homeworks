import React from 'react';
import Follower from '../Follower';
import { connect } from 'react-redux';
import { getFollowersRequest } from '../../ducks/followers';
import Loader from '../Loader';
import './Followers.css';

class Followers extends React.PureComponent {
  componentDidMount() {
    this.props.getFollowersRequest(this.props.login);
  }
  render() {
    const { isFetching, followers } = this.props;

    if (isFetching) return <Loader />;

    return (
      <div className="followers__block">
        <ul className="followers__list">
          {followers.map((follower, index) => (
            <Follower
              id={index}
              key={index}
              login={follower.login}
              avatar_url={follower.avatar_url}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.followers.isFetching,
  followers: state.followers.followers
});

const mapDispatchToProps = { getFollowersRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
