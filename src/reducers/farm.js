import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const { orders } = state;
  const { type, payload } = action;

  switch (type) {
    case MOVE_ORDER_TO_FARM:
      return { orders: [...orders, payload] };

    case MOVE_ORDER_TO_CUSTOMER:
      return { orders: orders.filter(order => order.id !== payload.id) };

    default:
      return state;
  }
};
