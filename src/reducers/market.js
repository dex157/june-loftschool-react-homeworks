import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: state.orders.filter(el => el.id !== action.payload.id)
      };
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    default:
      return state;
  }
};
