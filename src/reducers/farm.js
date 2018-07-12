import { combineReducers } from 'redux';
import { MOVE_ORDER_TO_CUSTOMER, ADD_ORDER_TO_FARM } from 'actions/farmTypes';

const orders = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER_TO_FARM:
      const { payload } = action;
      return [...state, payload];

    case MOVE_ORDER_TO_CUSTOMER:
      const id = action.payload;
      return state.filter(order => order.id !== id);

    default:
      return state;
  }
};

export default combineReducers({
  orders
});

export const getFarmOrders = state => state.farm.orders;
