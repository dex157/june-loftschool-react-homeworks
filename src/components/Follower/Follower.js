import React from 'react';
import { Link } from 'react-router-dom';
import './Follower.css';

class Follower extends React.PureComponent {
  render() {
    const { id, login, avatar_url } = this.props;

    return (
      <li className="follower__block" id={id}>
        <div className="follower__avatar">
          {avatar_url && (
            <img
              src={avatar_url}
              alt={login}
              className="follower__avatar-img"
            />
          )}
        </div>
        <div className="follower__desc">
          <Link to={`/users/${login}`}>
            <div className="follower__name">{login}</div>
          </Link>
        </div>
      </li>
    );
  }
}

export default Follower;
