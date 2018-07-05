import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from 'actions/farmActions';
import Order from 'components/Order';
import './Farm.css';

export class Farm extends Component {
  handleMoveOrder = () => {
    const { orders, moveOrder } = this.props;
    const order = [...orders].pop();
    moveOrder(order);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={!orders.length} onClick={this.handleMoveOrder}>
          Отправить урожай клиенту
        </button>
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

const mapStateToProps = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = dispatch => ({
  moveOrder: order => dispatch(moveOrderToCustomer(order))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
