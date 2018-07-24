import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Followers from '../Followers';
import {
  getIsFetching,
  getUserData,
  fetchUserRequest,
  fetchSelfRequest
} from '../../ducks/users';
import Spinner from 'react-svg-spinner';
import './UserPage.css';

export class UserPage extends PureComponent {
  componentDidMount = () => {
    this.fetchUser();
  };

  componentDidUpdate = prevProps => {
    const prevUser = prevProps.match.params.login;
    const nextUser = this.props.match.params.login;

    if (nextUser !== prevUser) {
      this.fetchUser();
    }
  };

  fetchUser = () => {
    const { match, fetchSelfRequest, fetchUserRequest } = this.props;

    if (match.params.login == null) {
      fetchSelfRequest();
    } else {
      fetchUserRequest(match.params.login);
    }
  };

  renderSpinner() {
    return (
      <div className="spinner">
        <Spinner size="64px" gap={5} />
      </div>
    );
  }

  renderUserCard(user) {
    const { isFetched } = this.props;

    if (!user && isFetched) {
      return <div className="text-center">Пользователь не найден!</div>;
    }

    console.log('USER', user);

    return (
      <Fragment>
        <div className="user__info">
          <div className="card" style={{ width: 18 + 'rem' }}>
            <img className="user__avatar" src={user.avatar_url} alt="User" />
            <div className="card-body">
              <p className="card-title">
                <strong>{user.login}</strong>
              </p>
              <p className="card-text">
                <span data-test-followers-count>
                  Followers: {user.followers}
                </span>
                <br />
                <span>Repos: {user.public_repos}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <Followers login={user.login} />
        </div>
      </Fragment>
    );
  }

  render() {
    const { isFetched, user } = this.props;

    return (
      <div className="container p-5">
        {!isFetched ? this.renderSpinner() : this.renderUserCard(user)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetched: !getIsFetching(state),
    user: getUserData(state)
  };
};

const mapDispatchToProps = {
  fetchSelfRequest,
  fetchUserRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
