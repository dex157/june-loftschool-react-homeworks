import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';
import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
      return { ...state, orders: state.orders.slice(1) };
    default:
      return state;
  }
};
