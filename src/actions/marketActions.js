import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = newOrder => ({
  type: CREATE_ORDER,
  payload: newOrder
});

export const moveOrderToFarm = newOrder => ({
  type: MOVE_ORDER_TO_FARM,
  payload: newOrder
});
