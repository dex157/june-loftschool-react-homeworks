import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = value => ({
  type: CREATE_ORDER,
  payload: value
});

export const moveOrderToFarm = value => ({
  type: MOVE_ORDER_TO_FARM,
  payload: value
});
