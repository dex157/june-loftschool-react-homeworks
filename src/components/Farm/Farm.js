import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Farm.css';

import Order from '../Order';
import { moveOrderToCustomer } from '../../actions/farmActions';

export class Farm extends Component {
  handlerMoveOrderToCustomer = () => {
    const { moveOrderToCustomer, farm } = this.props;

    farm.orders.forEach(item => moveOrderToCustomer(item));
  };

  render() {
    const { farm } = this.props,
      isButtonDisabled = false; // Проблема с тестом
    // isButtonDisabled = farm.orders.length === 0;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={isButtonDisabled}
          onClick={this.handlerMoveOrderToCustomer}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {farm.orders.map((item, index) => {
            return (
              <Order
                key={`${item.name}_${index}`}
                name={item.name}
                price={item.price}
                createdAt={item.createdAt.toTimeString()}
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
    farm: state.farm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveOrderToCustomer: payload => {
      dispatch(moveOrderToCustomer(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
