import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authorize, getIsAuthorized, logout } from '../../ducks/auth';

class Login extends Component {
  state = {
    loginInput: ''
  };

  handleChange = event => {
    this.setState({
      loginInput: event.target.value
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      return this.props.authorize(this.state.loginInput)
    }
  };

  render() {
    const { isAuthorized } = this.props;
    if (isAuthorized) {
      return <Redirect to="/users/me" />;
    }
    return (
      <Wrapper>
        <LoginBlock>
          <LoginText>
            Получить токен нужно на своей странице github, перейдите по{' '}
            <a href="https://github.com/settings/tokens">адресу</a> и создать
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </LoginText>
          <LoginInput
            placeholder="auth_token"
            onKeyPress={this.handleKeyPress}
            value={this.state.loginInput}
            onChange={this.handleChange}
          />
          <LoginText>После ввода нажать Enter</LoginText>
        </LoginBlock>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginBlock = styled.div`
  display: block;
  width: 300px;
`;

const LoginText = styled.p`
  display: block;
  text-align: left;
`;

const LoginInput = styled.input`
  width: 100%;
`;

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

const maspDispatchToProps = {
  authorize,
  logout
};

export default connect(
  mapStateToProps,
  maspDispatchToProps
)(Login);
