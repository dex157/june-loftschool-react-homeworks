import React, { Component } from 'react';
import './UserPage.css';

export default class UserPage extends Component {
  render() {
    const { url, name, followers, repos } = this.props;

    return (
      <div className="user">
        <div className="user__logout">
          <button>Logout</button>
        </div>
        <div className="user__info">
          <div className="user__page">
            <div className="user__avatar">
              <img className="user__image" src={url} alt={name} />
            </div>
            <div className="user__stats">
              <h3>{name}</h3>
              <p>Followers: {followers}</p>
              <p>Public repos: {repos}</p>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}
