import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = (payload = 'test') => ({
  type: CREATE_ORDER,
  payload: payload
});

export const moveOrderToFarm = (payload = 'test') => ({
  type: MOVE_ORDER_TO_FARM,
  payload: payload
});
