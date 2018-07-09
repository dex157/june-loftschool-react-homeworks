import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';
import { sortOrderFn } from './helpers';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      const newOrder = action.payload;
      return {
        ...state,
        orders: [...state.orders, newOrder].sort(sortOrderFn)
      };

    case MOVE_ORDER_TO_CUSTOMER:
      const orderId = action.payload.id;
      const orderIndex = state.orders.findIndex(order => order.id === orderId);

      if (orderIndex < 0) {
        return;
      }

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
