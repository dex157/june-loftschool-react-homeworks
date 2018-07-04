import React from 'react';
import './Farm.css';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from 'actions/farmActions';
import Order from 'components/Order';

class Farm extends React.PureComponent {
  moveOrderToCustomerClick = () => {
    const { moveOrderToCustomer, orders } = this.props;
    if (!orders || !orders.length) {
      return;
    }
    const lastOrder = orders[orders.length - 1];

    moveOrderToCustomer({
      id: lastOrder.id,
      name: lastOrder.name,
      price: lastOrder.price,
      createdAt: lastOrder.createdAt
    });
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button onClick={this.moveOrderToCustomerClick}>
          Отправить урожай клиенту
        </button>

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
  orders: state.farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
