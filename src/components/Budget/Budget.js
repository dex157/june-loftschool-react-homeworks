import React from 'react';
import { connect } from 'react-redux';
import './Budget.css';

export const Budget = ({ market, profit, farm, delivery }) => {
  const total = profit - market - farm - delivery;
  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        Всего получено денег<span className="t-profit">{profit}</span>
      </p>
      <p>Расходы продавцов</p>
      <span className="t-sellers">{-market}</span>
      <p>Расходы на ферме</p>
      <span className="t-farm">{-farm}</span>
      <p>Расходы на доставку</p>
      <span className="t-delivery">{-delivery}</span>
      <p>Итого</p>
      <span className="t-total">{total}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    market: state.budget.marketExpanse,
    profit: state.budget.profit,
    farm: state.budget.farmExpanse,
    delivery: state.budget.deliveryExpanse
  };
};

export default connect(mapStateToProps)(Budget);
