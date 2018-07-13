import React, { Component } from 'react';
import './Market.css';
import Order from 'components/Order';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';

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
  handleCreateOrder = () => {
    const newOrder = getNewOrder();
    const { createOrder } = this.props;

    createOrder(newOrder);
  };

  handleMoveOrderToFarm = () => {
    const { orders, moveOrderToFarm } = this.props;

    moveOrderToFarm(orders[orders.length - 1]);
  };

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
        <button onClick={this.handleMoveOrderToFarm} disabled={!orders.length}>
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(order => (
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

const mapStateToProps = state => {
  return {
    orders: state.market.orders
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
