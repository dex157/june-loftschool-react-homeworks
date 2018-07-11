import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = payload => ({
  type: CREATE_ORDER,
  payload
});

export const moveOrderToFarm = id => ({
  type: MOVE_ORDER_TO_FARM,
  payload: id
});
