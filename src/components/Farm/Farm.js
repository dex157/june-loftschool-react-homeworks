import React, { Component } from 'react';
import './Farm.css';
import { moveOrderToCustomer } from '../../actions/farmActions';
import { connect } from 'react-redux';
import Order from '../Order/Order';

const mapStateToProps = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export class Farm extends Component {
  render() {
    const { orders, moveOrderToCustomer } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={!orders.length}
          onClick={() => moveOrderToCustomer(orders[0])}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {orders &&
            orders.map(order => (
              <Order
                key={order.id}
                name={order.name}
                price={order.price}
                createdAt={order.createdAt}
              />
            ))}
        </div>
        <div />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
