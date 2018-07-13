import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchFollowersRequest,
  getIsFollowersFetching,
  getIds
} from '../../ducks/followers';
import Spinner from 'react-svg-spinner';

class Followers extends PureComponent {
  componentDidMount() {
    this.props.fetchFollowersRequest(this.props.login);
  }

  render() {
    const { isFetching, ids } = this.props;

    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    }

    if (!isFetching && !ids.length) {
      return <div>Такой пользователь отсутствует</div>;
    }
    return (
      <ul>
        {ids.map(({ id, login, avatar_url }) => (
          <li key={id}>
            <img className="follower-avatar" src={avatar_url} alt={login} />
            <Link to={`/user/${login}`}>{login}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFollowersFetching(state),
  ids: getIds(state)
});

const mapDispatchToProps = { fetchFollowersRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
