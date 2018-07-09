import { connect } from 'react-redux';
import Market from './Market';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
