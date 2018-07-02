import React from 'react';
import './Order.css';

const Order = ({ name, price, createdAt }) => (
  <li className="order">
    <div className="order__upper">
      <p className="p--order">Название: {name}</p>
      <p className="p--order">Цена: <span className="order-price">{price} руб.</span></p>
    </div>
    <div className="order__lower">
      <p className="p--order">Создан: {createdAt}</p>
    </div>
  </li>
);

export default Order;
