import React, { Component } from 'react';
import './Farm.css';
import { connect } from 'react-redux';
import Order from 'components/Order';
import { getFarmOrders } from 'reducers/farm';
import { moveOrderToCustomer } from 'actions/farmActions';

const mapStateToProps = state => ({
  farm: getFarmOrders(state)
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export class Farm extends Component {
  render() {
    const { moveOrderToCustomer } = this.props;
    const { farm } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          onClick={() => {
            Object.keys(farm).length > 0 && moveOrderToCustomer(farm[0].id);
          }}
        >
          Отправить урожай клиенту
        </button>
        <div>{farm.map(order => <Order key={order.id} {...order} />)}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
