import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';
import Order from '../../components/Order';
import './Farm.css';

export class Farm extends Component {
  handleSendToClientClick = () => {
    const { orders, onMoveOrderToCustomer } = this.props;
    const order = [...orders].pop();

    onMoveOrderToCustomer(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>

        <div>
          <button
            disabled={!orders.length}
            onClick={this.handleSendToClientClick}
          >
            Отправить урожай клиенту
          </button>
        </div>
        <div className="order-list">
          {orders.map(order => (
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt.toLocaleString()}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = dispatch => ({
  onMoveOrderToCustomer: order => dispatch(moveOrderToCustomer(order))
});

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Farm);
