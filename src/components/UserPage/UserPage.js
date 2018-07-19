import React, { PureComponent } from 'react';
import Spinner from 'react-svg-spinner';
import './UserPage.css';

export default class UserPage extends PureComponent {
  componentWillMount() {
    this.props.fetchUserRequest();
  }

  render() {
    const { isFetched, data } = this.props.users;

    if (!isFetched) {
      return (
        <div className="user">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      );
    }

    return (
      <div className="user">
        <div className="profile">
          <div className="image">
            <img src={data.avatar_url} alt={data.login} />
          </div>
          <div className="info">
            <h3>{data.login}</h3>
            <p>Followers: {data.followers}</p>
            <p>Public repos: {data.public_repos}</p>
          </div>
        </div>
      </div>
    );
  }
}
