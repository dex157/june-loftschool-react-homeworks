import React, { PureComponent } from 'react';
import Spinner from 'react-svg-spinner';
import './Followers.css';
import Follower from '../Follower';

export default class Followers extends PureComponent {
  componentDidMount() {
    const { fetchFollowersRequest, login } = this.props;
    fetchFollowersRequest(login);
  }

  render() {
    const { isFetched, ids } = this.props.followers;

    if (!isFetched) {
      return (
        <div className="user">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      );
    }

    return (
      <div className="followers">
        {ids.map(id => (
          <Follower key={id.id} login={id.login} avatar={id.avatar_url} />
        ))}
      </div>
    );
  }
}
