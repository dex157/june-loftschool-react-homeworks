import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchFollowersRequest,
  getIsFollowersFetching,
  getIds
} from '../../ducks/followers';
import Spinner from 'react-svg-spinner';

export class Followers extends PureComponent {
  componentDidMount() {
    this.props.fetchFollowersRequest(this.props.login);
  }

  render() {
    const { isFetching, ids } = this.props;

    if (isFetching) {
      return (
        <Spinner className="spinner" size="64px" color="fuchsia" gap={5} />
      );
    }

    if (!isFetching && !ids) {
      return <div>Подписчики отсутствуют</div>;
    }

    return (
      <FollowersWrapDiv>
        <h3>Followers:</h3>
        {!ids.length && <div>Подписчики отсутствуют</div>}
        <FollowersUl>
          {ids.map(({ id, login, avatar_url }) => (
            <FollowerLi className="follower" key={id}>
              <div className="follower__login">
                <Link className="follower__link" to={`/user/${login}`}>
                  {login}
                </Link>
              </div>
              <FollowerAvatarImg
                className="follower__avatar"
                src={avatar_url}
                alt={login}
              />
            </FollowerLi>
          ))}
        </FollowersUl>
      </FollowersWrapDiv>
    );
  }
}

const FollowersWrapDiv = styled.div`
  text-align: center;
`;

const FollowersUl = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const FollowerLi = styled.li`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FollowerAvatarImg = styled.img`
  width: 7rem;
  height: 7rem;
`;

const mapStateToProps = state => ({
  isFetching: getIsFollowersFetching(state),
  ids: getIds(state)
});

const mapDispatchToProps = { fetchFollowersRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
