import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from 'actions/marketTypes';

const calcTotal = (profit, deliveryExpanse, farmExpanse, marketExpanse) => {
  return parseInt(profit - (deliveryExpanse + farmExpanse + marketExpanse), 10);
};

const initState = {
  profit: 0,
  marketExpanse: 0,
  deliveryExpanse: 0,
  farmExpanse: 0,
  total: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        total: calcTotal(
          state.profit + action.payload.price,
          state.deliveryExpanse,
          state.farmExpanse,
          state.marketExpanse + 20
        ),
        marketExpanse: state.marketExpanse + 20
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse + 20,
        total: calcTotal(
          state.profit,
          state.deliveryExpanse + 20,
          state.farmExpanse,
          state.marketExpanse
        )
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: state.farmExpanse + 100,
        total: calcTotal(
          state.profit,
          state.deliveryExpanse,
          state.farmExpanse + 100,
          state.marketExpanse
        )
      };
    default:
      return state;
  }
};
