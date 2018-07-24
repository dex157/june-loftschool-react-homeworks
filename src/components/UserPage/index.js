import { connect } from 'react-redux';
import UserPage from './UserPage';
import { fetchUserRequest } from '../../ducks/users';
import { logout } from '../../ducks/auth';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  fetchUserRequest,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
