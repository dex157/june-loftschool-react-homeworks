import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { sortOrderFn } from './helpers';

const initialState = {
  orders: []
};

function market(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders].sort(sortOrderFn)
      };
    case MOVE_ORDER_TO_FARM:
      const orderId = action.payload.id;
      const index = state.orders.findIndex(order => order.id === orderId);

      if (index === -1) {
        return state;
      }

      return {
        ...state,
        orders: [
          ...state.orders.slice(0, index),
          ...state.orders.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}

export default market;
