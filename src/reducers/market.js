import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { sortOrderFn, removeItemFromArray } from './helpers';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      const newOrder = action.payload;
      return {
        ...state,
        orders: [...state.orders, newOrder].sort(sortOrderFn)
      };

    case MOVE_ORDER_TO_FARM:
      const index = state.orders.findIndex(
        order => order.id === action.payload.id
      );

      if (index >= 0) {
        return {
          ...state,
          orders: removeItemFromArray(state.orders, index)
        };
      } else return;

    default:
      return state;
  }
};
