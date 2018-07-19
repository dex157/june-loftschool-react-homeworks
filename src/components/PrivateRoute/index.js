import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => ({ isAuthorized: state.auth.isAuthorized });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
