import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

export const Budget = ({ budget }) => (
  <div className="budget">
    <h2>Бюджет</h2>
    <p>
      Всего получено денег: <span className="t-profit">{budget.profit}</span>
    </p>
    <p>
      Расходы продавцов:{' '}
      <span className="t-sellers">-{budget.marketExpanse}</span>
    </p>
    <p>
      Расходы на ферме: <span className="t-farm">-{budget.farmExpanse}</span>
    </p>
    <p>
      Расходы на доставку:{' '}
      <span className="t-delivery">-{budget.deliveryExpanse}</span>
    </p>
    <p>
      Итого:{' '}
      <span className="t-total">
        {budget.profit -
          budget.marketExpanse -
          budget.farmExpanse -
          budget.deliveryExpanse}
      </span>
    </p>
  </div>
);

const mapStateToProps = state => ({
  budget: state.budget
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);
