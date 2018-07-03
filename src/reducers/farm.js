import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes.js';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes.js';

const initialState = {
  orders: [],
  profit: 0,
  productionPrice: 0
};

const farm = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
    const ordersLength = state.orders.length;
      return {
        ...state,
        ...state.orders, orders: [...state.orders.slice(0, ordersLength - 1)]
      };
    default:
      return state;
  }
};

export default farm;
