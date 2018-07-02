import React, { Component } from 'react';
import './Farm.css';
import Order from '../Order';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from 'actions/farmActions';

const mapStateToProps = state => {
  return {
    orders: state.farm.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveOrderToCustomer: object => {
      dispatch(moveOrderToCustomer(object));
    }
  };
};

class Farm extends Component {
  sendOrderHandler = () => {
    const { orders, moveOrderToCustomer } = this.props;
    const lastOrder = orders[orders.length - 1];
    moveOrderToCustomer(lastOrder);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={!orders.length} onClick={this.sendOrderHandler}>
          Отправить урожай клиенту
        </button>
        <div>
          {orders.map(item => {
            return (
              <Order
                name={item.name}
                price={item.price}
                createdAt={item.createdAt}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
