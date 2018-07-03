import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const initialState = {
  deliveryExpanse: 0,
  sellerExpanse: 0,
  profit: 0,
  farmExpanse: 0
};

export default (state = initialState, action) => {
  const budgetClone = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CREATE_ORDER:
      budgetClone.profit += action.payload.price;
      budgetClone.sellerExpanse += 20;
      return budgetClone;

    case MOVE_ORDER_TO_CUSTOMER:
      budgetClone.deliveryExpanse += 20;
      return budgetClone;

    case MOVE_ORDER_TO_FARM:
      budgetClone.farmExpanse += 100;
      return budgetClone;

    default:
      return state;
  }
};
