import React from 'react';
import './Order.css';

const Order = (order) => (
  <div className="order">
    <div className="order__upper">
      <p className="p--order">Название: {order.name}</p>
      <p className="p--order">
        Цена: <span className="order-price">{order.price}</span>
      </p>
    </div>
    <div className="order__lower">
      <p className="p--order">
        Создан: {order.createdAt.toISOString().slice(0,10)}
      </p>
    </div>
  </div>
);


export default Order;
