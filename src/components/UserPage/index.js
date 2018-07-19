import { connect } from 'react-redux';
import UserPage from './UserPage';
import { fetchUserRequest } from '../../ducks/users';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  fetchUserRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
