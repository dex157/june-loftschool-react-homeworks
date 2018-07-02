import React, { PureComponent } from 'react';
import './Market.css';
import Order from '../Order';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';
import { connect } from 'react-redux';

let id = 0,
  options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
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

const getId = () => {
  id += 1;
  return id;
};

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toLocaleString("ru", options),
  };
};

export class Market extends PureComponent {
  render() {
    const { orders, createOrder, moveOrderToFarm } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button" onClick={() => createOrder(getNewOrder())}>Создать заказ</button>
        <button onClick={() => moveOrderToFarm(orders[0])} disabled={!orders.length}>Отправить заказ на ферму</button>
        <ul className="order-list">
          {orders.map(({ id, name, price, createdAt }) => (
            <Order key={id} id={id} name={name} price={price} createdAt={createdAt}/>
          ))}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
