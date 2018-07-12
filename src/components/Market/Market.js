import React, { Component } from 'react';
import './Market.css';
import { connect } from 'react-redux';
import Order from 'components/Order';
import { createOrder, deleteOrderFromMarket } from 'actions/marketActions';
import { addOrderToFarm } from 'actions/farmActions';
import { getMarketOrders } from 'reducers/market';
import { getFarmOrders } from 'reducers/farm';

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

const mapStateToProps = state => ({
  market: getMarketOrders(state),
  farm: getFarmOrders(state)
});

const mapDispatchToProps = {
  createOrder,
  deleteOrderFromMarket,
  addOrderToFarm
};

export class Market extends Component {
  render() {
    const { createOrder, deleteOrderFromMarket, addOrderToFarm } = this.props;
    const { market } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          onClick={() => {
            const orderData = getNewOrder();
            createOrder(
              orderData.id,
              orderData.name,
              orderData.price,
              orderData.createdAt
            );
          }}
          className="new-orders__create-button"
        >
          Создать заказ
        </button>
        <button
          onClick={() => {
            Object.keys(market).length > 0 &&
              addOrderToFarm(
                market[0].id,
                market[0].name,
                market[0].price,
                market[0].createdAt
              ) &&
              deleteOrderFromMarket(market[0].id);
          }}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {market.map(order => <Order key={order.id} {...order} />)}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
