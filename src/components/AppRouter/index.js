import { connect } from 'react-redux';
import AppRouter from './AppRouter';
import { logout } from '../../ducks/auth';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  error: state.network.message
});

const mapDispatchToProps = {
  logout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
