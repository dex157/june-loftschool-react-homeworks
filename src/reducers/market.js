import { combineReducers } from 'redux';
import { CREATE_ORDER, DELETE_ORDER_FROM_MARKET } from 'actions/marketTypes';

const orders = (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      const { payload } = action;
      return [...state, payload];

    case DELETE_ORDER_FROM_MARKET:
      const id = action.payload;
      return state.filter(order => order.id !== id);

    // case DELETE_ORDER_FROM_MARKET:
    //   return state.filter(order => order.id !== action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  orders
});

export const getMarketOrders = state => state.market.orders;
