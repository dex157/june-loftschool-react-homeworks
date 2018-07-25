import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-svg-spinner';
import {
  fetchFollowersRequest,
  getData,
  getIsFetching,
  getError
} from 'ducks/followers';

export class Followers extends Component {
  componentDidMount = () => {
    const { login, fetchFollowersRequest } = this.props
    fetchFollowersRequest(login)
  }

  componentDidUpdate = prevProps => {
    const { login, fetchFollowersRequest } = this.props

    if (login === prevProps.login) {
      return
    }

    fetchFollowersRequest(login)
  }

  renderSpinner() {
    return (
      <div className="container p-5">
        <div className="row justify-content-md-center">
          <Spinner size="64px" color="#6EB1DE" gap={5} />
        </div>
      </div>
    )
  }

  renderFollower(follower) {
    return (
      <Link to={`/users/${follower.name}`} key={follower.id}>
        <figure className="figure p-2 text-center">
          <img
            src={follower.avatar}
            className="figure-img img-thumbnail img-fluid rounded"
            alt="Avatar"
            style={{ width: 80 + 'px', height: 80 + 'px' }}
          />
          <figcaption className="figure-caption text-center">
            {follower.name}
          </figcaption>
        </figure>
      </Link>
    )
  }

  renderFollowers(followers) {
    if (followers == null) {
      return <div />
    }

    return <div>{followers.map(follower => this.renderFollower(follower))}</div>
  }

  render() {
    const { followers, isFetching } = this.props

    return (
      <div className="p-5">
        {isFetching ? this.renderSpinner() : this.renderFollowers(followers)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  followers: getData(state),
  isFetching: getIsFetching(state),
  error: getError(state)
})

const mapDispatchToProps = {
  fetchFollowersRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers)
