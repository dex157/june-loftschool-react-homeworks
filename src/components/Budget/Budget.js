import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

class Budget extends React.Component {
  render() {
    const { profit, marketExpanse, farmExpanse, deliveryExpanse } = this.props;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>
          Всего получено денег: <span className="t-profit">{profit}</span>
        </p>
        <p>
          Расходы продавцов: <span className="t-sellers">{-marketExpanse}</span>
        </p>
        <p>
          Расходы на ферме: <span className="t-farm">{-farmExpanse}</span>
        </p>
        <p>
          Расходы на доставку:{' '}
          <span className="t-delivery">{-deliveryExpanse}</span>
        </p>
        <p>
          Итого:{' '}
          <span className="t-total">
            {profit - marketExpanse - farmExpanse - deliveryExpanse}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.budget
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);
