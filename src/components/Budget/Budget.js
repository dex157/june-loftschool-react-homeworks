import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

export const Budget = props => {
  console.log(props);
  const { profit, farmExpanse, deliveryExpanse, marketExpanse } = props.budget;
  console.log(profit, farmExpanse, deliveryExpanse, marketExpanse);

  const total = profit - farmExpanse - marketExpanse - deliveryExpanse;

  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        {`Всего получено денег: `}
        <span className="t-profit">{profit}</span>
      </p>
      <p>
        {`Расходы продавцов: `}
        <span className="t-sellers">{-marketExpanse}</span>
      </p>
      <p>
        {`Расходы на ферме: `}
        <span className="t-farm">{-farmExpanse}</span>
      </p>
      <p>
        {`Расходы на доставку: `}
        <span className="t-delivery">{-deliveryExpanse}</span>
      </p>
      <p>
        {`Итого: `}
        <span className="t-total">{total}</span>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  budget: state.budget
});

export default connect(mapStateToProps)(Budget);
