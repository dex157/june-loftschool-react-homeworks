import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes.js';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes.js';

const initialState = {
  profit: 0,
  marketExpanse: 0,
  farmExpanse: 0,
  deliveryExpanse: 0
};

const budget = (state = initialState, action) => {
  const expenseMarket = 20;
  const expenseFarm = 100;
  const expenseDelivery = 20;

  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        marketExpanse: state.marketExpanse + expenseMarket
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
