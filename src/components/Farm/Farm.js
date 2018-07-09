import React, { Component } from "react";
import "./Farm.css";
import { connect } from "react-redux";
import { moveOrderToCustomer } from "../../actions/farmActions";
import Order from "../Order";

export class Farm extends Component {
  clickSendToClient = () => {
    const { orders, moveOrderToCustomer } = this.props;
    const order = [...orders].pop();

    moveOrderToCustomer(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <button onClick={this.clickSendToClient}>
          Отправить урожай клиенту
        </button>

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
  orders: state.farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);