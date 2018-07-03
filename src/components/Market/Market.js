import React, { Component } from 'react';
import Order from '../Order';
import './Market.css';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';

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
  handleCreateOrderClick = () => {
    const { createOrder } = this.props;

    const newOrder = getNewOrder();

    createOrder(newOrder);
  };

  handleMoveToFarmClick = () => {
    const { moveOrderToFarm, orders } = this.props;
    const movedOrder = [...orders].pop();

    moveOrderToFarm(movedOrder);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleCreateOrderClick}
        >
          Создать заказ
        </button>
        <button disabled={!orders.length} onClick={this.handleMoveToFarmClick}>
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(order => (
            <Order
              key={order.id}
              id={order.id}
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
