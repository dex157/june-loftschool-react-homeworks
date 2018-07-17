import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import Login from 'components/Login'
import PrivateRoute from 'components/PrivateRoute'
import UserPage from 'components/UserPage/UserPage'
import { logout } from 'ducks/auth'
import { getIsAuthorized } from 'ducks/auth/index'
import { getIsNetworkErrorPresent, getNetworkError } from 'ducks/network'

export class AppRouter extends PureComponent {
  static propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    isNetworkError: PropTypes.bool.isRequired,
    networkErrorText: PropTypes.string,
    logout: PropTypes.func.isRequired
  }

  handleLogoutClick = () => {
    this.props.logout()
  }

  render() {
    const { isAuthorized, isNetworkError, networkErrorText } = this.props

    return (
      <div className="app">
        {isNetworkError && (
          <div className="alert alert-danger" role="alert">
            {networkErrorText}
          </div>
        )}

        {isAuthorized && (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <button
                className="btn btn-primary"
                onClick={this.handleLogoutClick}
              >
                Выйти
              </button>
            </li>
          </ul>
        )}

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users/me" />} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect to="/users/me" />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isNetworkError: getIsNetworkErrorPresent(state),
  networkErrorText: getNetworkError(state)
})

const mapDispatchToProps = {
  logout
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
)
