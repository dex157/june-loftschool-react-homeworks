import React, { Component } from 'react';
import { moveOrderToCustomer } from 'actions/farmActions';
import { connect } from 'react-redux';
import Order from '../Order';
import './Farm.css';

const mapStateToProps = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export class Farm extends Component {
  handleMoveOrderToCustomer = () => {
    const { orders, moveOrderToCustomer } = this.props;
    const orderMove = [...orders].pop();
    moveOrderToCustomer(orderMove);
  };
  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={!orders.length}
          onClick={this.handleMoveOrderToCustomer}
        >
          Отправить урожай клиенту
        </button>
        <div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
