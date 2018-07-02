import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes.js';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes.js';
import { initialState } from './helpers';

const budget = (state = initialState, action) => {
  const expenseMarket = 20;
  const expenseFarm = 100;
  const expenseDelivery = 20;

  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: action.payload.price,
        marketExpense: +expenseMarket
      };
    case MOVE_ORDER_TO_FARM:
      return { ...state, farmExpanse: state.farmExpanse + expenseFarm };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse + expenseDelivery
      };
    default:
      return state;
  }
};

export default budget;
