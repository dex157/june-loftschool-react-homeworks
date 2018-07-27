import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authorize, getIsAuthorized } from '../../ducks/auth';
import './Login.css';

class Login extends React.PureComponent {
  state = {
    token: ''
  };
  handleChange = e => {
    this.setState({ token: e.target.value });
  };
  handleKeyPress = e => {
    if (e.key === 'Enter' && this.state.token)
      this.props.authorize(this.state.token);
  };
  render() {
    const { isAuthorized } = this.props;

    if (isAuthorized) return <Redirect to="/users/me" />;
    return (
      <div className="login-form">
        <input
          value={this.state.token}
          className="token-input"
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder="github access token"
        />
        <span>Введите github token и нажмите Enter</span>
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
