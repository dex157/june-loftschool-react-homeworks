import { MOVE_ORDER_TO_FARM } from '../../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../../actions/farmTypes';
import { sortOrderFn } from './helpers';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state, { orders: action.payload }].sort(sortOrderFn)
      };

    case MOVE_ORDER_TO_CUSTOMER:
      const orderId = action.payload.id;
      const orderIndex = state.orders.findIndex(order => order.id === orderId);
      if (orderIndex === -1) {
        return state;
      } else {
        const deleteOrder = state.orders.splice(orderIndex, 1);
        debugger;
        return {
          ...state
        };
      }

    default:
      return state;
  }
};
