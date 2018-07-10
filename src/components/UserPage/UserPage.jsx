import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import Followers from '../Followers'
import { logout } from '../../ducks/auth';
import { getIsFetching, getUserData, fetchUserRequest, fetchTokenOwnerRequest } from '../../ducks/users';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  userData: getUserData(state),
  isFetching: getIsFetching(state),
});

const mapDispatchToProps = { logout, fetchUserRequest, fetchTokenOwnerRequest };

class UserPage extends Component {
  state = {
    key: ''
  }

  componentDidUpdate(prevProps, prevState) {
    const oldValueParam = prevState.key;
    const newValueParam = this.props.match.params.name;
    const {fetchUserRequest, fetchTokenOwnerRequest} = this.props;
    if (oldValueParam !== newValueParam) {
      if (!newValueParam && oldValueParam) {
        fetchTokenOwnerRequest();
      } else {
        fetchUserRequest(newValueParam);
      }
      this.setState((state) => ({
        key: newValueParam
      }))
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
