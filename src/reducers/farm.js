import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { sortOrderFn } from '../reducers/helpers';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, action.payload].sort(sortOrderFn)
      };

    case MOVE_ORDER_TO_CUSTOMER:
      const orderId = action.payload.id;
      const orderIndex = state.orders.findIndex(order => order.id === orderId);

      return {
        ...state,
        orders: [
          ...state.orders.slice(0, orderIndex),
          ...state.orders.slice(orderIndex + 1)
        ]
      };

    default:
      return state;
  }
};
