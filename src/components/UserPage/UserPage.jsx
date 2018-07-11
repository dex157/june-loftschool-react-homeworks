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
  componentDidUpdate(prevProps, prevState) {
    const prevUser = prevProps.match.params.name;
    const newUser = this.props.match.params.name;
    const { fetchUserRequest, match } = this.props;
    console.log(this.props);
    console.log(prevUser);
    console.log(newUser);

    if (match.path === '/users/me') {
      return;
    }

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

  renderUser = ({ name, url, followersCount, reposCount }, isFetched) => {
    return (
      <div className="user__info">
        <div className="user__page">
          <div className="user__avatar">
            <img className="user__image" src={url} alt={name} />
          </div>
          <div className="user__stats">
            <h3>{name}</h3>
            <p>Followers: {followersCount}</p>
            <p>Public repos: {reposCount}</p>
          </div>
        </div>
        {isFetched && <Followers login={name} />}
      </div>
    );
  };

  render() {
    const { userData, isFetching, isFetched } = this.props;

    return (
      <div className="user">
        <div className="user__logout">
          <button onClick={this.logoutHandler}>Logout</button>
        </div>
        {isFetching
          ? this.renderSpinner()
          : this.renderUser(userData, isFetched)};
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
