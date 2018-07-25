import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Followers from 'components/Followers';
import MySpinner from 'components/MySpinner';
import styled from 'styled-components';
import {
  fetchSelfRequest,
  fetchUserRequest,
  getUserData,
  getIsFetched
} from 'ducks/users';

const StyledUserPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledUserName = styled.div`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 700;
`;

class UserPage extends React.PureComponent {
  componentDidMount = () => {
    this.fetchUser();
  };

  componentDidUpdate = prevProps => {
    const prevUser = prevProps.match.params.name;
    const nextUser = this.props.match.params.name;

    if (nextUser !== prevUser) {
      this.fetchUser();
    }
  };

  fetchUser = () => {
    const { match, fetchSelfRequest, fetchUserRequest } = this.props;

    if (!match.params.name) {
      fetchSelfRequest();
    } else {
      fetchUserRequest(match.params.name);
    }
  };

  renderUserCard(user) {
    const { isFetched } = this.props;

    if (!user && isFetched) {
      return <div>User Not Found!</div>;
    }

    return (
      <StyledUserPage>
        <img src={user.avatar} alt="User" />
        <StyledUserName>{user.name}</StyledUserName>
        <div>Following: {user.following}</div>
        <div>Repos: {user.repos}</div>

        <Followers login={user.name} />
      </StyledUserPage>
    );
  }

  render() {
    const { isFetched, user } = this.props;

    if (isFetched) {
      return this.renderUserCard(user);
    } else {
      return <MySpinner />
    }
  }
}

const mapStateToProps = state => ({
  isFetched: getIsFetched(state),
  user: getUserData(state)
});

const mapDispatchToProps = {
  fetchSelfRequest,
  fetchUserRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
