import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initialState = {
  deliveryExpanse: 0,
  profit: 0,
  farmExpanse: 0,
  sellerExpanse: 0
};

export default (state = initialState, action) => {
  console.log(state);
  const { deliveryExpanse, profit, farmExpanse, sellerExpanse } = state;
  const { type, payload } = action;

  switch (type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return { ...state, deliveryExpanse: deliveryExpanse + 20 };

    case CREATE_ORDER:
      return {
        ...state,
        profit: profit + payload.price,
        sellerExpanse: sellerExpanse - 20
      };

    case MOVE_ORDER_TO_FARM:
      return { ...state, farmExpanse: farmExpanse + 100 };

    default:
      return state;
  }
};
