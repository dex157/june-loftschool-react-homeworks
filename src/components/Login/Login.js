import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { authorize, getIsAuthorized } from '../../ducks/auth';

class Login extends PureComponent {
  state = {
    token: ''
  };

  handleInputChange = e => {
    this.setState({ token: e.target.value });
  };

  authorizeOnEnter = e => {
    if (e.key === 'Enter') {
      this.props.authorize(this.state.token);
    }
  };

  render() {
    const { token } = this.state;
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    return (
      <LoginDivWrapper>
        <p>
          Получить токен нужно на своей странице github, перейдите по{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/settings/tokens"
          >
            адресу
          </a>{' '}
          и создать себе токен. Запишите куда нибудь токен, так как после
          создания доступ к нему будет только один раз.
        </p>
        <label>
          <span>Введите токен github </span>
          <LoginInput
            value={token}
            placeholder="auth_token"
            onChange={this.handleInputChange}
            onKeyPress={this.authorizeOnEnter}
          />
        </label>
        <LoginHintP>После ввода нажать Enter.</LoginHintP>
      </LoginDivWrapper>
    );
  }
}

const LoginDivWrapper = styled.div`
  width: 30rem;
`;

const LoginInput = styled.input`
  width: 18rem;
  height: 1.5rem;
  border-radius: 2rem;
  border: 0.05rem solid grey;
  padding-left: 0.5rem;
  outline: none;
`;

const LoginHintP = styled.p`
  font-size: 0.8rem;
  padding-left: 10rem;
`;

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = { authorize };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
