import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const farm = (
  state = { orders: [], profit: 0, productionPrice: 0 },
  action
) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: [...state.orders.filter(e => e.id !== action.payload.id)]
      };
    default:
      return state;
  }
};

export default farm;
