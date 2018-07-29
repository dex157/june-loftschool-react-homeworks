import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Follower extends PureComponent {
  render() {
    const { name, url } = this.props;

    return (
      <Link to={`/users/${name}`} className="col-3" key={name}>
        <div className="card bg-info text-white mb-5">
          <img className="card-img-top" src={url} alt={name} />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
          </div>
        </div>
      </Link>
    );
  }
}
