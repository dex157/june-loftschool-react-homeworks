import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Follower.css';

export default class Follower extends Component {
  render() {

    const {name, url} = this.props;

    return (
      <div className="follower">
      <div className="follower__avatar">
        <img className="follower__image" src={url} alt={name} />
      </div>
      <div className="follower__nickname">
      <Link to={`/users/${name}`} className="follower__link">
            <h3>{name}</h3>
      </Link>
      </div>
      </div>
    );
  }
}
