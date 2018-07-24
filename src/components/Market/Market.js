import React, { Component } from 'react';
import Order from '../Order';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import { connect } from 'react-redux';

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
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};
export class Market extends Component {
  render() {
    const { market, createOrder, moveOrderToFarm } = this.props;
    const handleClickCreate = () => {
      createOrder(getNewOrder());
    };
    const handleClickSend = () => {
      moveOrderToFarm(market.orders[market.orders.length - 1]);
    };
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={handleClickCreate}
        >
          Создать заказ
        </button>
        <button
          disabled={market.orders.length === 0 && 'disabled'}
          onClick={handleClickSend}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {market.orders.map(value => (
            <Order
              key={value.id}
              name={value.name}
              price={value.price}
              createdAt={value.createdAt.toString()}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  market: state.market
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
