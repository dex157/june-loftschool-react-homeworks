import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
  DELETE_ORDER_FROM_MARKET
} from './marketTypes';

export const createOrder = order => ({
  type: CREATE_ORDER,
  payload: order
});

export const moveOrderToFarm = order => ({
  type: MOVE_ORDER_TO_FARM,
  payload: order
});

export const deleteOrder = text => ({
  type: DELETE_ORDER_FROM_MARKET,
  payload: text
});
