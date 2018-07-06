import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

class Budget extends React.PureComponent {
  render() {
    const { budget } = this.props;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>
          Всего получено денег:
          <span className="t-profit">{budget.profit}</span>
        </p>
        <p>
          Расходы продавцов:
          <span className="t-sellers">{budget.marketExpanse * -1}</span>
        </p>
        <p>
          Расходы на ферме:{' '}
          <span className="t-farm">{budget.farmExpanse * -1}</span>
        </p>
        <p>
          Расходы на доставку:
          <span className="t-delivery">{budget.deliveryExpanse * -1}</span>
        </p>
        <p>
          Итого:
          <span className="t-total">{budget.total}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget
});

export default connect(mapStateToProps)(Budget);
