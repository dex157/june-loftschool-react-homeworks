import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import Followers from '../Followers';
import { logout } from '../../ducks/auth';
import {
  getIsFetching,
  getIsFetched,
  getUserData,
  fetchUserRequest,
  fetchTokenOwnerRequest
} from '../../ducks/users';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  user: getUserData(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToProps = { logout, fetchUserRequest, fetchTokenOwnerRequest };

export class UserPage extends PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { name: newUser }
      },
      fetchUserRequest,
      fetchTokenOwnerRequest
    } = this.props;
    if (newUser) {
      fetchUserRequest(newUser);
    } else {
      fetchTokenOwnerRequest();
    }
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.name;
    const {
      match: {
        params: { name: newUser }
      },
      fetchUserRequest
    } = this.props;
    if (newUser !== prevUser) {
      fetchUserRequest(newUser);
    }
  }

  logoutHandler = () => {
    const { logout } = this.props;
    logout();
  };

  renderSpinner = () => {
    return (
      <div className="spinner">
        <Spinner size="64px" color="fuchsia" gap={5} />
      </div>
    );
  };

  renderUser = user => {
    if (user) {
      return (
        <div className="user__info">
          <div className="user__page">
            <div className="user__avatar">
              <img
                className="user__image"
                src={user.url}
                alt={user.name}
              />
            </div>
            <div className="user__stats">
              <h3 className="user__name">{user.name}</h3>
              <p className="user__followers">Followers: {user.followersCount}</p>
              <p className="user__repos">Public repos: {user.reposCount}</p>
            </div>
          </div>
          {!this.props.isFetching && <Followers login={user.name} />}
        </div>
      );
    } else {
      return <div className="user__none">Пользователь не найден</div>
    }
  };

  render() {
    const { user, isFetching } = this.props;

    return (
      <div className="user">
        <div className="user__logout">
          <button onClick={this.logoutHandler}>Logout</button>
        </div>
        {isFetching ? this.renderSpinner() : this.renderUser(user)};
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
