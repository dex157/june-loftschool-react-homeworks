import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  getUserData,
  getIsFetching,
  getIsFetched
} from '../../ducks/users';
import { withRouter } from 'react-router-dom';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
import './UserPage.css';

export class UserPage extends PureComponent {
  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.fetchUser();
    }
  }

  fetchUser = () => {
    const { fetchTokenOwnerRequest, fetchUserRequest } = this.props;

    if (this.props.match.params.name == null) {
      fetchTokenOwnerRequest();
    } else {
      fetchUserRequest(this.props.match.params.name);
    }
  };

  render() {
    const { isFetching, isFetched, user, match } = this.props;

    if (isFetching) {
      return (
        <div className="wrap_spinner">
          <Spinner size="64px" color="#ccc" gap={5} />
        </div>
      );
    }

    if (isFetched && user) {
      return (
        <div className="sc-bdVaJa kujKIt">
          <div className="sc-bxivhb jcdCai">
            <div className="sc-bwzfXH cSyRhI">
              <img
                className="sc-htpNat lfHqqA avatar"
                src={user.avatar_url}
                alt={user.login}
              />
            </div>
            <div className="sc-ifAKCX gbJnZR">
              <h3 className="login">{user.login}</h3>
              <p className="p_followers">Followers: {user.followers}</p>
              <p>Public repos: {user.public_repos}</p>
            </div>
          </div>
          <Followers className="wrap_followers" login={user.login} />
        </div>
      );
    } else {
      return (
        <p className="user_not_found">
          User {match.params.name} not founded!!!
        </p>
      );
    }
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state),
  user: getUserData(state)
});

const mapDispatchToProps = {
  fetchTokenOwnerRequest,
  fetchUserRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
