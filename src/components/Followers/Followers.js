import React, { PureComponent } from 'react';
import './Followers.css';
import Follower from '../Follower';

export default class Followers extends PureComponent {
  componentWillMount() {
    const { fetchFollowersRequest, login } = this.props;
    fetchFollowersRequest(login);
  }

  render() {
    const { isFetched, ids } = this.props.followers;

    if (!isFetched) {
      return null;
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
