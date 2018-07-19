import React, { Fragment, PureComponent } from "react";
import Spinner from 'react-svg-spinner';
import './UserPage.css';
import Followers from "../Followers";

export default class UserPage extends PureComponent {
  componentDidMount() {
    const { params: { name }, fetchUserRequest } = this.props;
    fetchUserRequest(name);
  }

  componentDidUpdate(prevProps) {
    const { params: { name }, fetchUserRequest } = this.props;
    if (name !== prevProps.params.name) fetchUserRequest(name);
  }

  render() {
    const { isFetched, data } = this.props.users;

    if (!isFetched) {
      return (
        <div className="user">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      );
    }

    return (
      <Fragment>
        <div className="buttons">
          <button onClick={this.handleLogout}>Logout</button>
        </div>
        <div className="user">
          <div className="profile">
            <div className="image">
              <img src={data.avatar_url} alt={data.login} />
            </div>
            <div className="info">
              <h3>{data.login}</h3>
              <p>Followers: {data.followers}</p>
              <p>Public repos: {data.public_repos}</p>
            </div>
          </div>
          <Followers login={data.login} />
        </div>
      </Fragment>
    );
  }

  handleLogout = () => {
    this.props.logout();
  }
}
