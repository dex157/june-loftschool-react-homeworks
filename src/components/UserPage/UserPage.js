import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  fetchUserRequest,
  getIsFetching,
  getUserData
} from '../../ducks/users';
import Followers from '../Followers';
import Spinner from 'react-svg-spinner';

class UserPage extends PureComponent {
  componentDidMount() {
    // this.props.fetchUserRequest();
  }

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
    }

    return (
      <div>
        <div>
          {avatar && <img className="my-avatar" src={avatar} alt={login} />}
          <div>
            <h2>{login}</h2>
            <ul>
              <li>Folowers: {followers}</li>
              <li>Folowing: {following}</li>
              <li>Public repos: {public_repos}</li>
            </ul>
          </div>
        </div>
        <Followers login={login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  userData: getUserData(state)
});

const mapDispatchToProps = { fetchUserRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
