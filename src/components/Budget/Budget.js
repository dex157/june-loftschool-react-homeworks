import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';
import { getBudget } from 'reducers/budget';

const mapStateToProps = state => ({
  budget: getBudget(state)
});

export const Budget = props => {
  const {
    income,
    sellersExpences,
    farmExpences,
    deliveryExpences
  } = props.budget;
  const total = income + (sellersExpences + farmExpences + deliveryExpences);
  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        Всего получено денег: <span className="t-profit">{income}</span>
      </p>
      <p>
        Расходы продавцов: <span className="t-sellers">{sellersExpences}</span>
      </p>
      <p>
        Расходы на ферме: <span className="t-farm">{farmExpences}</span>
      </p>
      <p>
        Расходы на доставку:{' '}
        <span className="t-delivery">{deliveryExpences}</span>
      </p>
      <p>
        Итого: <span className="t-total">{total}</span>
      </p>
    </div>
  );
};

export default connect(mapStateToProps)(Budget);
