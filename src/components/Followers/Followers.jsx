import React, { Component } from 'react';
import './Followers.css';
import Follower from '../Follower';

export default class Followers extends Component {
  render() {
    const {followers} = this.props;
    return (
      <div className="followers">
        {followers.map(({name, url}) => {
          return (
        <Follower name={name} url={url} />
          );
        })}
      </div>
    );
  }
}
