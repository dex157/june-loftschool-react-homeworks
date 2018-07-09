import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        orders: [...state.orders, action.payload]
      };
    case MOVE_ORDER_TO_FARM:
      return {
        orders: [
          ...state.orders.filter(order => order.id !== action.payload.id)
        ]
      };
    default:
      return state;
  }
};
