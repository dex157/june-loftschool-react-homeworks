import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  fetchUserRequest,
  fetchOwnerRequest,
  getIsFetching,
  getUser
} from 'ducks/user/';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
import { withRouter } from 'react-router-dom';

export class UserPage extends PureComponent {
  componentDidMount = () => {
    this.fetchUser();
  };

  componentDidUpdate = prevProps => {
    const prevUser = prevProps.match.params.name;
    const nextUser = this.props.match.params.name;

    if (nextUser !== prevUser) {
      this.fetchUser();
    }
  };

  fetchUser = () => {
    const { match, fetchOwnerRequest, fetchUserRequest } = this.props;

    if (!match.params.name) {
      fetchOwnerRequest();
    } else {
      fetchUserRequest(match.params.name);
    }
  };

  renderSpinner() {
    return (
      <div className="spinner row justify-content-md-center">
        <Spinner size="64px" color="blue" gap={5} />
      </div>
    );
  }

  renderUser(user) {
    const { isFetching } = this.props;

    if (!user && !isFetching) {
      return <div className="text-center">Пользователь не найден!</div>;
    }

    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-start mt-3">
            <div className="col-5">
              <div className="card text-white bg-secondary mb-5">
                <img
                  className="card-img-top"
                  src={user.avatar_url}
                  alt={user.login}
                />
                <h2 className="card-header">{user.login}</h2>
                <div className="card-body">
                  <p className="card-text" data-test-followers>
                    Followers: {user.followers}
                  </p>
                  <p>Repos: {user.public_repos}</p>
                </div>
              </div>
            </div>
          </div>

          <Followers login={user.login} />
        </div>
      </Fragment>
    );
  }

  render() {
    const { user, isFetching } = this.props;

    return (
      <div className="user">
        {isFetching ? this.renderSpinner() : this.renderUser(user)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  fetchUserRequest,
  fetchOwnerRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
