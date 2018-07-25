import React, { PureComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIsAuthorized } from 'ducks/auth'

export class PrivateRoute extends PureComponent {
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
