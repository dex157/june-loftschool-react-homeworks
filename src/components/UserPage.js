import React, { Component } from "react";
import { getLoginRequest, getUserInfoRequest } from "../ducks/user-actions";
import { isFetching } from "../ducks/user-reducers";
import { connect } from "react-redux";
import Spinner from 'react-svg-spinner';
import './UserPage.css'
import Followers from "./Followers";

class UserPage extends Component {

  componentDidMount = () => {
    const requestUser = this.props.match.params.name;
    this.props.getUserInfoRequest(requestUser);
  };

  render() {

    const { login, isFetching } = this.props;

    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5}/>;
    }

    const userInfo = login.data;
    return (
      <div className="user-container_w">
          <div className="user-container">
            <div className="ava-container">
              <img src={userInfo.avatar_url}
                   alt={userInfo.login}/>
            </div>
            <div className="user-stat">
              <h3>{userInfo.login}</h3>
              <p>Followers: {userInfo.followers}</p>
              <p>Public repos: {userInfo.public_repos}</p>
            </div>
          </div>
          <Followers followersFor={userInfo.login}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    login: state.login,
    isFetching: isFetching(state)
  });
};

const mapDispatchToProps = { getLoginRequest, getUserInfoRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

