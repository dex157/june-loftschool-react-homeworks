import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  getIsFetching,
  getUserData
} from '../../ducks/users';
import Followers from '../Followers';
import Spinner from 'react-svg-spinner';

class UserPage extends PureComponent {
  componentDidMount() {
    const {
      fetchTokenOwnerRequest,
      fetchUserRequest,
      match: {
        params: { name },
      },
      userData = {}
    } = this.props;

    if (!name) fetchTokenOwnerRequest();
    if (name && !Object.keys(userData).length) fetchUserRequest(name);
  };

  componentDidUpdate(prevProps) {
    const {
      fetchTokenOwnerRequest,
      fetchUserRequest,
      match: {
        params: { name },
      },
    } = this.props;

    if (name !== prevProps.match.params.name) {
      if (!name) {
        fetchTokenOwnerRequest()
      } else {
      fetchUserRequest(name);
      }
    }
  };

  render() {
    const { isFetching, userData = {} } = this.props;
    const {
      login,
      avatar_url: avatar,
      public_repos,
      followers,
      following
    } = userData;

    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    }

    if (!isFetching && !Object.keys(userData).length) {
      return <div>Такой пользователь отсутствует</div>;
    } else {
      return (
        <div>
          <UserWrapperDiv>
            {avatar && <UserAvatar className="my-avatar" src={avatar} alt={login} />}
            <UserInfo>
              <h2>{login}</h2>
              <ul>
                <li>Folowers: {followers}</li>
                <li>Folowing: {following}</li>
                <li>Public repos: {public_repos}</li>
              </ul>
            </UserInfo>
          </UserWrapperDiv>
          <Followers login={login} />
        </div>
      );
    }
  }
};

const UserAvatar = styled.img`
  width: 12rem;
  height: 12rem;
`;

const UserWrapperDiv = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`;

const UserInfo = styled.div`
  padding-left: 1rem;
`;

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  userData: getUserData(state)
});

const mapDispatchToProps = { fetchTokenOwnerRequest, fetchUserRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
