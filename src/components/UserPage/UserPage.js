import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  getUserData,
  getIsFetched
} from '../../ducks/users';
import { withRouter } from 'react-router-dom';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';

class UserPage extends Component {
  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.fetchUser();
    }
  }

  fetchUser = () => {
    if (this.props.match.params.name == null) {
      this.props.fetchTokenOwnerRequest();
    } else {
      this.props.fetchUserRequest(this.props.match.params.name);
    }
  };

  render() {
    const { isFetched, user } = this.props;

    return (
      <Wrapper>
        {isFetched ? (
          <Fragment>
            <User>
              <AvatarBorder>
                <Avatar src={user.avatar_url} alt="avatar" />
              </AvatarBorder>
              <UserInfo>
                <Name>{user.login}</Name>
                <Text>Public repos: {user.public_repos}</Text>
                <Text>Followers: {user.followers}</Text>
              </UserInfo>
            </User>
            <Followers login={user.login} />
          </Fragment>
        ) : (
          <Spinner size="64px" color="blue" gap={5} />
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 20px;
`;

const AvatarBorder = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: #bbbbbb;
  margin: 10px;
`;

const Avatar = styled.img`
  align-items: center;
  padding: 5px;
  max-width: 290px;
`;

const UserInfo = styled.div`
  display: block;
`;

const Name = styled.h3`
  text-align: left;
`;

const Text = styled.p`
  text-align: left;
`;

const mapStateToProps = state => ({
  isFetched: getIsFetched(state),
  user: getUserData(state)
});

const mapDispatchToProps = {
  fetchTokenOwnerRequest,
  fetchUserRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
