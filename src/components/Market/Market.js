import React, { Component } from 'react';
import './Market.css';
import Order from '../Order/Order';
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
    createdAt: new Date().toTimeString()
  };
};

export class Market extends Component {
  handleAddClick = () => {
    this.props.createOrder(getNewOrder());
  };

  handleMoveClick = () => {
    this.props.moveOrderToFarm(this.props.orders[0]);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleAddClick}
        >
          Создать заказ
        </button>
        <button
          onClick={this.handleMoveClick}
          disabled={this.props.orders.length > 0 ? false : true}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map((order, index) => {
            return (
              <Order
                name={order.name}
                price={order.price}
                createdAt={order.createdAt}
                key={index}
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
    orders: state.market.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: payload => {
      dispatch(createOrder(payload));
    },
    moveOrderToFarm: payload => {
      dispatch(moveOrderToFarm(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
