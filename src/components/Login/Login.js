import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorize, getIsAuthorized } from '../../ducks/auth';

class Login extends PureComponent {
    state = {
        token: ''
    };

    handleInputChange = (e) => {
        this.setState({token: e.target.value});
    };

    sendRequestOnEnter = (e) => {
        if (e.key === 'Enter') {
            this.props.authorize(this.state.token);
        }
    };
    
    render() {
        const { token } = this.state;
        const { isAuthorized } = this.props;

        if (isAuthorized) {
            return <Redirect to="/" />
        }

        return (
            <React.Fragment>
                <label>
                    <span>Введите токен  </span>
                    <input 
                        value={token}
                        placeholder="auth_token"
                        onChange={this.handleInputChange}
                        onKeyPress={this.sendRequestOnEnter}
                    />
                </label>
                <p>После ввода нажать Enter</p>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = { authorize };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);