import React, { Component } from "react";
import "./Market.css";
import { connect } from "react-redux";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";
import Order from "../Order";

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
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
  clickCreateOrder = () => {
    const { createOrder } = this.props;

    createOrder(getNewOrder());
  };

  clickMoveOrder = () => {
    const { orders, moveOrderToFarm } = this.props;
    const order = [...orders].pop();

    moveOrderToFarm(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <div>
          <button
            className="new-orders__create-button"
            onClick={this.clickCreateOrder}
          >
            Создать заказ
          </button>

          <button onClick={this.clickMoveOrder}>
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

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);