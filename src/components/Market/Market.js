import React, { Component } from 'react';
import Order from '../Order';
import './Market.css';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';

const mapStateToProps = state => {
  return {
    orders: state.market.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: object => {
      dispatch(createOrder(object));
    },
    moveOrderToFarm: object => {
      dispatch(moveOrderToFarm(object));
    }
  };
};

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
    createdAt: new Date().toLocaleDateString('ru')
  };
};

class Market extends Component {
  createOrderHandler = () => {
    const { createOrder } = this.props;
    const newOrder = getNewOrder();
    createOrder(newOrder);
  };

  sendOrderHandler = () => {
    const { orders, moveOrderToFarm } = this.props;
    const lastOrder = orders[orders.length - 1];
    moveOrderToFarm(lastOrder);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.createOrderHandler}
        >
          Создать заказ
        </button>
        <button onClick={this.sendOrderHandler} disabled={!orders.length}>
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(item => {
            return (
              <Order
                name={item.name}
                price={item.price}
                createdAt={item.createdAt}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
