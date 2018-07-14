import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';

import './UserPage.css';

import {
  requestUser,
  // successUser,
  // failureUser,
  getData,
  // getError,
  // getIsFetched,
  getIsFetching
} from '../../ducks';

class UserPage extends Component {
  componentDidMount() {
    const { requestUser } = this.props;

    requestUser();
  }

  render() {
    const { isFetching, data } = this.props;

    if (isFetching) {
      return (
        <div className="sc-bdVaJa kujKIt">
          <div className="sc-bxivhb jcdCai">
            <Spinner size="64px" color="fuchsia" gap={5} />
          </div>
        </div>
      );
    }

    if (!data || data.length === 0) {
      return (
        <div className="sc-bdVaJa kujKIt">
          <div className="sc-bxivhb jcdCai">
            Данные отсутствуют.
          </div>
        </div>
      );
    }

    const { login, avatar_url, followers, public_repos } = data;

    return (
      <div className="sc-bdVaJa kujKIt">
        <div className="sc-bxivhb jcdCai">
          <div className="sc-bwzfXH cSyRhI">
            <img className="sc-htpNat lfHqqA" src={avatar_url} alt={login} />
          </div>
          <div className="sc-ifAKCX gbJnZR">
            <h3>{login}</h3>
            <p>Followers: {followers}</p>
            <p>Public repos: {public_repos}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state),
    data: getData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: payload => {
      dispatch(requestUser(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
