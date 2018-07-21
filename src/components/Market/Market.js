import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../Order';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import './Market.css';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {
 
  handlerAddOrder = () => {
    const { createOrder } = this.props;
    createOrder(getNewOrder());
  };

  handlerMoveOrderToFarm = () => {
    const { moveOrderToFarm, market } = this.props;
    market.orders.forEach(item => moveOrderToFarm(item));
  };

  render() {
    const { market } = this.props,
      isButtonDisabled = false;
      
    return (
      <div className="market">
         <h2>Новые заказы в магазине</h2>
          <button
          className="new-orders__create-button"
          onClick={this.handlerAddOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={isButtonDisabled}
          onClick={this.handlerMoveOrderToFarm}
        >
        Отправить заказ на ферму
        </button>
        <div className="order-list">
          {market.orders.map((element, index) => {
            return (
              <Order
                key={`${element.name}_${index}`}
                name={element.name}
                price={element.price}
                createdAt={element.createdAt.toTimeString()}
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
    market: state.market
  };
};

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
