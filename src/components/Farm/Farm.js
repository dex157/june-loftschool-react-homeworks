import React, { Component } from 'react';
import './Farm.css';
import Order from '../Order/Order';

export class Farm extends Component {
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
              createdAt={order.createdAt.toString().substring(16)}
            />
          ))}
        </div>
      </div>
    );
  }

  handleMoveOrderToCustomer = () => {
    const { orders, moveOrderToCustomer } = this.props;
    moveOrderToCustomer(orders[0]);
  }
}

export default Farm;
