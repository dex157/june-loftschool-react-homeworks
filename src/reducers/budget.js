import { CREATE_ORDER } from 'actions/marketTypes';
import { ADD_ORDER_TO_FARM, MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';

const initialState = {
  income: 0,
  sellersExpences: 0,
  farmExpences: 0,
  deliveryExpences: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      const income = state.income + action.payload.price;
      const sellersExpences = state.sellersExpences - 20;
      return {
        ...state,
        income,
        sellersExpences
      };

    case ADD_ORDER_TO_FARM:
      const farmExpences = state.farmExpences - 100;
      return {
        ...state,
        farmExpences
      };

    case MOVE_ORDER_TO_CUSTOMER:
      const deliveryExpences = state.deliveryExpences - 20;
      return {
        ...state,
        deliveryExpences
      };

    default:
      return state;
  }
};

export const getBudget = state => state.budget;
