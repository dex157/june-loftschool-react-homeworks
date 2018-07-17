import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-svg-spinner';
import {
  fetchFollowersRequest,
  getIsFetched,
  getIsFetching,
  getError,
  getIds
} from '../../ducks/followers';
import styled from 'styled-components';

class Followers extends Component {
  componentDidMount() {
    const { fetchFollowersRequest, login } = this.props;
    fetchFollowersRequest(login);
  }

  componentDidUpdate(prevProps) {
    const { login } = this.props;
    fetchFollowersRequest(login);
  }
  render() {
    const { isFetched, followers } = this.props;
    return (
      <FollowersContainer>
        {isFetched ? (
          followers.map(follower => (
            <Follower key={follower.id}>
              <AvatarContainer>
                <Avatar src={follower.avatar} />
              </AvatarContainer>
              <Name>
                <Link to={`/users/${follower.login}`}>{follower.login}</Link>
              </Name>
            </Follower>
          ))
        ) : (
          <Spinner color="red" />
        )}
      </FollowersContainer>
    );
  }
}

const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  margin: 20px 60px;
`;

const Follower = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #eee;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Name = styled.div`
  display: block;
  padding: 20px 20px;
  text-align: left;
  font-weight: bold;
  font-size: 1.2em;
`;

const mapStateToProps = state => ({
  isFetched: getIsFetched(state),
  error: getError(state),
  isFetching: getIsFetching(state),
  followers: getIds(state)
});

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
