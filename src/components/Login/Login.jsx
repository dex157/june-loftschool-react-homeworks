import React, { PureComponent } from 'react';
import { authorize, getIsAuthorized } from '../../ducks/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ENTER = 'Enter';

class Login extends PureComponent {
  state = { token: '' };

  handleInputChange = event => {
    this.setState({ token: event.target.value });
  };

  handleKeyPress = e => {
    const { token } = this.state;
    const { authorize } = this.props;
    if (e.key === ENTER) {
      authorize(token);
    }
  };

  render() {
    const { token } = this.state;
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <p className="mt-3 mb-3">
              Получить токен нужно на своей странице github, перейдите по&nbsp;
              <a href="https://github.com/settings/tokens">адресу</a>&nbsp;и
              создайте себе токен. Запишите куда нибудь токен, так как после
              создания доступ к нему будет только один раз.
            </p>
            <input
              className="mb-3 w-100"
              placeholder="auth_token"
              value={token}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
            />
            <p>Для продолжения нажмите Enter</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = { authorize };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
