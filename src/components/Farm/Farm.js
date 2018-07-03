import React, { Component } from 'react';
import './Farm.css';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';
import Order from '../Order';

export class Farm extends Component {
  handleMoveToCustomerClick = () => {
    const { moveOrderToCustomer, orders } = this.props;
    const movedOrder = [...orders].pop();

    moveOrderToCustomer(movedOrder);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={!orders.length}
          onClick={this.handleMoveToCustomerClick}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {orders.map(order => (
            <Order
              key={order.id}
              id={order.id}
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
