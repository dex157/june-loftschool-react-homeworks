import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveOrderToFarm, createOrder } from '../../actions/marketActions';
import Order from '../Order';
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
    createdAt: new Date().toLocaleString()
  };
};

export class Market extends Component {
  render() {
    const { moveOrderToFarm, createOrder, orders } = this.props;
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
          onClick={() => moveOrderToFarm(orders[0])}
          disabled={!orders.length > 0}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders &&
            orders.map(order => {
              return <Order key={order.id} {...order} />;
            })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  moveOrderToFarm,
  createOrder
};

const mapStateToProps = state => ({
  orders: state.market.orders
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
