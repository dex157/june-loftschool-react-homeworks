import React, { Component } from 'react';
import './Market.css';
import Order from '../Order/Order';

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
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleCreateOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={!orders.length}
          onClick={this.handleMoveOrderToFarm}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(order => (
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt.toString().substring(16)}
            />
          ))}
        </div>
      </div>
    );
  }

  handleCreateOrder = () => {
    const order = getNewOrder();
    this.props.createOrder(order);
  };

  handleMoveOrderToFarm = () => {
    const { orders, moveOrderToFarm } = this.props;
    moveOrderToFarm(orders[0]);
  }
}

export default Market;
