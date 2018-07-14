import React, { Component } from "react";
import { getLoginRequest, getUserInfoRequest } from "../ducks/user-actions";
import { connect } from "react-redux";
import './UserPage.css'

class UserPage extends Component {

  fetchData = () => {
    this.props.getUserInfoRequest();
    /*this.props.getUserInfoRequest();*/
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {

    const { userInfo } = this.props.login;

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return ({
    login: state.login
  });
};

const mapDispatchToProps = { getLoginRequest, getUserInfoRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

