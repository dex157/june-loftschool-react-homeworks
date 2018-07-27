import React from 'react';
import { getUserRequest, getUserOwnerRequest } from '../../ducks/user';
import { connect } from 'react-redux';
import Followers from '../Followers';
import Loader from '../Loader';
import './UserPage.css';

export class UserPage extends React.PureComponent {
  componentDidMount() {
    const {
      getUserOwnerRequest,
      getUserRequest,
      match: {
        params: { name }
      }
    } = this.props;
    if (name) {
      getUserRequest(name);
    } else {
      getUserOwnerRequest();
    }
  }
  componentDidUpdate(oldProps) {
    const {
      getUserOwnerRequest,
      getUserRequest,
      match: {
        params: { name }
      }
    } = this.props;
    if (name !== oldProps.match.params.name) {
      if (name) {
        getUserRequest(name);
      } else {
        getUserOwnerRequest();
      }
    }
  }
  render() {
    const { isFetching, user } = this.props;

    if (isFetching) return <Loader />;

    return (
      <div className="user-page">
        <div className="user-block">
          <div className="user-avatar">
            {user.avatar_url && (
              <img
                width="300px"
                height="300px"
                src={user.avatar_url}
                alt={user.login}
                className="user-img"
              />
            )}
          </div>
          <div className="user-desc">
            <h3 className="user-name">{user.name ? user.name : user.login}</h3>
            <div className="user-followers-count">
              Followers: {user.followers}
            </div>
            <div className="user-public-repos-count">
              Public repos: {user.public_repos}
            </div>
          </div>
        </div>

        {user.login && <Followers login={user.login} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  user: state.user.data
});
const mapDispatchToProps = { getUserRequest, getUserOwnerRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
