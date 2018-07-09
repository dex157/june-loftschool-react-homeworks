import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload.id)
      };
    default:
      return state;
  }
};
