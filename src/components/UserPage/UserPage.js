import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Followers from 'components/Followers'
import Spinner from 'react-svg-spinner'
import {
  fetchSelfRequest,
  fetchUserRequest,
  getUserData,
  getIsFetched
} from 'ducks/users'

export class UserPage extends PureComponent {
  componentDidMount = () => {
    this.fetchUser()
  }

  componentDidUpdate = prevProps => {
    const prevUser = prevProps.match.params.name
    const nextUser = this.props.match.params.name

    if (nextUser !== prevUser) {
      this.fetchUser()
    }
  }

  fetchUser = () => {
    const { match, fetchSelfRequest, fetchUserRequest } = this.props

    if (match.params.name == null) {
      fetchSelfRequest()
    } else {
      fetchUserRequest(match.params.name)
    }
  }

  renderSpinner() {
    return (
      <div className="row justify-content-md-center">
        <Spinner size="64px" color="#6EB1DE" gap={5} />
      </div>
    )
  }

  renderUserCard(user) {
    const { isFetched } = this.props

    if (!user && isFetched) {
      return <div className="text-center">Пользователь не найден!</div>
    }

    return (
      <Fragment>
        <div className="row justify-content-md-center">
          <div className="card" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={user.avatar} alt="User" />
            <div className="card-body">
              <p className="card-title">
                <strong>{user.name}</strong>
              </p>
              <p className="card-text">
                <span data-test-followers-count>
                  Following: {user.following}
                </span>
                <br />
                <span>Repos: {user.repos}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <Followers login={user.name} />
        </div>
      </Fragment>
    )
  }

  render() {
    const { isFetched, user } = this.props

    return (
      <div className="container p-5">
        {!isFetched ? this.renderSpinner() : this.renderUserCard(user)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetched: getIsFetched(state),
  user: getUserData(state)
})

const mapDispatchToProps = {
  fetchSelfRequest,
  fetchUserRequest
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
)
