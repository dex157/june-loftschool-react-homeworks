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
			<p>Всего получено денег: {profit} </p>
			<p>Расходы продавцов: {marketExpanse} </p>
			<p>Расходы на ферме: {farmExpanse} </p>
			<p>Расходы на доставку: {deliveryExpanse} </p>
			<p>Итого: {profit - marketExpanse - farmExpanse - deliveryExpanse} </p>
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
