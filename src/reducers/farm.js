import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initialState = {
  orders: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [action.payload, ...state.orders] };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(value => value.id !== action.payload.id)
      };
    default:
      return state;
  }
};
