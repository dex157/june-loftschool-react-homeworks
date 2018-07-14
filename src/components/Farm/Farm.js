import React, { Component } from 'react';
import './Farm.css';
import Order from '../Order/Order';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';

export class Farm extends Component {
  handleClick = () => {
    this.props.moveOrderToCustomer(this.props.orders[0]);
  };
  render() {
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          onClick={this.handleClick}
          disabled={this.props.orders.length > 0 ? false : true}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {this.props.orders.map((order, index) => {
            return (
              <Order
                key={index}
                name={order.name}
                price={order.price}
                createdAt={order.createdAt}
              />
            );
          })}
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
