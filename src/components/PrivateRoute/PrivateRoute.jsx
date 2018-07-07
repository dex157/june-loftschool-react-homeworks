import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIsAuthorized } from 'ducks/auth'

export class PrivateRoute extends PureComponent {
  static propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool
  }

  render() {
    const { path, exact, isAuthorized } = this.props
    const Component = this.props.component

    return (
      <Route
        exact={exact}
        path={path}
        render={() => (isAuthorized ? <Component /> : <Redirect to="/login" />)}
      />
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
})

export default connect(mapStateToProps)(PrivateRoute)
