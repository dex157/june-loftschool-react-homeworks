import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';
import Order from 'components/Order';
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
  createOrder = () => {
    this.props.createOrder(getNewOrder());
  };

  moveOrder = () => {
    const { orders } = this.props;
    const order = [...orders].pop();
    this.props.moveOrderToFarm(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>

        <div>
          <button
            className="new-orders__create-button"
            onClick={this.createOrder}
          >
            Создать заказ
          </button>

          <button disabled={!orders.length} onClick={this.moveOrder}>
            Отправить заказ на ферму
          </button>
        </div>

        <div className="order-list">
          {orders.map(order => (
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt.toLocaleString()}
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
  createOrder: order => dispatch(createOrder(order)),
  moveOrderToFarm: id => dispatch(moveOrderToFarm(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
