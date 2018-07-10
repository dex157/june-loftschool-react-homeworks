import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import Followers from '../Followers'
import { logout } from '../../ducks/auth';
import { getIsFetching, getUserData, fetchUserRequest } from '../../ducks/users';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  userData: getUserData(state),
  isFetching: getIsFetching(state),
});

const mapDispatchToProps = { logout, fetchUserRequest };

class UserPage extends Component {
  componentDidUpdate(prevProps) {
    const oldMatch = prevProps.match.params.name;
    console.log(oldMatch);
    const newMatch = this.props.match.params.name;
    console.log(newMatch);
    const {fetchUserRequest} = this.props;
    if (oldMatch !== newMatch) {
      if (newMatch !== 'me' && newMatch !== undefined) {
       fetchUserRequest(newMatch);
      }
    }
  }

  logoutHandler = () => {
    const {logout} = this.props;
    logout();
  }

  renderSpinner = () => {
    return (
    <div className="spinner">
      <Spinner size="64px" color="fuchsia" gap={5} />
    </div>
    )
  }

  renderUser = ({ name, url, followersCount, reposCount}) => {
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
          <Followers login={name} />
        </div>
    )
  }

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
