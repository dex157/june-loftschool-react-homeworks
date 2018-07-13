import React, { Component } from 'react'
import { getLoginRequest, getUserInfoRequest } from '../ducks/user-actions'
import { connect } from 'react-redux';

class UserPage extends Component {

  fetchData = () => {
    this.props.getLoginRequest();
    /*this.props.getUserInfoRequest();*/
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {

    const { login } = this.props;

    return (
      <h1>{login.login}</h1>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return ({
    login: state.login
  });
};

const mapDispatchToProps = { getLoginRequest, getUserInfoRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

