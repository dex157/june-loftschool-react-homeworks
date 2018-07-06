import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../Order';
import { moveOrderToCustomer } from '../../actions/farmActions';
import './Farm.css';

export class Farm extends Component {
  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>

        <button onClick={() => moveOrderToCustomer(orders[0])}>
          Отправить урожай клиенту
        </button>
        <div>
          {orders &&
            orders.map(order => {
              return <Order key={order.id} {...order} />;
            })}
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
