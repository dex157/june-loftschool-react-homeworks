import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';

const initState = {
  orders: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { orders: [action.payload, ...state.orders] };
    case MOVE_ORDER_TO_CUSTOMER:
      return { orders: [...state.orders.slice(0, -1)] };
    default:
      return state;
  }
};
