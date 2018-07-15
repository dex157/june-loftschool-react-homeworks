import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';
import { Link } from 'react-router-dom';

import './Followers.css';

import { requestFollowers, getIds, getIsFetchingFollowers } from '../../ducks';

export class Followers extends Component {
  componentDidMount() {
    const { requestFollowers, login } = this.props;

    requestFollowers(login);
  }

  render() {
    const { isFetching, ids } = this.props;

    if (isFetching) {
      return (
        <div className="sc-ifAKCX iFlUUQ">
          <Spinner className='Spinner' size="64px" color="fuchsia" gap={5} />
        </div>
      );
    }

    return (
      <div className="sc-ifAKCX iFlUUQ">
        {ids.map(item => {
          return (
            <div key={item.id} className="sc-bxivhb dMOMPs">
              <div className="sc-bdVaJa loiIMT">
                <img
                  className="sc-bwzfXH hGggQw"
                  src={item.avatar_url}
                  alt={item.login}
                />
              </div>
              <div className="sc-htpNat eznsMN">
                <Link to={`/users/${item.login}`}>
                  <h3>{item.login}</h3>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetchingFollowers(state),
    ids: getIds(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestFollowers: payload => {
      dispatch(requestFollowers(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
