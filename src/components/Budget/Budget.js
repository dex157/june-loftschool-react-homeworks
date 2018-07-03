import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  budget: state.budget
});

const mapDispatchToProps = {};

const Budget = props => (
  <div className="budget">
    <h2>Бюджет</h2>
    <p>
      Всего получено денег:{' '}
      <span className="t-profit">{props.budget.profit}</span>
    </p>
    <p>
      Расходы продавцов:{' '}
      <span className="t-sellers">{-props.budget.sellerExpanse}</span>
    </p>
    <p>
      Расходы на ферме:{' '}
      <span className="t-farm">{-props.budget.farmExpanse}</span>
    </p>
    <p>
      Расходы на доставку:{' '}
      <span className="t-delivery">{-props.budget.deliveryExpanse}</span>
    </p>
    <p>
      Итого:{' '}
      <span className="t-total">
        {props.budget.profit -
          props.budget.sellerExpanse -
          props.budget.farmExpanse -
          props.budget.deliveryExpanse}
      </span>
    </p>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);
