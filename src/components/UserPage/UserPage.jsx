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
  userData: getUserData(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToProps = { logout, fetchUserRequest, fetchTokenOwnerRequest };

class UserPage extends PureComponent {
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

  renderUser = userData => {
    if (userData) {
      return (
        <div className="user__info">
          <div className="user__page">
            <div className="user__avatar">
              <img
                className="user__image"
                src={userData.url}
                alt={userData.name}
              />
            </div>
            <div className="user__stats">
              <h3>{userData.name}</h3>
              <p>Followers: {userData.followersCount}</p>
              <p>Public repos: {userData.reposCount}</p>
            </div>
          </div>
          {console.log(123)}
          {!this.props.isFetching && <Followers login={userData.name} />}
        </div>
      );
    }
  };

  render() {
    const { userData, isFetching } = this.props;

    return (
      <div className="user">
        <div className="user__logout">
          <button onClick={this.logoutHandler}>Logout</button>
        </div>
        {isFetching ? this.renderSpinner() : this.renderUser(userData)};
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
