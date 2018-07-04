import React from 'react';
import './Order.css';

const Order = ({ name, price, createdAt }) => (
  <div className="order">
    <div className="order__upper">
      <div className="p--order">Название: {name}</div>
      <div className="p--order">
        Цена: <span className="order-price">{price}</span>
      </div>
    </div>
    <div className="order__lower">
      <div className="p--order">Создан: {createdAt}</div>
    </div>
  </div>
);

export default Order;
