import React from 'react';
import { connect } from 'react-redux';
import './Budget.css';

const mapStateToProps = state => ({
  profit: state.budget.profit,
  sellerExpanse: state.budget.sellerExpanse,
  farmExpanse: state.budget.farmExpanse,
  deliveryExpanse: state.budget.deliveryExpanse
});

export const Budget = props => {
  const { profit, sellerExpanse, farmExpanse, deliveryExpanse } = props;
  const total = profit - (sellerExpanse + farmExpanse + deliveryExpanse);
  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        Всего получено денег: <span className="t-profit">{profit}</span>
      </p>
      <p>
        Расходы продавцов: <span className="t-sellers">{-sellerExpanse}</span>
      </p>
      <p>
        Расходы на ферме: <span className="t-farm">{-farmExpanse}</span>
      </p>
      <p>
        Расходы на доставку:{' '}
        <span className="t-delivery">{-deliveryExpanse}</span>
      </p>
      <p>
        Итого: <span className="t-total">{total}</span>
      </p>
    </div>
  );
};

export default connect(mapStateToProps)(Budget);
