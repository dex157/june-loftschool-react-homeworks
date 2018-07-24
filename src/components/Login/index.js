import { connect } from 'react-redux';
import Login from './Login';
import { authorize } from '../../ducks/auth';

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized
});

const mapDispatchToProps = {
  authorize
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
