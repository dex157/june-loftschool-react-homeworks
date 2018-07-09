import { connect } from 'react-redux';
import Farm from './Farm';
import { moveOrderToCustomer } from '../../actions/farmActions';

const mapStateToProps = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
