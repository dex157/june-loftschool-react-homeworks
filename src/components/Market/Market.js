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
  handleCreateOrderClick = () => {
    const { onCreateOrder } = this.props;
    const newOrder = getNewOrder();

    onCreateOrder(newOrder);
  };

  handleMoveOrderClick = () => {
    const { orders, onMoveOrderToFarm } = this.props;
    const order = [...orders].pop();
    onMoveOrderToFarm(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>

        <div>
          <button
            className="new-orders__create-button"
            onClick={this.handleCreateOrderClick}
          >
            Создать заказ
          </button>

          <button disabled={!orders.length} onClick={this.handleMoveOrderClick}>
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
  onCreateOrder: order => dispatch(createOrder(order)),
  onMoveOrderToFarm: id => dispatch(moveOrderToFarm(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
