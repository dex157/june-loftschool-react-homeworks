import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchFollowersRequest,
  getIsFetching,
  getData
} from '../../ducks/followers';
import Spinner from 'react-svg-spinner';
import './Followers.css';

export class Followers extends PureComponent {
  componentDidMount() {
    if (this.props.login) this.props.fetchFollowersRequest(this.props.login);
  }

  render() {
    const { isFetching, data } = this.props;

    if (isFetching) {
      return <Spinner className="spinner" size="64px" gap={5} />;
    }

    if (!isFetching && !data) {
      return <div>Подписчики отсутствуют</div>;
    }
    console.log('ZXAXAX');

    return (
      <div className="followers-wrap">
        <h3>Followers:</h3>
        {!data.length && <div>Подписчики отсутствуют</div>}
        <ul className="followers-list">
          {data.map(({ id, login, avatar_url }) => (
            <li className="follower-item" key={id}>
              <div className="follower__login">
                <Link className="follower__link" to={`/users/${login}`}>
                  {login}
                </Link>
              </div>
              <img className="followers-avatar" src={avatar_url} alt={login} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  data: getData(state)
});

const mapDispatchToProps = { fetchFollowersRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
