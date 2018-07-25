import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authorize, getIsAuthorized } from 'ducks/auth'

const ENTER_KEYKODE = 13

export class Login extends Component {
  state = { token: '' }

  handleInputChange = e => {
    this.setState({ token: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.sendLoginRequest()
  }

  handleKeyPress = e => {
    if (e.keyCode !== ENTER_KEYKODE) {
      return
    }

    this.sendLoginRequest()
  }

  sendLoginRequest() {
    const { token } = this.state
    const { authorize } = this.props

    if (token.trim() === '') {
      return
    }

    authorize(token)
  }

  render() {
    const { token } = this.state
    const { isAuthorized } = this.props

    if (isAuthorized) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <form
            className="col-4"
            onKeyPress={this.handleKeyPress}
            onSubmit={this.handleFormSubmit}
          >
            <div className="form-group">
              <p>
                Получить токен нужно на своей странице github, перейдите
                по&nbsp;
                <a href="https://github.com/settings/tokens">адресу</a> и
                создайте себе токен. Запишите куда нибудь токен, так как после
                создания доступ к нему будет только один раз.
              </p>

              <input
                type="text"
                className="form-control"
                placeholder="Введите токен"
                value={token}
                onChange={this.handleInputChange}
              />

              <small className="form-text text-muted">
                После ввода нажать Enter.
              </small>
            </div>

            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
})

const mapDispatchToProps = {
  authorize
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
