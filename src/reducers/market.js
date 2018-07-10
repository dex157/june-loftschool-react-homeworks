import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
  DELETE_ORDER_FROM_MARKET
} from 'actions/marketTypes';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [action.payload, ...state];

    case MOVE_ORDER_TO_FARM:
      return [action.payload, ...state];

    case DELETE_ORDER_FROM_MARKET:
      return state.filter(order => order.id !== action.payload);

    default:
      return state;
  }
};
