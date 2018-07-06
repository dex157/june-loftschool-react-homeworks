import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
  DELETE_ORDER_FROM_MARKET
} from 'actions/marketTypes';

const initState = {
  orders: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { orders: [action.payload, ...state.orders] };
    case MOVE_ORDER_TO_FARM:
      return { orders: [...state.orders.slice(0, -1)] };
    case DELETE_ORDER_FROM_MARKET:
      return { orders: [...state.orders.slice(0, -1)] };
    default:
      return state;
  }
};
