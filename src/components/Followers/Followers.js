import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MySpinner from 'components/MySpinner';
import styled from 'styled-components';
import {
  fetchFollowersRequest,
  getData,
  getIsFetching,
  getError
} from 'ducks/followers';

const StyledFollowers = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 5fr);
  grid-gap: 10px;
  margin-top: 20px;
`;

const StyledFollower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFollowerImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

class Followers extends React.PureComponent {
  componentDidMount = () => {
    const { login, fetchFollowersRequest } = this.props;
    fetchFollowersRequest(login);
  };

  componentDidUpdate = prevProps => {
    const { login, fetchFollowersRequest } = this.props;

    if (login === prevProps.login) {
      return;
    }

    fetchFollowersRequest(login);
  };

  renderFollower(follower) {
    return (
      <StyledFollower key={follower.id}>
        <StyledFollowerImg src={follower.avatar} alt="Avatar" />
        <Link to={`/users/${follower.name}`}>
          {follower.name}
        </Link>
      </StyledFollower>
    );
  }

  renderFollowers(followers) {
    if (!followers || !followers.length) {
      return null;
    }

    return (
      <StyledFollowers>
        {followers.map(follower => this.renderFollower(follower))}
      </StyledFollowers>
    );
  }

  render() {
    const { followers, isFetching } = this.props;

    if (isFetching) {
      return <MySpinner />;
    } else {
      return this.renderFollowers(followers);
    }
  }
}

const mapStateToProps = state => ({
  followers: getData(state),
  isFetching: getIsFetching(state),
  error: getError(state)
});

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
