import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../Order';
import { moveOrderToCustomer } from 'actions/farmActions';
import './Farm.css';

export class Farm extends Component {
  render() {
    const { orders, onMoveOrderToCustomer } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={!orders.length} onClick={onMoveOrderToCustomer}>
          Отправить урожай клиенту
        </button>
        <div>
          {orders.map(el => (
            <Order
              name={el.name}
              price={el.price}
              createdAt={el.createdAt.toLocaleString()}
              key={el.id}
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
  onMoveOrderToCustomer: () => dispatch(moveOrderToCustomer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
