import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return Object.assign({}, state, {
        orders: [...state.orders, action.payload]
      });

    case MOVE_ORDER_TO_CUSTOMER:
      let orderClone = JSON.parse(JSON.stringify(state));
      orderClone.orders = orderClone.orders.filter(function(order) {
        return order.id !== action.payload.id;
      });
      return orderClone;

    default:
      return state;
  }
};
