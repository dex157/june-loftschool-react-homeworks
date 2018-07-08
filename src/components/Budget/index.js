import { connect } from 'react-redux';
import Budget from './Budget';

const mapStateToProps = state => ({
  ...state.budget
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);
