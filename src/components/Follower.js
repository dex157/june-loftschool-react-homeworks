import React, { Component } from 'react'

export class Follower extends Component {
  render() {

    const {name, avaUrl} = this.props;

    return (
      <div className="follower_item">
        <div className="follower_ava">
          <img
            src={avaUrl}
            alt={name}
          />
        </div>
        <div className="follower_title">
          <a href={"/user/" + name}>
            <h3>{name}</h3>
          </a>
        </div>
      </div>
    )
  }
}

export default Follower
