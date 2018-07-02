import React, { PureComponent } from 'react';
import './Farm.css';
import Order from '../Order';
import { moveOrderToCustomer } from 'actions/farmActions';
import { connect } from 'react-redux';

export class Farm extends PureComponent { 
  render() {
    const { orders, moveOrderToCustomer } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button className="new-orders__create-button" onClick={() => moveOrderToCustomer(orders[0])}>Отправить урожай клиенту</button>
        <ul className="order-farm__list">
          {orders.map(({ id, name, price, createdAt }) => (
            <Order key={id} id={id} name={name} price={price} createdAt={createdAt}/>
          ))}
        </ul>
      </div>
    )
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
