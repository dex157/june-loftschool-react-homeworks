import React from 'react';
import './Budget.css';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  budget: state.budget
});

const mapDispatchToProps = {};

export const Budget = () => (
  <div className="budget">
    <h2>Бюджет</h2>
    <p>
      Всего получено денег:{' '}
      <span className="t-profit">{this.props.budget.profit}</span>
    </p>
    <p>
      Расходы продавцов:{' '}
      <span className="t-sellers">{-this.props.budget.sellerExpanse}</span>
    </p>
    <p>
      Расходы на ферме:{' '}
      <span className="t-farm">{-this.props.budget.farmExpanse}</span>
    </p>
    <p>
      Расходы на доставку:{' '}
      <span className="t-delivery">{-this.props.budget.deliveryExpanse}</span>
    </p>
    <p>
      Итого:{' '}
      <span className="t-total">
        {this.props.budget.profit -
        this.props.budget.sellerExpanse -
        this.props.budget.farmExpanse -
        this.props.budget.deliveryExpanse}
      </span>
    </p>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);
