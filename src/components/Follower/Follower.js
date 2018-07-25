import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Follower.css';

class Follower extends PureComponent {
  render() {
    const { login, avatar } = this.props;

    return (
      <div className="sc-bxivhb dMOMPs">
        <div className="sc-bdVaJa loiIMT">
          <img className="sc-bwzfXH hGggQw" src={avatar} alt={login} />
        </div>
        <div className="sc-htpNat eznsMN">
          <Link to={`/users/${login}`}>
            <h3>{login}</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Follower;
