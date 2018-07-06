import React from 'react';
import { connect } from 'react-redux';
import './Budget.css';

export class Budget extends React.PureComponent {
  render() {
    const { budget } = this.props;
    const { profit, marketExpanse, farmExpanse, deliveryExpanse } = budget;

    const total = profit - marketExpanse - farmExpanse - deliveryExpanse;
    //alert(JSON.stringify(budget));

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
          <b>
            Итого: <span className="t-total">{total}</span>
          </b>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget
});

export default connect(mapStateToProps)(Budget);
