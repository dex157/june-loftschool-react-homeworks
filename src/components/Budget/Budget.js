import React from 'react';
import { connect } from 'react-redux';
import './Budget.css';

const mapStateToProps = state => {
  return {
    profit: state.budget.profit,
    marketExpanse: state.budget.marketExpanse,
    farmExpanse: state.budget.farmExpanse,
    deliveryExpanse: state.budget.deliveryExpanse
  };
};

const Budget = props => {
  const { profit, marketExpanse, farmExpanse, deliveryExpanse } = props;

  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        Всего получено денег:
        <span className="t-profit"> {profit}</span>
      </p>
      <p>
        Расходы продавцов:
        <span className="t-sellers"> {marketExpanse}</span>
      </p>
      <p>
        Расходы на ферме:
        <span className="t-farm"> {farmExpanse}</span>
      </p>
      <p>
        Расходы на доставку:
        <span className="t-delivery"> {deliveryExpanse}</span>
      </p>
      <p>
        Итого:
        <span className="t-total">
          {profit - marketExpanse - farmExpanse - deliveryExpanse}
        </span>
      </p>
    </div>
  );
};

export default connect(mapStateToProps)(Budget);
