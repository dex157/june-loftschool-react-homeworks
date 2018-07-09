import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../Order';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';
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

class Market extends Component {
  render() {
    const { onCreateOrder, onMoveOrderToFarm, orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={() => {
            onCreateOrder(getNewOrder());
          }}
        >
          Создать заказ
        </button>
        <button
          disabled={!orders.length}
          onClick={() => {
            onMoveOrderToFarm(orders[0]);
          }}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(el => (
            <Order
              name={el.name}
              price={el.price}
              createdAt={el.createdAt.toLocaleString()}
              key={el.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = dispatch => ({
  onCreateOrder: newOrder => dispatch(createOrder(newOrder)),
  onMoveOrderToFarm: newOrder => dispatch(moveOrderToFarm(newOrder))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
