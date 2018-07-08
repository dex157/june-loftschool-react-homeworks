import React, { Component } from 'react';
import './Market.css';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import { connect } from 'react-redux';
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
    createdAt: new Date().toString()
  };
};

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

class Market extends Component {
  render() {
    const { orders, createOrder, moveOrderToFarm } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={() => createOrder(getNewOrder())}
        >
          Создать заказ
        </button>
        <button
          disabled={!orders.length}
          onClick={() => moveOrderToFarm(orders[0])}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders &&
            orders.map(order => (
              <Order
                key={order.id}
                name={order.name}
                price={order.price}
                createdAt={order.createdAt}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
