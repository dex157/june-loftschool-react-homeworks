import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes.js';

const initialState = {
  orders: []
};

const market = (state = initialState, action) => {
  const ordersLength = state.orders.length;
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state.orders, orders: [...state.orders.slice(0, ordersLength - 1)]
      };
    default:
      return state;
  }
};

export default market;
