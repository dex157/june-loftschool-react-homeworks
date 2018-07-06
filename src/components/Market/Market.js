import React from 'react';
import './Market.css';
import { connect } from 'react-redux';
import {
  createOrder,
  moveOrderToFarm,
  deleteOrderFromMarket
} from 'actions/marketActions';
import Order from 'components/Order';

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

class Market extends React.PureComponent {
  createNewOrderClick = () => {
    const { createOrder } = this.props;
    createOrder(getNewOrder());
  };

  moveOrderToFarmClick = () => {
    const { moveOrderToFarm, orders } = this.props;
    if (!orders || !orders.length) {
      return;
    }
    const lastOrder = orders[orders.length - 1];

    moveOrderToFarm({
      id: lastOrder.id,
      name: lastOrder.name,
      price: lastOrder.price,
      createdAt: lastOrder.createdAt
    });
  };

  deleteOrderFromMarketClick = () => {
    const { deleteOrderFromMarket, orders } = this.props;
    if (!orders || !orders.length) {
      return;
    }
    deleteOrderFromMarket();
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>

        <div className="market__buttons">
          <button
            onClick={this.createNewOrderClick}
            className="new-orders__create-button"
          >
            Создать заказ
          </button>

          <button onClick={this.moveOrderToFarmClick}>
            Отправить заказ на ферму
          </button>

          <button onClick={this.deleteOrderFromMarketClick}>
            Удалить последний заказ
          </button>
        </div>

        {orders &&
          orders.length > 0 && (
            <ul className="order-list">
              {orders.map(order => {
                return (
                  <Order
                    name={order.name}
                    price={order.price}
                    createdAt={order.createdAt}
                    key={order.id}
                  />
                );
              })}
            </ul>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
  deleteOrderFromMarket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
