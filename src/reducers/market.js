import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const { orders } = state;
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return { orders: [...orders, payload] };

    case MOVE_ORDER_TO_FARM:
      return { orders: orders.filter(order => order.id !== payload.id) };

    default:
      return state;
  }
};
