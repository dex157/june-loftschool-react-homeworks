import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';
import { sortOrderFn, removeItemFromArray } from './helpers';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      const order = action.payload;
      return {
        ...state,
        orders: [...state.orders, order].sort(sortOrderFn)
      };

    case MOVE_ORDER_TO_CUSTOMER:
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
