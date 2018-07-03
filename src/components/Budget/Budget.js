import React from 'react';
import './Budget.css';

export const Budget = budget => (
  <div className="budget">
    <h2>Бюджет</h2>
    <p>
      Всего получено денег:{' '}
      <span className="t-profit">{budget.budget.profit}</span>
    </p>
    <p>
      Расходы продавцов:{' '}
      <span className="t-sellers">{-budget.budget.sellerExpanse}</span>
    </p>
    <p>
      Расходы на ферме:{' '}
      <span className="t-farm">{-budget.budget.farmExpanse}</span>
    </p>
    <p>
      Расходы на доставку:{' '}
      <span className="t-delivery">{-budget.budget.deliveryExpanse}</span>
    </p>
    <p>
      Итого:{' '}
      <span className="t-total">
        {budget.budget.profit -
          budget.budget.sellerExpanse -
          budget.budget.farmExpanse -
          budget.budget.deliveryExpanse}
      </span>
    </p>
  </div>
);

export default Budget;
