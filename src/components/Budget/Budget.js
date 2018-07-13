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
          Всего получено денег: {profit > 0 ? ' -' : ' '}
          <span className="t-profit">{profit}</span>
        </p>
        <p>
          Расходы продавцов: {marketExpanse > 0 ? ' -' : ' '}
          <span className="t-profit">{marketExpanse}</span>
        </p>
        <p>
          Расходы на ферме: {farmExpanse > 0 ? ' -' : ' '}
          <span className="t-profit">{farmExpanse}</span>
        </p>
        <p>
          Расходы на доставку: {deliveryExpanse > 0 ? ' -' : ' '}
          <span className="t-profit">{deliveryExpanse}</span>
        </p>
        <p>
          Итого:{' '}
          <span className="t-profit">
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
