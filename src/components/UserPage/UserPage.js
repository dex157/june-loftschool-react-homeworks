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

export class UserPage extends PureComponent {
  componentDidMount() {
    const {
      fetchTokenOwnerRequest,
      fetchUserRequest,
      match: {
        params: { name }
      },
      userData
    } = this.props;

    if (!name) fetchTokenOwnerRequest();
    if (name && !userData) fetchUserRequest(name);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchTokenOwnerRequest,
      fetchUserRequest,
      match: {
        params: { name }
      }
    } = this.props;

    if (name !== prevProps.match.params.name) {
      if (!name) {
        fetchTokenOwnerRequest();
      } else {
        fetchUserRequest(name);
      }
    }
  }

  render() {
    const { isFetching, userData } = this.props;

    if (isFetching) {
      return (
        <Spinner className="spinner" size="64px" color="fuchsia" gap={5} />
      );
    }

    if (!isFetching && !userData) {
      return (
        <div className="user__notfound">Такой пользователь отсутствует</div>
      );
    }
    const { login, avatar_url, public_repos, followers, following } = userData;

    return (
      <div>
        <UserWrapperDiv>
          <UserAvatar className="user__avatar" src={avatar_url} alt={login} />
          <UserInfo>
            <h2 className="user__login">{login}</h2>
            <ul>
              <li className="user__followers">
                Folowers: <span>{followers}</span>
              </li>
              <li className="user__following">
                Folowing: <span>{following}</span>
              </li>
              <li className="user__repos">
                Public repos: <span>{public_repos}</span>
              </li>
            </ul>
          </UserInfo>
        </UserWrapperDiv>
        <Followers login={login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  userData: getUserData(state)
});

const mapDispatchToProps = { fetchTokenOwnerRequest, fetchUserRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
