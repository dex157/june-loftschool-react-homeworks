import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { authorize, getIsAuthorized } from '../../ducks/auth';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends PureComponent {
  state = {
    auth_token: ''
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ auth_token: value });
  };

  handleKeyPress = event => {
    const { key } = event;
    const { auth_token } = this.state;

    if (key === 'Enter' && auth_token !== '') {
      const { authorize } = this.props;
      authorize(auth_token);
    }
  };

  render() {
    const { auth_token } = this.state;
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/users/me" />;
    }

    return (
      <div className="sc-EHOje dAZrsR">
        <div className="sc-bZQynM erDCdu">
          <p>
            Получить токен нужно на своей странице github, перейдите по{' '}
            <a href="https://github.com/settings/tokens">адресу</a> и создать
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </p>
          <input
            className="sc-gzVnrw lfdfns"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="auth_token"
            value={auth_token}
          />
          <p>После ввода нажать Enter</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = {
  authorize
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
