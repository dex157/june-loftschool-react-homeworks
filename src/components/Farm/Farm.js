import React, { Component } from 'react';
import './Farm.css';
import Order from 'components/Order';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from 'actions/farmActions';

class Farm extends Component {
  handleMoveOrderToCustomer = () => {
    const { orders, moveOrderToCustomer } = this.props;

    moveOrderToCustomer(orders[orders.length - 1]);
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
              createdAt={order.createdAt}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.farm.orders
  };
};

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
