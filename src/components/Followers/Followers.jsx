import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Follower from '../Follower';
import {
  fetchFollowersRequest,
  getFollowers,
  getIsFetching
} from '../../ducks/followers';
import Spinner from 'react-svg-spinner';

export class Followers extends PureComponent {
  componentDidMount = () => {
    const { login, fetchFollowersRequest } = this.props;
    fetchFollowersRequest(login);
  };

  renderSpinner = () => {
    return (
      <div className="spinner">
        <Spinner size="64px" color="blue" gap={5} />
      </div>
    );
  };

  renderFollowers = followers => {
    if (followers === null) {
      return;
    } else {
      return (
        <Fragment>
          {followers.map(({ name, url }) => {
            return <Follower name={name} url={url} key={name} />;
          })}
        </Fragment>
      );
    }
  };

  render() {
    const { followers, isFetching } = this.props;
    return (
      <div className="row justify-content-start">
        {isFetching ? this.renderSpinner() : this.renderFollowers(followers)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  followers: getFollowers(state)
});

const mapDispatchToProps = { fetchFollowersRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
