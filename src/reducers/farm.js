import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { sortOrderFn } from './helpers';

const initialState = {
  orders: []
};

function farm(state = initialState, action) {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [action.payload, ...state.orders].sort(sortOrderFn)
      };
    case MOVE_ORDER_TO_CUSTOMER:
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

export default farm;
