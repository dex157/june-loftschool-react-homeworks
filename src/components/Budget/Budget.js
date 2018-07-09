import React from 'react';
import { connect } from 'react-redux';
import './Budget.css';

export const Budget = ({
  profit,
  farmExpanse,
  deliveryExpanse,
  marketExpanse
}) => {
	return (
	<div className="budget">
			<h2>Бюджет</h2>
			<p>Всего получено денег: <span className="t-profit">{profit}</span></p>
			<p>Расходы продавцов: <span className=".t-sellers">{marketExpanse}</span></p>
			<p>Расходы на ферме: <span className="t-farm">{farmExpanse}</span></p>
			<p>Расходы на доставку: <span className="t-delivery">{deliveryExpanse}</span></p>
			<p>Итого: <span className="t-total">{profit - marketExpanse - farmExpanse - deliveryExpanse}</span></p>
	</div>
	);
}

const mapStateToProps = state => {
  return {
    profit: state.budget.profit,
    farmExpanse: state.budget.farmExpanse,
    deliveryExpanse: state.budget.deliveryExpanse,
    marketExpanse: state.budget.marketExpanse
  };
};

export default connect(mapStateToProps)(Budget);
