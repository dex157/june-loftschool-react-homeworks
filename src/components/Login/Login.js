import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authorize, getIsAuthorized } from 'ducks/auth';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginText = styled.p`
  padding: 0;
  margin: 0 0 20px;
  text-align: center;
`;

const LoginInput = styled.input`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid #ccc;
`;

class Login extends React.PureComponent {
  state = { token: '' };

  handleInputChange = e => {
    this.setState({ token: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.sendLoginRequest();
  };

  handleKeyPress = e => {
    if (e.keyCode !== 13) {
      return;
    }

    this.sendLoginRequest();
  };

  sendLoginRequest() {
    const { token } = this.state;
    const { authorize } = this.props;

    if (token.trim() === '') {
      return;
    }

    authorize(token);
  }

  render() {
    const { token } = this.state;
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    return (
      <LoginWrapper>
        <form onKeyPress={this.handleKeyPress} onSubmit={this.handleFormSubmit}>
          <LoginText>
            Получить токен нужно на своей странице github, перейдите по&nbsp;
            <a href="https://github.com/settings/tokens">адресу</a> и создайте
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </LoginText>

          <LoginInput
            type="text"
            placeholder="Введите токен"
            value={token}
            onChange={this.handleInputChange}
          />

          <LoginText>
            После ввода нажать Enter.
          </LoginText>
        </form>
      </LoginWrapper>
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
