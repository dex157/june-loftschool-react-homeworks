import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
  DELETE_ORDER_FROM_MARKET
} from './marketTypes';

export const createOrder = payload => {
  return {
    type: CREATE_ORDER,
    payload: payload
  };
};

export const moveOrderToFarm = payload => {
  return {
    type: MOVE_ORDER_TO_FARM,
    payload: payload
  };
};

export const deleteOrderFromMarket = () => {
  return {
    type: DELETE_ORDER_FROM_MARKET
  };
};
