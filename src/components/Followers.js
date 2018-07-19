import React, { Component } from 'react'
import { connect } from "react-redux";
import { getFollowersRequest } from "../ducks/follower-actions";
import { isFetching } from "../ducks/follower-reducers";
import Spinner from 'react-svg-spinner';
import Follower from "./Follower";
import './Followers.css'

export class Followers extends Component {

  componentDidMount = () => {
    const requestedUser = this.props.followersFor;
    this.props.getFollowersRequest(requestedUser);
  };

  render() {

    const { followers, isFetching } = this.props;

    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5}/>;
    }

    return <div className="follower_list">
        {followers.followers.map(this.renderFollower)}
      </div>
  }

  renderFollower = follower => {
    return (<Follower key={follower.id} name={follower.login} avaUrl={follower.avatar_url}/>)
  }
}

const mapStateToProps = state => {
  console.log('followers : ', state);
  return ({
    followers: state.followers,
    isFetching: isFetching(state)
  });
};

const mapDispatchToProps = { getFollowersRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);

