import React, { PureComponent } from 'react';
import './Follower.css';
import { Link } from "react-router-dom";

export default class Follower extends PureComponent {
  render() {
    const { login, avatar } = this.props;

    return (
      <div className="follower">
        <div className="follower-block-image">
          <img className="follower-image" src={avatar} alt={login} />
        </div>
        <div className="follower-info">
          <Link to={`/user/${login}`}><h3>{login}</h3></Link>
        </div>
      </div>
    );
  }
}