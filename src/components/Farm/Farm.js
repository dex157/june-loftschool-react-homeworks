import React, { Component } from 'react';
import './Farm.css';
import { moveOrderToCustomer } from '../../actions/farmActions';
import { connect } from 'react-redux';
import Order from '../Order';

export class Farm extends Component {
  render() {
    const { farm, moveOrderToCustomer } = this.props;
    const handleClickSend = () => {
      moveOrderToCustomer(farm.orders[farm.orders.length - 1]);
    };
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={farm.orders.length === 0 && 'disabled'}
          onClick={handleClickSend}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {farm.orders.map(value => (
            <Order
              key={value.id}
              name={value.name}
              price={value.price}
              createdAt={value.createdAt.getTime()}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  farm: state.farm
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
